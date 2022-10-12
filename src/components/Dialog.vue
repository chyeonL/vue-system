<template>
  <!-- visible 控制弹窗显示隐藏 -->
  <el-dialog
    :title="type == 'add' ? '商品添加' : '商品编辑'"
    :visible.sync="dialogFormVisible"
    center
    width="70%"
  >
    <el-form
      :model="goodsForm"
      :rules="rules"
      label-width="80px"
      ref="goodsForm"
    >
      <el-form-item label="类目选择" prop="category">
        <el-button type="primary" @click="innerVisible = true"
          >选择类别</el-button
        >
        {{ goodsForm.category }}
      </el-form-item>

      <el-form-item label="商品名称" prop="name">
        <el-input v-model="goodsForm.name"></el-input>
      </el-form-item>

      <el-form-item label="商品价格" prop="price">
        <el-input v-model="goodsForm.price"></el-input>
      </el-form-item>

      <el-form-item label="商品数量" prop="num">
        <el-input v-model="goodsForm.num"></el-input>
      </el-form-item>

      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="goodsForm.date1"
            style="width: 100%"
            prop="date1"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2" style="text-align: center">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="goodsForm.date2"
            style="width: 100%"
            prop="date2"
          ></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="商品卖点" prop="sellPoint">
        <el-input v-model="goodsForm.sellPoint"></el-input>
      </el-form-item>

      <el-form-item label="商品图片" prop="imgUrl" class="imgItem">
        <el-button type="primary" @click="innerIMGVisible = true">
          上传图片
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <img :src="goodsForm.imgUrl" class="imgUpload" />
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <!-- 富文本编辑器 -->
        <WangEditor ref="desc" :desc='goodsForm.desc'/>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="resetForm()">重置 </el-button>
      <el-button type="primary" @click="submitForm()">确 定</el-button>
    </div>

    <!-- 内层嵌套的dialog  类目选择 -->
    <el-dialog
      width="30%"
      title="类目选择"
      :visible.sync="innerVisible"
      append-to-body
    >
      <Tree />

      <div slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">取消 </el-button>
        <el-button type="primary" @click="chooseCategory()">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 内层嵌套的dialog  上传图片 -->
    <el-dialog
      width="30%"
      title="上传图片"
      :visible.sync="innerIMGVisible"
      append-to-body
    >
      <Upload />

      <div slot="footer" class="dialog-footer">
        <el-button @click="innerIMGVisible = false">取消</el-button>
        <el-button type="primary" @click="uploadIMG()">确 定</el-button>
      </div>
    </el-dialog>
  </el-dialog>
</template>

<script>
import Tree from "@/components/Tree";
import Upload from "@/components/Upload";
import WangEditor from "@/components/WangEditor";

export default {
  name: "Dialog",
  components: { Tree, Upload, WangEditor },
  data() {
    return {
      dialogFormVisible: false, // 弹窗添加 显示
      innerVisible: false, //控制 类目选择 的弹窗
      innerIMGVisible: false, //控制 上传图片 的弹窗
      TreeData: {}, // 暂存 选择的类目数据
      img: "", // 暂存 上传的图片
      type: "add", // 默认打开弹窗是 添加商品  ，edit编辑商品
      // 表单数据对象
      goodsForm: {
        id: -1,
        cid: "",
        name: "",
        desc: "",
        price: 10,
        num: 10,
        imgUrl: "",
        category: "",
        sellPoint: "",
        date1: "",
        date2: "",
      },
      rules: {
        // 不是必须的那也没必要写了
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度不少于 3 个字符", trigger: "blur" },
        ],
        price: [
          {
            required: true,
            message: "请输入商品价格",
            trigger: "change",
          },
        ],
        num: [
          {
            required: true,
            message: "请输入商品数量",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    // 绑定 打开关闭弹窗 功能（父组件触发使用）
    this.$bus.$on("openDialog", (type, goods = {}) => {
      this.dialogFormVisible = !this.dialogFormVisible;
      // 关闭弹窗的方法有两个：1、改变这个变量  2、确定添加商品
      // 所以弹窗右上角的关闭 和 取消 都是 绑定了这个变量
      // 之所以没有将这个变量定义在父组件：
      // 1、props过来的参数，不允许直接改变，
      // （所以还要另外定义一个变量接收props，然后改变这个变量）
      // （或者再弄自定义事件，父组件绑定，子组件触发） both 麻烦
      // 2、这是一个独立封装的组件了，当然还是自己收着参数更好啦

      this.type = type;
      if (this.type == "edit") this.goodsForm = goods;
    });
    // 获取类目
    this.$bus.$on("getCategory", (data) => {
      this.TreeData = data;
    });

    // 获取上传图片的路径
    this.$bus.$on("getImgURL", (data) => {
      this.img = data;
    });
  },
  methods: {
    // 弹窗 取消
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          this.resetForm();
        })
        .catch(() => {});
    },

    // 选择类目
    chooseCategory() {
      this.innerVisible = false;
      this.goodsForm.category = this.TreeData.name;
      this.goodsForm.cid = this.TreeData.cid;
    },

    // 上传图片
    uploadIMG() {
      this.innerIMGVisible = false;
      this.goodsForm.imgUrl = this.img;
    },

    // 确认提交表单
    submitForm() {
      this.goodsForm.desc = this.$refs.desc.editor.txt.text()
      // 表单验证
      this.$refs["goodsForm"].validate(async (valid) => {
        if (valid) {
          // console.log(this.$refs.desc.editor.txt.text());
          console.log(this.goodsForm);

          // 添加商品 发请求
          if (this.type == "add") {
            await this.$api.addGoods(this.goodsForm).then((res) => {
              console.log(res);
              if (res.success) {
                // 成功提示
                this.$message({
                  type: "success",
                  message: "添加商品成功",
                });
                // 关闭弹窗
                this.dialogFormVisible = false;
                // 刷新页面，所有商品
                this.$parent.getData();
                // 清空表单
                this.resetForm();
              }
            });
          }
          // 编辑商品  发请求
          else {
            await this.$api
              .updateGoods({ id: this.goodsForm.id, goodsForm: this.goodsForm })
              .then((res) => {
                console.log(res);
                if (res.success) {
                // 成功提示
                this.$message({
                  type: "success",
                  message: "编辑成功",
                });
                // 关闭弹窗
                this.dialogFormVisible = false;
                // 刷新页面，所有商品
                this.$parent.getData();
                // 清空表单
                this.resetForm();

                this.type = 'add'
              }
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
      this.goodsForm = {
        cid: "",
        name: "",
        desc: "",
        price: 10,
        num: 10,
        imgUrl: "",
        category: "",
        sellPoint: "",
        date1: "",
        date2: "",
      };
      this.$bus.$emit("clear");
      // console.log(this.goodsForm);
    },
  },
};
</script>

<style lang="scss" scoped>
.imgUpload {
  position: absolute;
  top: 0;
  left: 150px;
  min-width: 100px;
  max-height: 110px;
}

.imgItem {
  height: 115px;
  line-height: 115px;
}
</style>
