// 虚拟数据
import axios from 'axios'
import Mock from 'mockjs'

// 商品
Mock.mock('/mock/goods',{
    code:200,
    success:true,
    msg:'商品',
    data:[{"id":1,"name":"赛事茶-第三届武夷茶","desc":"银河修理员","price":238,"num":34,"imgUrl":"http://localhost:80/1665404673501-e8269ad0ly1h6vx50ewxaj20sg0izdgk.jpg","category":"日用","sellPoint":"喝过的都说好","cid":null},{"id":2,"name":"吸管杯","desc":"dddddddd","price":26,"num":45,"imgUrl":"http://localhost:80/1665404838672-e8269ad0ly1h6vukq25gwj211y1kwgoy.jpg","category":"家具","sellPoint":"一杯好茶放心好物","cid":null},{"id":3,"name":"爱情啊啊","desc":"防弹少年团","price":118233344,"num":112,"imgUrl":"http://localhost:80/1665404923471-005xP5xWgy1h6712ikklxj30xc0j5jwt.jpg","category":"电脑","sellPoint":"该换新了","cid":null},{"id":5,"name":"英式红茶 上等茶叶","desc":"一杯好茶放心好物","price":43,"num":977,"imgUrl":"/images/goods2.jpg","category":"茶叶","sellPoint":"一杯好茶放心好物","cid":null},{"id":6,"name":"神奇的糊涂魔药 ","desc":"for youth","price":91,"num":4444,"imgUrl":"/images/goods1.jpg","category":"数码","sellPoint":"林家谦2020年歌曲","cid":null},{"id":7,"name":"清新茉莉花茶 茶具","desc":"鲜爽甘醇 口粮首选","price":79,"num":23,"imgUrl":"","category":"茶叶","sellPoint":null,"cid":null},{"id":8,"name":"景德镇瓷器茶具 茶叶","desc":"一杯好茶放心好物","price":555,"num":4311,"imgUrl":"/images/goods4.jpg","category":"娱乐","sellPoint":"一杯好茶放心好物","cid":null},{"id":9,"name":"超妍 茶艺大师 茶具","desc":"一个人原来都可以尽兴","price":231,"num":77,"imgUrl":"/images/goods3.jpg","category":"手机数码","sellPoint":null,"cid":null},{"id":10,"name":"小罐茶大匠心 好茶","desc":"努力过活，拼命无恙","price":1997,"num":42,"imgUrl":"http://localhost:80/1665409763985-d4b3f169ly1h6vtxgbipcj211y1kwjvg.jpg","category":"茶叶","sellPoint":"闲情雅致","cid":null},{"id":11,"name":"银河修理员 好茶叶","desc":"一杯好茶放心好物","price":45,"num":987,"imgUrl":"","category":"电器","sellPoint":null,"cid":null},{"id":32,"name":"《我的快乐时代》黑胶唱片","desc":"陈奕迅复古唱片","price":1000,"num":5,"imgUrl":"/images/goods1.jpg","category":"娱乐","sellPoint":"复古经典","cid":null},{"id":33,"name":"北欧之旅","desc":"未来可期","price":762532,"num":10,"imgUrl":"/images/goods1.jpg","category":"旅游","sellPoint":"好想去","cid":null},{"id":44,"name":"好帅的田柾国","desc":"ddddd","price":null,"num":null,"imgUrl":null,"category":null,"sellPoint":null,"cid":null},{"id":77,"name":"海盐柾是甜的","desc":"哥哥","price":2532,"num":999976,"imgUrl":"","category":"男朋友","sellPoint":"","cid":null},{"id":134,"name":"精美日历","desc":"一人之境","price":98,"num":8,"imgUrl":"","category":"日用","sellPoint":null,"cid":null},{"id":222,"name":"神奇的糊涂魔药 ","desc":"for youth","price":91,"num":4444,"imgUrl":"/images/goods1.jpg","category":"数码","sellPoint":"林家谦2020年歌曲","cid":null},{"id":403,"name":"世乒赛中国男团","desc":"加油加油","price":123,"num":567,"imgUrl":null,"category":"日用","sellPoint":"巴黎奥运会","cid":null},{"id":431,"name":"宝贝","desc":"dear jane","price":null,"num":664,"imgUrl":null,"category":"老公","sellPoint":"田柾国","cid":null},{"id":435,"name":"trefvdfgd","desc":"yyyyyyyyy","price":106,"num":10,"imgUrl":"http://localhost:80/1665392103970-003ZSvtBgy1gu1d48ei8dj61kw16o7mf02.jpg","category":"文具","sellPoint":"55543245cvxfgdf","cid":14},{"id":436,"name":"世乒赛中国男团","desc":"加油加油","price":123,"num":567,"imgUrl":null,"category":"日用","sellPoint":"巴黎奥运会","cid":null},{"id":456,"name":null,"desc":null,"price":106,"num":10,"imgUrl":"http://localhost:80/1665392103970-003ZSvtBgy1gu1d48ei8dj61kw16o7mf02.jpg","category":"文具","sellPoint":"55543245cvxfgdf","cid":14},{"id":457,"name":null,"desc":null,"price":106,"num":10,"imgUrl":null,"category":null,"sellPoint":null,"cid":14},{"id":459,"name":"田柾国","desc":"ededdffgsd","price":4234,"num":68,"imgUrl":"/images/goods1.jpg","category":"老公","sellPoint":"情人","cid":null},{"id":460,"name":"proof","desc":"hi","price":323,"num":768,"imgUrl":"/images/goods1.jpg","category":"女儿","sellPoint":"音乐","cid":null},{"id":461,"name":"young royals","desc":"always support","price":568,"num":5583,"imgUrl":"/images/goods1.jpg","category":"饮品","sellPoint":null,"cid":null},{"id":462,"name":"skam norway","desc":"suga","price":5333,"num":57,"imgUrl":null,"category":"食物","sellPoint":"网络情人","cid":null},{"id":463,"name":"holy night","desc":"正面up","price":null,"num":null,"imgUrl":null,"category":"宝贝","sellPoint":null,"cid":null},{"id":464,"name":"dream work","desc":"love u","price":888,"num":99,"imgUrl":"/images/goods1.jpg","category":"食物","sellPoint":null,"cid":null},{"id":532,"name":"111","desc":"66","price":35,"num":4346,"imgUrl":null,"category":"日用","sellPoint":"dear jane","cid":null},{"id":540,"name":"《我的快乐时代》黑胶唱片","desc":"陈奕迅复古唱片","price":1000,"num":5,"imgUrl":"/images/goods1.jpg","category":"娱乐","sellPoint":"复古经典","cid":null},{"id":560,"name":"精美日历","desc":"一人之境","price":98,"num":8,"imgUrl":"","category":"日用","sellPoint":null,"cid":null},{"id":577,"name":"额威威","desc":"543453354243242","price":10,"num":10,"imgUrl":"http://localhost:80/1665393993376-e43e7ac8gy1h5sh25om2pj20yi1pce81.jpg","category":"娱乐","sellPoint":"","cid":13},{"id":578,"name":"简历代写","desc":"亡羊补牢为食恨晚","price":84,"num":22,"imgUrl":"/images/goods3.jpg","category":"文具","sellPoint":null,"cid":null},{"id":579,"name":"荣耀Magicbook pro 16寸","desc":"防弹少年团","price":118,"num":112,"imgUrl":"/images/goods3.jpg","category":"电脑","sellPoint":"该换新了","cid":null},{"id":643,"name":"trefvdfgd","desc":"yyyyyyyyy","price":106,"num":10,"imgUrl":"http://localhost:80/1665392103970-003ZSvtBgy1gu1d48ei8dj61kw16o7mf02.jpg","category":"文具","sellPoint":"55543245cvxfgdf","cid":14},{"id":654,"name":"海盐柾是甜的","desc":"哥哥","price":2532,"num":999976,"imgUrl":null,"category":"男朋友","sellPoint":null,"cid":null},{"id":656,"name":"老公","desc":"366","price":null,"num":null,"imgUrl":null,"category":"日用","sellPoint":"dear jane","cid":null},{"id":664,"name":"田柾国","desc":"陈奕迅","price":5355,"num":null,"imgUrl":null,"category":"老公","sellPoint":"田柾国","cid":null},{"id":666,"name":"英式红茶 上等茶叶","desc":"一杯好茶放心好物","price":43,"num":977,"imgUrl":"/images/goods2.jpg","category":"茶叶","sellPoint":"一杯好茶放心好物","cid":null},{"id":700,"name":"ttt","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":13},{"id":733,"name":"111","desc":"陈奕迅","price":44,"num":null,"imgUrl":null,"category":"日用","sellPoint":"dear jane","cid":null},{"id":754,"name":"甜果","desc":"好想见你一次当面说爱你","price":32,"num":585,"imgUrl":null,"category":"情人","sellPoint":"爱死你","cid":null},{"id":765,"name":"防弹少年团演唱会","desc":"我人生仅有一次的防弹少年团","price":9999999,"num":100,"imgUrl":null,"category":"文具","sellPoint":"就这","cid":null},{"id":767,"name":"音乐","desc":"dear jane","price":null,"num":54,"imgUrl":null,"category":"老公","sellPoint":"田柾国","cid":null},{"id":780,"name":"好帅的田柾国","desc":"ddddd","price":null,"num":null,"imgUrl":null,"category":null,"sellPoint":null,"cid":null},{"id":786,"name":"人类不宜飞行","desc":"dear jane","price":55,"num":436,"imgUrl":"6","category":"音乐","sellPoint":"静候","cid":null},{"id":789,"name":"111","desc":"888","price":null,"num":null,"imgUrl":null,"category":"日用","sellPoint":"田柾国","cid":null},{"id":888,"name":"景德镇瓷器茶具 茶叶","desc":"一杯好茶放心好物","price":555,"num":4311,"imgUrl":"/images/goods4.jpg","category":"娱乐","sellPoint":"一杯好茶放心好物","cid":null},{"id":1286,"name":"eee","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":1421,"name":"99999","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":1984,"name":"77567","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":2644,"name":"redr","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":2736,"name":"iiii","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":3237,"name":"99999","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":3885,"name":"ffffsadx","desc":"eragsfvxc","price":331,"num":104,"imgUrl":"http://localhost:80/1665396521341-003ZSvtBgy1gvdygkllajg60p00p04r102.gif","category":"文具","sellPoint":"rwer","cid":14},{"id":4507,"name":"","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":4510,"name":"www","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":4527,"name":"8888","desc":"8888888","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":4812,"name":"999fgbv","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":4814,"name":"rrrr","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":5087,"name":"rttt","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":5527,"name":"sssss","desc":"ffffff","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":6061,"name":"海盐柾是甜的","desc":"rrrrr","price":2532,"num":999976,"imgUrl":"http://localhost:80/1665403324626-e43e7ac8gy1h6vnfxkh1lj21st2p9ain.jpg","category":"男朋友","sellPoint":"ddddd","cid":111},{"id":8103,"name":"777","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":8477,"name":"777hfgh","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":9076,"name":"iiiii","desc":"","price":10,"num":10,"imgUrl":"","category":"","sellPoint":"","cid":111},{"id":42264,"name":"林家谦","desc":"dear jane","price":4434,"num":null,"imgUrl":null,"category":"老公","sellPoint":"田柾国","cid":null},{"id":44421,"name":"111","desc":"33467","price":34,"num":643,"imgUrl":null,"category":"日用","sellPoint":"田柾国","cid":null},{"id":52334,"name":"清新茉莉花茶 茶具","desc":"鲜爽甘醇 口粮首选","price":79,"num":23,"imgUrl":"","category":"茶叶","sellPoint":null,"cid":null},{"id":54464,"name":"银河修理员 好茶叶","desc":"一杯好茶放心好物","price":45,"num":987,"imgUrl":"","category":"电器","sellPoint":null,"cid":null},{"id":54565,"name":"甜果","desc":"好想见你一次当面说爱你","price":32,"num":585,"imgUrl":null,"category":"情人","sellPoint":"爱死你","cid":null},{"id":55427,"name":"世乒赛中国男团","desc":"加油加油","price":123,"num":567,"imgUrl":null,"category":"日用","sellPoint":"巴黎奥运会","cid":null},{"id":57070,"name":"到底发生过什么事","desc":"dear jane","price":53,"num":46,"imgUrl":null,"category":"音乐","sellPoint":"不许你注定一人","cid":null},{"id":75455,"name":"小罐茶大匠心 好茶","desc":"努力过活，拼命无恙","price":1997,"num":42,"imgUrl":"/images/goods2.jpg","category":"茶叶","sellPoint":"闲情雅致","cid":null},{"id":77445,"name":"英式红茶 上等茶叶","desc":"一杯好茶放心好物","price":43,"num":977,"imgUrl":"/images/goods2.jpg","category":"茶叶","sellPoint":"一杯好茶放心好物","cid":null},{"id":335256,"name":"海盐柾是甜的","desc":"哥哥","price":2532,"num":999976,"imgUrl":null,"category":"男朋友","sellPoint":null,"cid":null},{"id":555555,"name":"好帅的田柾国","desc":"加油向前冲啊","price":44,"num":32,"imgUrl":"","category":"","sellPoint":"","cid":null}]
})

