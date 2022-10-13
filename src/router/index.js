import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'
import {Message} from 'element-ui'

const router = new VueRouter({
    routes,
    // mode:'history'
})

router.beforeEach((to,from,next)=>{
    // 只要有一个匹配到的路由有requireAuth，就返回true
    let requireAuth = to.matched.some(item=>item.meta.requireAuth)
    // 看看登录没
    let isLogin = store.state.user.isLogin 
    // console.log(isLogin);
    // 需要登录
    if(requireAuth){        
        // 已经登陆
        if(isLogin) next()
        else{
            Message({
                message: '需要先进行登录',
                type: 'warning'
              });
            next({
                path:'/login',
                query:{
                    redirect:to.fullPath
                }
            })
        }
    }else{
        next()
    }
})

export default router