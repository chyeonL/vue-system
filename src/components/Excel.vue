<template>
  <download-excel
    class="export-excel-wrapper"
    :data="formData"
    :fields="field"
    :header="formTitle"
    :name='title'
  >
    <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
    <el-button type="success">导出为excel表格</el-button>
  </download-excel>
</template>

<script>
export default ({
  name: "Excel",
  props: {
    formTitle:{
        type:String,
        default:'后台管理系统表格'
    },
    field:{
        type:Object,
    },
    formData:{
        type:Array,
    },
    name:{
        type:String,
        default:'00'
    }
  },
  computed: {
    title(){
        return this.name+'.xls'
    }
  },
  mounted() {
    // console.log(this.name,this.formData,this.field,this.formTitle);
  },
});
</script>
