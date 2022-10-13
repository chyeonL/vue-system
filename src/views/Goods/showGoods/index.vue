<template>
  <div id="showGoods">
    <!-- 头部 -->
    <header>
      <el-input
        v-model="keyword"
        placeholder="输入关键字进行搜索……"
        @change="goSearch"
      ></el-input>
      <el-button type="primary" icon="el-icon-search">{{$t('content.search')}}</el-button>
      <el-button type="primary" @click="addPage">{{$t('content.page')}}</el-button>
      <el-button type="primary" @click="addDialog">{{$t('content.dialog')}}</el-button>
    </header>

    <!-- 弹窗 -->
    <Dialog />
    <!-- 表格 -->
    <main>
      <el-table
        :data="goodsList"
        border
        height='450'
        align="center"
        header-align="center"
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="商品ID" prop="id" width="70"> </el-table-column>
        <el-table-column label="商品名称" prop="name"> </el-table-column>
        <el-table-column label="商品价格" prop="price"> </el-table-column>
        <el-table-column label="商品数量" prop="num"> </el-table-column>
        <el-table-column label="规格类目" prop="category" width="100">
        </el-table-column>
        <el-table-column label="商品图片" prop="imgUrl" width="100">
        </el-table-column>
        <el-table-column label="商品卖点" prop="sellPoint" width="100">
        </el-table-column>
        <el-table-column label="商品描述" prop="desc" width="130">
        </el-table-column>
        <el-table-column label="商品操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >{{$t('content.edit')}}</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >{{$t('content.delete')}}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </main>

    <div class="toolbar">      
      <Excel formTitle='所有商品' :field='json_fields' :formData='allData' name='商品信息'/>
      <TXT :txtHeadTitle='txtHeadTitle' name='所有商品'  :txtData='allData' />
      <el-button type="success" @click="pdf">导出为pdf文件</el-button>
      <PDF />
    </div>

    <!-- 分页 -->
    <Pagination
      :total="total"
      :pageSize="pageSize"
      :pageNo="pageNo"
      :currentPage="currentPage"
      @changePageNo="changePageNo"
      @changePageSize="changePageSize"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import Dialog from "@/components/Dialog";
import Excel from '@/components/Excel'
import TXT from '@/components/TXT'
import PDF from '@/components/PDF'
import { Message } from 'element-ui';

export default {
  name: "ShowGoods",
  components: { Pagination, Dialog,Excel,TXT,PDF },
  data() {
    return {
      keyword: "",
      goodsList: [],
      total: 0,
      pageSize: 1,
      pageNo: 1,
      type: "all", // search 为搜索分页
      searchList: [], //搜索的结果
      currentPage: 1,
      allData:[],
      json_fields:{
        "商品ID":"id",
        "商品名称":"name",
        "商品价格":"price",
        "商品数量":"num",
        "规格类目":"category",
        "商品图片":"imgUrl",
        "商品卖点":"sellPoint",
        "商品描述":"desc",
      },
      /* 
        "商品ID":"id",
        "商品名称":"name",
        "商品价格":"price",
        "商品数量":"num",
        "规格类目":"category",
        "商品图片":"imgUrl",
        "商品卖点":"sellPoint",
        "商品描述":"desc",
      */
    };
  },
  created() {
    this.getData();
  },
  computed:{
    txtHeadTitle(){
      return Object.keys(this.json_fields).join(' ')
    }
  },
  methods: {
    async getData(pageNo = 1, pageSize = 4) {
      //   console.log(pageNo, pageSize);
      // await this.$api.getAllGoods(pageNo, pageSize).then((res) => {
      //   // console.log(res.allData);
      //   // console.log(JSON.stringify(res.allData));
      //   this.goodsList = res.data;
      //   this.total = res.total;
      //   this.pageSize = parseInt(res.pageSize);
      //   this.pageNo = parseInt(res.pageNo);
      //   this.currentPage = this.pageNo;
      //   this.type = "all";
      //   this.allData = res.allData
      // });
      await this.$api.getGoods().then(res=>{
        // console.log(res);
        this.goodsList = res.data;
        this.total = res.data.length;
        this.pageSize = 4;
        this.pageNo = 1;
        this.currentPage = this.pageNo;
        this.type = "all";
        Message.error('在线演示时，只能显示所有商品，其他功能无法使用')
      })
    },

    // 改变页码，重发请求
    changePageNo(pageNo, pageSize) {
      this.currentPage = pageNo;
      if (this.type == "all") {
        this.getData(pageNo, pageSize);
      }
      // 如果是所有商品，就调用方法发请求；如果是搜索，就切割数组改变当前展示的商品列表
      else {
        this.goodsList = this.searchList.slice(
          (pageNo - 1) * pageSize,
          pageNo * pageSize
        );
      }
    },

    // 改变页面大小，重发请求
    changePageSize(pageSize, pageNo) {
      this.currentPage = 1;
      if (this.type == "all") {
        this.getData(pageNo, pageSize);
      } else {
        this.goodsList = this.searchList.slice(
          (pageNo - 1) * pageSize,
          pageNo * pageSize
        );
      }
    },

    // 搜索商品
    async goSearch() {
      // 根据关键字发请求 搜索
      if (this.keyword.trim()) {
        await this.$api
          .searchGoods({ searchParams: this.keyword.trim() })
          .then((res) => {
            // console.log(res);
            if (res.code == 200) {
              this.searchList = res.data; // 这里假设需要前端自己分页，实际开发还是后端来分页
              this.total = res.total; // 现在是获取回来所有数据，前端数组切割展示
              this.type = "search";
              this.changePageNo(1, 4); // 刚获取搜索数据回来，当前页码是1，初始页码大小是4
            } else {
              // 无数据处理
              this.type = "all";
              (this.total = 0), (this.pageNo = 1);
              this.goodsList = [];
            }
          });
      } else {
        this.getData(1, this.pageSize); // 搜索之后，删掉关键词，再按回车，重新加载全部数据
        return;
      }
    },

    // 添加商品  页面
    addPage() {
      this.$router.push({ name: "addGoodsbyPage" });
    },

    // 添加商品  弹窗
    addDialog() {
      this.$bus.$emit("openDialog",'add');
    },

    // 编辑     和添加商品共用一个弹窗组件
    async handleEdit(index, row) {
      // console.log(row);
      this.$bus.$emit("openDialog",'edit',row);
    },

    // 删除
    handleDelete(index, row) {
      // 确认删除弹窗
      this.$confirm("确定删除该商品吗?", "删除商品", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true,
      })
        .then(async () => {
          let res = await this.$api.deleteGoods(row.id);
          // console.log(res);
          if (res.success) {
            // 成功提示
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            // 刷新数据
            this.getData();
          }
        })
        .catch(() => {});
    },

    // pdf
   pdf(){
        this.$bus.$emit('pdf')
      }

  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  //   justify-content: space-between;
  align-items: center;

  ::v-deep .el-input {
    width: 500px;
  }

  ::v-deep .el-button {
    margin-left: 20px;
    font-size: 16px;
  }
}

.toolbar {
  display: flex;
  width: 500px;
  margin: 10px auto;
  justify-content: space-between;
  align-items: center;
}

main {
  margin: 15px 0;

  ::v-deep .el-button--mini {
    font-size: 15px;
  }
}
</style>
