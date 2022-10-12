<template>
  <div class="chart" ref="chart" :style='width'></div>
</template>

<script>
export default {
  name: "Chart",
  props: ["options"],
  mounted() {
    // console.log(this.$props);
    const { option, w, h } = this.$props.options;
    var myChart = this.$echarts.init(this.$refs.chart, null, {
      width: w,
      height: h,
    });
    myChart.setOption(option);
  },
  computed:{
    width(){
        // console.log('width:'+this.$props.options.w);
        return 'width:'+this.$props.options.w
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  width: 500px;
  height: 350px;
  background-color: #fff;
  border-radius: 20px;
}
</style>
