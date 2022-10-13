<template>
  <div class="myContent">
    <!-- 顶部 -->
      <div class="header">
      <!-- 折叠 展开 -->
      <div class="collapse" @click="change">
        <i class="el-icon-s-unfold" v-show="isCollapse"></i>
        <i class="el-icon-s-fold" v-show="!isCollapse"></i>
      </div>

      <!-- 右侧 -->
      <div class="user">
        <!-- 切换商铺 -->
        <el-select v-model="value" placeholder="切换商铺" class="select" filterable size='mini'>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <!-- 下拉菜单  多语言-->
        <el-dropdown class="dropdown" @command="changLanguage">
          <el-button type="primary" class="lang">
            {{ $t("language.select")
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">{{
              $t("language.zh")
            }}</el-dropdown-item>
            <el-dropdown-item command="en">{{
              $t("language.en")
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- 消息 -->
        <el-badge is-dot class="item">
          <el-button
            class="share-button"
            icon="el-icon-message-solid"
            type="primary"
          ></el-button>
        </el-badge>

        <!-- 头像 移入显示dropdown -->
        <el-dropdown class="user">
          <span>
            <el-avatar size="small" :src="circleUrl" class="avatar"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push('/user')">{{ $t("user.settings") }}</el-dropdown-item>
            <el-dropdown-item @click.native="logout">{{
              $t("user.logout")
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    
    <!-- 内容显示 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  props: ["isCollapse"],
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        // 切换商铺
        options: [{
          value: '广州塔总店',
        }, {
          value: '文化西路分店',
        }, {
          value: '花都区分店',
        }],
        value: ''
      }
  },
  methods: {
    // 展开折叠
    change() {
      this.$emit("changeIsCollapse");
    },

    // 点击 多语言 语言切换
    changLanguage(command) {
      console.log(command);
      this.$i18n.locale = command;
    },

    // 退出登录
    logout() {
      this.$store.commit("clearUserInfo");
      this.$router.go(0);
    },
  },
};
</script>

<style scoped lang="scss">
.myContent {
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
}
.header {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: #24292e;
}

main {
  flex: 1;
  margin-top: 56px;
  padding: 20px;
  overflow: auto;
}

.collapse {
  width: 25px;
  margin-left: 15px;
  cursor: pointer;

  i {
    color: white;
    font-size: 25px;
    font-weight: normal;
  }
}

.dropdown {
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .lang {
    background-color: transparent;
    border-color: transparent;
  }
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  
  .share-button {
    display: inline-block;
    padding: 10px;
    margin-right: 20px;
    border: none;
    background-color: transparent;
    font-size: 18px;
  }
  .avatar {
    cursor: pointer;
  }
}
::v-deep .el-badge__content.is-fixed.is-dot {
  position: absolute;
  top: 10px;
  left: 20px;
  border: none;
  background-color: red;
}

.select {
  width: 150px;
  color:black;
}
</style>
