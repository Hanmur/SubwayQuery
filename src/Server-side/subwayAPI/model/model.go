//Package model 实体层
package model


// 地铁查询表单

// PostStop 在查询过程中Post的Json对象
type PostStop struct{
	LineName string `json:"line"`
	StopName string `json:"stop"`
}

// PostReturn 在查询过程中Return的Json对象
type PostReturn struct{
	Time int `json:"bestTimeTime"`
	Post []PostStop `json:"bestTime"`
	TimeTransfer int `json:"leastTransferTime"`
	LeastTransfer []PostStop `json:"leastTransfer"`
}

// StopNode 图使用的节点
type StopNode struct {
	LineName string
	StopName string
	Label string

	Paths []int
	Times []int
}

// Graph 图
type Graph struct {
	Nodes []StopNode
	LabelMap map[[2]string]int
}



// 地铁线路表单

// Stop 站点
type Stop struct{
	Value string `json:"value"`
	Label string `json:"label"`
}

// Line 线路
type Line struct{
	Name string `json:"name"`
	Color string `json:"color"`
	Stops []Stop `json:"stops"`
}

// LinesInfo 站点信息
type LinesInfo struct{
	Lines map[string]Line `json:"lines"`
}

/*
	Author : Hanmur
	Last Update : 2021-12-29 22:36:21
*/
