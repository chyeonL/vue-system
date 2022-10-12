<template>
  <div id="user">
    <el-descriptions
      title="管理员信息设置"
      direction="vertical"
      :column="3"
      border
      class="settings"
      labelClassName="label"
    >
      <el-descriptions-item label="账号">{{
        userInfo.username
      }}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{
        userInfo.phoneNumber
      }}</el-descriptions-item>
      <el-descriptions-item label="性别">{{
        userInfo.sex
      }}</el-descriptions-item>
      <el-descriptions-item label="年龄">{{
        userInfo.age
      }}</el-descriptions-item>
      <el-descriptions-item label="头像">{{
        userInfo.avatar
      }}</el-descriptions-item>
      <el-descriptions-item label="地址" :span="2">{{
        userInfo.address
      }}</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
    </el-descriptions>

    <div class="buttons">
      <el-button type="primary" @click="modify"
        >修改密码</el-button
      >
      <el-button type="primary">修改基本信息</el-button>
    </div>

    <el-dialog
      title="修改密码"
      :visible.sync="centerDialogVisible"
      width="60%"
      center
    >
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >      
        <el-form-item label="旧密码" prop="oldpwd">
          <el-input v-model.number="ruleForm.oldpwd" type="password"
            autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpwd">
          <el-input
            type="password"
            v-model="ruleForm.newpwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import { mapState } from "vuex";
export default {
  name: "User",
  data() {
    return {
      centerDialogVisible: false,
      ruleForm: {
        oldpwd: "",
        checkPass: "",
        newpwd: "",
      },
    };
  },
  methods: {
    submitForm() {
      if(!this.ruleForm.checkPass && !this.ruleForm.newpwd && !this.ruleForm.oldpwd) 
      return Message.error('请完整输入')
      if(this.ruleForm.checkPass == this.ruleForm.newpwd){
        // 发请求
        // console.log(this.ruleForm);
        let id = this.userInfo.id
        let newPwd = this.ruleForm.newpwd
        this.$store.dispatch('modifyPwd',{id,newPwd}).then(res=>{
          if(res.success){
            Message({
              type:'success',
              message:res.msg
            })
            this.centerDialogVisible = false
          }
        })
      }else{
        return Message.error('两次输入的新密码不相同')
      }
    },

    resetForm() {
      this.ruleForm= {
        oldpwd: "",
        checkPass: "",
        newpwd: "",
      }
    },

    modify(){
      this.resetForm()
      this.centerDialogVisible = true
    }
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
};
</script>

<style scoped lang="scss">
.settings {
  width: 800px;
  margin: 0 auto;
}
::v-deep .label {
  background-color: #e1f3d8;
}

.buttons {
  text-align: center;
  .el-button {
    margin: 20px 10px;
  }
}
</style>
