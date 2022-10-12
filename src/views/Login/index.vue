<template>
  <div id="login">
    <h2 class='title'>商铺管理系统</h2>
    <div class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="50px"
        class="demo-ruleForm"
      >
        <h2 style="font-weight:normal;font-size: 18px;">登录</h2>
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            @keyup.enter.native="submitForm()"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm()"
          ></el-input>
        </el-form-item>
        <el-form-item class="buttons">
          <el-button @click="resetForm()">重置</el-button>
          <el-button type="primary" @click="submitForm()"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入帐户"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      // 用户对象
      ruleForm: {
        username: "administrator",
        password: "password",
      },
      // 验证方法
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          // console.log(this.ruleForm);
          // 登录 后台验证
          this.$store.dispatch("goLogin", this.ruleForm).then((res) => {
            // console.log(res);
            if (res) {
              this.$message({
                message: "登陆成功",
                type: "success",
              });
              // console.log(this.$route.query.redirect);
              if (this.$route.query.redirect) {
                this.$router.replace(`/${this.$route.query.redirect}`);
              } else this.$router.replace("/");
              this.$router.go(0);
            }
          });
        } else {
          this.$message.error("请完整输入");
          return false;
        }
      });
    },

    // 重置
    resetForm() {
      this.ruleForm = {
        username: "",
        password: "",
      };
    },
  },
};
</script>

<style scoped lang="scss">
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #24292e;
}

.title {
  color: #409eff;
  margin-bottom: 50px;
  font-size: 30px;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-ruleForm {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 20px;

  .el-form-item {
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
  }

  .buttons {
    .el-button {
      margin-right: 30px;
    }
  }
}
</style>
