<template>
  <el-button type="success" class="txt" @click="saveAsTXT"
    >导出为txt文件</el-button
  >
</template>

<script>
import { saveAs } from "file-saver";
export default {
  name: "TXT",
  props: ["txtHeadTitle", "name", "txtData"],
  methods: {
    // 导出txt
    saveAsTXT() {
      const { txtHeadTitle, name, txtData } = this.$props;
      let data = [];
      txtData.map((v) => {
        let str = Object.values(v).join("  ") + "\n";
        data.push(str);
      });
      data.unshift(txtHeadTitle + "\n");
      let str = new Blob(data, { type: "text/plain;charset=utf-8" });
      // 注意：这里要手动写上文件的后缀名
      saveAs(str, `${name}.txt`);
    },
  },
};
</script>
