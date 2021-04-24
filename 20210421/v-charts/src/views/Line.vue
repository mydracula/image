<template>
  <div class="home">
    <div class="select">
      <span @click="getDay" :class="isActive === 0 ? 'current' : ''">日</span>
      <span @click="getMonth" :class="isActive === 1 ? 'current' : ''">月</span>
    </div>
    <ve-line
      height="200px"
      width="100%"
      :extend="lineExt"
      :after-set-option="getChart"
    ></ve-line>
    <ve-line
      :data="chartData"
      :settings="chartSettings"
      :extend="chartExtend"
      :colors="colors"
    ></ve-line>
  </div>
</template>

<script>
import { gradientTwo } from '../utils/formatting'
export default {
  data() {
    return {
      isActive: 0,
      Echart: {},
      lineExt: {
        color: ['#4FC3E9', '#35cec9'], // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。
        grid: {
          //设置图标距离四周的距离
          x: 10,
          y: 10,
          x2: 30,
          y2: 10,
          containLabel: true
        },
        xAxis: {
          type: 'category', // { value: '数值轴', category: '类目轴', time: '时间轴', log: '对数轴' }
          boundaryGap: false, // 是否从原点开始折线
          axisTick: {
            show: false // 是否显示刻度
          },
          splitLine: { show: false }, // 是否显示分隔线
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
          position: 'left', // y 轴的位置
          axisTick: {
            show: true // 是否显示刻度
          },
          splitLine: { show: false }, // 是否显示分隔线
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 168, 255,.3)' // 坐标轴线线的颜色
            }
          }
        },
        series: [
          {
            type: 'line', // 折线类型
            symbol: 'none', // 去掉折线上的小圆点
            areaStyle: {
              // 区域填充样式
              color: gradientTwo('#02BFF1', '#917FFF') // 引入的渐变方法
            }
          }
        ]
      },
      chartData: {
        columns: ['时间', '人口', '房屋', '车辆', '企业', '设备'],
        rows: [
          {
            时间: '0',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '1',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '2',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '3',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '4',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '5',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '6',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '7',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '8',
            人口: 100,
            房屋: 300,
            车辆: 15,
            企业: 18,
            设备: 150
          },
          {
            时间: '9',
            人口: 500,
            房屋: 300,
            车辆: 115,
            企业: 180,
            设备: 150
          },
          {
            时间: '10',
            人口: 200,
            房屋: 310,
            车辆: 15,
            企业: 180,
            设备: 50
          },
          {
            时间: '11',
            人口: 200,
            房屋: 400,
            车辆: 95,
            企业: 18,
            设备: 50
          },
          {
            时间: '12',
            人口: 120,
            房屋: 100,
            车辆: 80,
            企业: 18,
            设备: 250
          }
        ]
      },
      chartExtend: {
        series: {
          symbol: 'circle',
          smooth: false
        },

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
          top: 20,
          textStyle: {
            color: '#00A8FF',
            opacity: 0.5
          }
        }
      },
      chartSettings: {},
      colors: ['#3DABF6', '#64BF86', '#2C71ED', '#E7E674', '#BE54F4']
    }
  },
  created() {
    this.get_zk_month_newHttp()
  },
  methods: {
    get_zk_month_newHttp() {
      let res = [
        { name: '0点', value: 500 },
        { name: '2点', value: 844 },
        { name: '4点', value: 743 },
        { name: '6点', value: 782 },
        { name: '8点', value: 888 },
        { name: '10点', value: 999 },
        { name: '12点', value: 1100 }
      ]
      let zk_nameArr = [],
        zk_valueArr = []
      for (let i of res) {
        zk_nameArr.push(i.name)
        zk_valueArr.push(i.value)
      }
      this.lineExt.xAxis.data = zk_nameArr
      this.lineExt.series[0].data = zk_valueArr
    },
    getChart(data) {
      this.Echart = data
    },
    getMonth() {
      this.isActive = 1
      let newOption = this.Echart.getOption()
      newOption.series[0].data = [100, 144, 243, 382, 888, 699, 900]
      this.Echart.setOption(newOption, true)
    },
    getDay() {
      this.isActive = 0
      let newOption = this.Echart.getOption()
      newOption.series[0].data = [500, 844, 743, 782, 888, 999, 1100]
      this.Echart.setOption(newOption, true)
    }
  }
}
</script>

<style scoped lang="less">
.home {
  width: 750px;
  margin: 0 auto;
}
.select {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  position: relative;
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
