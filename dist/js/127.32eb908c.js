"use strict";(self["webpackChunkvue_system"]=self["webpackChunkvue_system"]||[]).push([[127],{4127:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var s=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"login"}},[r("h2",{staticClass:"title"},[e._v("商铺管理系统")]),r("div",{staticClass:"login"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"50px"}},[r("h2",{staticStyle:{"font-weight":"normal","font-size":"18px"}},[e._v("登录")]),r("el-form-item",{attrs:{label:"账号",prop:"username"}},[r("el-input",{attrs:{type:"text"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitForm()}},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitForm()}},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),r("el-form-item",{staticClass:"buttons"},[r("el-button",{on:{click:function(r){return e.resetForm()}}},[e._v("重置")]),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm()}}},[e._v(" 登录 ")])],1)],1)],1)])},o=[],u={name:"Login",data(){var e=(e,r,t)=>{""===r?t(new Error("请输入帐户")):t()},r=(e,r,t)=>{""===r?t(new Error("请输入密码")):t()};return{ruleForm:{username:"administrator",password:"password"},rules:{username:[{validator:e,trigger:"blur"}],password:[{validator:r,trigger:"blur"}]}}},methods:{submitForm(){this.$refs["ruleForm"].validate((e=>{if(!e)return this.$message.error("请完整输入"),!1;this.$store.dispatch("goLogin",this.ruleForm).then((e=>{e&&(this.$message({message:"登陆成功",type:"success"}),this.$route.query.redirect?this.$router.replace(`/${this.$route.query.redirect}`):this.$router.replace("/"),this.$router.go(0))}))}))},resetForm(){this.ruleForm={username:"",password:""}}}},n=u,a=t(1001),l=(0,a.Z)(n,s,o,!1,null,"0c2d12a7",null),i=l.exports}}]);