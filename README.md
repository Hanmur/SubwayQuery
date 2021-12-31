# 使用说明

欢迎使用广州地铁路线查询系统，以下是系统介绍。

## 项目目录

```
SubwayQuery
	|- src			//源代码
		|- Server-side		//后端代码
			|- subwayAPI	//Golang项目代码
		|- Front-side		//前端代码
			|- src		   	//Vue代码
		|- Interface.md		//接口文档
	|- subwayAPI	//后端API文件
	|- subwayFront	//前端Html文件
	|- README.md	//使用说明书
	|- README.pdf	//使用说明书
	|- Report_SubwayQuery.pdf	//实验报告
```

## 项目启动

### Windows系统

1. 启动 `/subwayAPI`中的`metro_server_windows.exe` 
2. 打开网页： https://naphtholmizuha.top/ 

步骤2可以更换为自己运行浏览器服务：

1. 在`/subwayFront/dist`目录下，运行`python -m http.server`，观察出现的**端口号**（四位数字，如`8080`）
2. 在浏览器（推荐Chrome）访问 `http://localhost:端口号`，如`http://localhost:8080`。

### Linux系统

(因为我们太懒了没有在虚拟机编译，所以暂时不能直接启动API，可以跟着编译步骤创建API服务再打开网页)

1. 启动 `/subwayAPI`中的`metro_server_linux` (没有，自己跑好不好QAQ)
2. 打开网页： https://naphtholmizuha.top/


步骤2可以更换为自己运行浏览器服务：

1. 在`/subwayFront/dist`目录下，运行`python -m http.server`，观察出现的**端口号**（四位数字，如`8080`）
2. 在浏览器（推荐Chrome）访问 `http://localhost:端口号`，如`http://localhost:8080`。

### macOS系统

1. 启动 `/subwayAPI`中的`metro_server_mac` 
2. 打开网页： https://naphtholmizuha.top/


步骤2可以更换为自己运行浏览器服务：

1. 在`/subwayFront/dist`目录下，运行`python -m http.server`，观察出现的**端口号**（四位数字，如`8080`）
2. 在浏览器（推荐Chrome）访问 `http://localhost:端口号`，如`http://localhost:8080`。

## 项目编译

### 服务端

1. 确保你有一个可以正常运行的Goland
2. 将`/src/Server-side/subwayAPI`导入成项目，项目根文件夹是`subwayAPI`
3. 在Goland上Build运行即可

### 前端

我们贴心地帮您编译好了，编译出的文件位于`/subwayFront/dist` 目录

想自己用`src`编译的话请联系**Naphthol**

## 项目功能

* 可以进行广州地铁线路的最短时间路线查询
* 可以进行广州地铁线路的最少换乘路线查询
* 可以喝**du**鸡汤！

## 注意

* 为了防止搭建服务器被攻击，我们**没有在服务器搭建API**，所以需要在本地启动API服务
* 我们前端服务可以自己搭建也可以用我们提供的，但我们提供的服务器是GitHub的服务器，所以点击的时候**不能点太快**哦，当然正常速度都是可以的
* 前端服务推荐在**Chrome浏览器**上浏览。
* **别攻击别攻击别攻击**，我们只是写个小东西**不想防渗透防各种攻击**
* 如果你**启动不了**，请**检查你的端口是否已被占用**，我们编译好的API使用的是`localhost:8081`端口，如果已经被占用，请**清除被占用端口**

* 我们只**临时**提供前端的服务，如果要长期使用请自行搭建前端服务器
* 众所周知，三号线有三个方向不易区分。由于三号线体育西路-天河客运站在广州地铁规划中将划归十号线，因此在本项目中这些站点所在线路被称为**三号线天河支线**，在三号线找不到这些站的朋友记得换个线路看看。

# 项目相关

## 作者

* Hanmur
  * 博客：https://hanmur.cn/
  * 邮箱：1466046208@qq.com

* Naphthol
  * 博客(暂时放地铁前端了)：https://naphtholmizuha.top/
  * 邮箱：naphthol@foxmail.com


## 时间

* 2021/12/30









