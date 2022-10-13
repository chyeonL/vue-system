import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 引入初始化样式
import "@/assets/css/reset.css";
// 路由
import router from "./router";
//国际化i18n
import i18n from "@/i18n";
// vuex
import store from "@/store";
// 接口
import * as Api from "@/api";
Vue.prototype.$api = Api;
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导出excel表单
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

// mock
import '@/api/mockRequest'

// echarts图表
import * as echarts from 'echarts';


new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$echarts = echarts;
  },
}).$mount("#app");
