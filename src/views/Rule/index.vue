<template>
  <div id="rule">
    <!-- 搜索栏 -->
    <div class="search">
      <el-input
        v-model="keyword"
        placeholder="输入关键字进行搜索……"
        @change="goSearch"
      ></el-input>
      <el-button type="primary" icon="el-icon-search">{{
        $t("content.search")
      }}</el-button>
      <el-button type="primary" @click="addCategory">添加规格</el-button>
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
        <el-table-column prop="cid" label="规格CID" width="80">
        </el-table-column>
        <el-table-column prop="id" label="类目ID" width="80"> </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="rule" label="规格设置"> </el-table-column>
        <el-table-column label="操作" class="buttonss">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              class="edit"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              class="edit"
              >删除</el-button
            >
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
      @changePageSize="RulePageSize"
      @changePageNo="RulePageNo"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import TXT from "@/components/TXT";
import Excel from "@/components/Excel";
import RuleDialog from "@/components/RuleDialog";
import PDF from '@/components/PDF'
import { mapState } from "vuex";

export default {
  name: "Rule",
  components: {  Pagination, Excel, TXT, RuleDialog,PDF },
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
      ruleData: (state) => state.params.ruleData,
      allData: (state) => state.params.allData,
      searchData: (state) => state.params.searchData,
    }),
    txtHeadTitle() {
      return Object.keys(this.json_fields).join(" ");
    },
  },
  methods: {
    // 获取所有类目  默认：  页码 1   ，   页面大小 4
    getData(pageNo = 1, pageSize = 4) {
      // console.log(pageNo,pageSize);
      this.$store.dispatch("getCategory", { pageNo, pageSize }).then((res) => {
        if (res.success) {
          this.pageNo = parseInt(res.pageNo);
          this.pageSize = parseInt(res.pageSize);
          this.total = res.total;
          this.currentPage = this.pageNo;
          this.tableData = this.ruleData;     //赋值给表单 对应的数据
          this.type = "all";
        }
      });

      // mock
      
      // this.$api.getRules().then(res=>{
      //   // console.log(res);
      //   this.pageNo = 1
      //     this.pageSize = 4;
      //     this.total = res.data.length;
      //     this.currentPage = this.pageNo;
      //     this.tableData = res.data;     //赋值给表单 对应的数据
      //     this.type = "all";
      //     this.$message.error('在线演示时，只能显示所有规格，其他功能无法使用')
      // })
    },

    // 搜索
    goSearch() {
      if (!this.keyword.trim()) {
        return false;
      } else {
        // 有输入才发请求
        this.$store
          .dispatch("searchRules", { keyword: this.keyword.trim() })
          .then((res) => {
            // this.tableData = res.data;
            this.total = res.total; // 现在是获取回来所有数据，前端数组切割展示
            this.type = "search";
            this.pageSize = 4
            this.pageNo = 1
            this.RulePageNo(1, 4); // 刚获取搜索数据回来，当前页码是1，初始页码大小是4
          });
      }
    },

    RulePageSize(pageSize,pageNo) {
      // console.log(pageNo, pageSize);
      this.currentPage = 1;
      if (this.type == "all") {
        this.getData(1, pageSize);
      } else {
        if (this.searchData.length > pageSize) {
          this.tableData = this.searchData.slice(
            (pageNo - 1) * pageSize,
            pageNo * pageSize
          );
        }else return 
      }
    },

    RulePageNo(pageNo, pageSize) {
      this.currentPage = pageNo;
      if (this.type == "all") {
        this.getData(pageNo, pageSize);
      }
      // 如果是所有商品，就调用方法发请求；如果是搜索，就切割数组改变当前展示的商品列表
      else {
        this.tableData = this.searchData.slice(
          (pageNo - 1) * pageSize,
          pageNo * pageSize
        );
      }
    },

    // 添加
    addCategory() {
      this.$bus.$emit("openRuleDialog", "add");    //全局事件总线 触发子组件打开弹窗
    },

    // 编辑
    handleEdit(index, row) {
      this.$bus.$emit("openRuleDialog", "edit", row);
    },

    // 删除
    handleDelete(index, row) {
      // console.log(index, row);
      this.$store.dispatch("deleteRule", { cid: row.cid }).then(() => {
        this.getData();
      });
    },

    // pdf
   pdf(){
        this.$bus.$emit('pdf')
      }
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
