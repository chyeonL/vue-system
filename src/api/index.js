// 统一封装接口 并 分别暴露
import request from "./request";
import mockRequest from './mockRequest'


// 商品管理
// 带参：页码 pageNo
export const getAllGoods = (pageNo,pageSize)=> request({url:'/allGoods',params:{pageNo,pageSize}})
// 搜索商品
export const searchGoods = (params) => request.get('/searchGoods',{params})
// 获取商品类目 by id
export const getItemCategoryById = (params)=>request.get('/getItemCategoryById',{params})
// 图片上传接口     不需要写函数、直接action写地址
export const uploadURL = '/upload'
// 添加商品
export const addGoods = (data)=>request({url:'/addGoods',method:'post',data})
// 删除商品
export const deleteGoods = (id)=> request.post('/deleteGoods',{id})
// 编辑商品
export const updateGoods = (data)=> request.post('/updateGoods',data)


// 用户
// 登录
export const login = (data)=>request.post('/login',data)

export const modifyPwd = (data)=>request.post('/modifyPwd',data)

export const allOrder = (params)=> request({url:'/allOrder',params,method:'get'})


//规格

// 类目
export const allRule = (params)=> request({url:'/allRule',params,method:'get'})
// 添加
export const addRule = (data)=>request({url:'/addRule',method:'post',data})
// 删除
export const deleteRule = (data)=> request.post('/deleteRule',data)
// 编辑
export const updateRules = (data)=> request.post('/updateRules',data)
// 搜索
export const searchRules = (params)=>request.get('/searchRules',{params})


// mock
export const getCharts = ()=> mockRequest.get('/charts')
export const getGoods = ()=> mockRequest.get('/goods')
export const getRules = ()=> mockRequest.get('/rules')
export const getorders = ()=> mockRequest.get('/orders')