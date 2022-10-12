<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="routes.parentRoute">{{routes.parent}}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="routes.children">{{routes.children}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    name:'Breadcrumb',
    props:['routes']
};
</script>

<style lang="scss" scoped>
 .el-breadcrumb {
    width: 230px;
    height: 35px;
    padding-left: 10px;
    line-height: 35px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
}
</style>