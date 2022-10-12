const express = require('express')
const router = require('./route/index')
const app = express()
// 跨域配置
const cors = require('cors')
app.use(cors())
// post请求 表单数据
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// 静态资源托管
app.use(express.static('upload'))

// 路由前缀
app.use('/api',router)


app.listen(80,()=>{
    console.log('服务器成功启动，端口号：80');
    // console.log('http://localhost:80');
})