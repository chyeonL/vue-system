<template>
  <div id="order">
    <!-- 搜索栏 -->
    <div class="search">
      <el-input v-model="keyword" placeholder="输入关键字进行搜索……"></el-input>
      <el-button type="primary" icon="el-icon-search">{{
        $t("content.search")
      }}</el-button>
      <el-button type="primary">添加订单</el-button>
    </div>

    <!-- 表格 -->
    <main>
      <el-table
        :data="tableData"
        border
        align="center"
        header-align="center"
        ref="tables"
        height="400px"
      >
        <!-- id不是唯一的，只有cid才是辨识类目的唯一 -->
        <el-table-column prop="order_id" label="订单号" width="80">
        </el-table-column>
        <el-table-column prop="goods_name" label="商品列表"> </el-table-column>
        <el-table-column prop="goods_price" label="订单总价"> </el-table-column>
        <el-table-column prop="goods_num" label="商品数量" width="80"> </el-table-column>
        <el-table-column prop="order_status" label="支付状态" width="80"> </el-table-column>
        <el-table-column prop="uId" label="顾客ID" width="80"> </el-table-column>
        <el-table-column label="操作" class="buttonss">
          <template slot-scope="scope">
            <el-button size="mini" class="edit">编辑</el-button>
            <el-button size="mini" type="danger" class="edit">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </main>

    <!-- 添加规格的弹窗 -->
    <RuleDialog />

    <div class="toolbar">
      <Excel
        class="excel"
        formTitle="类目"
        :field="json_fields"
        :formData="allData"
        name="商品类目"
      />
      <TXT :txtHeadTitle="txtHeadTitle" name="所有类目" :txtData="allData" />
      <el-button type="success" @click="pdf">导出为pdf文件</el-button>
      <PDF />
    </div>

    <!-- 分页器 -->
    <Pagination
      :total="total"
      :pageSize="pageSize"
      :pageNo="pageNo"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import TXT from "@/components/TXT";
import Excel from "@/components/Excel";
import RuleDialog from "@/components/RuleDialog";
import PDF from "@/components/PDF";
import { mapState } from "vuex";
export default {
  name: "Order",
  components: { Pagination, Excel, TXT, RuleDialog, PDF },
  data() {
    return {
      tableData: [],
      keyword: "",
      pageNo: 1,
      pageSize: 4,
      total: 0,
      currentPage: 1,
      type: "all",
      json_fields: {
        "规格ID": "cid",
          "类目ID": "id",
          "名称": "name",
          "规格设置": "rule",
      },
      /* 
          "规格ID": "cid",
          "类目ID": "id",
          "名称": "name",
          "规格设置": "rule",
      */
    };
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState({
      allData: (state) => state.params.allData,
    }),
    txtHeadTitle() {
      return Object.keys(this.json_fields).join(" ");
    },
  },
  methods: {
    // 获取所有类目  默认：  页码 1   ，   页面大小 4
    async getData(pageNo = 1, pageSize = 4) {
      // console.log(pageNo,pageSize);
      // await this.$api.allOrder({ pageNo, pageSize }).then((res) => {
      //   console.log(JSON.stringify(res.allData));
      //   if (res.success) {
      //     this.pageNo = parseInt(res.pageNo);
      //     this.pageSize = parseInt(res.pageSize);
      //     this.total = res.total;
      //     this.currentPage = this.pageNo;
      //     this.tableData = res.data; //赋值给表单 对应的数据
      //     this.type = "all";
      //   }
      // });
      await this.$api.getorders().then(res=>{
        // console.log(res);
        this.pageNo = parseInt(res.pageNo);
          this.pageSize =4;
          this.total = res.length;
          this.currentPage = this.pageNo;
          this.tableData = res.data; //赋值给表单 对应的数据
          this.type = "all";
          this.$message.error('在线演示时，只能显示所有订单，其他功能无法使用')
      })
    },

    // pdf
    pdf() {
      this.$bus.$emit("pdf");
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  margin: 15px 0;
  align-items: center;

  ::v-deep .el-input {
    width: 500px;
  }

  ::v-deep .el-button {
    margin-left: 20px;
    font-size: 16px;
  }
}

.edit {
  font-size: 15px;
}

.toolbar {
  display: flex;
  width: 500px;
  margin: 10px auto;
  justify-content: space-between;
  align-items: center;
}
</style>
