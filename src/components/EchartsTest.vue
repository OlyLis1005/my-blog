<template>
  <div class="echartsClassName" id="echartsId" :style="{height: height,width: width}" ref="myEchart"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: {
      echartsClassName: {
        type: String,
        default: 'echarts-class-name'
      },
      echartsId: {
        type: String,
        default: 'my_echarts'
      },
      width: {
        type: String,
        default: '500px'
      },
      height: {
        type: String,
        default: '500px'
      },
      option: {
        type: Object,
        default: function () {
          return {
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
              data: ['销量']
            },
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          }
        }
      }
    },
    name: "echarts-test",
    mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null;
    },
    data() {
      return {
        chart: null
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart);
        // 把配置和数据放这里
        this.chart.setOption(this.option);
        this.chart.on('click', parms => {
          console.log(parms);
        })
      }
    }
  }
</script>

<style scoped>

</style>
