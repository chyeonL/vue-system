<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    :action="url"
    :on-success="handleSuccess"
    :file-list="fileList"
    :auto-upload="false"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
      >上传到服务器</el-button
    >
  </el-upload>
</template>

<script>
export default {
    name:'upload',
    data() {
      return {
        fileList: [],
        url:`http://localhost:80/api/upload`
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
    //   上传成功
      handleSuccess(response, file, fileList){
        console.log(response, file, fileList);
        let imgUrl = 'http://localhost:80/'+response.url.slice(7)
        // console.log(imgUrl);
        this.$message({
          showClose: true,
          message: '图片上传成功',
          type: 'success'
        });
        this.$bus.$emit('getImgURL',imgUrl)
      }
    }
};
</script>

<style></style>
