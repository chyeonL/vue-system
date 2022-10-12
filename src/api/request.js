import Axios from "axios";
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'// Progress 进度条样式
// import Vue from 'vue'
// import store from '@/store'
// Vue.use()

Axios.defaults.baseURL = "/api";
Axios.defaults.headers.post["Content-Type"] =  "application/x-www-form-urlencoded";
Axios.defaults.timeout = 5000;

Axios.interceptors.request.use(
  (config) => {
    Nprogress.start()
    if(JSON.parse(localStorage.getItem('userInfo'))){
      let token = JSON.parse(localStorage.getItem('userInfo')).token
      Axios.defaults.headers.common['Authorization'] = token
    }
    return config; //很重要，没有这句直接gg
  },
  (error) => {}
);

Axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    Nprogress.done()
    if (response.status == 200) return response.data;
  },
  (error) => {}
);

export default Axios;
