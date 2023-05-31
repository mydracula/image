'use strict'

const cheerio = require('cheerio')
const axios = require('axios')

// 企业id
const corpid = 'wad61'
// 应用secret
const corpsecret = 'LK42x-aGfXkk'
// 应用id
const agentid = '1000002'
const Local = 'shanxi/yuncheng'
const Txapi = 'ae4327292da'
const LoveDay = '2022-09-17'
const BirthDay = '2000-09-23'
const WeatherUrl = 'https://tianqi.moji.com/weather/china/' + Local
const OneUrl = 'http://wufazhuce.com/'

const axiosPost = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const axiosGet = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 计算东8区时区时间
function getTime() {
  const zoneOffset = 8
  const offset = new Date().getTimezoneOffset() * 60 * 1000
  const nowDate = new Date().getTime()
  return new Date(nowDate + offset + zoneOffset * 60 * 60 * 1000)
}
// 计算在一起多久
function dateDiff(startDate = LoveDay) {
  const sDate = Date.parse(startDate)
  const eDate = Date.now()
  if (sDate > eDate) {
    return 0
  }
  if (sDate === eDate) {
    return 1
  }
  const days = (eDate - sDate) / (1 * 24 * 60 * 60 * 1000)
  return '💖\xa0今天是我们在一起的第\xa0' + days.toFixed() + '\xa0天'
}
//计算还有多少天过生日
function getDaysToBirthday(birthDay = BirthDay) {
  const babyYear = new Date(birthDay).getFullYear()
  const now = getTime()
  now.setFullYear(babyYear)
  const birthday = new Date(babyYear, new Date(birthDay).getMonth(), new Date(birthDay).getDate())
  const birthdayVal = birthday.setHours(0, 0, 0, 0)
  const nowVal = now.setHours(0, 0, 0, 0)

  if (nowVal === birthdayVal) {
    return '🎂\xa0今天宝宝生日快乐开心每一天啦'
  } else if (nowVal > birthdayVal) {
    birthday.setFullYear(now.getFullYear() + 1)
    const days = (birthday.getTime() - nowVal) / (24 * 60 * 60 * 1000)
    return '🌟\xa0距离宝宝的生日还有\xa0' + Math.ceil(days) + '\xa0天'
  } else {
    const days = (birthday - now) / (24 * 60 * 60 * 1000)
    return '🎈\xa0距离宝宝的生日还有\xa0' + Math.ceil(days) + '\xa0天'
  }
}
// 计算今天日期
function getToday() {
  return new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 10).replace(/-/g, ' / ')
}
// 计算今天星期几
function getDay() {
  return '星期' + '日一二三四五六'.charAt(getTime().getDay())
}
// 计算说什么好
function getWelcomTip() {
  const time = getTime().getHours()
  const enu = {
    0: '凌晨好~~',
    6: '早上好~~',
    9: '上午好~~',
    12: '中午好~~',
    13: '下午好~~',
    18: '晚上好~~'
  }
  const list = [
    '(￣▽￣)~*',
    '(～￣▽￣)～',
    '︿(￣︶￣)︿',
    '~(￣▽￣)~*',
    '(oﾟ▽ﾟ)o',
    'ヾ(✿ﾟ▽ﾟ)ノ',
    '٩(๑❛ᴗ❛๑)۶',
    'ヾ(◍°∇°◍)ﾉﾞ',
    'ヾ(๑╹◡╹)ﾉ',
    '(๑´ㅂ`๑)',
    '(*´ﾟ∀ﾟ｀)ﾉ',
    '(´▽`)ﾉ',
    'ヾ(●´∀｀●)',
    '(｡◕ˇ∀ˇ◕)',
    '(≖ᴗ≖)✧',
    '(◕ᴗ◕✿)',
    '(❁´◡`❁)*✲ﾟ*',
    '(๑¯∀¯๑)',
    '(*´・ｖ・)',
    '(づ｡◕ᴗᴗ◕｡)づ',
    'o(*￣▽￣*)o',
    '(｀・ω・´)',
    '( • ̀ω•́ )✧',
    'ヾ(=･ω･=)o',
    '(￣３￣)a',
    '(灬°ω°灬)',
    'ヾ(•ω•`。)',
    '｡◕ᴗ◕｡'
  ]
  return (
    enu[
      Object.keys(enu)
        .sort((a, b) => Math.abs(time - a) - Math.abs(time - b))
        .at(0)
    ] + list[Math.floor(Math.random() * list.length)]
  )
}
// 计算天气
function getWeatherIcon(text) {
  const weatherIconList = ['☀️', '☁️', '⛅️', '☃️', '⛈️', '🏜️', '🏜️', '🌫️', '🌫️', '🌪️', '🌧️']
  const weatherType = ['晴', '阴', '云', '雪', '雷', '沙', '尘', '雾', '霾', '风', '雨']
  return weatherIconList[weatherType.findIndex((i) => text.slice(0, 5).indexOf(i) >= 0)] || '🌈'
}
function getAstro(birthDay = BirthDay) {
  const date = new Date(birthDay)
  const m = date.getMonth() + 1
  const d = date.getDate()
  const list = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']
  return list.at(m - (d < '102223444433'.charAt(m - 1) - -19))
}

