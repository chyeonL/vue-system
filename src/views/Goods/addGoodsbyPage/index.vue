<template>
  <div class="add">
    <Breadcrumb  :routes='routes'/>

    <div class="form">
      <el-form :model="goodsForm" :rules="rules" label-width="80px" ref="goodsForm">
        <el-form-item label="类目选择" prop='category'>
           <el-button type="primary">选择类别</el-button>
        </el-form-item>

        <el-form-item label="商品名称" prop='name'>
          <el-input v-model="goodsForm.name"></el-input>
        </el-form-item>

        <el-form-item label="商品价格" prop='price'>
          <el-input v-model="goodsForm.price"></el-input>
        </el-form-item>

        <el-form-item label="商品数量" prop='num'>
          <el-input v-model="goodsForm.num"></el-input>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="goodsForm.date1"
              style="width: 100%"
              prop='date1'
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="goodsForm.date2"
              style="width: 100%"
              prop='date2'
            ></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="商品卖点" prop='sellPoint'>
          <el-input v-model="goodsForm.sellPoint"></el-input>
        </el-form-item>

        <el-form-item label="商品图片" prop='imgUrl'>
          <el-button type="primary">
            上传图片
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
        </el-form-item>

        <el-form-item label="商品描述" prop='desc'>
          <el-input type="textarea" v-model="goodsForm.desc"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >确定</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";

export default {
  name: "add",
  components: { Breadcrumb },
  data() {
    return {
      // 面包屑导航 对象
      routes:{
        parent:'商品管理',
        parentRoute:'showGoods',
        children:'添加商品'
      },
      // 表单数据对象
      goodsForm: {
        id:'',
        name: "",
        desc: "",
        price: 0,
        num: 0,
        imgUrl: "",
        category: "",
        sellPoint: "",
        data1:'',
        data2:'',
      },
      rules: {
        // 不是必须的那也没必要写了
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度不少于 3 个字符", trigger: "blur" },
        ],
        price: [
          {
            type: "number",
            required: true,
            message: "请输入商品价格",
            trigger: "change",
          },
        ],
        num: [
          {
            type: "number",
            required: true,
            message: "请输入商品数量",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  margin: 20px 0;
}
</style>
