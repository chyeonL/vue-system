import {allRule,addRule,updateRules,deleteRule,searchRules} from '@/api'
import { Message } from 'element-ui';
export default {
    state:{
        ruleData:[],
        allData:[],
        searchData:[]
    },
    mutations:{
        ruleData(state,payload){
            state.ruleData = payload.data
            state.allData = payload.allData
        },
        searchData(state,payload){
            state.searchData = payload
        },
    },
    actions:{
        async getCategory({commit},params){
            let res = await allRule(params)
            // console.log(res);
            if(res.success){
                commit('ruleData',res)
                return res
            }else{
                Message.error(res.msg)
                return false
            }
        },

        async addRule(context,params){
            let res = await addRule(params)
            console.log(res);
            if(res.success){
                 Message({
                    message: res.msg,
                    type: 'success'
                })
                return 'ok'
            }else {
                Message.error(res.msg)
                return false
            }
        },

        async updateRules(context,params){
            let res = await updateRules(params)
            console.log(res);
            if(res.success){
                 Message({
                    message: res.msg, 
                    type: 'success'
                })
                return 'ok'
            }else {
                Message.error(res.msg)
                return false
            }
        },

        async deleteRule(context,params){
            let res = await deleteRule(params)
            console.log(res);
            if(res.success){
                 Message({
                    message: res.msg,
                    type: 'success'
                })
                return 'ok'
            }else {
                Message.error(res.msg)
                return false
            }
        },

        async searchRules({commit},params){
            let res = await searchRules(params)
            console.log(res);
            if(res.success){
                 Message({
                    message: res.msg,
                    type: 'success'
                })
                commit('searchData',res.data)
                return res
            }else {
                Message.error(res.msg)
                return false
            }
        },
    }
}