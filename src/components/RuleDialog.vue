<template>
  <!-- visible 控制弹窗显示隐藏 -->
  <el-dialog
    :title="type == 'add' ? '添加规格' : '编辑规格'"
    :visible.sync="dialogFormVisible"
    center
    width="70%"
  >
  <!-- id可以重复，cid不可以 -->
    <el-form :model="ruleForm" :rules="rules" label-width="80px" ref="ruleForm">
      <el-form-item label="规格ID" prop="cid">
        <el-input v-model="ruleForm.cid" :disabled="unchangable"></el-input>
      </el-form-item>

      <el-form-item label="类目ID" prop="id">           
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>

      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="规格设置" prop="rule">
        <!-- 富文本编辑器 -->
        <WangEditor ref="rule" :desc="ruleForm.rule" />
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm()">重置 </el-button>
      <el-button type="primary" @click="submitForm()">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import WangEditor from "@/components/WangEditor";

export default {
  name: "Dialog",
  components: { WangEditor },
  data() {
    return {
      dialogFormVisible: false, // 弹窗添加 显示
      type: "add",         // 默认打开弹窗是 添加 ，edit是 编辑
      // 表单数据对象
      ruleForm: {
        id: "",
        cid: "",
        name: "",
        rule: "",
      },
      rules: {
        // 不是必须的那也没必要写了
        name: [{ required: true, message: "请输入类目名称", trigger: "blur" }],
        cid: [
          {
            required: true,
            message: "请输入规格ID",
            trigger: "blur",
          },
        ],
        id: [
          {
            required: true,
            message: "请输入类目ID",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    unchangable() {         //编辑时，不可更改id
      return this.type == "edit" ? true : false;
    },
  },
  mounted() {
    // 绑定 打开关闭弹窗 功能（父组件触发使用）
    this.$bus.$on("openRuleDialog", (type, rules = {}) => {
      this.dialogFormVisible = true;
      this.resetForm()
      this.type = type;
      if (this.type == "edit") {
        this.ruleForm = rules;
        console.log(this.ruleForm);
        // this.$refs.rule.editor.txt.html("<p>"+rules.rule+"</p>")
      }
    });
  },
  methods: {
    // 确认提交表单
    submitForm() {
      this.ruleForm.rule = this.$refs.rule.editor.txt.text();
      // 表单验证
      this.$refs["ruleForm"].validate(async (valid) => {
        if (valid) {
          // console.log(this.$refs.rule.editor.txt.text());
          //   console.log(this.ruleForm);

          // 添加商品 发请求
          if (this.type == "add") {
            await this.$store.dispatch("addRule", this.ruleForm).then((res) => {
              if (res) {
                // 关闭弹窗
                this.dialogFormVisible = false;
                // 刷新页面，所有商品
                this.$router.go(0);
                // 清空表单
                this.resetForm();
              }
            });
          }
          // 编辑商品  发请求
          else {
            await this.$store
              .dispatch("updateRules", this.ruleForm)
              .then((res) => {
                // console.log(res);
                // 关闭弹窗
                this.dialogFormVisible = false;
                // 刷新页面，所有商品
                this.$router.go(0);
                // 清空表单
                this.resetForm();

                this.type = "add";
              });
          }
        } else {
          this.$message({
            showClose: true,
            message: "请按要求输入",
            type: "error",
          });
          return false;
        }
      });
    },

    //   重置
    resetForm() {
      this.ruleForm = {
        id: "",
        cid: "",
        name: "",
        rule: "",
      };
      this.$bus.$emit("clear");
    },
  },
};
</script>
