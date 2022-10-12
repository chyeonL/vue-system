<template>
  <div class="tree">
    <!-- 
        load 加载树节点的方法
        lazy 懒加载
        accordion 手风琴，同时只展开一个大的类目
     -->
    <el-tree
      :props="props"
      :load="loadNode"
      lazy
      accordion
      @node-click="getCategory"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "Tree",
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    // 加载 类目
    async loadNode(node, resolve) {
      // console.log("3232", node);

      if (node.level === 0) {    // 打开弹窗自动进入此逻辑
        // 发请求获取目录，渲染树形结构
        await this.$api.getItemCategoryById().then((res) => {
            //   console.log(res);
            if (res.code == 200) return resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            return resolve([]); //  没有数据返回空数组
          });
      }
      
      if (node.level >= 1) {    // 点击目录进入
        await this.$api .getItemCategoryById({ id: node.data.cid }).then((res) => {
            if (res.code == 200) return resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            return resolve([]);
          });
      }

      //  如果是叶子节点，那就停止加载的动画 、不显示向下的箭头
      if (node.childNodes.length < 1) {
        node.loading = false;
        node.isLeaf = true;
      }
    },

    getCategory(data, node, ele) {
      // console.log(data,node,ele);
      // console.log(data);
      this.$bus.$emit("getCategory", data);
    },
  },
};
</script>

<style></style>
