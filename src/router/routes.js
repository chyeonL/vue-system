const Login = ()=>import('@/views/Login')
const Layout = ()=>import('@/views/Layout')
const Home = ()=>import('@/views/Home')
const Goods = ()=>import('@/views/Goods')
const User = ()=>import('@/views/User')
const Order = ()=>import('@/views/Order')
const Rule = ()=>import('@/views/Rule')
const showGoods = ()=> import('@/views/Goods/showGoods')
const addGoodsbyPage = () => import('@/views/Goods/addGoodsbyPage')

export default [
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'',
        name:'Layout',
        component:Layout,
        redirect:'/home',
        meta:{
            requireAuth:true
        },
        children:[
            {
                path:'/home',
                name:'Home',
                component:Home
            },
            {
                path:'/order',
                name:'Order',
                component:Order
            },
            {
                path:'/user',
                name:'User',
                component:User
            },
            {
                path:'/goods',
                name:'Goods',
                component:Goods,
                children:[
                    {
                        path:'showGoods',
                        name:'showGoods',
                        component:showGoods
                    },
                    {
                        path:'addGoodsbyPage',
                        name:'addGoodsbyPage',
                        component:addGoodsbyPage
                    }
                ]
            },
            {
                path:'/rule',
                name:'Rule',
                component:Rule,
            }
        ]
    }
]