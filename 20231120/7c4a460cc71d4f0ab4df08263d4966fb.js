// ==UserScript==
// @name         灰灰社区
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  注入永久会员实现无限制观看
// @author       Tuop
// @match        https://sq.yes1.icu/gbfdsugfdsu/*
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=f2c013d5bbbb.com
// @grant        none
// ==/UserScript==
 
 
 function setcookie(name,value,daysToLive){
    var cookie = name + '=' + encodeURIComponent(value);
    console.log(cookie);
    if(typeof daysToLive == 'number'){
        cookie += ';max-age='+(daysToLive*60*60*24);
    }
    document.cookie = cookie;
 }
 
(function() {
    'use strict';
 
  if(!localStorage.getItem('ztok')){
            alert("永久会员注入成功~~~");
            localStorage.setItem('ztok',"520");
  }
 
localStorage.setItem("usertoken","f06340cb-0175-4aa0-8a75-ca83af31a01e");
localStorage.setItem("userid",'{"type":"number","data":270}');
localStorage.setItem("userinfo",'{"type":"object","data":{"id":270,"group_id":0,"area":"","xqx":"","hl":"","jyyx":"","guanzhu":0,"fensi":0,"number":"QRSNTX","photo":"https://sq.yes1.icu0","num_t":3,"num":"3","t_number":"0","vip_time":"0000-00-00 00:00:00","integral":0,"agent":0,"username":"YTR_79844550545","nickname":"YTR_79844550545","password":"02ddc80fb42e63e0e8651a9ebfde8c33","salt":"IrXcPJ","email":"","mobile":"15296856785","avatar":"/mrtx/7_1588737044.jpg","level":1,"gender":0,"birthday":null,"bio":"","money":"0.00","score":0,"successions":1,"maxsuccessions":1,"prevtime":1700455682,"logintime":1700455682,"loginip":"211.22.180.121","loginfailure":0,"joinip":"211.22.180.121","jointime":1700455682,"createtime":"2023-11-20 12:48:02","updatetime":"2023-11-20 12:48:02","token":"","status":"normal","verification":"","sbid":"17004555524567569310","zhms":"a3741e383dc565e7306c57feab14b409","dlIP":null,"video":0,"fabu":0,"vip":0,"prevtime_text":null,"logintime_text":null,"jointime_text":null,"avatar_text":"https://sq.yes1.icu/mrtx/7_1588737044.jpg"}}');
 
 
 
})();