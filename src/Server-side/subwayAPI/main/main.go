// http层
package main

import (
	"net/http"
	"subwayAPI/controller"
)

func main()  {
	http.HandleFunc("/search", controller.Search)
	http.HandleFunc("/linesList", controller.LinesList)
	_ = http.ListenAndServe("0.0.0.0:8081", nil)
}

/*
	Author : Hanmur
	Last Update : 2021-12-29 22:36:21
*/
