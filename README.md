# vue-system

这是一个前后端分离的后台管理系统项目
后台文件夹为 server

为了在线演示，我使用mockjs写了一些接口，拦截axios请求返回写定的假数据，原来的接口被注释掉
所以在线演示时，
    没有进行后台登陆验证
    所有的数据管理模块，只能显示所有数据
    
本地运行时，可以将mock请求的部分删掉，取消原先接口的注释，就可实现原先管理系统的所有功能了

## 功能亮点
1、数据可视化Echarts

2、上传图片（添加商品时）

3、导出为PDF、TXT、EXCEL文件

4、I18n国际化

5、token登录拦截

6、简单的表单验证

7、分页器的封装与复用

8、弹窗的封装与复用

9、mockjs虚拟数据

10、前后端分离，使用express框架搭建基础的node.js服务器


## 安装依赖
```
npm install
```

## 启动后端服务器
```
新建终端
cd server
nodemon app.js
```

## 运行
```
npm run serve
```

## 打包编译
```
npm run build
```

