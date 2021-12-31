

## 数据交换对象

### Stop

站点

| **field** | **type** | **description** |
| --------- | -------- | --------------- |
| value     | string   | 站点编号        |
| label     | string   | 站点名称        |

### Line

线路

| **field** | **type** | **description**    |
| --------- | -------- | ------------------ |
| name      | string   | 线路中文名称       |
| color     | string   | 线路颜色           |
| stops     | []Stop   | 该线路所有站点信息 |

### LinesInfo

站点信息

| **field** | **type**        | **description** |
| --------- | --------------- | --------------- |
| lines     | map[string]Line | 线路表          |

### PostStop

在查询过程中Post的Json对象

| **field** | **type** | **description** |
| --------- | -------- | --------------- |
| line      | string   | 线路名称        |
| stop      | string   | 站点编号        |

### PostReturn

在查询过程中Return的Json对象

| **field**         | **type**   | **description**            |
| ----------------- | ---------- | -------------------------- |
| bestTimeTime      | int        | 最短时间路径需要的时间     |
| bestTime          | []PostStop | 最短时间路径               |
| leastTransferTime | int        | 最少换乘路径需要换乘的站点 |
| leastTransfer     | []PostStop | 最少换乘路径               |



## 查询当前地铁信息

GET /linesList

* **参数** 无
* **返回** LinesInfo
* **错误** 无

## 查询最短路径

Post /search

* **参数** [2]PostStop
* **返回** PostReturn
* **错误** 无