---倒卖死妈，没得反驳。
function update()
  if gg.PACKAGE~="com.escape.final"  then
  gx = gg.alert("12月30日更新：\n修复一些bug，优化稳定性\n此版本优化较多，强烈建议更新。\n","更新","不更新")
  if gx == 1 then gg.copyText("https://jbb.lanzous.com/v61") gg.alert("链接已经复制到剪切板了\n下载密码jbjb") 
os.exit("链接已复制到剪切板，请去浏览器下载更新。密码为jbjb")end
  end
  end
---update()
  gg.clearList() gg.clearResults() gg.setRanges(8) gg.searchNumber("15000",16) result = gg.getResults(1) fanwei = result[1].address gg.clearResults()
  function search(...) local sousuo1 = {...} gg.searchNumber(sousuo1[1],sousuo1[2],false, gg.SIGN_EQUAL,0x1000000000,fanwei) end
  ---防闪By乃和
  function black(x)
  gg.toast(x)
  end
  function write( fileName, content ) local f = assert( io.open( fileName, 'w'))   f:write( content )     f:close()  end
  function awrite( fileName, content ) local f = assert( io.open( fileName, 'a'))   f:write( content )     f:close()  end
  function read( fileName )    local f = assert( io.open(fileName, 'r'))    local content = f:read("*all")   f:close()   return content  end
  function isg()
  if gg.PACKAGE=="com.escape.last" or  gg.PACKAGE=="com.escape.final" or gg.PACKAGE=="com.changan.end" or gg.PACKAGE=="com.escape.end" then
  return true
  else
  return false
  end
  end
  --长安
  --部分功能源码来自：一方、东街猫儿、仙圣、小绿、冒泡、宇豪、乃和、琛、绝代、孜然、傲寒
  --感谢以上各位前辈
  --我没有加密，你可以很容易拿到此源码
  --献爱心蛮累的，不要搞我。


  ---代码优化By久
  ---gg.alert("测试更新中\n用不了是正常现象 耐心等待")
  
 ---判断文件是否存在
function panduan(rec)  file,err=io.open(rec)  if file==nil then return false  else return true end end
  function check()
  if gg.PACKAGE=="com.escape.last" or  gg.PACKAGE=="com.changan.end" or gg.PACKAGE=="com.escape.end" then
  gg.toast("内置客户端模式")
  else
  A=os.date()    B=string.match(A,"%d%d" )    C=string.match(A,"%d%d%d%d+")    D=string.match(C,"(%d%d?)")    E=string.match(A,"%d%d:")    F=string.match(E,"%d%d?")      G=os.date("%m")    H=F-1    Q=D.."."..G.."."..B.."."..F    LSQ=D.."."..G.."."..B.."."..H   Y=io.open("/storage/emulated/0/tencent/msflogs/com/tencent/mobileqq/com.tencent.mobileqq."..Q..".log","r"):read("*a")  
  Y1=string.find(Y,"1105648195")  ---付费群
  Y2=string.find(Y,"892732347")  ---宝宝巴士
  Y3=string.find(Y,"666399318")  ---朵朵花园
  Y4=string.find(Y,"1036937585")  ---金太阳幼儿园
  Y5=string.find(Y,"651091756")  ---向阳幼儿园
  Y6=string.find(Y,"1080745934")  ---海绵宝宝
  Y7=string.find(Y,"178487155")  ---放弃规则
  if panduan("/sdcard/lock.txt")== true or Y1~=nil or Y2~=nil or Y3~=nil or Y4~=nil or Y5~=nil or Y6~=nil or Y7~=nil then 
  --gg.alert("兼容模式启动\n如需体验BGM等细节请使用内置客户端")
  else 
  gg.copyText("http://49.234.215.120:88")
  gg.alert("你没有使用5.0客户端\n也没有进群\n禁止使用\n群号在公告网页 已复制到剪切板\n如果是误判，保证qq在后台运行然后多启动几次\n或者重启手机")   
  os.exit()
  end
  end
  end
  function mdownload(http,dir)
  if isg() == true then
  gg.alert("即将开始下载前置资源："..http.."\n请耐心等待\n\n可能需要加载好长好长时间！多等一会")
  htp=gg.makeRequest(http).content
all=string.len(htp)
t=(all)/8000
y=(all)%8000
mb=all .. "字节"
for i=1,t do
if i==1 then
res=string.sub(htp, 1, 8000)
write(dir,res)
elseif i == t then
res=string.sub(htp, (i-1)*8000, i*8000+y)
awrite(dir,res)
gg.toast("下载完毕.路径在" .. dir .. "\n大小为" .. mb .. "")
else
res=string.sub(htp, (i-1)*8000, i*8000)
awrite(dir,res)
end
end
  end
  end
  function download(http,dir)
  gg.alert("即将开始下载前置资源："..http.."\n请耐心等待\n\n可能需要加载好长好长时间！多等一会")
htp=gg.makeRequest(http).content
all=string.len(htp)
t=(all)/8000
y=(all)%8000
mb=all .. "字节"
for i=1,t do
if i==1 then
res=string.sub(htp, 1, 8000)
write(dir,res)
elseif i == t then
res=string.sub(htp, (i-1)*8000, i*8000+y)
awrite(dir,res)
gg.toast("下载完毕.路径在" .. dir .. "\n大小为" .. mb .. "")
else
res=string.sub(htp, (i-1)*8000, i*8000)
awrite(dir,res)
end
end
end
  function pmusic(x)
  if isg() == true then
      gg.playMusic(x)
    end
  end
  function dbt()
if isg() == true then
gg.toast("加载中")
  mdownload( "http://49.234.215.120:88/bt2.mp3","/sdcard/bt2.mp3")
gg.toast("加载中")
mdownload( "http://49.234.215.120:88/bt3.mp3","/sdcard/bt3.mp3")
gg.toast("加载中")
mdownload( "http://49.234.215.120:88/bt1.mp3","/sdcard/bt1.mp3")
end
end
  ---天照
  function md1()
  if isg() == true then
  if panduan("/sdcard/amtls.mp3") == true then
  pmusic("/sdcard/amtls.mp3")
  else 
  mdownload("http://49.234.215.120:88/amtls.mp3","/sdcard/amtls.mp3")
  pmusic("/sdcard/amtls.mp3")
  end
  end
  end
  ---问号
  function cnm()
  if isg() == true then
  if panduan("/sdcard/cnm.mp3") == true then
  pmusic("/sdcard/cnm.mp3")
  else 
  mdownload("http://49.234.215.120:88/cnm.mp3","/sdcard/cnm.mp3")
  pmusic("/sdcard/cnm.mp3")
  end
  end
  end
  ---飞雷神
  function md2()
  if isg() == true then
  if panduan("/sdcard/f.mp3") == true then
  else 
  mdownload("http://49.234.215.120:88/f.mp3","/sdcard/f.mp3")
  end
  end
  end
  md1() 
  function bt1()
  if isg() == true then
  if panduan("/sdcard/bt1.mp3") == true then
  pmusic("/sdcard/bt1.mp3")
  else 
  dbt()
  end
end
end
function bt2()
if isg() == true then
  if panduan("/sdcard/bt2.mp3") == true then
  pmusic("/sdcard/bt2.mp3")
  else 
  dbt()
  end
end
end
  bt2()
function bt3()
if isg() == true then
  if panduan("/sdcard/bt3.mp3") == true then
  pmusic("/sdcard/bt3.mp3")
  else 
  dbt()
  end
end
end
  function reload()
  download( "http://49.234.215.120:88/error.lua","/sdcard/error.lua")
  dofile("/sdcard/error.lua")
  end
  function zjd()
  if isg() == true then
  if panduan("/sdcard/zjd.mp3") == true then
  pmusic("/sdcard/zjd.mp3")
  else 
  mdownload( "http://49.234.215.120:88/zjd.mp3","/sdcard/zjd.mp3")
  pmusic("/sdcard/zjd.mp3")
  end
  end
  end
  ----互动后端
  function down()
  htp = http.get( "http://49.234.215.120/data/wxty/lua.lua")
      if htp ~= "0" then
      pmusic("/sdcard/skill1.mp3")
      black("感受痛苦")
      sleep(1200)
      zbbbb = String.Split(htp,";")
      pmusic("/sdcard/wxty.mp3")
      Teleport({zbbbb[1],zbbbb[2],zbbbb[3]})
      sleep(1300)
      stand(3) boom()
      sclj="http://49.234.215.120/data/wxty/1.php?&xg=0&wj=6&zh=wxty&mm=jbjb"
  local qdsc = gg.makeRequest(sclj).content
      end
  end
  ----用户系统
  function loadd()
  zc=gg.prompt({"账号","密码","昵称","QQ"},zc,{"text","text","text","text"})
  zhzc="http://49.234.215.120/function.php?zxbh=1&zh="..zc[1].."&mz=" .. zc[3] .. "&qq=" .. zc[4] .. "&mm="..zc[2]
  local zctij = gg.makeRequest(zhzc).content if zctij=="账号以存在"then gg.alert("账号已存在") loadd() end if zctij=="注册成功"then
  write("/sdcard/name.txt", zc[1])
  write("/sdcard/pswd.txt", zc[2])
  write("/sdcard/mz.txt", zc[3])
  write("/sdcard/qq.txt", zc[4])
  tjygljb="http://49.234.215.120/function.php?zxbh=2&zh="..zc[1].."&mm="..zc[2]
  local ti5 = gg.makeRequest(tjygljb).content
  gg.alert("注册成功") end if zctij=="缺少提交值"then gg.alert("请填写完整") loadd()
  end end 
  ----上传封装
  function upl(data)
  upload(read("/sdcard/name.txt"),read("/sdcard/pswd.txt"),data)
  end
function jiasuhf()
jiasu(1)
FX="home"
end
  function upload(usr,pswd,data)
  sclj="http://49.234.215.120/data/" .. usr .. "/1.php?&xg="..data.."&wj=6&zh=" .. usr .. "&mm=" .. pswd .. ""
  local qdsc = gg.makeRequest(sclj).content
  if qdsc=="写入成功" then
  else
  gg.alert("失败")
  end
  end
  FX = "home"
  function dmg()
  if panduan("/sdcard/dmg.txt") == true then
  if read("/sdcard/dmg.txt") ~= "5" then
  dmgg = read("/sdcard/dmg.txt") + 1
  write("/sdcard/dmg.txt",dmgg)
  if panduan("/sdcard/dmg.mp3") == true then
  pmusic("/sdcard/dmg.mp3")
  else 
  mdownload( "http://49.234.215.120:88/dmg.mp3","/sdcard/dmg.mp3")
  black("加载资源中")
 pmusic("/sdcard/dmg.mp3")
  end 
  end
  else
  write("/sdcard/dmg.txt","1")
  end
  end
  function readWrite(Search,Get,Type,Range,Name) gg.clearResults() gg.setRanges(Range) gg.setVisible(false) if Search[1][1]~=false then search(Search[1][1],0xFFFFFFFF,Search[1][4] or Type,gg.SIGN_EQUAL,Search[1][5] or 1,Search[1][6] or -1) end search(Search[1][2],Search[1][4] or Type,false,gg.SIGN_EQUAL,Search[1][5] or 1,Search[1][6] or -1) local count=gg.getResultCount() local result=gg.getResults(count) gg.clearResults() local data={} local base=Search[1][3] if (count > 0) then for i,v in ipairs(result) do v.isUseful=true end for k=2,#Search do local tmp={} local offset=Search[k][2] - base local num=Search[k][1] for i,v in ipairs(result) do tmp[#tmp+1]={} tmp[#tmp].address=v.address+offset tmp[#tmp].flags=Search[k][3] or Type end tmp=gg.getValues(tmp) for i,v in ipairs(tmp) do if v.flags==16 or v.flags==64 then values=tostring(v.value):sub(1,6) num=tostring(num):sub(1,6) else values=v.value end if tostring(values)~=tostring(num) then result[i].isUseful=false end end end for i,v in ipairs(result) do if (v.isUseful) then data[#data+1]=v.address end end if (#data > 0) then local t,t_={},{} local base=Search[1][3] for i=1,#data do for k,w in ipairs(Get) do offset=w[2] - base if w[1]==false then t_[#t_+1]={} t_[#t_].address=data[i]+offset t_[#t_].flags=Type th_=(th_) and th_+1 or 1 else t[#t+1]={} t[#t].address=data[i]+offset t[#t].flags=w[3] or Type t[#t].value=w[1] tg_=(tg_) and tg_+1 or 1 if (w[4]==true) then local item={} item[#item+1]=t[#t] item[#item].freeze=w[4] gg.addListItems(item) end end end end tg=(tg_) and "\n已修改"..tg_.."条数据" or "" th=(th_) and "\n已获取"..th_.."条数据" or "" gg.setValues(t) t_=gg.getValues(t_) gg.loadResults(t_) gg.toast("\n"..Name.."搜索成功！\n偏移到"..#data.."条数据"..tg..th) tg_,th_=nil,nil else gg.toast("\n"..Name.."开启失败",false) return false end else gg.toast(Name.."开启失败") return false end end
  --##木酥搜索
  local zera = {}  local zerb = {}  local zerc = {}  local zerd = {}  local zere = {}  local zerf = {}  local zerg = {}  local zerh = {}  local zeri = {}  local xyz = {}  local tt = {}  local tmp ={}  local resultCount = 0  local result = {}  p1 = 5000  p2 = 5000  pianyi1 = 56684  pianyi2 = 23220  zerb.address = gg.getValues({[1] = {address =gg.getRangesList('libBootloader.so')[1].start+0x1E711D0,flags = 32}})[1].value+3550372  zera.address = gg.getValues({[1] = {address =gg.getRangesList('libBootloader.so')[1].start+0x22C1210,flags = 32}})[1].value+21451920  zerf.address = gg.getValues({[1] = {address =gg.getRangesList('libBootloader.so')[1].start+0x22C1210,flags = 32}})[1].value  zerg.address=zerf.address-1000000000  zere.address=zera.address+6015920  zerd.address=zera.address+10359708  zerc.address=zera.address-58648  zerh.address=zera.address-9454292  zeri.address=zera.address-9414292--献祭下限
  A_Start = {} A_End = {}
  A_Start.address = zerg.address
  A_End.address =  zerc.address