// 规格
Mock.mock('/mock/rules',{
    code:200,
    success:true,
    msg:'商品',
    data:[{"id":1,"cid":11,"name":"数码/电器","rule":"ddd"},{"id":1,"cid":12,"name":"日用","rule":"ddddd"},{"id":1,"cid":13,"name":"娱乐","rule":"players14"},{"id":1,"cid":14,"name":"文具","rule":"663342"},{"id":1102,"cid":111,"name":"macbook air","rule":"players"},{"id":1101,"cid":332,"name":"oppo","rule":"players"},{"id":11,"cid":1101,"name":"手机","rule":"lcy"},{"id":11,"cid":1102,"name":"电脑","rule":"4345"},{"id":16,"cid":1103,"name":"平板ipad","rule":"好玩hhhhh"},{"id":12,"cid":1201,"name":"外套风衣","rule":"ddddd"},{"id":12,"cid":1202,"name":"水杯","rule":"2224442233"},{"id":12,"cid":1203,"name":"眼镜","rule":"lcy"},{"id":12,"cid":1204,"name":"雨伞","rule":"333"},{"id":13,"cid":1304,"name":"专辑","rule":"players"},{"id":14,"cid":1401,"name":"A4纸","rule":"11111"},{"id":14,"cid":1402,"name":"水彩笔","rule":"11"},{"id":1401,"cid":5325,"name":"草稿纸","rule":"lcy"},{"id":1101,"cid":15323,"name":"苹果","rule":"33"},{"id":1304,"cid":33333,"name":"防弹少年团","rule":"1111"},{"id":1103,"cid":43234,"name":"ad钙奶","rule":"22"},{"id":123456,"cid":123456,"name":"123456","rule":"123456"}]
})

