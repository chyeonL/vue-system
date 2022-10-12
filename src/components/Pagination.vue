<template>
  <div id="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[3, 4, 5, 6, 7, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="total"
    >
    <!-- 
      获取父组件props的 total总页数、pageNo页码 .etc
     -->
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  methods: {
    // 改变页面大小
    handleSizeChange(val) {
      this.$emit("changePageSize", val, this.currentPage);
      // console.log(this.currentPage);
    },

    // 改变页码
    handleCurrentChange(val) {
      this.$emit("changePageNo", val, this.pageSize);
    },
  },
  props: {
    total: {
      type: Number,
      default: 10,
    },
    pageSize: {
      type: Number,
      default: 7,
    },
    pageNo: {
      type: Number,
      default: 1,
    },
    currentPage:{
      type: Number,
      default: 1,
    }
  },
};
</script>

<style lang="scss" scoped>
.el-pagination {
  margin: 25px auto 0;
  text-align: center;
}
</style>
