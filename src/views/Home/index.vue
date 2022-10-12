<template>
  <div id="home">
    <Chart :options="sales" class="chart" />
    <Chart :options="rules9" class="chart" />
    <Chart :options="orders" class="chart" />
  </div>
</template>

<script>
import Chart from "@/components/Chart";

export default {
  name: "Home",
  components: { Chart },
  data() {
    return {
      // 类目
      rules9: {
        option: {
          backgroundColor: "#2c343c",
          title: {
            text: "2022年上半年最热销类目占比",
            left: "center",
            top: 20,
            textStyle: {
              color: "#ccc",
            },
          },
          tooltip: {
            trigger: "item",
          },
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1],
            },
          },
          series: [
            {
              type: "pie",
              radius: "60%",
              center: ["50%", "50%"],
              data: [
                { value: 305, name: "数码/电器" },
                { value: 530, name: "日用" },
                { value: 474, name: "娱乐" },
                { value: 335, name: "文具" },
                { value: 560, name: "衣服" },
                { value: 400, name: "其他" },
                { value: 270, name: "鞋靴" },
              ].sort(function (a, b) {
                return a.value - b.value;
              }),
              roseType: "radius",
              label: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              labelLine: {
                lineStyle: {
                  color: "rgba(255, 255, 255, 0.3)",
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
              itemStyle: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              animationType: "scale",
              animationEasing: "elasticOut",
              animationDelay: function (idx) {
                return Math.random() * 200;
              },
            },
          ],
        },
        w: "400px",
        h: "350px",
      },

      // 2022年上半年店铺营业额
      sales: {
        option: {
          color: ["#EE6666",'#5470c6',"#FFD04B"],
          tooltip: {},
          legend: {
            itemWidth: 15,
            right: 40,
            top: 35,
          },
          grid: {
            top: 70,
            bottom: 50,
            left: 100,
          },
          title: {
            text: "2022年上半年店铺营业额同期对比",
            top: 15,
            left: 300,
          },
          xAxis: [
            {
              data: ["1月", "2月", "3月", "4月", "5月", "6月"],
              axisLabel: {
                interval: 0,

                rotate: 0,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "2022年",
              type: "line",
              data: [42000, 53200, 45980, 45700, 49630, 57030],
            },
            {
              name: "2021年",
              type: "line",
              data: [38640, 46200, 47980, 45000, 47050, 56000],
            },
            {
              type: "bar",
              data: [42000, 53200, 45980, 45700, 49630, 57030],
            },
          ],
        },
        w: "900px",
        h: "350px",
      },

      // 9月各类目销售额
      orders: {
        option: {
          title: {
            text: "2022年上半年交易成功订单数",
            top: 10,
            left: 100,
          },
          tooltip: {},
          legend: {
            itemWidth: 15,
            right: 40,
            top: 20,
          },
          grid:{
            left:50,
            top:80,
            bottom:40
          },
          xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
            axisLabel: {
              interval: 0,
              rotate: 0,
            },
          },
          yAxis: {},
          series: [
            {
              name: "数量",
              type: "bar",
              data: [1400, 1870, 1545, 1760, 1590, 2084],
            },
          ],
        },
        w: "450px",
        h: "350px",
      },
    };
  },
};
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.chart {
  margin: 30px 0;
}
</style>