// 订单
Mock.mock('/mock/orders',{
    code:200,
    success:true,
    msg:'商品',
    data:[{"id":1,"order_id":"20191024462227546","goods_name":"haoye","goods_price":264,"goods_num":2,"order_status":"4","uId":106},{"id":12,"order_id":"2019102446224","goods_name":"防弹少年团","goods_price":264,"goods_num":2,"order_status":"4","uId":106},{"id":23,"order_id":"201910244622432","goods_name":"yoshi","goods_price":264,"goods_num":2,"order_status":"4","uId":106},{"id":138,"order_id":"20220930170658857703","goods_name":"港乐讲乐","goods_price":295,"goods_num":3,"order_status":"3","uId":102},{"id":139,"order_id":"20221001023621854320","goods_name":"hi siri","goods_price":476,"goods_num":2,"order_status":"4","uId":102},{"id":158,"order_id":"20221001151205851042","goods_name":"绿茶-远数龙井3号","goods_price":2478,"goods_num":21,"order_status":"3","uId":106},{"id":159,"order_id":"20221001151221374637","goods_name":"ddddddd","goods_price":264,"goods_num":2,"order_status":"4","uId":106},{"id":222,"order_id":"201910244622","goods_name":"baby set","goods_price":2478,"goods_num":21,"order_status":"3","uId":106},{"id":1586,"order_id":"201910244622312","goods_name":"album realize","goods_price":2478,"goods_num":21,"order_status":"3","uId":106},{"id":1587,"order_id":"20191024462232","goods_name":"terence","goods_price":2478,"goods_num":21,"order_status":"3","uId":106}]
})

