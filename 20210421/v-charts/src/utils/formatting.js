import echarts from 'echarts'

// echarts渐变
export function gradient(s) {
  return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    { offset: 1, color: s },
    { offset: 0, color: hexToRGBA(s) }
  ])
}
export function gradientTwo(s1, s2) {
  return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    { offset: 1, color: s1 },
    { offset: 0, color: s2 }
  ])
}
