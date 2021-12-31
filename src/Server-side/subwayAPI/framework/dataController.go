//Package framework 数据层
// 服务层
package framework

import (
	"errors"
	"subwayAPI/model"
)

// GetLinesInfo 获取地铁线路全信息
func GetLinesInfo() model.LinesInfo {
	// 获取站点和颜色表
	colorMap := ReadColor()
	stopMap := ReadStop()
	nameMap := ReadName()

	size := len(colorMap)

	// 构建地铁信息的模型
	var result model.LinesInfo
	result.Lines = make(map[string]model.Line, size)
	for key := range colorMap{
		color := colorMap[key]
		stops := stopMap[key]
		name := nameMap[key]

		line := model.Line{Name:name, Stops:stops, Color:color}

		result.Lines[key] = line
	}

	return result
}

// SearchPath 查找两个地铁站点之间最近的路线
func SearchPath(stops []model.PostStop) (leastTimePath []model.PostStop, leastTransferPath []model.PostStop, leastTimeTime int, leastTransferTime int, err error) {
	if len(stops) != 2{
		return nil, nil, 0, 0, errors.New("输入站点数异常")
	}
	// 建立地铁图
	graph := CreateGraph(ReadStop(),ReadPath())

	// 获取起始点
	beginPoint, endPoint, pointErr := getPoint(stops, graph)
	if pointErr != nil{
		return nil, nil, 0, 0, pointErr
	}

	// 查找最短时间路线
	leastTimePath, leastTimeTime, err = SearchPathTimeDijkstra(beginPoint, endPoint, graph)
	if err != nil{
		return nil, nil, 0, 0, err
	}

	// 查找最短路径路线
	leastTransferPath, leastTransferTime, err = SearchPathTransferDijkstra(beginPoint, endPoint, graph)
	if err != nil{
		return nil, nil, 0, 0, err
	}

	return leastTimePath, leastTransferPath, leastTimeTime, leastTransferTime,nil
}

/*
	Author : Hanmur
	Last Update : 2021-12-29 22:36:21
*/