// 首页图表
Mock.mock('/mock/charts',{
    code:200,
    success:true,
    // 假数据
    data:{
        "rules9": {
            "option": {
                "backgroundColor": "#2c343c",
                "title": {
                    "text": "2022年上半年最热销类目占比",
                    "left": "center",
                    "top": 20,
                    "textStyle": {
                        "color": "#ccc"
                    }
                },
                "tooltip": {
                    "trigger": "item"
                },
                "visualMap": {
                    "show": false,
                    "min": 80,
                    "max": 600,
                    "inRange": {
                        "colorLightness": [
                            0,
                            1
                        ]
                    }
                },
                "series": [
                    {
                        "type": "pie",
                        "radius": "60%",
                        "center": [
                            "50%",
                            "50%"
                        ],
                        "data": [
                            {
                                "value": 270,
                                "name": "鞋靴"
                            },
                            {
                                "value": 305,
                                "name": "数码/电器"
                            },
                            {
                                "value": 335,
                                "name": "文具"
                            },
                            {
                                "value": 400,
                                "name": "其他"
                            },
                            {
                                "value": 474,
                                "name": "娱乐"
                            },
                            {
                                "value": 530,
                                "name": "日用"
                            },
                            {
                                "value": 560,
                                "name": "衣服"
                            }
                        ],
                        "roseType": "radius",
                        "label": {
                            "color": "rgba(255, 255, 255, 0.3)"
                        },
                        "labelLine": {
                            "lineStyle": {
                                "color": "rgba(255, 255, 255, 0.3)"
                            },
                            "smooth": 0.2,
                            "length": 10,
                            "length2": 20
                        },
                        "itemStyle": {
                            "color": "#c23531",
                            "shadowBlur": 200,
                            "shadowColor": "rgba(0, 0, 0, 0.5)"
                        },
                        "animationType": "scale",
                        "animationEasing": "elasticOut"
                    }
                ]
            },
            "w": "400px",
            "h": "350px"
        },
        "sales": {
            "option": {
                "color": [
                    "#EE6666",
                    "#5470c6",
                    "#FFD04B"
                ],
                "tooltip": {},
                "legend": {
                    "itemWidth": 15,
                    "right": 40,
                    "top": 35
                },
                "grid": {
                    "top": 70,
                    "bottom": 50,
                    "left": 100
                },
                "title": {
                    "text": "2022年上半年店铺营业额同期对比",
                    "top": 15,
                    "left": 300
                },
                "xAxis": [
                    {
                        "data": [
                            "1月",
                            "2月",
                            "3月",
                            "4月",
                            "5月",
                            "6月"
                        ],
                        "axisLabel": {
                            "interval": 0,
                            "rotate": 0
                        }
                    }
                ],
                "yAxis": [
                    {
                        "type": "value"
                    }
                ],
                "series": [
                    {
                        "name": "2022年",
                        "type": "line",
                        "data": [
                            42000,
                            53200,
                            45980,
                            45700,
                            49630,
                            57030
                        ]
                    },
                    {
                        "name": "2021年",
                        "type": "line",
                        "data": [
                            38640,
                            46200,
                            47980,
                            45000,
                            47050,
                            56000
                        ]
                    },
                    {
                        "type": "bar",
                        "data": [
                            42000,
                            53200,
                            45980,
                            45700,
                            49630,
                            57030
                        ]
                    }
                ]
            },
            "w": "900px",
            "h": "350px"
        },
        "orders": {
            "option": {
                "title": {
                    "text": "2022年上半年交易成功订单数",
                    "top": 10,
                    "left": 100
                },
                "tooltip": {},
                "legend": {
                    "itemWidth": 15,
                    "right": 40,
                    "top": 20
                },
                "grid": {
                    "left": 50,
                    "top": 80,
                    "bottom": 40
                },
                "xAxis": {
                    "data": [
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月"
                    ],
                    "axisLabel": {
                        "interval": 0,
                        "rotate": 0
                    }
                },
                "yAxis": {},
                "series": [
                    {
                        "name": "数量",
                        "type": "bar",
                        "data": [
                            1400,
                            1870,
                            1545,
                            1760,
                            1590,
                            2084
                        ]
                    }
                ]
            },
            "w": "450px",
            "h": "350px"
        }
    },
    msg:'获取图表数据成功'
}) 


const mockRequest = axios.create({      // 简单的二次封装
    baseURL:'/mock',
    timeout:5000
})

mockRequest.interceptors.response.use(res=>{
    return res.data
})

export default mockRequest