// 获取企业微信Token
async function getToken() {
  const params = {
    corpid,
    corpsecret
  }
  const res = await axiosGet('https://qyapi.weixin.qq.com/cgi-bin/gettoken', params)
  return res
}
// 获取ONE数据
async function getOneData() {
  const res = await axiosGet(OneUrl)
  let $ = cheerio.load(res)
  let selectItem = $('#carousel-one .carousel-inner .item')
  let todayOne = selectItem[0]
  let todayOneData = {
    imgUrl: $(todayOne).find('.fp-one-imagen').attr('src'),
    type: $(todayOne)
      .find('.fp-one-imagen-footer')
      .text()
      .replace(/(^\s*)|(\s*$)/g, ''),
    text: $(todayOne)
      .find('.fp-one-cita')
      .text()
      .replace(/(^\s*)|(\s*$)/g, '')
  }

  return todayOneData
}

// 获取天气数据
async function getWeatherData() {
  const space = '\xa0\xa0'
  const res = await axiosGet(WeatherUrl)
  const weatherData = {}
  const $ = cheerio.load(res)
  $('.wea_about.clearfix').each(function (i, elem) {
    weatherData.weatherHumidity = $(elem).find('span').text()
  })

  $('.wea_tips').each(function (i, elem) {
    weatherData.weatherTip = $(elem).find('em').text()
  })
  $('.forecast .days')
    .first()
    .each(function (i, elem) {
      const SingleDay = $(elem).find('li')
      const WeatherText = $(SingleDay[1])
        .text()
        .replace(/(^\s*)|(\s*$)/g, '')
      const Temperature = $(SingleDay[2])
        .text()
        .replace(/(^\s*)|(\s*$)/g, '')
      const WindDirection =
        $(SingleDay[3])
          .find('em')
          .text()
          .replace(/(^\s*)|(\s*$)/g, '') +
        $(SingleDay[3])
          .find('b')
          .text()
          .replace(/(^\s*)|(\s*$)/g, '')
      weatherData.weatherDetailed = WeatherText + space + Temperature + space + weatherData.weatherHumidity + space + WindDirection
    })

  return weatherData
}
// 获取云音乐热评
async function getHotreview() {
  const { newslist } = await axiosGet(`http://api.tianapi.com/hotreview/index?key=${Txapi}`)
  return newslist?.at(0)?.content + '\xa0\xa0\xa0——\xa0\xa0\xa0' + newslist?.at(0)?.source || '获取云音乐热评数据出错'
}
// 获取星座今日运势
async function getStar() {
  const { newslist } = await axiosGet(`http://api.tianapi.com/star/index?key=${Txapi}&astro=${getAstro()}`)
  return newslist?.at(-1)?.content || '获取星座今日概述数据出错'
}
// 获取彩虹屁
async function getCaihongpi() {
  const res = await axiosGet(`https://api.shadiao.pro/chp`)
  return res.data.text || '拜托拜托，你就嫁给我吧。我好喜欢你，你是宇宙最可爱的小女孩！'
}

// 聚合
async function templateMessageSend() {
  const todayOneData = await getOneData()
  const { weatherDetailed, weatherTip } = await getWeatherData()
  const caihongpi = await getCaihongpi()
  const hotrevieh = await getHotreview()
  const star = await getStar()
  const weatherIcon = getWeatherIcon(weatherDetailed)
  const date = getToday() + '\xa0' + getDay()
  const welcomTip = getWelcomTip()
  const description =
    welcomTip +
    '\n\n' +
    weatherIcon +
    '\xa0' +
    weatherDetailed +
    '\n' +
    '👔\xa0' +
    weatherTip +
    '\n' +
    '🌈\xa0' +
    todayOneData.text +
    '\n\n' +
    dateDiff() +
    '\n' +
    getDaysToBirthday() +
    '\n\n' +
    '💨\xa0' +
    caihongpi

  const fullDescription =
    weatherIcon + '\xa0' + weatherDetailed + '\n' + '👔\xa0' + weatherTip + '\n' + '🌈\xa0' + todayOneData.text + '\n\n' + dateDiff() + '\n' + getDaysToBirthday() + '\n\n' + '💨\xa0' + caihongpi

  let URL = `https://static-4ca2989f-549c-446b-902c-ce5578feb09a.bspapp.com/#/detail/${encodeURIComponent(welcomTip)}/${encodeURIComponent(date)}/${encodeURIComponent(fullDescription)}`

  const articles = {
    title: date,
    description,
    url: URL,
    picurl: todayOneData.imgUrl
  }
  const { errcode, access_token } = await getToken()
  const params = {
    touser: '17756e37cdabff3317fb27d4f0e47feb',
    msgtype: 'news',
    agentid,
    news: {
      articles
    },
    enable_id_trans: 0,
    enable_duplicate_check: 0,
    duplicate_check_interval: 1800
  }

  const res = await axiosPost(`https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=${access_token}`, params)
  console.log(URL, res, '已经执行')
}

exports.main_handler = async (event, context, callback) => {
  await templateMessageSend()
}
