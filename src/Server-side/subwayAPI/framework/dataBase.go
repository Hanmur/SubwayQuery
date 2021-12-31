//Package framework 数据层
// 数据持久层/DAO层
package framework

import (
	"errors"
	"io/ioutil"
	"log"
	"os"
	"strings"
	"subwayAPI/model"
)

// ReadAllString 以字符串形式读取所有文件
func ReadAllString(filepath string) (string, error){
	// Open the file
	file, err := os.Open(filepath)
	if err != nil {
		return "", err
	}
	defer func() {
		_ = file.Close()
	}()

	// Read the file
	content, err := ioutil.ReadAll(file)
	if err != nil{
		return "", err
	}else{
		return string(content), nil
	}
}

// ReadColor 读取地铁线路颜色
func ReadColor() map[string]string{
	// 字符串形式读取文件
	content, err := ReadAllString("./database/广州地铁线路颜色.csv")
	if err != nil {
		log.Fatal(err)
	}

	// 读取文件
	lines := make([]string, 0)
	colors := make([]string, 0)

	row := strings.Split(content, "\n")

	// 按行处理数据
	for i := 1; i < len(row); i++{
		// 按行操作
		temp := strings.SplitN(row[i], ",", 2)
		if len(temp) < 2{
			break
		}
		if len(temp[1]) < 7{
			log.Fatal(errors.New("颜色数据库出错"))
		}
		// 处理数据
		line := temp[0]
		color := temp[1][0:7]
		// 储存数据
		lines = append(lines, line)
		colors = append(colors, color)
	}

	// 构建map
	size := len(lines)
	colorMap := make(map[string]string, size)
	for i := 0; i < size; i++{
		colorMap[lines[i]] = colors[i]
	}
	return colorMap
}

// ReadName 读取地铁线路别名
func ReadName() map[string]string{
	// 字符串形式读取文件
	content, err := ReadAllString("./database/广州地铁线路名称.csv")
	if err != nil {
		log.Fatal(err)
	}

	// 读取文件
	lines := make([]string, 0)
	names := make([]string, 0)

	row := strings.Split(content, "\n")

	// 按行处理数据
	for i := 1; i < len(row); i++{
		// 按行操作
		temp := strings.SplitN(row[i], ",", 2)
		if len(temp) < 2{
			break
		}
		// 处理数据
		line := temp[0]
		name := temp[1][0:len(temp[1]) ]
		// 储存数据
		lines = append(lines, line)
		names = append(names, name)
	}

	// 构建map
	size := len(lines)
	nameMap := make(map[string]string, size)
	for i := 0; i < size; i++{
		nameMap[lines[i]] = names[i]
	}
	return nameMap
}

// ReadStop 读取地铁线路站点
func ReadStop() map[string][]model.Stop{
	// 字符串形式读取文件
	content, err := ReadAllString("./database/广州地铁.csv")
	if err != nil {
		log.Fatal(err)
	}

	// 读取文件
	lines := make([]string, 0)
	stops := make([]model.Stop, 0)

	row := strings.Split(content, "\n")
	// 按行处理数据
	for i := 1; i < len(row); i++{
		// 按行操作
		temp := strings.Split(row[i], ",")
		if len(temp) < 2{
			break
		}
		// 处理数据
		line := temp[0]
		value := temp[1]
		label := temp[2]
		stop := model.Stop{Value:value, Label:label}
		// 储存数据
		lines = append(lines, line)
		stops = append(stops, stop)
	}

	// 构建map
	size := len(lines)
	stopMap := make(map[string][]model.Stop, size)
	for i := 0; i < size; i++{
		stopMap[lines[i]] = append(stopMap[lines[i]], stops[i])
	}
	return stopMap
}

// ReadPath 读取路径
func ReadPath() [][7]string{
	// 字符串形式读取文件
	content, err := ReadAllString("./database/广州地铁间距时间.csv")
	if err != nil {
		log.Fatal(err)
	}
	// 读取文件
	paths := make([][7]string, 0)

	row := strings.Split(content, "\n")
	// 按行处理数据
	for i := 1; i < len(row); i++{
		// 按行操作
		temp := strings.Split(row[i], ",")
		if len(temp) < 7{
			break
		}
		// 处理数据
		line1 := temp[0]
		stop1 := temp[1]
		label1 := temp[2]
		line2 := temp[3]
		stop2 := temp[4]
		label2 := temp[5]
		time := temp[6][0:len(temp[6]) - 1]
		path := [7]string{line1, stop1, label1, line2, stop2, label2, time}
		// 储存数据
		paths = append(paths, path)
	}
	return paths
}

/*
	Author : Hanmur
	Last Update : 2021-12-29 22:36:21
*/
