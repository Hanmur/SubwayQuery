//Package controller 表现层
package controller

import (
	"encoding/json"
	"log"
	"net/http"
	"subwayAPI/framework"
	"subwayAPI/model"
)


// Search post接口接收json数据
func Search(writer http.ResponseWriter,  request *http.Request)  {
	// 可访问来源
	writer.Header().Set("Access-Control-Allow-Origin", "*")

	// handle post data
	var postStop []model.PostStop
	err := json.NewDecoder(request.Body).Decode(&postStop)
	if err != nil {
		_ = request.Body.Close()
		log.Fatal(err)
	}

	// search path
	leastTimePath, leastTransferPath, leastTimeTime, leastTransferTime, searchErr := framework.SearchPath(postStop)
	result := model.PostReturn{
		Time: leastTimeTime,
		Post: leastTimePath,
		TimeTransfer: leastTransferTime,
		LeastTransfer: leastTransferPath,
	}
	if searchErr != nil {
		_ = request.Body.Close()
		log.Fatal(searchErr)
	}

	// return result
	endErr := json.NewEncoder(writer).Encode(result)
	if endErr != nil {
		log.Fatal(endErr)
	}
}

// LinesList 接收x-www-form-urlencoded类型的post请求或者普通get请求
func LinesList(writer http.ResponseWriter,  request *http.Request)  {
	// 可访问来源
	writer.Header().Set("Access-Control-Allow-Origin", "*")

	// x-www-form-urlencoded
	_ = request.ParseForm()

	// handle get data
	result := framework.GetLinesInfo()

	// return result
	err := json.NewEncoder(writer).Encode(result)
	if err != nil {
		log.Fatal(err)
	}
}



/*
	Author : Hanmur
	Last Update : 2021-12-29 22:36:21
*/
