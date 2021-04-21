<template>
  <div class="bar">
    <div class="select">
      <span @click="getDay" :class="isActive === 0 ? 'current' : ''">日</span>
      <span @click="getMonth" :class="isActive === 1 ? 'current' : ''">月</span>
    </div>
    <div class="charts">
      <ve-histogram :extend="histogramExt"></ve-histogram>
      <ve-histogram
        :data="barData"
        :extend="chartExtend1"
        :colors="colors"
      ></ve-histogram>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      colors: ['#0D5AEC', '#F8B514', '#2C71ED', '#E7E674', '#BE54F4'],
      barData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '05-22', 访问用户: 32371 },
          { 日期: '05-23', 访问用户: 12328 },
          { 日期: '05-24', 访问用户: 62381 },
          { 日期: '05-25', 访问用户: 93381 },
          { 日期: '05-26', 访问用户: 52381 },
          { 日期: '05-27', 访问用户: 93281 },
          { 日期: '05-28', 访问用户: 45451 },
          { 日期: '05-29', 访问用户: 45881 },
          { 日期: '05-30', 访问用户: 67381 }
        ]
      },
      chartExtend1: {
        series: {
          smooth: false
        },
        grid: [{ bottom: '5px' }],

        xAxis: {
          show: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00A8FF'
            }
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#00A8FF'
            }
          }
        },
        legend: {
          top: 10,
          bottom: 10,
          right: 0,
          textStyle: {
            color: '#00A8FF',
            opacity: 0.5
          }
        }
      },
      histogramExt: {
        legend: {
          // 图例组件
          data: ['可用数据', '不可用数据'], // 图例组件数据
          right: '0', // 图例组件离容器右侧的距离
          textStyle: {
            // 图例的公用文本样式
            color: '#4D6390'
          }
        },
        grid: {
          // 直角坐标系内绘图网格(折线图，柱状图，散点图（气泡图）)
          left: '0' // grid 组件离容器左侧的距离
        },
        xAxis: {
          type: 'category',
          data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点'],
          axisLine: {
            // 坐标轴轴线相关设置
            show: true, // 是否显示坐标轴轴线
            lineStyle: {
              color: '#00A8FF' // 坐标轴线线的颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false }, // 是否显示分隔线
          axisLine: {
            // 坐标轴轴线相关设置
            lineStyle: {
              color: 'rgba(0, 168, 255,.3)' // 坐标轴线线的颜色
            }
          }
        },
        series: [
          {
            name: '可用数据',
            type: 'bar',
            data: [320, 302, 301, 334, 390, 330, 320],
            itemStyle: {
              color: '#0D5AEC'
            }
          },
          // 多系列柱状图
          {
            name: '不可用数据',
            type: 'bar',
            data: [150, 212, 201, 154, 190, 330, 410],
            itemStyle: {
              color: '#F8B514'
            }
          }
        ]
      }
    }
  },
  methods: {
    getMonth() {
      this.isActive = 1
      this.barData.rows = [
        { 日期: '05-22', 访问用户: 234 },
        { 日期: '05-23', 访问用户: 123 },
        { 日期: '05-24', 访问用户: 678 },
        { 日期: '05-25', 访问用户: 456 },
        { 日期: '05-26', 访问用户: 411 },
        { 日期: '05-27', 访问用户: 862 },
        { 日期: '05-28', 访问用户: 567 },
        { 日期: '05-29', 访问用户: 911 },
        { 日期: '05-30', 访问用户: 112 }
      ]
    },
    getDay() {
      this.isActive = 0
      this.barData.rows = [
        { 日期: '05-22', 访问用户: 32371 },
        { 日期: '05-23', 访问用户: 12328 },
        { 日期: '05-24', 访问用户: 62381 },
        { 日期: '05-25', 访问用户: 93381 },
        { 日期: '05-26', 访问用户: 52381 },
        { 日期: '05-27', 访问用户: 93281 },
        { 日期: '05-28', 访问用户: 45451 },
        { 日期: '05-29', 访问用户: 45881 },
        { 日期: '05-30', 访问用户: 67381 }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.bar {
  width: 750px;
  margin: 0 auto;
}
.select {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
}
.select span {
  width: 35px;
  height: 20px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border: 1px solid #00a5fb;
  color: #00a5fb;
  font-family: Adobe Heiti Std;
  cursor: pointer;
}
.current {
  background: #00a5fb;
  color: #000 !important;
}
</style>
