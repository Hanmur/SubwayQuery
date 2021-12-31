//Package framework 数据层
// 服务层
// 图的相关操作
package framework

import (
	"errors"
	"log"
	"strconv"
	"subwayAPI/model"
)

// CreateGraph 根据站点和路径信息创建一个图
func CreateGraph(stops map[string][]model.Stop, paths [][7]string) model.Graph{
	// 计算长度
	size := 0
	for _, value := range stops{
		size += len(value)
	}

	// 录入节点
	nodes := make([]model.StopNode, 0)
	LabelMap := make(map[[2]string]int, size)
	counter := 0
	for key, stops := range stops{
		for i := range stops{
			path := make([]int, 0)
			node := model.StopNode{LineName: key, StopName: stops[i].Value, Label: stops[i].Label, Paths: path}
			nodes = append(nodes, node)
			stopInfo := [2]string{key, stops[i].Value}
			LabelMap[stopInfo] = counter
			counter++
		}
	}

	// 录入路径
	for i := range paths{
		beginInfo := [2]string{paths[i][0], paths[i][1]}
		endInfo := [2]string{paths[i][3], paths[i][4]}
		beginPoint := LabelMap[beginInfo]
		endPoint := LabelMap[endInfo]
		time, err := strconv.Atoi(paths[i][6])
		if err != nil{
			log.Fatal(errors.New("time isn't a number"))
		}

		nodes[beginPoint].Paths = append(nodes[beginPoint].Paths, endPoint)
		nodes[beginPoint].Times = append(nodes[beginPoint].Times, time)

		nodes[endPoint].Paths = append(nodes[endPoint].Paths, beginPoint)
		nodes[endPoint].Times = append(nodes[endPoint].Times, time)
	}

	graph := model.Graph{Nodes: nodes, LabelMap: LabelMap}
	return graph
}

// getPoint 获取起始站点的索引信息
func getPoint(stops []model.PostStop, graph model.Graph)(int, int, error){
	// 查找对应站点信息
	beginInfo := [2]string{stops[0].LineName, stops[0].StopName}
	endInfo := [2]string{stops[1].LineName, stops[1].StopName}

	// 映射索引
	beginPoint := graph.LabelMap[beginInfo]
	endPoint := graph.LabelMap[endInfo]

	return beginPoint, endPoint, nil
}

// dijkstra 最短路径算法，获取从起始点开始到各点的最短路径
func dijkstra(beginPoint int, graph model.Graph) ([][]int, []int){
	size := len(graph.Nodes)
	visited := make([]bool, size)
	dis := make([]int, size)
	path := make([][]int, size)
	// 初始化 visited, dis，path 三个动态操作切片
	for i := 0; i < size; i++{
		visited[i] = false
		dis[i] = 0x10001	// MAX，密码手的恶趣味
		path[i] = make([]int, 0)
	}

	// 初始化dijkstra操作状态
	point := beginPoint
	visited[point] = true
	dis[point] = 0
	path[point] = append(path[point], point)

	// 进行dijkstra操作
	flag := true
	for flag{
		// 遍历相邻路径
		nearPaths := graph.Nodes[point].Paths
		nearTimes := graph.Nodes[point].Times
		for i := range nearPaths{
			nearPoint := nearPaths[i]
			nearTime := dis[point] + nearTimes[i]
			if !visited[nearPoint] && nearTime < dis[nearPoint]{
				dis[nearPoint] = nearTime
				path[nearPoint] = make([]int, len(path[point]))
				copy(path[nearPoint], path[point])
			}
		}

		// 更新操作点
		shortestPoint := 0
		shortestPath := 0x10001
		for i := 0; i < size; i++{
			if !visited[i] && shortestPath > dis[i]{
				shortestPoint = i
				shortestPath = dis[i]
			}
		}
		point = shortestPoint
		path[shortestPoint] = append(path[shortestPoint], point)
		visited[point] = true

		// 终止循环
		flag = false
		for i := range visited{
			if visited[i] == false{
				flag = true
			}
		}
	}

	return path, dis
}

// SearchPathTimeDijkstra 计算最短路径
func SearchPathTimeDijkstra(beginPoint int, endPoint int, graph model.Graph)([]model.PostStop, int, error){
	pathsFromBeginPoint, times := dijkstra(beginPoint, graph)

	targetPaths := pathsFromBeginPoint[endPoint]
	time := times[endPoint]

	// 将路径名称导入
	paths := make([]model.PostStop, 0)
	for i := range targetPaths{
		point := targetPaths[i]
		line := graph.Nodes[point].LineName
		stopName := graph.Nodes[point].StopName

		stop := model.PostStop{LineName: line, StopName: stopName}
		paths = append(paths, stop)
	}

	return paths, time, nil
}

// SearchPathTransferDijkstra 计算最短换乘
func SearchPathTransferDijkstra(beginPoint int, endPoint int, oldGraph model.Graph)([]model.PostStop, int, error){
	// 预处理
	graph := model.Graph{}
	graph = oldGraph
	for i := range graph.Nodes{
		label := graph.Nodes[i].Label
		paths := graph.Nodes[i].Paths
		for j := range paths{
			nearLabel := graph.Nodes[paths[j]].Label
			if nearLabel == label{
				graph.Nodes[i].Times[j] = 1
			}else{
				graph.Nodes[i].Times[j] = 0
			}
		}
	}

	// 获取路径
	pathsFromBeginPoint, times := dijkstra(beginPoint, graph)

	targetPaths := pathsFromBeginPoint[endPoint]
	time := times[endPoint]

	// 将路径名称导入
	paths := make([]model.PostStop, 0)
	for i := range targetPaths{
		point := targetPaths[i]
		line := graph.Nodes[point].LineName
		stopName := graph.Nodes[point].StopName

		stop := model.PostStop{LineName: line, StopName: stopName}
		paths = append(paths, stop)
	}

	return paths, time, nil
}


/*
	Author : Hanmur
	Last Update : 2021-12-29 22:36:21
*/
