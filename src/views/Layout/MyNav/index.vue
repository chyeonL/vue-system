<template>
  <div class="myNav">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#24292e"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
     :collapse="isCollapse"
     :collapse-transition='false'
     :unique-opened=true
    >
      <el-menu-item class="system">
        <span slot="title">{{$t('project.name')}}</span>
      </el-menu-item>
      <el-menu-item index="/home">
        <i class="iconfont icon-shouye"></i>
        <span slot="title">{{$t('menu.home')}}</span>
      </el-menu-item>

      <el-submenu index="/goods">
        <template slot="title">
          <i class="iconfont icon-shangpinguanli"></i>
          <span slot="title">{{$t('menu.goods')}}</span>
        </template>
        <el-menu-item index="/goods/showGoods">
          <template slot="title">
            <i class="iconfont icon-a-quanbusuoyou-08"></i>
            <span slot="title">{{$t('menu.all')}}</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/goods/addGoodsbyPage">
          <template slot="title">
            <i class="iconfont icon-tianjia"></i>
            <span slot="title">{{$t('menu.add')}}</span>
          </template>
        </el-menu-item>
      </el-submenu>

      
      <el-menu-item index="/rule">
        <i class="iconfont icon-guigeguanli"></i>
        <span slot="title">{{$t('menu.rule')}}</span>
      </el-menu-item>

      <el-menu-item index="/order">
        <i class="iconfont icon-2suoyoudingdan"></i>
        <span slot="title">{{$t('menu.order')}}</span>
      </el-menu-item>

      <el-menu-item index="/user">
        <i class="iconfont icon-yonghuguanli_huaban"></i>
        <span slot="title">{{$t('menu.user')}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MyNav",
  props: ["isCollapse"],
};
</script>

<style lang="scss" scoped>
.myNav {  
}
.system {
  font-size: 20px;
  font-weight: 700;
}

.el-menu {
  border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}

.iconfont {
  color: white;
  font-size:23px ;
  margin-right: 10px;
}

</style>
