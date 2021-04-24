<template>
  <div class="charts">
    <ve-pie height="290px" width="100%" :extend="pieExt2"></ve-pie>
    <ve-pie :extend="chartExtendPie" :colors="colors"></ve-pie>
    <ve-pie :data="pieData"></ve-pie>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['#3DABF6', '#64BF86', '#2C71ED', '#E7E674', '#BE54F4'],
      pieExt2: {
        series: {
          label: {
            position: 'outside',
            formatter: ['{a|{b}}', '{c|{c}}'].join('\n'),
            backgroundColor: 'auto', //圆点颜色，auto：映射的系列色
            // height,width,lineHeight必须为0
            height: 0,
            width: 0,
            lineHeight: 0,
            // radius和padding为圆点大小，圆点半径为几radius和padding各项数值就为几如：圆点半径为1
            // borderRadius: 4,
            // padding: [4, -4, 4, -4],
            borderRadius: 2.5,
            padding: [2.5, -2.5, 2.5, -2.5],
            color: '#315af0',
            rich: {
              // 自定义富文本样式
              a: {
                padding: [0, 7, 0, 7]
              },
              c: {
                padding: [0, 10, 30, 10]
              }
            }
          },
          labelLine: {
            // 标签的视觉引导线配置
            show: true, // 是否显示视觉引导线。
            length: 10, // 视觉引导线第一段的长度
            length2: 20, // 视觉引导项第二段的长度
            lineStyle: {
              color: '#ccc' // 线的颜色
            }
          },
          data: [
            {
              name: '市监局',
              value: 122
            },
            {
              name: '计生系统',
              value: 232
            },
            {
              name: '网格采集',
              value: 200
            },
            {
              name: '公安局',
              value: 150
            },
            {
              name: '居委会',
              value: 167
            },
            {
              name: '物业',
              value: 167
            }
          ],
          radius: ['0%', '55%'], // 饼图的半径
          center: ['50%', '50%'], // 饼图的中心坐标 相当于调位置
          itemStyle: {
            borderWidth: 0,
            color: function(params) {
              //自定义颜色
              var colorList = [
                '#C453F1',
                '#E9712A',
                '#54BF88',
                '#0770EA',
                '#00B8FF',
                'rgb(213,214,119)'
              ]
              return colorList[params.dataIndex]
            }
          }
        }
      },
      chartExtendPie: {
        series: {
          name: '面积模式',
          type: 'pie',
          radius: [20, 100],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          grid: [{ left: '10px', right: '10px' }],
          label: {
            alignTo: 'labelLine',
            formatter: '{a|{b}}\n{c|{d}%}',
            rich: {
              a: {
                color: '#fff',
                fontSize: 14
              },
              c: {
                fontSize: 16,
                fontWeight: 'bold',
                padding: 5
              }
            }
          },
          data: [
            { value: 30, name: '设备' },
            { value: 28, name: '企业' },
            { value: 26, name: '房屋' },
            { value: 24, name: '车辆' },
            { value: 22, name: '人口' },
            { value: 20, name: '学生' },
            { value: 18, name: '其他' },
            { value: 16, name: '其他1' }
          ]
        }
      },
      pieData: {
        columns: ['name', 'value'],
        rows: [
          { name: '设备', value: 30 },
          { name: '企业', value: 28 }
        ]
      }
    }
  }
}
</script>
