import { login,modifyPwd } from "@/api";
export default {
  state: {
    userInfo: {
      username: "",
      token: "",
    },
    isLogin: JSON.parse(localStorage.getItem("isLogin")),
  },
  mutations: {
    // 设置用户信息   登录   vuex存储 + 本地存储
    setUserInfo(state, payload) {
      // console.log(payload);
      state.userInfo = payload;
      localStorage.setItem("userInfo", JSON.stringify(payload));
      state.isLogin = true
      localStorage.setItem("isLogin", true);
    },

    // 清除用户信息   退出
    clearUserInfo(state) {
      state.userInfo = {};
      localStorage.removeItem("userInfo");
      localStorage.setItem("isLogin", false);
    },

    // 初始化
    initUserInfo(state) {
      if (state.isLogin)
        state.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      else localStorage.setItem("isLogin", false);
      return state.isLogin
    },
  },
  actions: {
    async goLogin({ state, commit }, value) {
      let res = await login(value)
      console.log(res);
      if (res.success) {
        commit("setUserInfo", res.data);
        return 'ok';
      } else if(res.code == 203){        
        this.$message.error(res.msg)
        return false
      }else if(res.code == 205){     
        this.$message.error(res.msg)
        return false
      }
    }, 

    async modifyPwd({commit},data){
      let res = await modifyPwd(data)
      // console.log(res);
      if(res.success){
        commit('setUserInfo',res.data)
        return res
      }else return false
    }
  },
  getters: {
    username(state) {
      return state.userInfo.username || "";
    },
    token(state) {
      return state.userInfo.token || "";
    },
  },
};