function tgc()
  tmp={}
  tmp[1] = {}
  tmp[1].address = zerb.address + 11388
  tmp[1].flags = 4
  tmp[1].value = 2219120716
  tmp[1].freeze = false 
  gg.setValues(tmp)
  gg.addListItems(tmp)
  end
  --门
  men = {}
  for i = 1,22 do
  men[i] = {}
  men[i].address = zerc.address +( i - 1 )*4
  men[i].flags = 4
  end
  menmubiao = {}
  for i = 1,14 do
  menmubiao[i] = {}
  menmubiao[i].address = zerc.address + 24 + i
  menmubiao[i].flags = 1
  end
  menzuobiaoo = {}
  for i= 1,3 do
  menzuobiaoo[i] = {}
  menzuobiaoo[i].address = zerc.address - 44 + i*4
  menzuobiaoo[i].flags = 16
  end
  local XianShen_ShanYi = false
  local XianShen_XiHuo = true
  local fw = nil
  FX2 = nil
  FX = "home"
  local IDs = 0
  local resultCount = 0
  local result = {}
  local tmp = {}
  local data = {}
  local dengji = {}
  local energy = {}
  local xyz = {}
  local lazhu = {}
  local zer = {}
  local XianShen_Lzdz = {}
  local sdu = 1
  local Count = 0
  local pt1 = {}
  local dian = "off"
  local dianhuo = "off"
  local lazhu = "off"
  local zhahua = "off"
  local hua = "off"
  local X = {}
  local tp = {} 
  tt = {}
  write("/sdcard/kg.txt", "0") write("/sdcard/kg.txt", "0")if panduan("/sdcard/xj.txt") ~= true then write("/sdcard/xj.txt","6") end if panduan("/sdcard/runk") ~= true then write("/sdcard/runk","1") end if panduan("/sdcard/runh") ~= true then write("/sdcard/runh","0") end
  liangdu= {}
  liangdu[1] = {}
  liangdu[1].address = zera.address + 4
  liangdu[1].flags = 16
  tmp ={}
  resultCount = 0
  result = {}
  xyz ={}
  cdmap_yj = {}
  cdmap_yj[1] = {
    796,
    0.2,
    -0.3
  }
  cdmap_yj[2] = {
    1,
    0.8,
    -0.3
  }
  cdmap_cd = {}
  cdmap_cd[1] = {
    298.00839233398,
    413.13671875,
    -283.45837402644
  }
  cdmap_cd[2] = {
    298.00839233398,
    750,
    -283.45837402644
  }
  cdmap_cd[3] = {
    117.80199432373,
    1.0181401968,
    -1733.9892578125
  }
  cdmap_yy = {}
  cdmap_yy[1] = {
    314.92810058594,
    235.1559753418,
    162.17864990234
  }
  cdmap_yy[2] = {
    97.56925201416,
    174.57604980469,
    265.3330078125
  }
  cdmap_yy[3] = {
    -151.39393615723,
    112.16463470459,
    46.31144332886
  }
  cdmap_yy[4] = {
    -529.29986572266,
    8.66990280151,
    -213.8560333252
  }
  cdmap_yl = {}
  cdmap_yl[1] = {
    -32.09742736816,
    206.96907043457,
    0.02679648809
  }
  cdmap_yl[2] = {
    -4.87363386154,
    9.68434524536,
    506.74230957031
  }
  cdmap_xg = {}
  cdmap_xg[1] = {
    314.91091918945,
    173.49656677246,
    -783.53955078125
  }
  cdmap_xg[2] = {
    -478.84976196289,
    1573.01025390625,
    76.278465271
  }
  cdmap_xg[3] = {
    -813.96313476562,
    1547.04602050781,
    -506.09045410156
  }
  cdmap_mt = {}
  cdmap_mt[1] = {
    -84.72422790527,
    5047.2763671875,
    -842.01507568359
  }
  cdmap_mt[2] = {
    -339.77133178711,
    185.78332519531,
    404.22909545898
  }
  cdmap_mt[3] = {
    -416.30792236328,
    12.31269836426,
    410.81399536133
  }
  cdmap_jg = {}
  cdmap_jg[1] = {
    32.18392944336,
    347.24133300781,
    41.18384552002
  }
  cdmap_jg[2] = {
    -1.04423522949,
    195.06649780273,
    4.06247663498
  }
  cdmap_jg[3] = {
    68.92450714111,
    240.40475463867,
    -185.50691223145
  }
  cdmap_jg[4] = {
    -2.3683698177337646,
    37.12582778930664,
    -172.75494384765625
  }
  cdmap_jg[5] = {
    7009.41164399457,
    6921.25,
    9078.23612371826
  }
  cdmap_bfy = {}
  cdmap_bfy[1] = {
    -22.318044662475586,
    221.76121520996094,
    -362.0965576171875
  }
  cdmap_bfy[2] = {
    -504.72369384765625,
    7.738282680511475,
    -472.343017578125
  }
  cdmap_cszl = {}
  cdmap_cszl[1] = {
    194.7921295166,
    1552.53833007812,
    566.3759765625
  }
  cdmap_cszl[2] = {
    335.68902587891,
    1927.6708984375,
    99.81793212891
  }
  cdmap_cszl[3] = {
    254.16377258301,
    1878.54760742188,
    73.97454833984
  }
  cdmap_cszl[4] = {
    250.36479187012,
    1844.25329589844,
    -1.34167420864
  }
  cdmap_cszl[5] = {
    201.36094665527,
    1832.62463378906,
    56.0168762207
  }
  cdmap_cszl[6] = {
    321.23587036133,
    1962.60498046875,
    -21.15508079529
  }
  cdmap_cszl[7] = {
    713.50329589844,
    2548.65478515625,
    152.37353515625
  }
  cdmap_cszl[8] = {
    862.8026733398438,
    2692.793212890625,
    154.70008850097656
  }
  cdmap_cszl[9] = {
    129.14239501953,
    5499.90185546875,
    1277.72985839844
  }
  cdmap_cszl[10] = {
    -36.77297592163086,
    2435.26513671875,
    2214.6943359375
  }
  cdmap_cszl[11] = {
    8.84585189819,
    130,
    42.62521743774
  }
  cdmap_cszl[12] = {
    9.62896347046,
    20.34807777405,
    31.97480583191
  }
  cdmap_cszl[13] = {
    -21.38742637634,
    5.05461454391,
    39.82778549194
  }
  cdmap_cszl[14] = {
    -1.13085877895,
    0.6369894743,
    238.60090637207
  }
  --吸光翼
  -----无翼
  function laz(value, type)
    gg.clearResults()
    gg.searchNumber(value, type, false, gg.SIGN_EQUAL,zere.address,zerd.address)
  end
  function wyi()
      gg.clearResults()
      gg.setRanges(4)
      search("256", gg.TYPE_DWORD)
      local wxfks = gg.getResultCount()
      if wxfks ~= 0 then
        local wxf = gg.getResults(wxfks)
        local tmp = {}
        
            for _FORV_6_, _FORV_7_ in pairs(wxf) do
              tmp[#tmp + 1] = {}
              tmp[#tmp].address = _FORV_7_.address + 60
              tmp[#tmp].flags = gg.TYPE_FLOAT
            
        end
        tmp = gg.getValues(tmp)
        
          for _FORV_6_, _FORV_7_ in pairs(tmp) do
            if _FORV_7_.value == 1.25 then
              energy = tonumber(_FORV_7_.address)
              break
          end
        end
      gg.clearResults()
      if energy == nil or wxfks == 0 then
        gg.toast("能量地址获取失败❌请重试或重启游戏")
        sleep(1000)
        return false
      end
    local senergy={}
    senergy[1] = {}
    senergy[1].flags = gg.TYPE_FLOAT
    senergy[1].address = energy -56
    senergy[1].value = "14"
    senergy[1].freeze = true
    senergy[2] = {}
    senergy[2].flags = gg.TYPE_FLOAT
    senergy[2].address = energy -16
    senergy[2].value = "0"
      if wy == "on" then
    gg.removeListItems(senergy)
    wy = "off"
    gg.toast("已关闭，切图后生效")
    gg.setVisible(false)
    
    else 
    senergy[2].freeze = true
    gg.addListItems(senergy)
    gg.clearResults()
    wy = "on"
    gg.toast("开启成功")
    gg.setVisible(false)
    
  end
  end
  gg.clearResults()
  end
  ---亮度
  function tiaoliangdu(bin)
    liangdu[1].value = bin
    gg.setValues(liangdu)
  end
  ---加速
  function jiasu1(x)
    sudu[1].value = x
    sudu[1].freeze = true
    gg.setValues(sudu)
    gg.addListItems(sudu)
    --gg.toast("当前速度为".. x .."倍速")
  end
  --死门
  function swqt(x)
    time1=os.clock()
  ::renyi::
    weizhipanduan()
    if X == x then gg.toast("你已在" .. map[x][3] ..",无需传送")
    else
      if X == 35 then gg.toast("伊甸暂不支持任意门")
      else
        time=0
        dengji = gg.getValues(dengji)
        gytmp = dengji[1].value
        huiyujing(x)
        dengji[1].value = 0
        gg.setValues(dengji)
        zengsu(3000)
        --siwang[1].value = -1
        --gg.setValues(siwang)
        sleep(200)
        --siwang[1].value = 4
        --gg.setValues(siwang)
        dengji[1].value = gytmp
        gg.setValues(dengji)
        weizhipanduan()
        while (X ~= x) do
          weizhipanduan()
          sleep(100)
          time = time +100
          if time > 5000 then gg.toast("正在尝试进入“".. map[x][3] .."”\n如果反复出现此提示请使用右上角回遇境，或者进入".. map[x][3] .."") goto renyi end
        end
        --sleep(200)
        jiansu(3000)
        gg.toast("传送“" .. map[x][3] .."”完成\n耗时："..os.clock()-time1.."秒")
        huiyujing(1)
      end
    end
  end
  a=1
  z=34
  function cast()
    dmg()
    gg.alert("不玩了不玩了，挂科两门\n我回家种地了,拜拜")
  first = "off"
  dian()
      home()
  end

  --姿势
  zishi = {}
  zishi[1]={}
  zishi[1].address = zerb.address - 10076
  zishi[1].flags = 4
  function stand(id)  
    zishi[1].value = id
  gg.setValues(zishi)
  --0是站着，2是一级坐，1是二级坐，3是躺着，4是站累了 
  end 
  nldz = 0
  --地图值瞬移
  function ba(x)
  tkp={}
  tkp[1] = {}
  tkp[1].address = zerb.address-1011140
  tkp[1].flags = 4
  tkp[1].value = x
  tkp[1].freeze = false
  gg.setValues(tkp)
  gg.addListItems(tkp)
  end
  function aa(x)
  tqp={}
  tqp[1]={}
  tqp[1].address = zerb.address -1330004
  tqp[1].flags = 4
  tqp[1].value = x
  tqp[1].freeze = false
  gg.setValues(tqp)
  gg.addListItems(tqp)
  Teleport({10,10,10})
  gg.toast("传送成功")
  end
  function jiasu(speed)
    jias(speed)
  end
  function jias(x)
  tmp={}
  tmp[1] = {}
  tmp[1].address = zera.address - 21451696
  tmp[1].flags = 16
  tmp[1].value = x
  tmp[1].freeze = true
  gg.setValues(tmp)
  gg.addListItems(tmp)
  end
  -- 位置
  weizhi = {}
  weizhi[1] = {}
  weizhi[1].address = zera.address + 9081392
  weizhi[1].flags = 4
  --瞬移
  function Teleport(xyz)
  tmp = {}
  for i = 1, 3 do       
          tmp[#tmp + 1] = {}
          tmp[#tmp].address = zerb.address + 4 * (i - 1) - 23220
      tmp[#tmp].flags = 16
        tmp[#tmp].value = xyz[i]
  end
  gg.setValues(tmp)
  end	
  iii=1
  mapp={}
  ---手跑辅助
  mapp[1] = {"CandleSpace",1,"遇境",0,1,1}
  mapp[2] = {'Dawn',2,"晨岛",1,1,1}
  mapp[3] = {'Prairie_ButterflyFields',3,"云野一图",0,1,1}
  mapp[4] = {'Prairie_Village',4,"云野二图",1,1,1}
  mapp[5] =  {'Prairie_Cave',5,"云野左图",0,1,1}
  mapp[6] = {'Prairie_NestAndKeeper',6,"云野右图",0,1,1}
  mapp[7] = {'DayHubCave',7,'云野八人门',0,1,1}
  mapp[8] = {'DayEnd',8,"云野宫殿",0,0,1}
  mapp[9] = {'Prairie_Island',40,"圣岛",1,1,1}
  mapp[10] = {"Rain",9,"雨林一图",1,1,1}
  mapp[11] = {"RainForest",10,'雨林二图',1,1,1}
  mapp[12] = {"RainShelter",11,'雨林右图',1,1,1}
  mapp[13] = {"Rain_Cave",12,'雨林右图树洞',1,1,1}
  mapp[14] = {"RainMid",13,'水母图',1,1,1}
  mapp[15] = {"RainEnd",14,'雨林宫殿',1,1,1}
  mapp[16] = {"Sunset",15,'霞谷一图',0,1,1}
  mapp[17] = {"Sunset_Citadel",16,'霞光城',0,1,1}
  mapp[18] = {"Sunset_FlyRace",17,'飞行赛道',0,1,1}
  mapp[19] = {"SunsetEnd",19,'赛道终点',0,1,1}
  mapp[20] = {"SunsetRace",18,'地面赛道',0,1,0}
  mapp[21] = {"SunsetEnd",19,'赛道终点',0,1,1}
  mapp[22] = {"SunsetEnd2",20,'霞谷宫殿',1,1,1}
  mapp[23] = {"DuskStart",21,'墓土一图',0,0,1}
  mapp[24] = {"Dusk",22,'墓土破庙',1,1,1}
  mapp[25] = {"DuskOasis",23,'遗忘方舟',1,1,1}
  mapp[26] = {"DuskGraveyard",24,'五龙图',1,1,1}
  mapp[27] = {"Dusk_CrabField",25,'沉船',1,1,1}
  mapp[28] = {"DuskMid",26,'古战场',1,1,1}
  mapp[29] = {"DuskEnd",27,'墓土宫殿',1,1,1}
  mapp[30] = {"Night",28,'禁阁低层',0,1,1}
  mapp[31] = {"NightArchive",29,'禁阁地下',0,1,1}
  mapp[32] = {"Night2",30,'禁阁高层',0,1,1}
  mapp[33] = {"TGCOffice",32,'办公室',1,0,1}
  mapp[34] = {"Storm",34,'暴风二图',1,1,0}
  mapp[35] = {("DawnCave"),41,"试炼大厅",0,0,0}
  function ipd()
      weizhi = gg.getValues(weizhi)
      for i = 1 , 40 do
        if weizhi[1].value == map[mapp[i][2]][2] then
          iii = i
          if iii ~= 0 then 
          gg.toast("矫正成功。当前:".. mapp[iii][3] .. "")
          end
          break
        end
      end
      end
  function run()
  FX = "run"
  if iii==35 then
  sleep(800) qt(1)
  gg.alert("跑完了。")
  iii=1
  end
    if iii == 0 then
    name1 ="无"
    name2 ="无"
    elseif iii == 1 then
    name1 ="无"
    else
      name1 = mapp[iii-1][3]
    end
    name2 = mapp[iii][3]
      name3 = mapp[iii+1][3]
    menut = gg.choice({
    "                      上一个「" .. name1 .. "」",
    "                       根据所在地图纠正进度",
      "                      下一个「" .. name3 .. "」",
      '                                      万象天引',
      '                                      傻瓜模式',
      '                                      返回主页',
    }, nil)
    bt3() 
    if menut == nil then
    elseif menut == 1 then
if iii > 1 then 
 iii = iii - 1 
      qt(mapp[iii][2]) 
      end
    elseif menut == 2 then  ipd()
    elseif menut == 3 then  iii=iii+1   
    qt(mapp[iii][2]) 
    elseif menut == 4 then xi() 
    elseif menut == 5 then sg() 
    elseif menut == 6 then home() 
  end
  end
  function sg()
  gg.alert("即将进入半自动跑图\n此模式使用悬浮窗进行操作直至完成\n慢一点慢一点慢一点\n快了容易封号") 
  iii=1
  write("/sdcard/runk","0")
  write("/sdcard/runh","1")
  sg1()
  end
  function sg1()
  bt3()
  xi()
  if iii==35 then
  sleep(800) qt(1)
  gg.alert("跑完了。")
  write("/sdcard/runk","1")
  FX="home"
  else
  name1 = mapp[iii][3]
  black("点击传送至" .. name1 .. "。最好先跑几步等一会")
  FX="sg2"
  end
  end
  function sg2()
  if iii==35 then
  renyimen(35)
  else
  write("/sdcard/runh",iii)
  qt(mapp[iii][2])
  iii=iii + 1
  jiasu(6)
  black("点击吸火")
  FX="sg1"
  end end
  function cs(z)
  qt(z)
  end
  ---日常菜单
  function daily()
  FX = "daily"
    menuda = gg.choice({
      '                                        任务',
      '                                        献祭',
      '                                        开门',
      '                                        跑图',
      '                                        返回',
      }, nil, "                                        日常功能")
      if menuda == 1 then  day() end
      if menuda == 2 then  qt(35) sleep(5000) A_bfy() end
      if menuda == 3 then KQM() end
      if menuda == 4 then pp() end
      if menuda == 5 then home() end
  end
  ---主页菜单
     function home()
    FX = "home"
        menua = gg.choice({
      '                                        工具',
      '                                        娱乐',
      '                                        设置',
      '                                        命令',
      '                                        捐助',
      '                                        种会',
      '                                        退出',
      }, nil)
      if menua == 1 then bt1() gj() end
      if menua == 2 then bt1() yule() end
      if menua == 3 then bt1() config() end
      if menua == 4 then bt1() 
      if panduan("/sdcard/cmd.txt") == true then
          cmdd=read("/sdcard/cmd.txt")
          else 
          write("/sdcard/cmd.txt","")
          cmdd=read("/sdcard/cmd.txt")
          end
              if cmdd == nil  then 
                      cmdt = "上一次为空" 
              else
                      if cmdd == "" then cmdt = "上一次为空" end
                      if cmdd ~= "" then cmdt = "留空执行上一次的" .. cmdd .. "" end 
              end
              binn=gg.prompt({"请输入需要执行的代码，" .. cmdt .. ""}, {n},{'text'})
              bt3()
              if binn ~= nil then 
                      if binn[1] == "" then
                            dofile("/sdcard/cmd.txt") 
                      else
                            write("/sdcard/cmd.txt",(binn[1]))
                            dofile("/sdcard/cmd.txt") 
                      end
                else 
                end 
  end 
      if menua == 5 then bt3() gg.copyText("http://49.234.215.120:88") gg.alert("链接已复制到剪切板") end
      if menua == 6 then bt3() zo() end
      if menua == 7 then bt3() Exit() end
  end
  function zo()
  cnm()
  gg.alert("致倒卖狗种会：\n祝您母亲身体健康，万事如意！\n祝你早日能给老人家赚够棺材钱！\nQQ：437311856")
  gg.alert("致倒卖狗种会：\n祝您母亲身体健康，万事如意！\n祝你早日能给老人家赚够棺材钱！\nQQ：437311856")
  gg.alert("致倒卖狗种会：\n祝您母亲身体健康，万事如意！\n祝你早日能给老人家赚够棺材钱！\nQQ：437311856")
  gg.alert("致倒卖狗种会：\n祝您母亲身体健康，万事如意！\n祝你早日能给老人家赚够棺材钱！\nQQ：437311856")
  gg.alert("致倒卖狗种会：\n祝您母亲身体健康，万事如意！\n祝你早日能给老人家赚够棺材钱！\nQQ：437311856")
  end
  ---娱乐菜单
  function yule()
  FX = "yule"
    menuya = gg.choice({
      '                                        魔法',
      '                                        王霸',
      ----'                                        换装',
      '                                        转圈',
      '                                        无翼',
      '                                    动作升级',
      '                                    无限烟花',
      '                                        返回',
      }, nil)
      if menuya == 1 then   mgc() end
      if menuya == 2  then   if magicc ~= "开" then magic()
  else magicoff() end end
      --- if menuya == 3 then  gg.alert("未更新") end
      if menuya == 3 then   bin=gg.prompt({"\n\n\n\n半径[1;15]","圈数[1;10]","发光","心形"}, 
  {r,x,jb1,jb2,jb3},
  {'number','number','checkbox','checkbox','checkbox'})
  if bin == nil then 
  else
  r = bin[1]
  x = bin[2]
  p = bin[3]
  l = false
  h = bin[4]
   
  circle(r, x, p, l, h)
  end end
      if menuya == 4 then  wyi() end
      if menuya == 5 then  dzsj() end
      if menuya == 6 then  wxyh() end
      if menuya == 7 then  home() end
  end
  function rand()
  for i=1,100 do
  mfmf(1,-283559204,"牛粪头") 
  mfmf(2,135625388,"鲲斗篷")
  mfmf(3,-381847718,"篝火")
  sleep(200)
  mfmf(1,1983755432,"魔法帽")
  mfmf(2,930203946,"蜘蛛斗篷") 
  mfmf(3,256924066,"宴会长桌")
  sleep(200)
  mfmf(1,1046521292,"南瓜头")
  mfmf(2,1306675982,"圣诞斗篷") 
  mfmf(3,0,"无")
  sleep(200)
  mfmf(1,-1040619876,"白鸟头")
  mfmf(2,-784831205,"雪花斗篷")
  mfmf(3,-992017029,"雨伞")
  sleep(200)
  end
  end
  -------每日任务
      function day()

    menunuub = gg.choice({
      '                                  先祖&星光',
      '                                    烧花花',
      '                                    救鲲鲲',
      '                                  面对冥龙',
      '                                     掀螃蟹',
      '                                       返回'
    }, nil, "每日任务")
    if menunuub == 1 then  ZGQ() FX = "ZGQ" end
    if menunuub == 2 then  shao() gg.setVisible(false) qt(13) sleep(1500) shao() zjd()  gg.toast("自己烧") jiasu(2) Teleport({21.772464752197266;140.1890106201172;11.666708946228027}) shao() end
    if menunuub == 3 then  shao() kunkun() end
    if menunuub == 4 then qt(25) Teleport({-164.5535888671875;8.124578475952148;351.8051452636719})   jiasu(3) sleep(800)  sleep(2000) jiasu(1)  tiaoliangdu(-100) sleep(6000) qt(1) tiaoliangdu(1) jiasu(1)  gg.setVisible(false)  end
    if menunuub == 5 then  gg.setVisible(false) renyimen(25) gg.setVisible(false) sleep(800) Teleport({-167.6268310546875;1.0195403099060059;404.675048828125}) jiasu(3) zjd() FX = "bcc" end
    if menunuub == 6 then   jiasu(1) FX = "home" home() end
    end
  --遇境小黑屋
  function h1()
    Teleport({798.98095703125 ;0.22667610645;-0.33975163102})
    gg.toast("瞬移 [遇境 - 小黑屋] 完成")
  end

  --遇境观星台
  function h2()
    Teleport({1.07697141171;0.8221578598;-0.33868104219})
    gg.toast("瞬移 [遇境 - 观星台] 完成")
  end
    
  --晨岛CG图
  function h3()
    Teleport({118.10299682617;0.97198873758;-1733.97021484375})
    gg.toast("瞬移 [晨岛 - CG图] 完成")
  end

  --晨岛终点
  function h4()
    Teleport({156.29658508301;103.52576446533;-293.6558227539})
    gg.toast("瞬移 [晨岛 - 终点] 完成")
  end

  --晨岛彩虹桥
  function h5()
    Teleport({299.99719238281;413.04522705078;-297.63458251953})
    gg.toast("瞬移 [晨岛 - 彩虹桥] 完成")
  end

  --晨岛富士山
  function h6()
    Teleport({298.00839233398;750;-283.45837402644})
    gg.toast("瞬移 [晨岛 - 富士山] 完成")
  end

  --云野大草原
  function h7()
    Teleport({366.3053894043;208.29864501953;233.16668701172})
    gg.toast("瞬移 [云野 - 大草原] 完成")
  end

  --云野幽灵船
  function h8()
    -- Teleport({97.56925201416;174.57604980469;265.3330078125})
    Teleport({97.30706787109375;174.2458953857422;265.5908203125})
    gg.toast("瞬移 [云野 - 幽灵船] 完成")
  end

  --云野孤岛
  function h9()
    Teleport({117.31034088135;0.84127157927;-1,733.96765136719})
    gg.toast("瞬移 [云野 - 孤岛] 完成")
  end

  --云野CG
  function h10()
    Teleport({-529.02185058594;8.60619068146;-213.8217010498})
    gg.toast("瞬移 [云野 - CG] 完成")
  end

  --云野终点
  function h11()
    Teleport({128.96328735352;254.88412475586;484.58071899414})
    gg.toast("瞬移 [云野 - 终点] 完成")
  end

  --雨林梅花桩
  function h12()
    Teleport({-31.72092056274;207.00308227539;-1.27488076687})
    gg.toast("瞬移 [雨林 - 梅花桩] 完成")
  end

  --雨林CG
  function h13()
    Teleport({4.90364980698;9.42964076996;506.48516845703})
    gg.toast("瞬移 [雨林 - CG] 完成")
  end

  --雨林终点
  function h14()
    Teleport({-18.18656158447;182.64154052734;402.62902832031})
    gg.toast("瞬移 [雨林 - 终点] 完成")
  end

  --雨林密室
  function h15()
    Teleport({-0.37094926834;105.59395247607;0.10513665527})
    gg.toast("瞬移 [雨林 - 密室] 完成")
  end

  --雨林锤子
  function h16()
    Teleport({6.57783555984;4.13195562363;509.4060367695})
    gg.toast("瞬移 [雨林 - CG] 完成")
  end

  --霞谷千鸟图
  function h17()
    Teleport({314.90731811523;173.38836669922;-783.63726806641})
    gg.toast("瞬移 [霞谷 - 千鸟图] 完成")
  end

  --墓土冰激凌
  function h18()
    Teleport({-84.72422790527;5047.2763671875;-842.01507568359})
    gg.toast("瞬移 [墓土 - 冰激凌] 完成")
  end

  --墓土终点
  function h19()
    Teleport({-288.00048828125;92.26410675049;-399.68026733398})
    gg.toast("瞬移 [墓土 - 终点] 完成")
  end

  --墓土CG
  function h20()
    Teleport({-416.08380126953;12.07369232178;411.0588684082})
    gg.toast("瞬移 [墓土 - CG] 完成")
  end

  --禁阁蜡像馆
  function h21()
    Teleport({0.36330926418;195.0870513916;8.39365291595})
    gg.toast("瞬移 [禁阁 - 蜡像馆] 完成")
  end

  --禁阁闪电岛
  function h22()
    Teleport({-0.96439945698;336.14559936523;64.37212371826})
    gg.toast("瞬移 [禁阁 - 闪电岛] 完成")
  end

  --禁阁日月岛
  function h23()
    Teleport({68.92450714111;240.40475463867;-185.50691223145})
    gg.toast("瞬移 [禁阁 - 日月岛] 完成")
  end

  function lua()
  local dat=gg.prompt({""},{"/sdcard/cmd.txt"},{"file"})[1]
  dofile(dat)
  end
  function doc()
  gg.intent("http://49.234.215.120/doc" )
  end
  --瞬移拉条
  function tp()
  local roleX = renzuobiao[1].value
    local roleZ = renzuobiao[2].value
    local roleY = renzuobiao[3].value
    bin=gg.prompt({"X坐标[-10;10]","Z坐标[-10;50]","Z坐标[-10;10]"}, 
  {0,0,0},
  {'number','number','number'})
  if bin == nil then 
  else
  x = bin[1]
  z = bin[2]
  y = bin[3]
          xx = roleX+ x
          zz = roleZ+ z
          yy = roleY+ y
                  Teleport({xx,zz,yy})
  end 
  end    
  -- 坐标记录
  local POSITION_RECORD = ""

-- 获取角色角色坐标
  function rolePositionMenu()
  FX = "rolePositionMenu"
    p_menu = gg.choice({
      "                        复制坐标",
      "                            瞬移",
      "                            返回"
    }, nil)
      
      if(p_menu == 1) then
      local positionStr = currentPosition()
      gg.copyText(positionStr, false)
      black("当前坐标已复制到粘贴板！")
      gg.setVisible(false) 
      elseif(p_menu == 2) then
      tp()
      elseif(p_menu == 3) then
      gj()
      end
  end
  -- 角色当前坐标 返回{X;Z;Y}类型
  function currentPosition()
  rolePosition = gg.getValues(renzuobiao) 
    local roleX = rolePosition[1].value
    local roleZ = rolePosition[2].value
    local roleY = rolePosition[3].value
    local positionStr = "{" .. tostring(roleX) .. ";" .. tostring(roleZ) .. ";" .. tostring(roleY) .. "}"
    return positionStr
  end

  -- 获取角色当前坐标
  function getRolePosition() 

    local rolePosition = {}
    
    -- gg.alert("X地址："..tostring(xdz).."，Z地址："..tostring(zdz).."，Y地址："..tostring(ydz))
    
    rolePosition = gg.getValues(renzuobiao)
    return rolePosition
  end
  --暴风眼一图终点
  function g1()
    Teleport({-3.08880496025;196.74859619141;-21.45963668823})
    gg.toast("瞬移 [暴风眼 - 一图终点] 完成")
  end

  --暴风眼二图终点 洞口左下  
  function g2Left()
    Teleport({2.260443925857544;262.16070556640625;-236.75033569335938})
    gg.toast("瞬移 [暴风眼 - 二图终点洞口左下] 完成")
  end

  --暴风眼二图终点   
  function g2()
    Teleport({6.62452173233;265.95574951172;-244.71562194824})
    gg.toast("瞬移 [暴风眼 - 二图终点洞口] 完成")
  end
  function g3()
    Teleport({803.8468627929688;0.6832796931266785;-11.732531547546387})
    gg.toast("抱抱他")
  end
  function g4()
    Teleport({860.9254150390625;2694.650634765625;156.6395721435547})

  end
  function g5()
    Teleport({-30.023597717285156;2415.130615234375;2160.118408203125})
    gg.toast("星光大道自己走")
  end
  function pdt()
  x = weizhipanduan()
  wzpd()
    repeat 
    wzpd()
    until map[X][2] ~= x
  end
  xgh=19
  function qt(x)
  if x == 19 then 
  if xgh==17 then
  qt(17) fdianlazhu() sleep(400) 
  Teleport({53.00240707397461;1060.93994140625;-33.55397415161133}) sleep(800)
    sleep(1800)
    jiasu(10)
    Teleport({147.0607452392578;1017.767822265625;-96.45844268798828})
    pdt()
    sleep(4000)
    jiasu(1)
    fdianlazhu()
    fzhajinhua()
    Teleport({44.09857940674,169.2801361084,11.14154911041})sleep(1000)
    Teleport({46.44737625122;165.78955078125;-1.97345304489})sleep(800)---门
    fdianlazhu()
    fzhajinhua()
  sleep(8000)
  Teleport({57.669464111328125;135.58766174316406;-218.8708953857422})
  jiasu(1) xiguangmang()
  sleep(1000) jiasu(10) sleep(4000)
  elseif xgh== 18 then
  qt(18) fdianlazhu() sleep(400) 
  Teleport({256.7756652832031;586.0608520507812;-565.4407958984375})
  pdt() sleep(4000) 
  jiasu(1)
  fdianlazhu()
    Teleport({44.09857940674,169.2801361084,11.14154911041})sleep(1000)
    Teleport({46.44737625122;165.78955078125;-1.97345304489})sleep(800)---门
    fdianlazhu()
    fzhajinhua()
  sleep(8000)
  Teleport({57.669464111328125;135.58766174316406;-218.8708953857422})
  jiasu(1) xiguangmang()
  sleep(1000) jiasu(10) sleep(4000)
  else 
  fdianlazhu() renyimen(19)
  end
  else
  ---if weizhipanduan() == -815180717 then ba(map[x][2]) aa(map[x][2]) end
  if x == -1 or x == 0 then gg.alert("目标不存在") goto ed end
  if weizhipanduan() ~= map[x][2] then
  jiasu(10)
  jiasu(10)
  renyimen(x)
  jiasu(1)
  jiasu(1)
  pmusic("/sdcard/f.mp3")
  if x==12 then sleep(200) Teleport({34.46460723876953;107.41027069091797;-308.02899169921875}) end
  if x==17 then xgh=17  xi() sleep(200) Teleport({168.01861572265625;1187.0384521484375;391.32952880859375}) xi() sleep(400) stand(1) stand(2) jiasu(6)  sleep(8000) 
  Teleport({99.22843933105469;1184.7364501953125;354.8730773925781}) sleep(500) 
    Teleport({97.38533782958984;1184.9056396484375;354.5267639160156}) sleep(500) 
    Teleport({-352.1131591796875;1178.0828857421875;249.1545867919922}) sleep(500)
    Teleport({-398.86480712890625;1172.46044921875;170.9972381591797}) sleep(500)
    Teleport({-389.6394348144531;1171.854248046875;165.44161987304688}) sleep(500) jiasu(1)  end
  if x==18 then xgh=18 xi() sleep(200) Teleport({163.0267791748047;935.1610107421875;662.2533569335938}) jiasu(10) sleep(400) stand(1) stand(2) sleep(8000) 
  Teleport({184.72164916992188;886.9839477539062;571.6433715820312})sleep(500)
    Teleport({168.18959045410156;888.4922485351562;571.406005859375})sleep(500)
    Teleport({147.60549926757812;888.9910278320312;572.7677001953125})sleep(500)
    Teleport({131.58558654785156;889.5586547851562;570.7337036132812})sleep(500)
    Teleport({169.57485961914062;853.241455078125;480.9761962890625})sleep(500)
    Teleport({158.70928955078125;852.3687133789062;475.4511413574219}) jiasu(1) end
  if x==22 then sleep(200) Teleport({98.34485626220703;46.0564079284668;366.5694885253906}) end
  if x==23 then Teleport({125.95512390136719;114.01403045654297;324.1812438964844}) end
  if x==24 then sleep(200) Teleport({59.59109115600586;93.09321594238281;269.1836242675781}) end
  if x==25 then Teleport({-177.36538696289062;20.008426666259766;384.4867858886719}) end
  end
  end
  ::ed::
  jiasu(1)
  end
  cs = ""

  --地图数据
  map = {}
  --map[x] = {("文本"),代码,("名称"),花,光翼，烛火}
  map[1] = {("CandleSpace"),-768833570,("遇境"),0,0,1}
  map[2] = {'Dawn',1649439303,("晨岛"),1,1,1}
  map[3] = {'Prairie_ButterflyFields',-1817621630,("云野一图"),0,1,1}
  map[4] = {'Prairie_Village',-1944435120,("云野二图"),1,1,1}
  map[5] = {'Prairie_Cave',-1050035699,("云野左图"),0,1,1}
  map[6] = {'Prairie_NestAndKeeper',312004957,("云野右图"),0,1,1}
  map[7] = {'DayHubCave',-1900248111,'云野八人门',0,1,1}
  map[8] = {'DayEnd',1190972738,("云野宫殿"),0,0,1}
  map[40] = {'Prairie_Island',-1237641587,("云野海岛"),1,1,1}
  map[9] = {("Rain"),164626931,("雨林一图"),1,1,1}
  map[10] = {("RainForest"),-1455381650,'雨林二图',1,1,1}
  map[11] = {("RainShelter"),-1574275404,'雨林副本',1,1,1}
  map[12] = {("Rain_Cave"),-161371567,'雨林副本隐藏图',1,1,1}
  map[13] = {("RainMid"),-2135324521,'雨林水母图',1,1,1}
  map[14] = {("RainEnd"),128844448,'雨林宫殿',1,1,1}
  map[15] = {("Sunset"),1638008359,'霞谷一图',0,1,1}
  map[16] = {("Sunset_Citadel"),-2115418256,'霞谷飞行一图',0,1,1}
  map[17] = {("Sunset_FlyRace"),1844499196,'霞谷飞行二图',0,1,1}
  map[18] = {("SunsetRace"),571720490,'霞谷地面赛道',0,1,0}
  map[19] = {("SunsetEnd"),-1934656620,'霞谷终点',0,1,1}
  map[20] = {("SunsetEnd2"),507487826,'霞谷宫殿',1,1,1}
  map[21] = {("DuskStart"),817373972,'墓土一图',0,0,1}
  map[22] = {("Dusk"),1147491976,'墓土二图',1,1,1}
  map[23] = {("DuskOasis"),170656205,'墓土魔法季',1,1,1}
  map[24] = {("DuskGraveyard"),864432821,'墓土五龙图',1,1,1}
  map[25] = {("Dusk_CrabField"),-1644045427,'墓土副本',1,1,1}
  map[26] = {("DuskMid"),1597085778,'墓土古战场',1,1,1}
  map[27] = {("DuskEnd"),-136010643,'墓土宫殿',1,1,1}
  map[28] = {("Night"),-1936060159,'禁阁低层',0,1,1}
  map[29] = {("NightArchive"),2518601,'禁阁副本',0,1,1}
  map[30] = {("Night2"),-1987505335,'禁阁高层',0,1,1}
  map[31] = {("NightEnd"),-2027781754,'禁阁终点',0,0,0}
  map[32] = {("TGCOffice"),295816905,'办公室',1,0,1}
  map[33] = {("StormStart"),-1184245578,'暴风一图',0,1,0}
  map[34] = {("Storm"),1705189686,'暴风二图',1,1,0}
  map[35] = {("StormEnd"),-815180717,'伊甸',0,0,0}
  map[36] = {("OrbitMid"),-857831781,'重生一图',0,0,0}
  map[37] = {("OrbitEnd"),567986524,'重生二图',0,0,0}
  map[38] = {("CandleSpaceEnd"),-2043682661,'星光大道',0,0,0}
  map[39] = {("Credits"),261807733,'结尾动画',0,0,0}
  map[41] = {("DawnCave"),748712866,"试炼大厅",0,0,0}
  map[42] = {"Dawn_TrialsWater",-410824576,"水之试炼",0,0,1}
  map[43] = {"Dawn_TrialsEarth",1887730855,"土之试炼",0,0,1}
  map[44] = {"Dawn_TrialsAir",2050064391,"风之试炼",0,0,1}
  map[45] = {"Dawn_TrialsFire",1241316521,"火之试炼",0,0,1}
  map[46] = {("SunsetColosseum"),263580627,"圆梦村",0,0,0}
  map[47] = {("SunsetVillage"),1759178769,"隐士公园",0,0,0}
  map[48] = {("Sunset_YetiPark"),649101397,"雪人公园",0,0,0}
  map[50] = {812663058;1953384759;1761636210;27502;0;0;2002863132;110;0;0;0;0;1768445706;25972;0;0;0;0;-11796322;1;0;0}
    -----献祭流程
  function A_bfy()
    FX = "bfy2"
    gg.toast("献祭完了点悬浮窗")
  write("/sdcard/xj.txt","闪退")
    xidx()
  end
  function bfy2()
  Teleport({-0.17198026180267334;84.62522888183594;31.199289321899414})
  gg.toast("这边三个没吸到嗷~")
  sleep(800)
  gg.toast("拿完再点悬浮窗")
  sleep(400)
  gg.toast("拿完再点悬浮窗")
  FX = "bfy3"
  end 
  function bfy3()
  if KG_wxnl ~= "关" then A_wxnl() end
  jiasu(16)
  gg.alert("由于技术原因\n重生暂时有几率闪退\n正在排查中\n闪退后重启脚本会自动继续献祭")
  sleep(2000)
  qt(38)
  jiasu(10)
  gg.alert("拿完蜡烛点悬浮窗")
  FX = "bfy6"
  end
  function bfy6()
  write("/sdcard/xj.txt","献祭完毕")
  Teleport({0;1;238})
  ::xj3::
  wzpd()
  if X ~= 1 then jiasu(5) sleep(500) gg.toast("等待回遇境") goto xj3 end
  jiasu(1)
  jiasu(1)
  renyimen(1)  FX = "home"
  end
  --位置判断
    function wzpd()
      weizhi = gg.getValues(weizhi)
      for i = 1 , 40 do
        if weizhi[1].value == map[i][2] then
          X = i
          break
        end
      end
      end
      --任意门
  local init_tabkey={"address","flags","value"}
  function seaio(t,a,b,c)
  t[#t+1]={}
  t[#t][init_tabkey[1]]=a
  t[#t][init_tabkey[2]]=b
  if c then t[#t][init_tabkey[3]]=c end
  end
  function renyimen(str)
    map_color="0"
    local dat,offset,date,door,doorx,zb,tem,temb,color
    if not Any_daddr then
      gg.clearResults()
      gg.setRanges(gg.REGION_C_ALLOC)
      gg.searchNumber("14700~14800" ,4, false, gg.SING_EQUAL,zerg.address,zere.address)
      resultCount = gg.getResultCount()
      if resultCount == 0 then
        return 0
      end
      result = gg.getResults(resultCount)
      tmp = {}
      gg.clearResults()
      for k, v in pairs(result) do
        tmp[#tmp+1] = {}
        tmp[#tmp].address = v.address + 0x84
        tmp[#tmp].flags = 16
      end
      tmp = gg.getValues(tmp)
      for k, v in ipairs(tmp) do
        if v.value ==1 then
          Any_daddr = result[k].address+0x84
          break
        end
      end
    end
    door,doorx=Any_daddr,{map[str][1]:byte(0,-1)}
    color={(string.char(#map_color*2)..map_color):byte(0,-1)}
    tem,temb={},{}
    seaio(tem,door-0x14,16,80000)
    seaio(tem,door-0x28,16,80000)
    seaio(tem,door-0x3C,16,80000)
    for j=1,24 do seaio(temb,door+0x3738+j-1,1,doorx[j] or 0)end
    seaio(temb,door+0x34,32,49)
    seaio(temb,door+0x34+8,32,24)
    seaio(temb,door+0x34+16,32,door+0x3738)
    for j=1,16 do seaio(temb,door+0x34+24+j-1,1,color[j] or 0)end
    seaio(temb,door+0x68,4,1)
    seaio(temb,door+0x3818-0x84,4,1)
    gg.setValues(temb)
    gg.setValues(tem)
      renyimentime = os.time()
      X=nil
      while (X ~= str) do
        wzpd()
        renyimentime1 = os.time() - renyimentime
        if renyimentime1 > 7 then break end
      end
    return true
  end
  ------重置   
  function setClear(num)
    gg.clearResults()
    search(num, 32)
    gg.removeResults(gg.getResults(2))
    gg.getResults(10)
    gg.editAll("3811807379", gg.TYPE_QWORD)
    gg.clearResults()
  end
  --人坐标
  renzuobiao = {}
  for i = 1, 3 do 
  renzuobiao[i] ={}
  renzuobiao[i].address = zerb.address + 4 * (i - 1) - 23220
  renzuobiao[i].flags = gg.TYPE_FLOAT
  end
  --点蜡烛值
  dlazhu = {}
  for i=1,450 do
        dlazhu[i] = {}
        dlazhu[i].address = zera.address + (i - 1) * 448
        dlazhu[i].flags = gg.TYPE_FLOAT
  end
  -- 花坐标
  huazuobiao = {}
  for v = 1, 3 do
      huazuobiao[v] = {}
      for i = 1, 266 do
          huazuobiao[v][i] = {}
          huazuobiao[v][i].address =
              zera.address + 416 * (i - 1) + 4 * (v - 1) + 7790864
          huazuobiao[v][i].flags = 16
      end
      -- gg.addListItems(huazuobiao[v])
  end
    -----重温
    function CWXZ()
    menun = gg.choice({
      '                                       云野',
      '                                       雨林',
      '                                       霞谷',
      '                                       墓土',
      '                                       禁阁',
      '                                       返回'
    }, nil, "重温先祖")
    if menun == 1 then gg.setVisible(false) sleep(240) cwyy() end
    if menun == 2 then gg.setVisible(false) sleep(240) cwyl() end
    if menun == 3 then gg.setVisible(false) sleep(240) cwxg() end
    if menun == 4 then gg.setVisible(false) sleep(240) cwmt() end
    if menun == 5 then gg.setVisible(false) sleep(240) cwjg() end
    if menun == 6 then jiasu(1) day() end
      end
    -----参数方程，笛卡尔心形线
    function xin(r,x)
    local rolePosition = getRolePosition()
    local roleX = rolePosition[1].value
    local roleZ = rolePosition[2].value
    local roleY = rolePosition[3].value
            for i = 1, 240*x do
                  xx=tostring(roleX) + r*(2*math.sin(i*3.14/50)-math.sin(2*i*3.14/50))
                  yy=tostring(roleY) + r*(2*math.cos(i*3.14/50)-math.cos(2*i*3.14/50))
              
          zz = tostring(roleZ)
        
                  Teleport({xx,zz,yy})
          sleep(20)
          end
    end
    -----圆
  function circle(r,x,p,l,h)
 gg.setVisible(false) 
 local rolePosition = getRolePosition()
	local roleX = rolePosition[1].value
	local roleZ = rolePosition[2].value
	local roleY = rolePosition[3].value
	if p ~= true then
           for i = 1, 100*x do
           if l == true then tz() end
           if h == true then
           xx=tostring(roleX) + r*0.07*(16 * math.sin(i*3.14/50)*math.sin(i*3.14/50)*math.sin(i*3.14/50))
                yy=tostring(roleY) + r*0.07*(13 * math.cos(i*3.14/50) - 5 * math.cos(2 *i*3.14/50) - 2 * math.cos(3 *i*3.14/50) - math.cos(4 *i*3.14/50))
             
				zz = tostring(roleZ)
                Teleport({xx,zz,yy})
				sleep(20)
           else
				xx = tostring(roleX) + r* math.cos(i*3.14/50)
				zz = tostring(roleZ)
				yy = tostring(roleY) + r* math.sin(i*3.14/50)
                Teleport({xx,zz,yy})
				sleep(20)
	       end
	end
	else
	magic()
	for i = 1, 100*x do
	if l == true then tz() end
	jb = {}
jb[1] = {}
jb[1].address = zerb.address + 26684+40
jb[1].flags = gg.TYPE_DWORD
jb[1].freeze = false
jb[1].value = 0
gg.setValues(jb)
gg.addListItems(jb)
if h == true then
                xx=tostring(roleX) + r*0.07*(16 * math.sin(i*3.14/50)*math.sin(i*3.14/50)*math.sin(i*3.14/50))
                yy=tostring(roleY) + r*0.07*(13 * math.cos(i*3.14/50) - 5 * math.cos(2 *i*3.14/50) - 2 * math.cos(3 *i*3.14/50) - math.cos(4 *i*3.14/50))
             
				zz = tostring(roleZ)
                Teleport({xx,zz,yy})
				sleep(20)
           else
				xx = tostring(roleX) + r* math.cos(i*3.14/50)
				zz = tostring(roleZ)
				yy = tostring(roleY) + r* math.sin(i*3.14/50)
                Teleport({xx,zz,yy})
				sleep(20)
	       end
	end
	magicoff()
  end
 end
  
  
  -----追光球任务
    function ZGQ() 
    menuopn = gg.choice({
    '                                        云野',
      '                                        雨林',
      '                                        霞谷',
      '                                        墓土',
      '                                        禁阁',
      '                                        返回'
    }, nil, "                                         任务")
    if menuopn == 1 then    gg.setVisible(false) qt(3) jiasu(0.001) sleep(800) Teleport({94.2416000366211;155.64657592773438;-19.218523025512695}) jiasu(1) cwyy() gg.setVisible(false) end
    if menuopn == 2 then     gg.setVisible(false) qt(9)  jiasu(0.001) sleep(800) Teleport({21.184173583984375;99.25706481933594;-214.3726348876953}) jiasu(1) cwyl() gg.setVisible(false) end
    if menuopn == 3 then     gg.setVisible(false) qt(15)  jiasu(0.001) sleep(800) Teleport({206.4205322265625;47.55751419067383;-529.426513671875}) jiasu(1) cwxg()  gg.setVisible(false) end
    if menuopn == 4 then     gg.setVisible(false) qt(22)  jiasu(0.001) sleep(800) Teleport({-10.996281623840332;9.366134643554688;189.35252380371094}) jiasu(1) cwmt()  gg.setVisible(false) end
    if menuopn == 5 then    gg.setVisible(false) qt(28)  jiasu(0.001) sleep(800) Teleport({-19.110447311401367;47.426753997802734;13.503926277160645})  jiasu(1) cwjg()  gg.setVisible(false) end
    if menuopn == 6 then   gg.setVisible(false) jiasu(1) FX = "day" day() end
      end
      
  ----救鲲任务
    function kunkun()
  shao()  jiasu(50)  qt(13) sleep(2000)
      Teleport({-73.71708679199219;135.5146026611328;176.75442504882812})
    sleep(1800)  xi() sleep(1600) qt(1) sleep(200) jiasu(1)
    end
    
    
    ------重温雨林
  function cwyl()
  sleep(200) qt(9) sleep(200) Teleport({30.717544555664062;97.58821105957031;-179.51841735839844}) zxz() sleep(200)  jiasu(200)
  sleep(2400) Teleport({16.617733001708984;96.83940124511719;-177.96267700195312}) 
  sleep(2400) Teleport({15.658097267150879;96.08138275146484;-166.01182556152344}) 
  sleep(1400) Teleport({10.525557518005371;97.85975646972656;-155.72642517089844}) 
  sleep(1400) Teleport({13.903735160827637;99.43929290771484;-145.87484741210938}) 
  sleep(1400) Teleport({18.225797653198242;99.09698486328125;-133.9534149169922})
  sleep(1600) 
  qt(13) sleep(1000)Teleport({-82.60684967041016;134.70726013183594;222.92855834960938}) zxz()
sleep(200)  jiasu(200)
  xi() sleep(1000) Teleport({-83.09510040283203;134.7772674560547;215.17088317871094}) 
  xi()sleep(1400) Teleport({-71.99410247802734;134.694580078125;223.7236328125}) 
  xi()sleep(1600) Teleport({-81.38375854492188;134.91799926757812;232.3917999267578}) 
  sleep(1400) Teleport({-83.38694763183594;134.9080352783203;221.70884704589844}) 
  sleep(1400) Teleport({-91.62196350097656;136.1894073486328;225.53285217285156})
  jiasu(1) sleep(1200) qt(1) sleep(200)  Teleport({4.834778308868408;0.7928875684738159;3.7869420051574707})
  end

  -------重温霞谷
  function cwxg()
  sleep(200)
  qt(15) sleep(1200) xihua() zxz() Teleport({168.277099609375;67.0854263305664;-448.800537109375}) jiasu(2000)
  sleep(2000) Teleport({168.277099609375;67.0854263305664;-448.800537109375}) jiasu(2000)
  sleep(2000) Teleport({161.08958435058594;69.99774932861328;-460.7237548828125})jiasu(2000)
  sleep(2000) Teleport({151.21826171875;74.6903076171875;-452.7678527832031})jiasu(2000)
  sleep(2000) Teleport({161.33865356445312;76.40333557128906;-443.5313720703125})
  sleep(2000) Teleport({167.83753967285156;76.1551284790039;-445.0443420410156})
  sleep(2000) qt(1)
  end

  ------重温墓土
  function cwmt()
  sleep(240)
  qt(22)  sleep(200) Teleport({-21.022872924804688;7.687601566314697;263.1231994628906})
 sleep(800) xihua() zxz() jiasu(200) 
 jiasu(200) Teleport({-21.022872924804688;7.687601566314697;263.1231994628906}) jiasu(2000) 
  sleep(1800) Teleport({-32.31200408935547;2.578775405883789;244.72828674316406}) 
  sleep(1800) Teleport({-27.70017433166504;0.4585024416446686;230.10153198242188}) 
  sleep(1800) Teleport({-18.609453201293945;1.7677735090255737;219.97650146484375}) 
  sleep(1800) Teleport({-21.618343353271484;1.1518057584762573;207.3103790283203})
  jiasu(1) sleep(1800)
  qt(24)  sleep(400)  Teleport({63.24020004272461;93.08414459228516;261.6358337402344}) jiasu(200)
sleep(800) xihua() zxz()  jiasu(200)
  sleep(1800) Teleport({45.12158966064453;91.38150787353516;236.85446166992188}) jiasu(200)
  sleep(1800) Teleport({47.805477142333984;90.07632446289062;217.77601623535156}) jiasu(200)
  sleep(1800) Teleport({52.47241973876953;89.94781494140625;206.60629272460938}) 
  sleep(1800) Teleport({58.46994400024414;92.32652282714844;195.1707305908203}) 
  sleep(1800) Teleport({59.69035339355469;95.58499145507812;190.06103515625}) 
  sleep(2000) Teleport({62.75392532348633;99.66151428222656;181.77374267578125}) 
  sleep(1800) Teleport({67.20504760742188;99.02229309082031;145.18380737304688}) 
  sleep(2200) jiasu(1)  qt(1)sleep(200)  Teleport({-5.1854939460754395;1.0245624780654907;1.9388291835784912}) gg.setVisible(false)
  end 

  -------重温云野
  function cwyy()
  sleep(240)
  qt(3)  sleep(1200) Teleport({101.39147186279297;155.259765625;17.573368072509766}) 
zxz() sleep(200)  jiasu(200)
  sleep(1200) Teleport({116.76346588134766;157.09292602539062;31.87032127380371}) 
  sleep(1200) Teleport({108.52499389648438;156.45452880859375;26.652238845825195}) 
  sleep(1200) Teleport({103.02177429199219;157.47422790527344;32.652015686035156})
  jiasu(1) sleep(2000)
  qt(6)  sleep(400) Teleport({-192.6410369873047;193.49740600585938;83.7305679321289}) 
zxz() sleep(200)  jiasu(200)
  sleep(1200) Teleport({-196.57264709472656;198.31546020507812;83.07209014892578}) 
  sleep(1200) Teleport({-195.7012176513672;201.6608123779297;89.05215454101562}) 
  sleep(1200) Teleport({-199.0491180419922;203.51486206054688;85.91160583496094}) 
  sleep(1200) Teleport({-196.86752319335938;206.16444396972656;86.16981506347656}) 
  sleep(1200)
  qt(4) jiasu(2000)  
zxz() sleep(200)  jiasu(200)
  sleep(1200) Teleport({75.71053314208984;184.5050506591797;331.66033935546875}) 
  sleep(1200) Teleport({83.1615982055664;188.37246704101562;348.0260009765625}) 
  sleep(1200) Teleport({73.4952392578125;193.97787475585938;361.26654052734375}) 
  sleep(1200) qt(1) jiasu(1) sleep(200) Teleport({7.385260105133057;1.155248999595642;1.4115355014801025}) gg.setVisible(false)
  end


  -------重温禁阁
  function cwjg()
  sleep(240)
  jiasu(10)
  qt(28)  sleep(1200) Teleport({47.28824234008789;83.77191162109375;42.8892936706543}) 
zxz() sleep(200)  jiasu(200)
  sleep(1800) Teleport({34.95984649658203;83.89051055908203;49.509517669677734}) 
  jiasu(10)
  sleep(1000) Teleport({29.333452224731445;89.6907958984375;60.34990692138672}) 
  sleep(1000) Teleport({27.75568962097168;82.82476806640625;39.72005844116211})
  sleep(1800) Teleport({34.95984649658203;83.89051055908203;49.509517669677734}) 
  jiasu(10)
  sleep(1000) Teleport({29.333452224731445;89.6907958984375;60.34990692138672}) 
  sleep(1000) Teleport({27.75568962097168;82.82476806640625;39.72005844116211})
  sleep(1200)
  Teleport({-37.31019592285156;143.4185333251953;-22.629653930664062}) 
zxz() sleep(200)  jiasu(200)
  sleep(1400) Teleport({-19.36696434020996;146.7249755859375;-29.66425132751465}) 
  sleep(1400) Teleport({-3.026301145553589;147.0325164794922;-32.68048095703125}) 
  sleep(1400) Teleport({25.639333724975586;152.19247436523438;-37.33803176879883}) 
  sleep(1400) Teleport({31.249401092529297;153.8966827392578;-41.91915512084961}) 
  sleep(1400) qt(1) jiasu(1) sleep(200) Teleport({-5.985757827758789;0.5645518898963928;-2.118807792663574}) gg.setVisible(false)
  end
  function yymenu()
  FX = "yymenu"
  menugaaa = gg.choice({
    '                                          水',
    '                                          土',
    '                                          风',
    '                                          火',
      '                                        返回',
      }, nil)
      bt3() 
      if menugaaa == 1 then water() end
      if menugaaa == 2 then earth() end
      if menugaaa == 3 then  air() end
      if menugaaa == 4 then fire() end
      if menugaaa == 5 then home() end
  end
  function gj()
  FX = "gj"
  menuga = gg.choice({
    '                                        地图',
    '                                        跑图',
    '                                        吸火',
    '                                        任务',
      '                                        献祭',
      '                                        预言',
      '                                        坐标',
      '                                        景点',
      '                                        开门',
      '                                        梦想',
      '                                        设置',
      '                                        返回',
      }, nil)
      bt1() 
      if menuga == 2 then  run() end
      if menuga == 1 then  Main0() end
      if menuga == 3 then  dianlazhu() zhajinhua() xi() end
      if menuga == 4 then  day() end
      if menuga == 5 then  qt(35) sleep(2000) A_bfy() end
      if menuga == 6 then  yymenu() end
      if menuga == 7 then  rolePositionMenu() end
      if menuga == 8 then  M_DTCD() end
      if menuga == 9 then  KQM() end
      if menuga == 10 then  dzcd4() end
      if menuga == 11 then  config() end
      ---if menuga == 7 then xiguangmang() end
      if menuga == 12 then  home() end
  end
  --------传送主菜单
  function Main0()
    
    menu = gg.choice({
    '                                     遇境',
    '                                     预言',
      '                                     晨岛',
      '                                     云野',
      '                                     雨林',
      '                                     霞谷',
      '                                     暮土',
      '                                     禁阁',
    '                                   暴风眼',
    '                                 其他功能',
      '                                     返回',
    }, nil)
    bt1() 
    if menu == 1 then qt(1) end
    if menu == 2 then  yuy() FX = "yuy" end
    if menu == 3 then  qt(2) end
    if menu == 4 then   YY() FX = "YY" end
    if menu == 5 then   YL() FX = "YL" end
    if menu == 6 then   XG() FX = "XG" end
    if menu == 7 then   MT() FX = "MT" end
    if menu == 8 then   JG() FX = "JG" end
    if menu == 9 then   BFY() FX = "BFY" end
    if menu == 10 then  gj() end
    if menu == 11 then   jiasu(1) gj() end
        end

  function yuy()
  menu199 = gg.choice({
      '                                      吸',
    '                                预言山洞',
      '                                      水',
      '                                      土',
      '                                      风',
      '                                      火',
    '                              返回上一页',
    '                                返回主页',
    }, nil, "预言")
    bt3() 
    if menu199 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu199 == 2 then    qt(41) end
    if menu199 == 3 then    sp(1) end
    if menu199 == 4 then   sp(2) end
    if menu199 == 5 then   sp(3) end
    if menu199 == 6 then  sp(4) end
    if menu199 == 7 then   FX="Main0" Main0() end
    if menu199 == 8 then   home() end
  end
function YY()
    menu1 = gg.choice({
      '                                      吸',
    '                                云野主图',
    '                                云野三塔',
      '                            云野左隐藏图',
      '                            云野右隐藏图',
      '                                   圣岛',
      '                              云野八人图',
      '                                云野神殿',
    '                              返回上一页',
    '                                返回主页',
    }, nil, "云野 ")
    bt3() 
    if menu1 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu1 == 2 then   qt(3) end
    if menu1 == 3 then   qt(4) end
    if menu1 == 4 then   qt(5) end
    if menu1 == 5 then  qt(6) end
    if menu1 == 6 then  qt(40) end
    if menu1 == 7 then qt(7) end
    if menu1 == 8 then   qt(8) end
    if menu1 == 9 then   FX="Main0" Main0() end
    if menu1 == 10 then   home() end
end


function YL()
    menu2 = gg.choice({
      '                                      吸',
      '                               雨林初始图',
      '                               雨林中间图',
      '                               雨林水母图',
      '                             雨林右隐藏图',
      '                            雨林隐藏图洞穴',
      '                                雨林神殿',
    '                               返回上一页',
    '                                返回主页',
    }, nil, "雨林 ")
    bt3() 
    if menu2 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu2 == 2 then  gg.setVisible(false) qt(9) end
    if menu2 == 3 then  gg.setVisible(false) qt(10) end
    if menu2 == 4 then gg.setVisible(false) qt(13) end
    if menu2 == 5 then  gg.setVisible(false) qt(11) end
    if menu2 == 6 then  gg.setVisible(false) qt(12) end
    if menu2 == 7 then  gg.setVisible(false) qt(14) end
    if menu2 == 8 then   FX="Main0" Main0() end
    if menu2 == 9 then   home() end
end

function XG()
    menu3 = gg.choice({
      '                                      吸',
      '                             霞谷出生点',
      '                                  霞光城',
      '                           霞光城-飞行道',
      '                               落城-滑道',
      '                                赛道终点',
      '                                峡谷神殿',
    '                              返回上一页',
    '                                返回主页',
    }, nil, "峡谷 ")
    bt3() 
    if menu3 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu3 == 2 then  gg.setVisible(false) qt(15) end
    if menu3 == 3 then  gg.setVisible(false) qt(16) end
    if menu3 == 4 then  gg.setVisible(false) qt(17) end
    if menu3 == 5 then  gg.setVisible(false) qt(18) end
    if menu3 == 6 then  gg.setVisible(false) qt(19) end
    if menu3 == 7 then gg.setVisible(false) qt(20) end
    if menu3 == 8 then   FX="Main0" Main0() end
    if menu3 == 9 then   home() end
end

function MT()
    
    menu4 = gg.choice({
      '                                        吸',
      '                                墓土初始图',
      '                                  墓土破庙',
      '                                  遗忘方舟',
      '                                    五龙图',
      '                                      沉船',
      '                                墓土古战场',
      '                                   墓土神殿',
    '                                返回上一页',
    '                                返回主页',
    }, nil, "墓土 ")
    bt3() 
    if menu4 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu4 == 2 then  gg.setVisible(false) qt(21) end 
    if menu4 == 3 then  gg.setVisible(false) qt(22) end
    if menu4 == 4 then  gg.setVisible(false) qt(23) end
    if menu4 == 5 then gg.setVisible(false) qt(24) end
    if menu4 == 6 then gg.setVisible(false) qt(25) end
    if menu4 == 7 then gg.setVisible(false) qt(26) end
    if menu4 == 8 then gg.setVisible(false) qt(27) end
    if menu4 == 9 then   FX="Main0" Main0() end
    if menu4 == 10 then   home() end
end

function JG()
    
    menu5 = gg.choice({
      '                                       吸',
      '                               禁阁初始图',
      '                               禁阁地下室',
      '                                   办公室',
      '                                 禁阁顶层',
      '                                 禁阁终点',
    '                               返回上一页',
    '                                返回主页',
    }, nil, '禁阁 ')
    bt3() 
    if menu5 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu5 == 2 then gg.setVisible(false) qt(28) end
    if menu5 == 3 then gg.setVisible(false) qt(29) end
    if menu5 == 4 then gg.setVisible(false)  qt(32) end
    if menu5 == 5 then  gg.setVisible(false) qt(30) end
    if menu5 == 6 then gg.setVisible(false) qt(31) end
    if menu5 == 7 then   FX="Main0" Main0() end
    if menu5 == 8 then   home() end
end

function BFY()
  menu6 = gg.choice({
    '                                         吸',
      '                               暴风眼初始图',
      '                                   伊甸门口',
      '                                     献祭图',
      '                                   重生二图',
      '                                   重生星盘',
    '                                 返回上一页',
    '                                返回主页',
    }, nil, "暴风眼 ")
    bt3() 
    if menu6 == 1 then  dianlazhu() zhajinhua() xi()  end
    if menu6 == 2 then gg.setVisible(false) qt(33) end
    if menu6 == 3 then  gg.setVisible(false) qt(34) end
    if menu6 == 4 then  gg.setVisible(false) qt(35) end
    if menu6 == 5 then gg.setVisible(false) qt(37) end
    if menu6 == 6 then gg.setVisible(false) qt(38) end
    if menu6 == 7 then   jiasu(1) FX="Main0" Main0() end
    if menu6 == 8 then   home() end
end


  --开七门
function KQM()
  qt(31)
  jiasu(300)
  gg.setVisible(false) 
  sleep(9000)
  Teleport({9.934490203857422;328.060546875;14.1777982711792})
  sleep(3000)
  renyimen(1) 
  sleep(1000)
  Teleport({1.249151587486267;0.7454519867897034;5.2902655601501465})
  sleep(800) 
  stand(1) sleep(600) stand(2) sleep(2000)
  Teleport({9.934490203857422;328.060546875;14.1777982711792})
  sleep(9000) jiasu(1)
end
function sleep(x)
  gg.sleep(x)
end
  -- 位置判断
function weizhipanduan()
      weizhi = gg.getValues(weizhi)
      return weizhi[1].value
  end
  function M_DTCD()
    FX = "M_DTCD"
    local SN = gg.choice({
      "                                      遇境",
      "                                      晨岛",
      "                                      云野",
      "                                      雨林",
      "                                      霞谷",
      "                                      暮土",
      "                                      禁阁",
      "                                    暴风眼",
      "                                   重生之路",
      "                                   返回主页",
    }, nil)
    bt1() 
    if SN == 1 then
     
      cd_yj()
    elseif SN == 2 then
       
      cd_cd()
    elseif SN == 3 then
       
      cd_yy()
    elseif SN == 4 then
       
      cd_yl()
    elseif SN == 5 then
       
      cd_xg()
    elseif SN == 6 then
       
      cd_mt()
    elseif SN == 7 then
       
      cd_jg()
    elseif SN == 8 then
       
      cd_bfy()
    elseif SN == 9 then
       
      cd_cszl()
    elseif SN == 10 then
       
      home()
    end
end
function cd_yj()
    FX = "cd_yj"
    local list_cd = {
      "                                      小黑屋",
      "                                      观星台",
      "                                      上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--遇境彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    qt(1)
      Teleport(cdmap_yj[cd_index])
    end
end

function cd_cd()
    FX = "cd_cd"
    local list_cd = {
      "                                        彩虹桥",
      "                                        富士山",
      "                                       晨岛CG",
      "                                        上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--晨岛彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    qt(2)
      Teleport(cdmap_cd[cd_index])
      sleep(200)
      Teleport(cdmap_cd[cd_index])
    end
end
function cd_yy()
    FX = "cd_yy"
    local list_cd = {
      "                                    青青草原🌴-左侧图",
      "                                      幽灵船🚢-三塔图",
      "                                      小草坝🌴-终点图",
      "                                      云野CG💙-终点图",
      "                                                 上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--云野彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    if cd_index==1 then qt(5) end
    if cd_index==2 then qt(4) end
    if cd_index==3 then qt(8) end
    if cd_index==4 then qt(8) end
      Teleport(cdmap_yy[cd_index])
      sleep(200)
      Teleport(cdmap_yy[cd_index])
    end
end

function cd_yl()
    FX = "cd_yl"
    local list_cd = {
      "                                     梅花桩🎋-右侧图",
      "                                     雨林CG💙-终点图",
      "                                               上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--雨林彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    if cd_index==1 then qt(11) end
    if cd_index==2 then qt(14) end
      Teleport(cdmap_yl[cd_index])
      sleep(200)
      Teleport(cdmap_yl[cd_index])
    end
end

function cd_xg()
    FX = "cd_xg"
    local list_cd = {
      "                                        千鸟城🗺-终点图️",
      "                                     霞谷城堡🏰-飞行赛道",
      "                                     城堡云朵☁️-飞行赛道",
      "                                                 上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--霞谷彩蛋🐔--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    if cd_index==1 then qt(20) end
    if cd_index==2 then qt(17) end
    if cd_index==3 then qt(17) end
      Teleport(cdmap_xg[cd_index])
      sleep(200)
      Teleport(cdmap_xg[cd_index])
    end
end

function cd_mt()
    FX = "cd_mt"
    local list_cd = {
      "                                    冰淇淋山🍨-起点图",
      "                                     小云海☁️ - 沉船图",
      "                                     暮土CG💙-终点图",
      "                                                上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--墓土彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    if cd_index==1 then qt(21) end
    if cd_index==2 then qt(25) end
    if cd_index==3 then qt(27) end
      Teleport(cdmap_mt[cd_index])
      sleep(200)
      Teleport(cdmap_mt[cd_index])
    end
end

function cd_jg()
    FX = "cd_jg"
    local list_cd = {
      "                                     闪电桥⚡-终点图",
      "                                     蜡像馆🤶🏻-终点图",
      "                                     日月岛🌓-终点图",
      "                                    办公室门🌁-起点图",
      "                                    空间站🛰-办公室里",
      "                                                上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--禁阁彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    if cd_index==1 then qt(31) end
    if cd_index==2 then qt(31) end
    if cd_index==3 then qt(31) end
    if cd_index==4 then qt(28) end
    if cd_index==5 then qt(32) end
    Teleport(cdmap_jg[cd_index])
    sleep(200)
    Teleport(cdmap_jg[cd_index])
    end
end

function cd_bfy()
    FX = "cd_bfy"
    local BFY = gg.choice({
      "                                        图一终点",
      "                                        图二终点",
      "                                     图二 失色之地",
      "                                           上一页"
    }, nil, "--暴风眼彩蛋🐣--")
    bt3() 
    if BFY == 1 then
    qt(33)
      Teleport(gy_bfy[2])
    elseif BFY == 2 then
    qt(34)
      Teleport(gy_bfy[4])
    elseif BFY == 3 then
    qt(34)
      Teleport(cdmap_bfy[1])
      sleep(2000)
      Teleport(cdmap_bfy[2])
    elseif BFY == 4 then
      M_DTCD()
    end
end

function cd_cszl()
    FX = "cd_cszl"
    local list_cd = {
      "                                   一图🔥开始上面",
      "                                   一图🔥外围围墙",
      "                                     一图🔥墓  碑",
      "                                     一图🔥断石一",
      "                                     一图🔥断石二",
      "                                     一图🔥塔  尖",
      "                              一图🔥终点城堡塔顶",
      "                                     一图🔥终点",
      "                                     二图💙高  空",
      "                                     二图💙终点",
      "                                     三图🌹高空",
      "                                     三图🌹聊天椅",
      "                                     三图🌹祈祷石",
      "                                     三图🌹终点",
      "                                           上一页"
    }
    local cd_index = gg.choice(list_cd, nil, "--重生之路彩蛋🐣--")
    bt3() 
    if cd_index == #list_cd then
      M_DTCD()
    elseif cd_index ~= nil then
    if cd_index < 9 then qt(20) else
    if cd_index < 11 then qt(16) else
    if cd_index== 15 then M_DTCD() end end end
      Teleport(cdmap_cszl[cd_index])
    end
end
  KG_qtdr = "启动"
function A_qtdr()
  lzdz =XianShen_Lzdz
    if KG_qtdr == "启动" then
      gg.clearResults()
      gg.setRanges(4)
      search("-100", gg.TYPE_FLOAT)
      gg.refineNumber("-100", gg.TYPE_FLOAT)
      local ResultCount = gg.getResultCount()
      if ResultCount ~= 0 then
        local lz = gg.getResults(ResultCount)
        local tmp = {}
        do
          do
            for _FORV_6_, _FORV_7_ in pairs(lz) do
              tmp[#tmp + 1] = {}
              tmp[#tmp].address = _FORV_7_.address + 272
              tmp[#tmp].flags = gg.TYPE_FLOAT
            end
          end
        end
        tmp = gg.getValues(tmp)
        do
          for _FORV_6_, _FORV_7_ in pairs(tmp) do
            if _FORV_7_.value == 20 then
              lzdz = _FORV_7_.address - 328
              break
            end
          end
        end
      end
      gg.clearResults()
      if ResultCount == 0 or lzdz == nil then
        sleep(1000)
        return 0
      end
      KG_qtdr = "开"
    end
    if KG_qtdr == "关" then
      local lzpy = {}
      do
        do
          for _FORV_4_ = 1, 321 do
            lzpy[_FORV_4_] = {}
            lzpy[_FORV_4_].address = lzdz + _FORV_4_ * 448
            lzpy[_FORV_4_].flags = gg.TYPE_FLOAT
            lzpy[_FORV_4_].value = "1"
            lzpy[_FORV_4_].freeze = true
            gg.addListItems(lzpy)
          end
        end
      end
      
      KG_qtdr = "开"
    else
      local lzpy = {}
      do
        do
          for _FORV_4_ = 1, 321 do
            lzpy[_FORV_4_] = {}
            lzpy[_FORV_4_].address = lzdz + _FORV_4_ * 448
            lzpy[_FORV_4_].flags = gg.TYPE_FLOAT
            lzpy[_FORV_4_].freeze = false
            gg.addListItems(lzpy)
          end
        end
      end
    
      KG_qtdr = "关"
    end
end

  KG_qtzh = "开"
function A_qtzh()
    if KG_qtzh == "关" then
      zhajinhua()
      KG_qtzh = "开"
    else
      zhua()
      KG_qtzh = "关"
    end
end

  KG_wxnl = "启动"
function A_wxnl()
bt3() 
  local   r = {}
  r[1] = {}
                r[1].address = zerb.address
              r[1].flags = 16
              r[1].value = "9999"
    if KG_wxnl == "启动" then
      KG_wxnl = "开"
      gg.setValues(r)
      r[1].freeze = true
      gg.addListItems(r)
    elseif KG_wxnl == "关" then
      gg.toast("无限能量开启⚡⚡⚡")
      KG_wxnl = "开"
      gg.setValues(r)
      r[1].freeze = true
      gg.addListItems(r)
    else
    gg.setValues(r)
      r[1].freeze = false
      gg.addListItems(r)
      gg.toast("无限能量关闭❌")
      KG_wxnl = "关"
    end
end
  A_wxnl()
  jiasu(1)
function M_xggy()
    local num_GY = gg.prompt({
      "请输入光翼的数量"}, {[1] = "100"}, { [1] = "number" })
    if num_GY == nil then
      return 0
    else
      num_GY = tonumber(num_GY[1])
      if num_GY == 0 or num_GY == 1056964608 then
        num_GY = 1056964608
      elseif num_GY > 300 then
        gg.alert("请输入大于0，且不超过300的整数")
        return 0
      end
    end
    bt3() 
    A_xggy(num_GY)
end

  KG_xggy = "启动"
  Num_xggy = 150
  gysl = 100
function A_xggy(x)
  dengji[1].value = x
    gg.setValues(dengji)
end
  ---download( "http://49.234.215.120:88/errqz.lua","/sdcard/errqz.lua")
  ---dofile("/sdcard/errqz.lua")
if gg.getTargetPackage() == "com.tencent.tmgp.eyou.eygy" then
  gg.alert("应用宝服可能部分数据搜不到\n我修不好   用不了别找我")
  gg.alert("应用宝服可能部分数据搜不到\n我修不好   用不了别找我")
  gg.alert("应用宝服可能部分数据搜不到\n我修不好   用不了别找我")
end
  ----槽5
function mf5(num)
    local sd = zerb.address
    local cao5 = 		sd + 26876
    local mgckg = 		sd + 29756
    local cao5t = 	sd + 26884
    local bodyStates = {} 
          bodyStates[3]={}
          bodyStates[3].address= cao5
          bodyStates[3].flags=gg.TYPE_DWORD
          bodyStates[3].value=num
          bodyStates[4]={}
          bodyStates[4].address= mgckg
          bodyStates[4].flags=gg.TYPE_DWORD
          bodyStates[4].value=6
          bodyStates[7]={}
          bodyStates[7].address=cao5t
      bodyStates[7].flags = gg.TYPE_DWORD
      bodyStates[7].freeze = true
      bodyStates[7].value = -1404967393
      gg.setValues(bodyStates)
  gg.setVisible(false) 
end
  ----槽4
function mf4(mfa)
  local sd = zerb.address
    local cao4 = 		sd + 26684+48+48+48
    local mgckg = 		sd + 29756
    local cao4t = 	sd + 26836
    local bodyStates = {} 
          bodyStates[1]={}
          bodyStates[1].address= cao4
          bodyStates[1].flags=gg.TYPE_DWORD
          bodyStates[1].value=mfa
          bodyStates[1].freeze = true
          bodyStates[2]={}
          bodyStates[2].address= mgckg
          bodyStates[2].flags=gg.TYPE_DWORD
          bodyStates[2].freeze = true
          bodyStates[2].value=6
          bodyStates[3]={}
          bodyStates[3].address=cao4t
      bodyStates[3].flags = gg.TYPE_DWORD
      bodyStates[3].freeze = true
      bodyStates[3].value = -1404967393
      gg.setValues(bodyStates)
  gg.setVisible(false) 
end

  ----槽3
function mf3(mfa)
    local sd = zerb.address
    local cao3 = 		sd + 26684+48+48
    local mgckg = 		sd + 29756
    local cao3t = 	sd + 26788
    local bodyStates = {} 
          bodyStates[3]={}
          bodyStates[3].address= cao3
          bodyStates[3].flags=gg.TYPE_DWORD
          bodyStates[3].value=mfa
          bodyStates[4]={}
          bodyStates[4].address= mgckg
          bodyStates[4].flags=gg.TYPE_DWORD
          bodyStates[4].value=6
          bodyStates[7]={}
          bodyStates[7].address=cao3t
      bodyStates[7].flags = gg.TYPE_DWORD
      bodyStates[7].freeze = true
      bodyStates[7].value = 1752658590
      gg.setValues(bodyStates)
  gg.setVisible(false) 
end

  ----槽2
function mf2(mfb)
    local sd = zerb.address
    local cao2 = 	    sd + 26684+48
    local mgckg = 		sd + 29756
    local cao2t = 	sd + 26740
    local bodyStates = {} 
      bodyStates[2]={}
      bodyStates[2].address= cao2
      bodyStates[2].flags=gg.TYPE_DWORD
      bodyStates[2].value=mfb
          bodyStates[4]={}
          bodyStates[4].address= mgckg
          bodyStates[4].flags=gg.TYPE_DWORD
          bodyStates[4].value=6
          bodyStates[6]={}
          bodyStates[6].address= cao2t
      bodyStates[6].flags = gg.TYPE_DWORD
      bodyStates[6].freeze = true
      bodyStates[6].value = 1752658590
      gg.setValues(bodyStates)
  gg.setVisible(false) 
end

  ----槽1
function mf1(mfc)
    local sd = zerb.address
    local cao1 = 		sd + 26684
    local mgckg = 		sd + 29756
    local cao1t = 		sd + 26692
    local bodyStates = {} 
  bodyStates[1]={}
          bodyStates[1].address= cao1
      bodyStates[1].flags=gg.TYPE_DWORD
      bodyStates[1].value=mfc
          bodyStates[4]={}
          bodyStates[4].address= mgckg
          bodyStates[4].flags=gg.TYPE_DWORD
          bodyStates[4].value=6
          bodyStates[5]={}
          bodyStates[5].address= cao1t
      bodyStates[5].flags = gg.TYPE_DWORD
      bodyStates[5].freeze = true
      bodyStates[5].value = 1752658590
      gg.setValues(bodyStates)
  gg.setVisible(false) 
end
  ------动作升级
function dzsj()
  dongzuo = {}
for i = 1,100 do
dongzuo[1] = {}
dongzuo[1].address = zerb.address - 297524 + ( i - 1 ) * 48
dongzuo[1].flags = 4
dongzuo[1].value = 6
dongzuo[1].freeze = true
gg.setValues(dongzuo)
end
gg.alert("开启成功 From.绝代")
end

  ------霞谷先祖（未完成）
function xgxz()
    menux = gg.choice({
    "                                     叉腰",
    "                                     抱手",
    "                                     欢呼",
    "                                     倒立",
    "                                     鸟叫",
    "                               翻跟头+鞠躬",
    "                                 送先祖上天",
    "                                      返回"
    }, nil, "                                 霞谷先祖")
    if menux == 1 then gg.setVisible(false)  
  sleep(120)  dian() sleep(240)
  qt(15) sleep(1200) Teleport({168.277099609375;67.0854263305664;-448.800537109375}) jiasu(2000) 
  sleep(1400) Teleport({161.08958435058594;69.99774932861328;-460.7237548828125}) 
  sleep(1400) Teleport({151.21826171875;74.6903076171875;-452.7678527832031}) 
  sleep(1400) Teleport({161.33865356445312;76.40333557128906;-443.5313720703125}) 
  sleep(1400) Teleport({167.83753967285156;76.1551284790039;-445.0443420410156})
  gg.toast("                            传送完毕\n                         拿一下动作\n                    拿完再点击悬浮窗取消加速")FX="jiasuhf"  end
  if menux == 2 then gg.setVisible(false) 
  qt(18) jiasu(300) sleep(1200) jiasu(1) Teleport({198.5505828857422;728.150390625;-97.30519104003906}) sleep(240) qt(19) Teleport({57.655208587646484;133.77284240722656;-216.06204223632812}) jiasu(80) sleep(400) Teleport({57.655208587646484;133.77284240722656;-216.06204223632812}) sleep(400) jiasu(80)  Teleport({57.655208587646484;133.77284240722656;-216.06204223632812}) gg.alert("\n                         拿一下动作\n                    拿完再点击悬浮窗取消加速") FX="jiasuhf" gg.setVisible(false) end
    if menux == 3 then gg.setVisible(false) qt(9) gg.setVisible(false) sleep(800) qt(1) FX = "home" end
    if menux == 4 then gg.setVisible(false) qt() end
    if menux == 5 then gg.setVisible(false) qt(16) sleep(240) Teleport({122.53488159179688;473.30078125;6.8176493644714355}) jiasu(800)
    for i = 1,50 do
  xiguangmang() 
  sleep(15) end  gg.setVisible(false) gg.alert("\n                          拿一下动作\n                    拿完再点击悬浮窗取消加速") FX="jiasuhf" end
    if menux == 6 then gg.setVisible(false) qt(19) jiasu(300) sleep(1200) jiasu(1) Teleport({-447.40887451171875;1162.96240234375;84.96009826660156}) sleep(400) Teleport({127.4847412109375;1013.0018920898438;-75.20539855957031}) sleep(240) qt(19) Teleport({57.655208587646484;133.77284240722656;-216.06204223632812}) jiasu(80) sleep(400) Teleport({57.655208587646484;133.77284240722656;-216.06204223632812}) sleep(400) jiasu(80)  Teleport({57.655208587646484;133.77284240722656;-216.06204223632812}) gg.alert("\n                         拿一下动作\n                    拿完再点击悬浮窗取消加速") FX="jiasuhf" gg.setVisible(false) end
    if menux == 7 then gg.setVisible(false) qt(20) sleep(240) Teleport({9.411884307861328;137.9564666748047;-182.5710906982422}) gg.alert("                                           请坐。") end
    if menux == 8 then home() FX = "home" end
    
end
  -----无限烟花
function wxyh()
    gg.setVisible(false)
    gg.clearResults()
    gg.setRanges(4)
    search("-1076845609", gg.TYPE_DWORD)
    local XianShen_Jg = gg.getResultCount()
    if XianShen_Jg ~= 0 then
      local XianShen_Zjg = gg.getResults(XianShen_Jg)
      local jb = {}
      for k, v in pairs(XianShen_Zjg) do
        jb[#jb + 1] = {}
        jb[#jb].address = v.address + 28
        jb[#jb].flags = gg.TYPE_DWORD
      end
      jb = gg.getValues(jb)
      for k, v in pairs(jb) do
        if v.value == 5 then
          XianShen_Zjg[1] = jb[k]
          break
        end
      end
      local XianShen_Wxyh = {}
      XianShen_Wxyh[1] = {}
      XianShen_Wxyh[1].address = XianShen_Zjg[1].address - 4
      XianShen_Wxyh[1].flags = gg.TYPE_DWORD
      XianShen_Wxyh[1].value = "6"
      XianShen_Wxyh[1].freeze = true
      gg.addListItems(XianShen_Wxyh)
      gg.clearResults()
      gg.alert('                仙圣无限烟花开启成功\n若无效请手持烟花棒到放烟花界面重新执行') gg.setVisible(false)
    else
      gg.toast('仙圣无限烟花开启失败')
    end
end



function bcc()
  FX = "home"
  qt(1)
end
      -----关火
function shao()
      if KG_qtdr == "关"  then dhuo() end
    if KG_qtzh == "开"  then zhua() end
end
    KG_qtdr = "启动"
    KG_qtzh = "启动"
    ------点火
  function dian()
    if KG_qtdr == "关"  then dhuo() end
    if KG_qtzh == "关"  then zhua() end
    if KG_qtdr == "启动"  then dhuo() end
    if KG_qtzh == "启动"  then zhua() end
end
  --火坐标
  huozuobiao = {}
  for v = 1,3 do 
  huozuobiao[v] = {}
  for i = 1,193 do
  huozuobiao[v][i] = {}
  huozuobiao[v][i].address = zera.address + 448 *( i - 1) +4 * ( v - 1) - 80
  huozuobiao[v][i].flags = 16
  end
  end
  --遇境晨岛门开关
  chendaomen = {}
  chendaomen[1]={}
  chendaomen[1].address = zera.address + 4791892
  chendaomen[1].flags = 4
  --吸光翼值
  guangyi= {}
  for i = 1,9 do
  guangyi[i] = {}
  guangyi[i].address = zera.address + 304 * (i - 1) + 4795112
  guangyi[i].flags = 4 
  end
  --献祭 + 3544
  xianjip = {} for i = 1,63 do  xianjip[i] = {address = zera.address + 304 * (i - 1) + 4798656;flags = 4;value = 2} end

  -- 光芒
guangmangzuobiao = {}
  for v = 1, 3 do
      guangmangzuobiao[v] = {}
      for i = 1, 77 do
          guangmangzuobiao[v][i] = {}
          guangmangzuobiao[v][i].address =
              zera.address + 528 * (i - 1) + 4 * (v - 1) + 8215712
          guangmangzuobiao[v][i].flags = 16
      end
end
--光芒吸取
function xiguangmang()
      for i = 1, 3 do
          renzuobiao = gg.getValues(renzuobiao)
          xyz[i] = renzuobiao[i].value
      end
      for v = 1, 3 do
          for i = 1, 77 do guangmangzuobiao[v][i].value = xyz[v] end
          gg.setValues(guangmangzuobiao[v])
      end
      gg.toast("光芒吸取完成")
end
  zera[4]={}
  zera[4].address=zera.address+10043964
  zera[4].flags=16
  --炸花值
  zhahua = {}
  for i = 1,256 do
  zhahua[i] = {}
  zhahua[i].address = zera.address + i * 8+ 10299836
  zhahua[i].flags = gg.TYPE_FLOAT
  end
  --坐坛时间
  zuotan = {}
      for i=1,5 do
        zuotan[i] = {}
        zuotan[i].address = zera.address + (i - 1) * 24 + 10323656
        zuotan[i].flags = 4
        end
  --显示隐藏蜡烛
xianlazhu = {}
for i = 1, 193 do 
  xianlazhu[i] = {}
  xianlazhu[i].address = zera.address + 112 *( i - 1)  + 4934240
  xianlazhu[i].flags = 4
end
    --蜡烛
function dhuo()
  if KG_qtdr == "启动" or KG_qtdr == "关" then
      dianlazhu()
      KG_qtdr = "开"
      gg.toast("点蜡烛成功")
  else
  fdianlazhu()
      KG_qtdr = "关"
      gg.toast("蜡烛恢复")
  end
end
  --花
function zhua()
  if KG_qtzh == "启动" or KG_qtzh == "关" then
      zhajinhua()
      KG_qtzh = "开"
  else
  fzhajinhua()
      KG_qtzh = "关"
      gg.toast("炸花恢复")
  end
end
  --点蜡烛
function dianlazhu()
  wzpd()
  if X == 19 then fdianlazhu() gg.toast("霞谷终点点蜡烛闪退")
  else
  tmp = {}
      for i=1,450 do
        tmp[i] = {}
        tmp[i].address = zera.address + (i - 1) * 448
        tmp[i].flags = gg.TYPE_FLOAT
        tmp[i].value = 2
        tmp[i].freeze = true
      end
      gg.setValues(tmp)
      gg.addListItems(tmp)
      end
end
  --蜡烛恢复
function fdianlazhu()
  tmp = {}
      for i=1,450 do
        tmp[i] = {}
        tmp[i].address = zera.address + (i - 1) * 448
        tmp[i].flags = gg.TYPE_FLOAT
        tmp[i].value = 0
        tmp[i].freeze = false
      end
      gg.setValues(tmp)
      gg.addListItems(tmp)
      gg.removeListItems(tmp)
end
zhahua="关"
  --炸金花恢复
function fzhajinhua()
      for i = 1, 256 do
        tmp[i] = {}
        tmp[i].address = zera.address  + i * 8 + 10359708
        tmp[i].flags = gg.TYPE_FLOAT
        tmp[i].value = 1
        tmp[i].freeze = false
      end
      gg.setValues(tmp)
      gg.addListItems(tmp)
      gg.removeListItems(tmp)
      zhahua="关"
end
  --吸烛火
  ---842203136  
function xizhuhuo()
  gg.clearResults()
    gg.setRanges(4)
    laz("-842203136", gg.TYPE_DWORD)
    local shCount = gg.getResultCount()
    if shCount == 0 then
      gg.toast("烛火吸收失败❌")
      sleep(1000)
      return 0
    end
    local result = gg.getResults(shCount)
    local tmp = {}
    do
      do
        for _FORV_6_, _FORV_7_ in ipairs(result) do
          tmp[#tmp + 1] = {}
          tmp[#tmp].address = _FORV_7_.address - 12
          tmp[#tmp].flags = 16
        end
      end
    end
    tmp = gg.getValues(tmp)
    local x = {}
    do
      do
        for _FORV_7_, _FORV_8_ in ipairs(tmp) do
          if "" .. _FORV_8_.value == "3.5" then
            x[#x + 1] = {}
            x[#x].address = tmp[_FORV_7_].address
            x[#x].flags = 16
            x[#x].value = 999999
          end
        end
      end
    end
    gg.setValues(x)

    gg.clearResults()
end
  --炸金花
function zhajinhua()
      for i = 1, 256 do
        tmp[i] = {}
        tmp[i].address = zera.address  + i * 8 + 10359708
        tmp[i].flags = gg.TYPE_FLOAT
        tmp[i].value = 0
        tmp[i].freeze = true
      end
      gg.setValues(tmp)
      gg.addListItems(tmp)
      zhahua="开"
end
  --吸花
function xihua()
      for i = 1, 3 do
          renzuobiao = gg.getValues(renzuobiao)
          xyz[i] = renzuobiao[i].value
      end
      for v = 1, 3 do
          for i = 1, 266 do huazuobiao[v][i].value = xyz[v] end
          gg.setValues(huazuobiao[v])
          gg.addListItems(huazuobiao[v])
      end
      wzpd()
            if map[X][4] == 1 then
            xizhuhuo()
            gg.toast("等待炸花")
        sleep(2000)
        xizhuhuo()
            end
      -- gg.toast("吸取成功")
      if zhahua ~= "开" then zhajinhua() end
end
function zxz()
jiasu(500)
xihua()
for i=1,400 do
        zhajinhua()
       end
       jiasu(500)
end
function zhah()
  wzpd()
            if map[X][4] == 1 then
        ---gg.toast("花不炸就多等几秒")
        for i=1,400 do
        zhajinhua()
       end
        end
end
function xidx()
  gg.setVisible(false)
  gg.clearResults()
  gg.setRanges(gg.REGION_C_ALLOC)
  gg.searchNumber("1043045760", 4, false, gg.SING_EQUAL, zerh.address,zeri.address)
  z = gg.getResultCount()
  p = gg.getResults(z)
        t = {}
      for i, v in pairs(p) do
        t[#t + 1] = {}
        t[#t].address = v.address - 40
        t[#t].flags = 4
  end
      j = 0
      t = gg.getValues(t)
  local r = {}
      for i, v in pairs(t) do
      if v.value == 711 then
      j = j + 1
      r[j] = {}
      r[j] = t[i]
      p[j] = t[i]
  end 
  end
  for i = 1, j do
  renzuobiao=gg.getValues(renzuobiao)
                      r[1] = {}
                r[1].address = p[i].address + 8
              r[1].flags = 16
            r[1].value = renzuobiao[1].value
            r[2] = {}
                r[2].address = p[i].address + 12
              r[2].flags = 16
            r[2].value = renzuobiao[2].value
            r[3] = {}
                r[3].address = p[i].address + 16
              r[3].flags = 16
            r[3].value = renzuobiao[3].value
  gg.setValues(r)	
  end
end
  --显蜡烛
function xianlazhuk()
  for i = 1,193 do
  xianlazhu[i].value = 28673
  end
  gg.setValues(xianlazhu)
end
  --加速
function jsu(x)
  sudu[1].value = x
  ---sudu[1].freeze = true
  gg.setValues(sudu)
  gg.addListItems(sudu)
  gg.toast("当前速度为".. x .."倍速")
end
  ---预言大厅
function spawn()
  qt(41) sleep(400)
  Teleport({-13.286972045898438;236.2270965576172;-296.8418884277344})
  FX="gj"
  end
  ---预言1
  function sp(o)
  if o == 1 then
  if tostring(weizhipanduan()) == "-410824576" then water() else
  qt(42)
  jiasu(1)
  end
  end

  if o == 2 then
  if tostring(weizhipanduan()) == "1887730855" then earth() else
  qt(43)
  end
  end
  if o == 3 then
  if tostring(weizhipanduan()) == "2050064391" then water() else
  qt(44)
  jiasu(1)
  end end
  if o == 4 then
  if tostring(weizhipanduan()) == map[45][2] then water() else
  qt(45)
  jiasu(1)
  end end
end
  ----水
function water()
  if tostring(weizhipanduan()) == "-410824576" then
  Teleport({-1.3870768547058105;66.53087615966797;-5.928771018981934}) sleep(200)
  Teleport({-4.1609930992126465;66.09928894042969;-21.370647430419922}) sleep(200)
  Teleport({7.61514949798584;66.35465240478516;-30.766780853271484}) sleep(200)
  Teleport({24.50125503540039;66.61375427246094;-30.70013427734375}) sleep(200)
  Teleport({28.95473861694336;66.36443328857422;-61.31894302368164}) sleep(200)
  Teleport({53.44245529174805;66.16812133789062;-144.14453125}) sleep(200)
  Teleport({58.41146469116211;65.78926086425781;-167.55902099609375}) sleep(200)
  Teleport({11.619904518127441;66.99311065673828;-177.79296875}) sleep(200)
  Teleport({28.951515197753906;66.95387268066406;-229.90565490722656}) sleep(200)
  Teleport({44.17314910888672;67.06240844726562;-268.99169921875}) sleep(200)
  stand(1)
  Teleport({44.33366394042969;67.9451904296875;-272.7672119140625}) sleep(200)
  stand(2) jiasu(10) sleep(3000)
  Teleport({-0.07508331537246704;78.92533111572266;-411.83837890625})
  stand(1) stand(2)
  jiasu(10)
  sleep(2000)
  jiasu(1)
  FX="spawn"
  else 
  sp(1) water()
  end
end
function fire()
  if tostring(weizhipanduan()) == "1241316521" then
  jiasu(10)
  stand(1)
  Teleport({-12.359795570373535;50.351444244384766;-257.259521484375}) sleep(200)
  stand(1)
  sleep(200)
  stand(2) jiasu(10) sleep(6000)
  Teleport({-10.921878814697266;50.33679962158203;-307.5331115722656}) sleep(200)
  jiasu(1) sleep(6000)
  jiasu(10)
  sleep(6000)
  jiasu(1)
  FX="spawn"
  else 
  sp(4) fire()
  end
end
function air()
  if tostring(weizhipanduan()) == "2050064391" then
  jiasu(10)
  stand(1)
  Teleport({-27.804771423339844;40.53415298461914;-65.41941833496094}) sleep(2200)
  Teleport({-26.31490135192871;46.485504150390625;-91.47370910644531}) sleep(2200)
  Teleport({-13.478954315185547;53.08567810058594;-120.46976470947266}) sleep(200)
  Teleport({0.7857781648635864;59.80786895751953;-125.65000915527344}) sleep(200)
  Teleport({-13.28625774383545;65.38431549072266;-120.72108459472656}) sleep(200)
  Teleport({-18.11642837524414;89.92178344726562;-111.53268432617188}) sleep(200)
  Teleport({-28.588476181030273;90.52332305908203;-130.87179565429688}) sleep(200)
  stand(1)
  sleep(200)
  stand(2) jiasu(10) sleep(6000)
  Teleport({-11.485074996948242;106.23041534423828;-130.45713806152344}) sleep(200)
  Teleport({-11.485074996948242;106.23041534423828;-130.45713806152344}) sleep(200)
  Teleport({-11.485074996948242;106.23041534423828;-130.45713806152344}) sleep(200)
  Teleport({-11.485074996948242;106.23041534423828;-130.45713806152344}) sleep(200)
  jiasu(1) sleep(6000)
  jiasu(10)
  sleep(6000)
  jiasu(1)
  FX="spawn"
  else 
  sp(3) air()
  end
end
  ----土
function earth()
  if tostring(weizhipanduan()) == "1887730855" then
  jiasu(10)
  Teleport({51.76540756225586;121.81730651855469;7.333454132080078}) sleep(2200)
  Teleport({38.00835418701172;122.0077133178711;3.71280837059021}) sleep(2200)
  Teleport({11.570107460021973;122.06218719482422;30.44308853149414}) sleep(200)
  Teleport({15.021055221557617;122.5512924194336;43.154109954833984}) sleep(200)
  Teleport({34.56270217895508;125.54285430908203;24.10043716430664}) sleep(200)
  Teleport({-55.43803405761719;123.5001220703125;42.615779876708984}) sleep(200)
  Teleport({1.4959765672683716;128.29539489746094;15.953755378723145}) sleep(200)
  stand(1)
  sleep(200)
  stand(2) jiasu(10) sleep(6000)
  Teleport({-14.029824256896973;133.98452758789062;3.094736099243164}) sleep(200)
  stand(1) stand(2)
  jiasu(10)
  sleep(2000)
  jiasu(1)
  FX="spawn"
  else 
  sp(2) earth()
  end
  end
  diaoxiang= {}
  for i = 1,63 do
    diaoxiang[i] = {}
    diaoxiang[i].address = zera.address + 304 * (i - 1) + 4799456
    diaoxiang[i].flags = 4
end 
function xi()
  if weizhipanduan() == "-1900248111" then xianlazhuk() end
        dianlazhu()
        wzpd()
        xihua()
        xizhuhuo()
end
  -- 人等级
dengji = {}
  dengji[1] = {}
  dengji[1].address = zerb.address - 56684  
  dengji[1].flags = 4
gg.addListItems(dengji)
  --人坐标
renzuobiao = {}
for i = 1, 3 do
    renzuobiao[i] ={}
    renzuobiao[i].address = zerb.address + 4 * (i - 1) - 23220
    renzuobiao[i].flags = 16
end
function config()
  FX = "config" 
  menuco = gg.choice({
    "                                      变速&亮度",
    "                                       点火「" .. KG_qtdr .. "」",
      "                                       炸花「" .. KG_qtzh .. "」",
      "                                       无限能量【" .. KG_wxnl .. "】",
      '                                        临时光翼',
    '                                        返回主页',
    }, nil)
    if menuco == 1 then bt3() bin=gg.prompt({"速度[1;10]","亮度[-100;100]"}, 
  {sdu2,ldu3},
  {'number','number'})
  bt3() 
  if bin == nil then 
  jiasu(1) tiaoliangdu(1)
  else
  jiasu(bin[1])
  tiaoliangdu(bin[2])
  end end 
    if menuco == 2 then bt3() dhuo() end
    if menuco == 3 then bt3() zhua() end
    if menuco == 4 then bt3() A_wxnl() end
    if menuco == 5 then   bt1() M_xggy() end
    if menuco == 6 then   bt1() home() end
end
  ---魔法槽位菜单
  function mgc() FX = "mgc"   menumgc = gg.choice({"                                   魔法槽1「" .. mname1 .. "」","                                   魔法槽2「" .. mname2 .. "」", "                                   魔法槽3「" .. mname3 .. "」","                                   魔法槽4「" .. mname4 .. "」", "                                   魔法槽5「" .. mname5 .. "」", '                                               清空','                                               返回',}, nil,"                                  槽4和槽5 是 自慰")   if menumgc == 1 then  mfcd(1) end if menumgc == 2 then  mfcd(2) end  if menumgc == 3 then  mfcd(3) end  if menumgc == 4 then  mfcd(4) end  if menumgc == 5 then  mfcd(5) end  if menumgc == 6 then   mf1(0) mf2(0) mf3(0) mf4(0) mf5(0) mname1 = "无" mname2 = "无" mname3 = "无" mname4 = "无" mname5 = "无" end  if menumgc == 7 then     yule() end end mname1 = "无" mname2 = "无" mname3 = "无" mname4 = "无" mname5 = "无"
  ---头部变装魔法
  function mfcd1(mfc) FX = "mgc" menumf1 = gg.choice({'                                       魔法帽','                                       南瓜头','                                       白鸟头','                                       牛粪头','                                         鹿头','                                       圣诞帽','                                       纪念帽','                                         鹿角','                                       宴会结','                                          无','                                        返回',  }, nil)     if menumf1 == 1 then gg.setVisible(false) mfmf(mfc,1983755432,"魔法帽") gg.setVisible(false) end  if menumf1 == 2 then gg.setVisible(false) mfmf(mfc,1046521292,"南瓜头") gg.setVisible(false) end  if menumf1 == 3 then gg.setVisible(false) mfmf(mfc,-1040619876,"白鸟头") gg.setVisible(false) end  if menumf1 == 4 then gg.setVisible(false) mfmf(mfc,-283559204,"牛粪头") gg.setVisible(false) end  if menumf1 == 5 then gg.setVisible(false) mfmf(mfc,-336730088,"鹿头") gg.setVisible(false) end  if menumf1 == 6 then gg.setVisible(false) mfmf(mfc,-1409683913,"圣诞帽") gg.setVisible(false) end  if menumf1 == 7 then gg.setVisible(false) mfmf(mfc,-1821010377,"纪念帽") gg.setVisible(false) end  if menumf1 == 8 then gg.setVisible(false) mfmf(mfc,1909998088,"鹿角") gg.setVisible(false) end  if menumf1 == 9 then gg.setVisible(false) mfmf(mfc,8361886,"宴会结") gg.setVisible(false) end  if menumf1 == 10 then  if mfc=="1" then mf1(0) mname1 = "无" end  if mfc=="2" then mf2(0) mname2 = "无" end  if mfc=="3" then mf3(0) mname3 = "无" end   if mfc=="4" then mf4(0) mname4 = "无" end   if mfc=="5" then mf5(0) mname5 = "无" end  gg.setVisible(false) end if menumf1 == 11 then FX="mgc" mgc() end end
  ---魔法类型菜单
  function mfcd(mfc) FX = "mgc" menumf2 = gg.choice({'                                        头部','                                        背部','                                       BUFF','                                        返回', }, nil)     if menumf2 == 1 then gg.setVisible(false) mfcd1(mfc) end  if menumf2 == 2 then gg.setVisible(false) mfcd2(mfc) end  if menumf2 == 3 then gg.setVisible(false) mfcd3(mfc) end if menumf2 == 4 then gg.setVisible(false) mgc() end end
  ---斗篷&背饰魔法
  function mfcd2(mfc) FX = "mgc" menumf3 = gg.choice({'                                     蝙蝠斗篷','                                       鲲斗篷','                                     蜘蛛斗篷','                                     雪花斗篷','                                     圣诞斗篷','                                         篝火','                                         雨伞','                                     宴会长桌','                                          无','                                        返回', }, nil)     if menumf3 == 1 then gg.setVisible(false) mfmf(mfc,625581156,"蝙蝠斗篷") gg.setVisible(false) end  if menumf3 == 2 then gg.setVisible(false) mfmf(mfc,135625388,"鲲斗篷") gg.setVisible(false) end  if menumf3 == 3 then gg.setVisible(false) mfmf(mfc,930203946,"蜘蛛斗篷") gg.setVisible(false) end  if menumf3 == 4 then gg.setVisible(false) mfmf(mfc,-784831205,"雪花斗篷") gg.setVisible(false) end  if menumf3 == 5 then gg.setVisible(false) mfmf(mfc,1306675982,"圣诞斗篷") gg.setVisible(false) end  if menumf3 == 6 then gg.setVisible(false) mfmf(mfc,-381847718,"篝火") gg.setVisible(false) end  if menumf3 == 7 then gg.setVisible(false) mfmf(mfc,-992017029,"雨伞") gg.setVisible(false) end  if menumf3 == 8 then gg.setVisible(false) mfmf(mfc,256924066,"宴会长桌") gg.setVisible(false) end  if menumf3 == 9 then if mfc=="1" then mf1(0) mname1 = "无" end  if mfc=="2" then mf2(0) mname2 = "无" end  if mfc=="3" then mf3(0) mname3 = "无" end   if mfc=="4" then mf4(0) mname4 = "无" end   if mfc=="5" then mf5(0) mname5 = "无" end  gg.setVisible(false) end if menumf3 == 10 then FX="mgc" mgc() end end
  ---buff类魔法
  function mfcd3(mfc) FX = "mgc" menumf4 = gg.choice({'                                        幼崽','                                        成年','                                        变大','                                        变小','                                        璀璨','                                        驱龙','                                        防水','                                        漂浮','                                        元气','                                        抗黑','                                          无','                                        返回',}, nil)    if menumf4 == 1 then gg.setVisible(false) mfmf(mfc,1692428656,"幼崽") gg.setVisible(false) end if menumf4 == 2 then gg.setVisible(false) mfmf(mfc,891098028,"成年")  gg.setVisible(false) end if menumf4 == 3 then gg.setVisible(false) mfmf(mfc,-1879316162,"变大") gg.setVisible(false) end if menumf4 == 4 then gg.setVisible(false) mfmf(mfc,2142718166,"变小") gg.setVisible(false) end if menumf4 == 5 then gg.setVisible(false) mfmf(mfc,1097748727,"璀璨") gg.setVisible(false) end  if menumf4 == 6 then gg.setVisible(false) mfmf(mfc,1067647386,"驱龙") gg.setVisible(false) end  if menumf4 == 7 then gg.setVisible(false) mfmf(mfc,-1463943689,"防水") gg.setVisible(false) end  if menumf4 == 8 then gg.setVisible(false) mfmf(mfc,1860519737,"漂浮") gg.setVisible(false) end  if menumf4 == 9 then gg.setVisible(false) mfmf(mfc,1750685908,"元气") gg.setVisible(false) end  if menumf4 == 10 then gg.setVisible(false) mfmf(mfc,383062578,"抗黑") gg.setVisible(false) end  if menumf4 == 11 then   if mfc=="1" then mf1(0) mname1 = "无" end  if mfc=="2" then mf2(0) mname2 = "无" end  if mfc=="3" then mf3(0) mname3 = "无" end   if mfc=="4" then mf4(0) mname4 = "无" end   if mfc=="5" then mf5(0) mname5 = "无" end  gg.setVisible(false) end if menumf4 == 12 then FX="mgc" mgc() end end
  ---魔法重复判断
  function mfmf(mfc,mf,mname) if mname == "无" then if mfc == 1 then mf1(0) mname1 = mname elseif mfc == 2 then mf2(0) mname2 = mname elseif mfc == 3 then mf3(0) mname3 = mname elseif mfc == 4 then mf4(0) mname4 = mname elseif mfc == 5 then mf5(0) mname5 = mname end else if mfc == 1 and mname1~=mname and mname2~=mname and mname3~=mname and mname4~=mname and mname5~=mname then mf1(mf) mname1 = mname elseif mfc == 2 and mname1~=mname and mname2~=mname and mname3~=mname and mname4~=mname and mname5~=mname then mf2(mf) mname2 = mname elseif mfc == 3 and mname1~=mname and mname2~=mname and mname3~=mname and mname4~=mname and mname5~=mname then mf3(mf) mname3 = mname elseif mfc == 4 and mname1~=mname and mname2~=mname and mname3~=mname and mname4~=mname and mname5~=mname then mf4(mf) mname4 = mname elseif mfc == 5 and mname1~=mname and mname2~=mname and mname3~=mname and mname4~=mname and mname5~=mname then mf5(mf) mname5 = mname else gg.alert("已存在此魔法效果") end end end
  ---魔法粒子特效（需提前生效一个魔法））
  function particle() local jb = {} jb = {} jb[1] = {} jb[1].address = zerb.address + 26724 jb[1].flags = gg.TYPE_DWORD jb[1].freeze = false jb[1].value = 0 gg.setValues(jb) gg.addListItems(jb) gg.removeListItems(jb) end
  ---冻结特效开关
  function magic() mf1(1097748727) magicc = "开" local jb = {} jb = {} jb[1] = {} jb[1].address = zerb.address + 26684+40 jb[1].flags = gg.TYPE_DWORD jb[1].freeze = true jb[1].value = 0 gg.setValues(jb) gg.addListItems(jb) end
  function magicoff() mf1(0) local jb = {} jb = {} jb[1] = {} jb[1].address = zerb.address + 26684+40 jb[1].flags = gg.TYPE_DWORD jb[1].freeze = false jb[1].value = 0 gg.setValues(jb) gg.addListItems(jb) gg.removeListItems(jb) magicc = "关" end


  ---总动作菜单
  function dzdzdz()FX = "dzdzdz" gg.setVisible(false)menuu=gg.choice({"                                        晨岛","                                        云野","                                        雨林","                                        霞谷","                                        墓土","                                        禁阁","                                        返回",},nil,"              仅限自用，挂平台卖动作的都是大傻逼") if menuu==nil then else if menuu==1 then    dzcd1() end if menuu==2 then    dzcd2() end  if menuu==3 then    dzcd3() end  if menuu==4 then    dzcd4() end if menuu==5 then    dzcd5() end if menuu==6 then    dzcd6() end  if menuu==7 then    gj() end  end end
  ----云野菜单
function dzcd2()
  FX = "dzcd2"
  dz_menu = gg.choice({
      "                           第一步重置先祖",
      "                           第二步选择动作",
      "                           第三步动作生效"
    }, nil)
     
  if dz_menu == nil then else
    if dz_menu == 1 then  gg.setVisible(false) cdxz2() wcd=1 end
      if dz_menu == 2 then xzxz2() gg.setVisible(false) end
      if dz_menu == 3 then kill() end end 
end
function cdxz2()
  gg.setVisible(false)
  setClear(64338276)
  sleep(200) gg.alert("RUSH B")
  qt(3) sleep(2400) gg.alert("进图以后点确定")
  sleep(120) xi() jiasu(8)
  Teleport({101.39147186279297;155.259765625;17.573368072509766})
  sleep(1600) Teleport({116.76346588134766;157.09292602539062;31.87032127380371})
  sleep(1600) Teleport({108.52499389648438;156.45452880859375;26.652238845825195})
  sleep(1600) Teleport({103.02177429199219;157.47422790527344;32.652015686035156})
  sleep(1600) Teleport({111.87478637695312;156.29339599609375;26.444881439208984})
  gg.alert("拿到动作后开始第二步")
   
  gg.setVisible(false)
  wcd=1
end
function xzxz2()
  gg.setVisible(false)
  menuyy = gg.choice({
  "                                        伸展",
  "                                        击掌",
  "                                        炮仗",
  "                                        跳舞"
  },nil)
     
  if menuyy == nil then else
  if menuyy == 1 then final("64338276","1841001535","yunye") end
  if menuyy == 2 then final("64338276","1372682856","yunye") end 
  if menuyy == 3 then final("64338276","3921932554","yunye") end 
  if menuyy == 4 then final("64338276","4162136220","yunye") end 
  end
end
  ----雨林菜单
function dzcd3()
  FX = "dzcd3"
  dz_menu = gg.choice({
      "                             第一步重置先祖",
      "                             第二步选择动作",
      "                             第三步动作生效"
    }, nil)
     
    if dz_menu == nil then else
    if dz_menu == 1 then  gg.setVisible(false)
  cdxz3()
  wcd=1 end
      if dz_menu == 2 then xzxz3() gg.setVisible(false) end
      if dz_menu == 3 then
      kill()
    end
    end
end
function cdxz3()
  gg.setVisible(false)
  setClear(3930381583)
  sleep(200) gg.alert("RUSH B")
  qt(9) sleep(2500) gg.alert("RUSH B") Teleport({30.717544555664062;97.58821105957031;-179.51841735839844}) sleep(800) xi() jiasu(100)
  sleep(600) Teleport({16.617733001708984;96.83940124511719;-177.96267700195312})
  sleep(600) Teleport({15.658097267150879;96.08138275146484;-166.01182556152344})
  sleep(600) Teleport({10.525557518005371;97.85975646972656;-155.72642517089844})
  sleep(600) Teleport({13.903735160827637;99.43929290771484;-145.87484741210938})
  sleep(600) Teleport({18.225797653198242;99.09698486328125;-133.9534149169922})
  shao()
  gg.alert("拿到动作后开始第二步")
  gg.setVisible(false)
  wcd=1
end
function xzxz3()
  gg.setVisible(false)
  menuyy = gg.choice({
  "                                        功夫",
  "                                        雨伞",
  "                                        摸头",
  "                                        飞吻"
  },nil)
     
  if menuyy == nil then else
  if menuyy == 1 then final("3930381583","3416766502","yulin") end
  if menuyy == 2 then final("3930381583","638820386","yulin") end 
  if menuyy == 3 then final("3930381583","560443823","yulin") end 
  if menuyy == 4 then final("3930381583","3723728503","yulin") end 
  end
end
  ----霞谷菜单
function dzcd4()
  FX = "dzcd4"
  dz_menu = gg.choice({
      "                           第一步重置先祖",
      "                           第二步选择动作",
      "                           第三步动作生效"
    }, nil)
     
    if dz_menu == nil then else
    if dz_menu == 1 then  gg.setVisible(false)
  cdxz4()
  wcd=1 end
      if dz_menu == 2 then xzxz4() gg.setVisible(false) end
      if dz_menu == 3 then
      kill()
    end
    end
end
function cdxz4()
  gg.setVisible(false)
  setClear(3307167098)
  sleep(200)
  qt(15) sleep(1200) xihua() zxz() Teleport({168.277099609375;67.0854263305664;-448.800537109375}) jiasu(2000)
  sleep(2000) Teleport({168.277099609375;67.0854263305664;-448.800537109375}) jiasu(2000)
  sleep(2000) Teleport({161.08958435058594;69.99774932861328;-460.7237548828125})jiasu(2000)
  sleep(2000) Teleport({151.21826171875;74.6903076171875;-452.7678527832031})jiasu(2000)
  sleep(2000) Teleport({161.33865356445312;76.40333557128906;-443.5313720703125})
  sleep(2000) Teleport({167.83753967285156;76.1551284790039;-445.0443420410156})
  gg.alert("拿到动作后开始第二步")jiasu(2000)
  gg.setVisible(false)
  wcd=1
end
function xzxz4()
  gg.setVisible(false)
  menuyy = gg.choice({
  "                                        窥探",
  "                                        旋技",
  "                                        炫舞",
  "                                        熊抱",
  "                                        芜湖",
  ---"                                        转圈",
  ---"                                        花手",
  "                                        杂技",
  "                                        返回"
  },nil)
     
  if menuyy == nil then else
  if menuyy == 1 then final("3307167098","2937389342","xiagu") end
  if menuyy == 2 then final("3307167098","3492441000","xiagu") end
  if menuyy == 3 then final("3307167098","3468476451","xiagu") end
  if menuyy == 4 then final("3307167098","145501185","xiagu") end
  if menuyy == 5 then final("3307167098","3637782525","xiagu") end
  ---if menuyy == 2 then final("3307167098","3143328229","xiagu") end 
  ---if menuyy == 3 then final("3307167098","627603397","xiagu") end 
  if menuyy == 6 then final("3307167098","3379075209","xiagu") end 
  if menuyy == 7 then home() end
  end
end
  ----墓土菜单
function dzcd5()
  FX = "dzcd5"
  dz_menu = gg.choice({
      "                         第一步重置先祖",
      "                         第二步选择动作",
      "                         第三步动作生效"
    }, nil)
     
    if dz_menu == nil then else
    if dz_menu == 1 then  gg.setVisible(false)
  cdxz5()
  wcd=1 end
      if dz_menu == 2 then xzxz5() gg.setVisible(false) end
      if dz_menu == 3 then
      kill()
    end
    end
end
function cdxz5()
  gg.setVisible(false)
  setClear(1060292445)
  sleep(200) gg.alert("RUSH B")
  qt(22) sleep(1020) Teleport({-21.022872924804688;7.687601566314697;263.1231994628906}) sleep(700) Teleport({-21.022872924804688;7.687601566314697;263.1231994628906}) jiasu(2000)
  sleep(1200) Teleport({-32.31200408935547;2.578775405883789;244.72828674316406})
  sleep(1200) Teleport({-27.70017433166504;0.4585024416446686;230.10153198242188})
  sleep(1200) Teleport({-18.609453201293945;1.7677735090255737;219.97650146484375})
  sleep(1200) Teleport({-21.618343353271484;1.1518057584762573;207.3103790283203})
  gg.alert("拿到动作后开始第二步")
  gg.setVisible(false)
  wcd=1
end
function xzxz5()
  gg.setVisible(false)
  menuyy = gg.choice({
  "                                        敬礼",
  "                                      螃蟹叫",
  "                                        尔康",
  "                                        骑士",
  "                                        瞌睡",
  "                                        吓人",
  "                                        锤人",
  "                                        无奈",
  "                                     螃蟹动作"
  },nil)
     
  if menuyy == nil then else
  if menuyy == 1 then final("1060292445","1972794995","mutu") end
  if menuyy == 2 then final("1060292445","1543189191","mutu") end 
  if menuyy == 3 then final("1060292445","3613216684","mutu") end 
  if menuyy == 4 then final("1060292445","1801995405","mutu") end 
  if menuyy == 5 then final("1060292445","967947706","mutu") end 
  if menuyy == 6 then final("1060292445","2120182059","mutu") end 
  if menuyy == 7 then final("1060292445","1251050323","mutu") end 
  if menuyy == 8 then final("1060292445","2248102924","mutu") end 
  if menuyy == 9 then final("1060292445","235271310","mutu") end 
  end
end
  ----禁阁菜单
function dzcd6()
  FX = "dzcd6"
  dz_menu = gg.choice({
      "                            第一步重置先祖",
      "                            第二步选择动作",
      "                            第三步动作生效"
    }, nil)
     
    if dz_menu == nil then else
    if dz_menu == 1 then  gg.setVisible(false)
  cdxz6()
  wcd=1 end
      if dz_menu == 2 then xzxz6() gg.setVisible(false) end
      if dz_menu == 3 then
      kill()
    end
    end
end
function cdxz6()
  gg.setVisible(false)
  setClear(1060292445)
  sleep(200) gg.alert("冲鸭") qt(28)  sleep(2200) gg.alert("冲鸭")  Teleport({47.28824234008789;83.77191162109375;42.8892936706543}) xi() jiasu(10)  
  sleep(1600) Teleport({34.95984649658203;83.89051055908203;49.509517669677734}) 
  sleep(1600) Teleport({29.333452224731445;86.6907958984375;60.34990692138672}) 
  sleep(1600) Teleport({29.333452224731445;89.6907958984375;60.34990692138672}) 
  sleep(1600) Teleport({27.75568962097168;82.82476806640625;39.72005844116211})
  gg.alert("拿到动作后开始第二步")
  gg.setVisible(false)
  wcd=1
end
function xzxz6()
  gg.setVisible(false)
  menuyy = gg.choice({
  "                                        抱拳",
  "                             住口(暂不可用)",
  "                             背手(暂不可用)",
  "                             思考(暂不可用)"
  },nil)
     
  if menuyy == nil then else
  if menuyy == 1 then final("2041153688","3811807379","jinge") end
  if menuyy == 2 then final("2041153688","3828216322","jinge") end 
  if menuyy == 3 then final("2041153688","391633837","jinge") end 
  if menuyy == 4 then final("2041153688","2093468251","jinge") end 
  end
end
  local wcd=0
  -----晨岛菜单
function dzcd1()
  FX = "dzcd1"
  dz_menu = gg.choice({
      "                           第一步重置先祖",
      "                           第二步选择动作",
      "                           第三步动作生效"
    }, nil)
     
    if dz_menu == nil then else
    if dz_menu == 1 then  gg.setVisible(false)
  cdxz1()
  wcd=1 end
      if dz_menu == 2 then xzxz1() gg.setVisible(false) end
      if dz_menu == 3 then
      kill()
    end
    end
end
  xzxzx=2
function cdxz1()
  gg.setVisible(false)
  setClear(414084241)
  sleep(200) gg.alert("RUSH B")
  qt(2) sleep(2400) gg.alert("进图以后点确定")
  sleep(120) jiasu(3000)
  Teleport({65.38693237304688;4.8500285148620605;105.0792465209961}) xi()
  sleep(1400) Teleport({59.46867752075195;4.837636947631836;105.25846099853516})
  sleep(1400) Teleport({51.96525573730469;5.121166706085205;110.58770751953125})
  sleep(1400) Teleport({58.786163330078125;4.933334827423096;117.56562805175781})
  sleep(1400) Teleport({73.31504821777344;4.803483009338379;113.78606414794922})
  gg.alert("拿到动作后开始第二步")
  gg.setVisible(false)
end
function xzxz1()
  gg.setVisible(false)
  menu=gg.choice({
  "                                        妖娆",
  "                                        蹦迪",
  "                                        背背",
  "                                        邀请",
  "                                      预言-火",
  "                                      预言-风",
  "                                      预言-土",
  "                                      预言-水"
  },nil)
     
  if menu==nil then else
  if menu==1 then final("414084241","3270784407","chendao") end
  if menu==2 then final("414084241","1375735318","chendao") end 
  if menu==3 then final("414084241","1880348208","chendao") end 
  if menu==4 then final("414084241","669089267","chendao") end 
  if menu==5 then cnm() gg.alert("别TM出去卖🤬") final("414084241","3098835268","chendao") end 
  if menu==6 then cnm() gg.alert("别TM出去卖🤬") final("414084241","2560266987","chendao") end 
  if menu==7 then cnm() gg.alert("别TM出去卖🤬") final("414084241","1888998250","chendao") end 
  if menu==8 then cnm() gg.alert("别TM出去卖🤬") final("414084241","2326309241","chendao") end 
  end
end
function final(ylid,xzid,dtu)
   jiasu(2000)
  gg.setVisible(false)
    gg.clearResults()
    search(ylid, 32) 
    gg.getResults(gg.getResultCount())
    gg.editAll(xzid ,gg.TYPE_QWORD)
    gg.clearResults()
    if dtu == "chendao" then
  Teleport({155.88746643066406;103.40572357177734;-293.22967529296875})
  gg.alert("一会儿不要点红点,关掉执行第三步")
      stand(2)
      gg.toast("看完动画关星盘执行第三步")
      wcd = 2
  end
      if dtu == "yunye" then
      qt(8) jiasu(8) sleep(2200) Teleport({-112.02240753173828;88.57816314697266;42.290916442871094})
  gg.alert("一会儿不要点红点,关掉执行第三步")
      stand(2)
      gg.toast("看完动画关星盘执行第三步")
      wcd = 2
      end
      if dtu == "yulin" then
      qt(14) jiasu(8) 
  sleep(1800) Teleport({-0.12410711497068405;105.28367614746094;-31.76953887939453})
  sleep(1200) Teleport({0.3932371437549591;105.32759094238281;-27.61100959777832})
  sleep(1200) Teleport({0.5888687968254089;105.31550598144531;-23.03534698486328})
  sleep(1200) Teleport({0.11470893025398254;107.12124633789062;-13.607157707214355})
  sleep(1200) Teleport({0.16918084025382996;107.7917709350586;-8.371699333190918})
  sleep(1200) Teleport({0.0012330518802627921;111.06143951416016;-6.848142147064209})
  sleep(1200) Teleport({0.7159623503684998;115.51197814941406;-4.309633731842041})
      gg.toast("稍等一会儿嗷")
      jiasu(1)
      sleep(2000)
      jiasu(8)
      sleep(3000)
      gg.alert("自己坐坛\n不要点红点,关掉执行第三步")
      sleep(8000)
      gg.toast("看完动画关星盘执行第三步")
      wcd = 2
      end
      if dtu == "xiagu" then
      qt(20) jiasu(8) sleep(1500) Teleport({9.434672355651855;137.9949493408203;-182.310302734375})
      gg.alert("一会儿不要点红点,关掉执行第三步")
      jiasu(2000)
      stand(2)
      gg.toast("看完动画关星盘执行第三步")
      wcd = 2
      end
      if dtu == "mutu" then
      qt(26) sleep(1500) Teleport({-235.35919189453125;94.78324127197266;-295.83099365234375})
  sleep(800) Teleport({-288.87689208984375;93.62783813476562;-404.58197021484375})
      sleep(1800)
      gg.alert("一会儿不要点红点,关掉执行第三步")
      Teleport({0.12861567735671997;206.77496337890625;3.3895347118377686})
      jiasu(10) 
      sleep(120)
      stand(2)
      gg.toast("看完动画关星盘执行第三步")
      wcd = 2
      end
      if dtu == "jinge" then
    set_msj({812663058;1953384759;1761636210;27502;0;0;1734954524;3306600;0;0;0;0;1634484746;27491;0;0;0;0;-11796322;1;0;0})
    set_mzb1() sleep(2000)
    gg.alert("飞")
    Teleport({-0.02870649286;311.826171875;68.02626800537})
      gg.alert("一会儿不要点红点,关掉执行第三步") stand(2) gg.toast("看完动画关星盘执行第三步") wcd = 2  end gg.setVisible(false) 
end
function kill()
  if wcd==2 then
  gg.alert("我懒得搞数据恢复\n最后一步是重启游戏\n点击确认以后你会闪退\n重进就有新动作了\n哈哈哈ꉂꉂ(ᵔᗜᵔ*)")
  gg.alert("即将退出游戏，请重新启动")
  gg.processKill()
  else
  gg.alert("请先完成前面步骤")
  end
end
function dzcd()
    
    menudz = gg.choice({
      '                                 晨岛',
      '                                 云野',
      '                                 雨林',
      '                                 霞谷',
      '                                 暮土',
      '                                 禁阁',
      '                                  返回',
    }, nil)
    
       
    if menudz == 1 then dzcd1() FX = "dzcd1" end
    if menudz == 2 then  dzcd2() FX = "dzcd2" end
    if menudz == 3 then  dzcd3() FX = "dzcd3" end
    if menudz == 4 then  dzcd4() FX = "dzcd4" end
    if menudz == 5 then  dzcd5() FX = "dzcd5" end
    if menudz == 6 then  dzcd6() FX = "dzcd6" end
    if menudz == 7 then  jiasu(1) home() FX = "home" end
end
  function A_xizhuhuo() gg.clearResults()  gg.setRanges(4)  search("-842203136", gg.TYPE_DWORD)  local shCount = gg.getResultCount() if shCount == 0 then gg.toast("烛火吸收失败❌") sleep(1000)   return 0 end  local result = gg.getResults(shCount) local tmp = {} for _FORV_6_, _FORV_7_ in ipairs(result) do   tmp[#tmp + 1] = {}  tmp[#tmp].address = _FORV_7_.address - 12 tmp[#tmp].flags = 16 end  tmp = gg.getValues(tmp) local x = {} for _FORV_7_, _FORV_8_ in ipairs(tmp) do  if "" .. _FORV_8_.value == "3.5" then   x[#x + 1] = {}  x[#x].address = tmp[_FORV_7_].address  x[#x].flags = 16 x[#x].value = 999999 end  end gg.setValues(x) gg.clearResults() if KG_jspt == "关" then  jiasu(10) sleep(200)    jiasu(3)  elseif KG_jspt == "开" then sleep(2000) end end 
  xzz = 1
  dianlazhu() zhajinhua()
  function Exit()
  gg.clearResults()
  gg.clearList()
  print("\n部分功能源码来自：一方、东街猫儿、仙圣、小绿、冒泡、宇豪、乃和、琛、绝代、孜然、傲寒\n感谢以上各位前辈\n感谢久的帮助")
  gg.setVisible(true)
os.exit()
end
  A_wxnl()
  A_wxnl()
      iii = read("/sdcard/runh")
      gg.setVisible(false)
  if mapp[iii] == nil then write("/sdcard/runh","1") write("/sdcard/runk","1") end
      if read("/sdcard/xj.txt") == "闪退" then
  gg.alert("检测到上次献祭闪退了\n继续献祭") 
  qt(38) jiasu(10) gg.alert("拿完蜡烛点悬浮窗") sleep(2000)
  gg.alert("拿完蜡烛点悬浮窗")
  gg.setVisible(false) 
  FX = "bfy6"
  elseif read("/sdcard/runk") == "0" then
  name1 = mapp[iii][3]
  ptc =gg.alert("检测到上次跑图跑到" .. name1 .. "闪退了\n是否继续？","是","否")
  if ptc == 1 then
  qt(mapp[iii][2])
  sg2()
  end
  if ptc== 2 then write("/sdcard/runk","1") end
  else
  cast()
  end
while true do
      if gg.isVisible(true) then
      bt2()
      gg.setVisible(false)
      if(FX == "") then 
      else 
  load(FX .. "()")()
  end
    end
  end