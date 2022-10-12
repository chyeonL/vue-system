<template>
  <keep-alive>
    <div class="pdf">
      <el-dialog
        title="预览"
        :visible.sync="centerDialogVisible"
        width="50%"
        center
      >
        <div class="control">
          <span>{{ currentPage }} / {{ pageCount }}</span>
          <div class="buttons">
            <el-button type="primary" @click="nextPage">下一页</el-button>
            <el-button type="primary" @click="previousPage"
              >上一页</el-button
            >
          </div>
        </div>
        <hr />
        <pdf
          src="./CSS.pdf"
          :page="n"
          @num-pages="pageCount = $event"
          @page-loaded="currentPage = $event"
          ref="myPdfComponent"
        />

        <hr />

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="print"
            >确定打印</el-button
          >
        </span>
      </el-dialog>
    </div>
  </keep-alive>
</template>

<script>
import pdf from "vue-pdf";

export default {
  name: "pdfDialog",
  components: { pdf },
  data() {
    return {
      centerDialogVisible: false,
      currentPage: 0,
      pageCount: 0,
      n: 1, //当前页码
    };
  },
  mounted() {
    this.$bus.$on("pdf", () => {
      this.centerDialogVisible = true;
    });
  },
  methods: {
    nextPage() {
      this.currentPage == this.pageCount ? this.n : this.n++;
    },

    previousPage() {
      this.currentPage  == 1 ? this.n : this.n--;
    },

    print(){
        this.$refs.myPdfComponent.print()
    }
  },
};
</script>

<style scoped lang="scss">
.control {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-bottom: 3px;
  .buttons {
    position: absolute;
    right: 0;
    bottom: 0;

    .el-button--primary {
      float: right;
      display: flex;
      width: 60px;
      height: 30px;
      margin: 0 10px;
      align-items: center;
      justify-content: center;
    }
  }
}

::v-deep .el-dialog--center .el-dialog__body span {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  text-align: center;
}
</style>
