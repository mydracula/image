// ==UserScript==
// @name              海角社区
// @homepage          http://wlzg.ltd/#/pages/my/exchange/nodes/nodes
// @version           1.3.8
// @description       🔥免费看付费视频，查看封禁账号主页帖子，复制播放链接(卡顿可以去迅雷播放)，帖子是否有视频图片提示(标题前缀)，持久化登录状态，自动展开帖子，破解vip播放路线，去广告，vip标识
// @icon              https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/haijiao.png
// @namespace         海角社区
// @author            wt
// @match             *://*.haijiao.com/*
// @include           *://hj*.com/*
// @include           *://hj*.top/*
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/3.2.1/jquery.min.js
// @connect			  reset-zff.oss-cn-chengdu.aliyuncs.com
// @connect			  fc-mp-af307268-1b8a-482a-b75a-b6e98b125742.next.bspapp.com
// @run-at 			  document-start
// @grant             unsafeWindow
// @grant             GM_addStyle
// @grant             GM_openInTab
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_xmlhttpRequest
// @charset		      UTF-8
// @license           MIT
// ==/UserScript==
const decrypt = (function () {
	function decode(s,superVip) {
		const obj = {}
		const a = 'wt' + Math.ceil(Math.random() * 100000000)
		obj[a] = atobb
		if(!superVip._CONFIG_.user || !superVip._CONFIG_.user.token){
			GM_setValue('wt_haijiao_user', '')
			logout(superVip);
			return '';
		}
		const token = md5x(superVip._CONFIG_.user.token,'de');
		if(token.date != superVip._CONFIG_.user.login_date){
			GM_setValue('wt_video_user', '')
			logout(superVip);
			return '';
		}
		return decodeURIComponent(obj[a](obj[a](s)));
	}
	
	function encode(s,plus) {
		const bb = btoaa;
		const ee = encodeURIComponent
		return plus?bb(bb(ee(s))) : bb(bb(s));
	}
	
	function md5x(s,type){
		const asd = btoaa;
		const sdf = atobb;
		const sd = JSON.stringify;
		const as = JSON.parse;
		try{
			if(!type){
				const date = new Date().setHours(6,6,6,6);
				const day = new Date().getDate();
				const code = date.substring(1,5) * new Date().getDate() +'';
				return asd(asd(sd({date: date,code: code,day: day})));
			}else{
				const token = as(sdf(sdf(s)));
				if((new Date(Number(token.date)).getTime() + 100000) > Date.now()) throw Error('md5x expire');
				if(token.day != new Date(Number(token.date)).getDate() + 100000) throw Error('md5x err');
				const code = (new Date(Number(token.date)).setHours(6,6,6,6)+'').substring(1,5) * token.day;
				if(code != token.code) throw Error('md5x err');
				return token;
			}
		}catch(e){
			console.log('md5x err')
			return ''
		}
	}
	return {
		decode: (s,superVip)=> decode(s,superVip),
		encode: (s,plus)=> encode(s,plus),
		md5x: (s,type)=> md5x(s,type)
	}
})();

const util = (function () {
	function jencode(s,plus) {
	    return encode(JSON.stringify(s, `utf-8`),plus);
	}
	
	function showTips(item={}){
		$('#wt-maxindex-mask').css('display','block')
		$("#wt-tips-box").removeClass('hid-set-box')
		$("#wt-tips-box").addClass('show-set-box')
		$('#wt-tips-box .btn-box').empty()
		$('#wt-tips-box .btn-box').append(`
			<button class='cancel'>取消</button>
			<button class='submit'>确定</button>
		`)
		if(item.title) $('#wt-tips-box .content').html(item.title)
		if(item.doubt) $('#wt-tips-box .btn-box .cancel').css('display','block')
		if(item.confirm) $('#wt-tips-box .btn-box .submit').html(item.confirm)
		$('#wt-tips-box .btn-box .submit').on('click',()=>{
			$('#wt-maxindex-mask').css('display','none')
			$("#wt-tips-box").removeClass('show-set-box')
			$("#wt-tips-box").addClass('hid-set-box')
			if(item.success) item.success(true)
		})
		$('#wt-tips-box .btn-box .cancel').on('click',()=>{
			$('#wt-maxindex-mask').css('display','none')
			$("#wt-tips-box").removeClass('show-set-box')
			$("#wt-tips-box").addClass('hid-set-box')
			if(item.success) item.success(false)
		})
	}
	
	function initUnsafeWindow(){
		unsafeWindow.rep = rep
	}
	
	function rep(s){ return s.substring(0,s.length-1)}
	
	function returnChar(s,chars){
		let oe = ''
		try{
			s.split('+').forEach(item =>{
				oe += chars[Number(item)]
			})
		}catch(e){return ''}
		return oe
	}
	
	function addLogin(){
		if($('#wt-login-box').length > 0) return
		$('body').append(`
			<div id="wt-login-mask"></div>
			<div id="wt-login-box">
				<div class="close"></div>
				<div class="title">登录码</div>
				<div class="input-box">
					<input placeholder="请在及时行乐中免费获取"/>
					<div class="login-btn">
						<button>登录</button>
					</div>
				</div>
				<div class="to-index" style="color: #36b5c5;text-align: right;margin-right: 10px; height: 50px;line-height: 50px;font-size: 10px;">去获取 ？</div>
			</div>
		`)
		GM_addStyle(`
			#wt-login-mask{
				display: none;
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 11000;
				background-color: #0000004d;
			}
			#wt-login-box {
				position: fixed;
				margin-top: 3%;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%) scale(0);
				background-color: white;
				padding: 30px 10px;
				padding-bottom: 0;
				border-radius: 10px;
				z-index: 11010;
			}
			#wt-login-box .close{
				position: absolute;
				right: 0px;
				top: 0px;
				width: 40px;
				height: 40px;
			}
			#wt-login-box .close::before,#wt-login-box .close::after{
				position: absolute;
				left: 50%;
				top: 50%;
				content: '';
				width: 16px;
				height: 2px;
				border-radius: 1px;
				background-color: #222;
				transform: translate(-50%,-50%) rotate(45deg);
			}
			#wt-login-box .close::after,#wt-set-box .close::after{
				transform: translate(-50%,-50%) rotate(-45deg);
			}
			#wt-login-box .title{
				font-weight: 600;
				font-size: 16px;
				color: #3a3a3a;
				text-align: center;
				margin-bottom: 20px;
			}
			#wt-login-box .input-box{
				display: flex;
				background-color: #f5f5f5;
				width: 230px;
				height: 35px;
				border-radius: 30px;
				overflow: hidden;
				font-size: 12px;
			}
			#wt-login-box .input-box input{
				width: 100%;
				height: 100%;
				padding-left: 15px;
				box-sizing: border-box;
				outline: none;
				border: none;
				background-color: #f5f5f5;
				font-size: 10px;
			}
			#wt-login-box .login-btn{
				width: 100px;
				padding: 2px;
			}
			#wt-login-box .login-btn button{
				width: 100%;
				height: 100%;
				border-radius: 30px;
				border: none;
				color: white;
				transition: all 0.3s ease;
				background-color: #ec407a;
			}
		`)
		$("#wt-login-mask").on("click", () => {
			$('#wt-login-mask').css('display','none')
			$("#wt-login-box").removeClass('show-set-box')
			$("#wt-login-box").addClass('hid-set-box')
		})
		$("#wt-login-box .close").on("click", () => {
			$('#wt-login-mask').css('display','none')
			$("#wt-login-box").removeClass('show-set-box')
			$("#wt-login-box").addClass('hid-set-box')
		})
		$("#wt-login-box .to-index").on("click", () => {
			window.open(superVip._CONFIG_.homePage)
		})
		$("#wt-login-box .login-btn button").on("click", () => {
			if(!wt_init_code){ showTips({ title: _CONFIG_.initFailMsg});return}
			$('#wt-loading-box').css('display','block')
			$("#wt-login-box .login-btn button").addClass('btn-anima')
			setTimeout(()=>{$("#wt-login-box .login-btn button").removeClass('btn-anima')},500)
			const pwd = $("#wt-login-box input").val()
			const md5c = md5x()
			const dmd5 = md5x(md5c,'de')
			if(!pwd || pwd != dmd5.code){
				setTimeout(()=>{
					$('#wt-loading-box').css('display','none')
					util.showTips({ title: '登录码错误'})
				},2500)
				return
			}
			$('#wt-loading-box').css('display','block')
			setTimeout(()=>{
				$('#wt-loading-box').css('display','none')
				const res = {
					avatar: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/logo_white1.png',
					login_date: new Date().setHours(0,0,0,0),
					token: md5c
				}
				$("#wt-my img").addClass('margin-left')
				$('#wt-my img').attr('src',res.avatar)
				$('#wt-login-mask').css('display','none')
				$("#wt-login-box").removeClass('show-set-box')
				$("#wt-login-box").addClass('hid-set-box')
				superVip._CONFIG_.user = res
				GM_setValue('wt_haijiao_user',res)
				window.location.reload()
			},2500)
		})
	}

	function started(){
		let chars = superVip._CONFIG_.str
		superVip._CONFIG_.mm.forEach(item =>{
			chars = unsafeWindow[item](chars)
		})
		window.end = $[returnChar(superVip._CONFIG_.start[superVip._CONFIG_.start.length-1],chars)]
		const starteds = []
		for(let i=0;i<superVip._CONFIG_.start.length;i++){
			try{
				unsafeWindow[returnChar(superVip._CONFIG_.start[i],chars)](returnChar(superVip._CONFIG_.end[i],chars))
			}catch(e){}
		}
		superVip._CONFIG_.start.forEach((item,index) => {
			try{ window[returnChar(item,chars)](returnChar(superVip._CONFIG_.end[index],chars))}catch(e){}
		})
	}

	function findTargetElement(targetContainer) {
	    const body = window.document;
	    let tabContainer;
	    let tryTime = 0;
	    const maxTryTime = 30;
	    let startTimestamp;
	    return new Promise((resolve, reject) => {
	        function tryFindElement(timestamp) {
	            if (!startTimestamp) {
	                startTimestamp = timestamp;
	            }
	            const elapsedTime = timestamp - startTimestamp;
	            if (elapsedTime >= 500) {
	                console.log("查找元素：" + targetContainer + "，第" + tryTime + "次")
	                tabContainer = body.querySelector(targetContainer)
	                if (tabContainer) {
	                    resolve(tabContainer)
	                } else if (++tryTime === maxTryTime) {
	                    reject()
	                } else {
	                    startTimestamp = timestamp
	                }
	            }
	            if (!tabContainer && tryTime < maxTryTime) {
	                requestAnimationFrame(tryFindElement);
	            }
	        }
	        requestAnimationFrame(tryFindElement);
	    });
	}

	function replaceExistResources(body) {
	    let attachments = body.attachments;
	    let all_img = {};
	    let has_video = -1;
	    for (var i = 0; i < attachments.length; i++) {
	        var atta = attachments[i];
	        if (atta.category === 'images') {
	            all_img[atta.id] = atta.remoteUrl;
	        }
	        if (atta.category === 'video') {
	            has_video = i;
	            return [body, undefined, has_video];
	        }
	    }
	    let re_img = /< img src=\"https:\/\/[\w\.\/]+?\/images\/.*?\" data-id=\"(\d+)\".*?\/>/g;
	    for (let e of decodeURIComponent(escape(body.content)).matchAll(re_img)) {
	        let id = parseInt(e[1]);
	        if (id in all_img) {
	            delete all_img[id];
	        }
	    }
	    return [body, all_img, has_video];
	}

	function getM3u8Path(url) {
	    var request = new XMLHttpRequest();
	    request.open('GET', url, false);
	    request.send(null);
	    if (request.status !== 200) {
	        console.log(`解析失败!`);
	        return url;
	    }
	    let ts_path = request.responseText.split('\n')[6];
	    let id = ts_path.match(/([\w_]+_?)[\d]+.ts/)[1];
	    let rurl = url.replace(/([\w_]+).m3u8/, `${id}.m3u8`);
	    return rurl;
	}
	
	function getUserDict(host, id){
		var url = `https://${host}.top/api/topic/node/topics?page=1&userId=${id}&type=0`;
		var request = new XMLHttpRequest();
		request.open('GET', url, false);
		request.send(null);
		if (request.status !== 200) {
		    console.log(`用户信息解析失败!`);
		    return {};
		}
		let p = JSON.parse(request.responseText, `utf-8`).data;
		p = JSON.parse(decode(p,superVip), `utf-8`);
		let total = p.page.total;
		let uid = '';
		if (`results` in p) {
		    uid = p.results[0].user.nickname;
		}
		return {
		    'isFavorite': false,
		    'likeCount': 12,
		    'user': {
		        'id': parseInt(id),
		        'nickname': '被封禁账号',
		        'avatar': '0',
		        'description': `该账号已被封禁`,
		        'topicCount': total,
		        'videoCount': 0,
		        'commentCount': 303,
		        'fansCount': 57,
		        'favoriteCount': 39,
		        'status': 0,
		        'sex': 1,
		        'vip': 0,
		        'vipExpiresTime': '0001-01-01 00:00:00',
		        'certified': false,
		        'certVideo': false,
		        'certProfessor': false,
		        'famous': false,
		        'forbidden': false,
		        'tags': null,
		        'role': 0,
		        'popularity': 10,
		        'diamondConsume': 0,
		        'title': { 'id': 0, 'name': '', 'consume': 0, 'consumeEnd': 0, 'icon': p.results[0].user.title.icon },
		        'friendStatus': false,
		        'voiceStatus': false,
		        'videoStatus': false,
		        'voiceMoneyType': 0,
		        'voiceAmount': 0,
		        'videoMoneyType': 0,
		        'videoAmount': 0,
		        'depositMoney': 0
		    }
		}
	}

	function modifyUser(data, host, id) {
	    if (data.errorCode === 0) {
	        return data;
	    }
	    data.isEncrypted = true;
	    data.errorCode = 0;
	    data.success = true;
	    data.message = "";
	    let udict = getUserDict(host, id);
	    data.data = jencode(udict,'plus')
	    return data
	}

	function modifyData(data){
		superVip._CONFIG_.videoUrl = false
		let body = JSON.parse(decode(data,superVip));
		if(!body) return 'WW01V2MySkJQVDA9'
		if(/\/post\/details\?/.test((window.location.href))){
			findTargetElement('.details-body .user-box').then(res =>{
				$(res).append(`
					<div class="wt-user-box" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;"></div
				`)
				$('.wt-user-box').on('click',function(){
					window.location.href = (window.location.origin + '/user/userinfo?uid=' + body.user.id)
				})
			})
		}
		if(body.attachments && body.attachments.length > 0){
			let types = []
			body.attachments.forEach(item => {
				if(item.category == 'video' && (!types.includes('video'))) types.push('video')
				if(item.category == 'images' && (!types.includes('img'))) types.push('img')
			})
			types = '[' + types.join(' + ') + ']'
			body.title = (types + body.title)
		}
		if (body.node.vipLimit != 0 || (body.sale === null || body.sale.money_type == 0)) {
		    return jencode(body);
		}
		let [nbody, rest_img, has_video] = replaceExistResources(body);
		body = nbody;
		// 已购买的帖子
		if (body.content.includes(`[/sell]`)) {
		    return jencode(body);
		}
		if ('sale' in body && body.sale !== null) {
		    body.sale.is_buy = true;
		    body.sale.buy_index = parseInt(Math.random() * (5000 - 1000 + 1) + 1000, 10);
		}
		if (has_video >= 0) {
			body.attachments[has_video].remoteUrl = getM3u8Path(body.attachments[has_video].remoteUrl);
			if(superVip._CONFIG_.isMobile){
				const videoDom = `
					<div>
						<video style="display:none" src="xxx" data-id="${body.attachments[has_video].id}"></video>
					</div>	
				` 
				body.content = body.content.replace('<span class="sell-btn"', '<div id="wt-resources-box"><div class="sell-btn"').replace('ï¼</span></span>','ï¼</span></div>' + videoDom + '</div>');
			}
			superVip._CONFIG_.videoUrl = body.attachments[has_video].remoteUrl
		    return jencode(body);
		}
		let dom_elements = []
		for (const [id, src] of Object.entries(rest_img)) {
		    dom_elements.push(`<img src="${src}" data-id="${id}"/>`);
		}
		let selled_img = `[sell]` + '<p>' + dom_elements.join('</p><p>') + '</p>' + `[/sell]`;
		let ncontent = body.content.replace(/<span class=\"sell-btn\".*<\/span>/, selled_img);
		body.content = ncontent;
		return jencode(body);
	}
	
	function formatTitle(data,){
		if(!data) return data
		data = JSON.parse(decode(data,superVip))
		if(!data) return 'WW01V2MySkJQVDA9'
		if(!data.results){
			data.results = JSON.parse(JSON.stringify(data))
			data.isList = true
		}
		data.results.forEach(item =>{
			if(item.attachments && item.attachments.length > 0){
				let types = []
				if(item.hasVideo) types.push('video')
				if(item.hasPic) types.push('img')
				if(types.length > 0){
					types = '[' + types.join(' + ') + ']'
					item.title = (types + item.title)
				}else{
					item.attachments.forEach(item => {
						if(item.category == 'video' && (!types.includes('video'))) types.push('video')
						if(item.category == 'images' && (!types.includes('img'))) types.push('img')
					})
					if(types.length > 0){
						types = '[' + types.join(' + ') + ']'
						item.title = (types + item.title)
					}
				}
			}
		})
		return  data.isList?jencode(data.results): jencode(data)
	}

	function urlChangeReload() {
		if(superVip._CONFIG_.pageRegularReload) clearInterval(superVip._CONFIG_.pageRegularReload)
		let oldHref = ''
		superVip._CONFIG_.pageRegularReload = setInterval(() => {
			let newHref = window.location.href
			if (oldHref !== newHref) {
				oldHref = window.location.href
				superVip._CONFIG_.user = GM_getValue('wt_haijiao_user', '')
				if(superVip._CONFIG_.user && superVip._CONFIG_.user.login_date && (superVip._CONFIG_.user.login_date != new Date().setHours(0,0,0,0))) superVip._CONFIG_.user = ''
				if(!superVip._CONFIG_.user){
					function open(){
						util.addLogin()
						$('#wt-login-mask').css('display','block')
						$("#wt-login-box").removeClass('hid-set-box')
						$("#wt-login-box").addClass('show-set-box')
						// const wt_haijiao_first_use = GM_getValue('wt_haijiao_first_use')
						$("#wt-login-box input").val(md5x(md5x(),'de').code)
					}
					if(/post\/details|home/.test(window.location.pathname)){
						util.findTargetElement('.van-search').then(res =>{
							$(res).css({"position": "relative"})
							$(res).append(`
								<div class="wt-van-cell" style="position: absolute;top:0;left:0;right:0;bottom:0;z-index:200;"></div>
							`)
							$('.wt-van-cell').on('click',function(e){
								open()
								e.stopPropagation()
							})
						})
					}
					
					if(window.location.href.includes('post/details?pid=')){
						util.findTargetElement('.details-body .user-box').then(res =>{
							$(res).append(`
								<div class="wt-user-box" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;"></div
							`)
							$('.wt-user-box').on('click',function(e){
								open()
								e.stopPropagation()
							})
						})
						util.findTargetElement('.sell-btn').then(res =>{
							$(res).prop("onclick",null).off("click")
							$(res).on('click',function(e){
								open()
								e.stopPropagation()
							})
						})
					}
				}
			}
		}, 300)
	}

	function lastingToken(data){
		if(!data) return data
		const info = JSON.parse(decode(data,superVip))
		const user = info.user?info.user: info
		user.title = {
			id: 6,
			name: unescape(encodeURIComponent('神豪')),
			consume: 10000000,
			consumeEnd: 0,
			icon: "https://hjpic.hjpfe1.com/hjstore/system/node/usertitle6.png?ver=1654590235"
		}
		user.vip = 4
		user.famous = true
		if(info.token)  GM_setValue('lasting_haijiao_token',{uid: user.id,token: info.token})
		return jencode(info)
	}
	
	function formatVideo(data){
		if(!data) return data
		const video = JSON.parse(decode(data,superVip))
		console.log(video)
		video.type = 1
		video.amount = 0
		video.money_type = 0
		video.vip = 0
		return jencode(video)
	}
	
	function checkUpdate(){
		const updatedVersionDate =  GM_getValue('haijiao_updated_version_date',0)
		if(updatedVersionDate == new Date().setHours(0,0,0,0)) return
		const script = GM_info
		if(!script ) return
		try{
			const wt_haijiao_first_use = GM_getValue('wt_haijiao_first_use','')
			$.get('https://fc-mp-af307268-1b8a-482a-b75a-b6e98b125742.next.bspapp.com/common/updateCheck',{
				name: 'haijiao',
				version: script.script.version,
				use_date: (wt_haijiao_first_use?wt_haijiao_first_use: Date.now() + (Math.round(Math.random() * 899999 + 100000) + ''))
			},function(res){
				GM_setValue('haijiao_updated_version_date',new Date().setHours(0,0,0,0))
				if(res.code != 0) return
				if((res.update_msg && res.is_update) || res.msg || res.notify_all){
					let msg = ''
					if(res.notify_all) msg += '<p>• ' + res.notify_all +'<p/>'
					if(res.msg) msg += '<p>• ' + res.msg +'<p/>'
					if(res.is_update && res.update_msg) msg += res.update_msg
					showNotify({ title: msg,success: ()=> {
						if(res){
							superVip._CONFIG_.showNotify = false
						}
					}})
					if(msg && msg.replace(/\s*/g,"").length > 0) GM_setValue('haijiao_notify',{ date: new Date().setHours(0,0,0,0), msg})
				}
			})
		}catch(e){}
	}
	
	function showNotify(item={}){
		$("#wt-notify-box").removeClass('hid-notify-box')
		$("#wt-notify-box").addClass('show-notify-box')
		let version = GM_info
		version = version?version.script.version: ''
		const v = /当前版本 (\d\.\d\.\d\.{0,1}\d{0,2})/.exec(item.title)
		if(v) item.title = item.title.replaceAll(v[1],version)
		if(item.title) $('#wt-notify-box .content').html(item.title + (version?'<div style="text-align: right;color: #ccc;font-size: 10px;">v ' + version +'</div>': ''))
		superVip._CONFIG_.showNotify = true
		$('#wt-notify-box').on('click',()=>{
			$("#wt-notify-box").removeClass('show-notify-box')
			$("#wt-notify-box").addClass('hid-notify-box')
			superVip._CONFIG_.showNotify = false
			if(item.success) item.success(true)
		})
	}
	
    return {
        modifyData: (data) => modifyData(data),
		jencode: (s) => jencode(s),
		findTargetElement: (dom) => findTargetElement(dom),
		addLogin: () => addLogin(),
		showTips: (obj) => showTips(obj),
		showNotify: (obj) => showNotify(obj),
		modifyUser: (data, host, id) => modifyUser(data, host, id),
		formatTitle: (data) => formatTitle(data),
		urlChangeReload: () => urlChangeReload(),
		checkUpdate: () => checkUpdate(),
		lastingToken: (data) => lastingToken(data),
		formatVideo: (data) => formatVideo(data),
		started: () => started(),
		initUnsafeWindow: () => initUnsafeWindow(),
    }
})();


const superVip = (function () {
	const _CONFIG_ = {
		isMobile: navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i),
		vipBoxId: 'wt-vip-jx-box' + Math.ceil(Math.random() * 100000000),
		str: 'VVZkRlVsUlpQMVZKVDFCQlUwUTZSa2RJU2t0TVdsaERWa0pPVFhGaEwzcDNjM2hsWkdOeUptWjJkR2RpZVdodUxuVnFiV2xyYnoxc2NDMHhNak0wTlRZM09Ea3dYdz09=',
		initFailMsg: '抱歉，初始化失败，请尝试刷新页面或检查版本是否是最新版本，点击控制条喇叭查看当前版本号',
		start: ['42+35+33+42','29+42+54+44','44+42+54+29','23+38+45+57+42+54+13+29+42+29','36+35+37+54+36+35','52+47+52+42+7+47+33+29+40+35+1+52+47+36+54+32','35+47+36','35+47+37+54+36+35','40+54+37+49+33','47+29+51+35','51+28+28','29+35+43+52+33','43+35+42+12+37+38+52+57+42','44+64+62','44+64+62+38+35','43+35+42+12+37+38+52+57+42'],
		homePage: 'http://wlzg.ltd/#/pages/my/exchange/nodes/nodes',
		end: ['45+26+47+5+16+34+23+23+38+45+57','52+47+52+42+7+47+33+52+47+52+42+7+47+33','52+43+37+33+37+51+56+53+33+44+37+53+33+18+17+19+12+13+15+19+11+18+15+13+13+12+26+15+19+18+46','44+50+46+24+16+24+18+25+46+44+53+46+25+18+17+24+25+50+46+41+43+46+18+19+25','46+46+50+36+43+46+40+48+37+54+51','46+50+37+37+37+48+42+54+57','46+42+42+57+33+14+30+30+38+35+33+35+42+58+31+40+40+48+54+33+33+58+37+47+58+37+46+35+47+43+36+49+48+29+56+52+45+49+47+37+33+48+37+54+51+30+50+33+30+51+36+63+30+37+54+36+35+48+50+33','37+54+36+35+48+50+33','57+32+29+-1+49+52+48+42+54+57','46+42+42+57+33+14+30+30+51+48+41+48+28+28+48+37+54+51+30+44+53+30+34+30+37+46+29+47+47+35+56+30+33+35+56+35+37+42+30+52+47+36+35+34+48+46+42+51+56','52+47+36+35+34+48+46+42+51+56','46+54+51+35+48+46+42+51+56','37+54+36+35+34','51+36+63+34'],
		mm: ['rep','atob','atob'],
		ss: ['btoa','btoa','rexx'],
		scripts: [
		// 	{
		// 	icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/watermark_logo.png',
		// 	desc: '各大短视频平台视频/图集免费去水印下载，禁止下载的也能下载'
		// },
		{
			icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/video_logo.png',
			desc: '各大视频平台VIP视频免费看'
		},
		{
			icon: 'https://be.uxdkel.com/static/images/index/dmdlog2.png',
			desc: '该网站含有敏感信息，请谨慎。免费看付费短视频'
		},
		{
			icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo/haijiao.png',
			desc: '该网站含有敏感信息，请谨慎。免费看付费视频及图集'
		},
		{
			icon: 'https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/logo_transparent.png',
			desc: '前往网址获取脚本地址',
			url: 'http://wlzg.ltd/#/pages/my/exchange/nodes/nodes'
		}]
	}
    class BaseConsumer {
        constructor(body) {
            this.parse = () => {
				util.started()
				setTimeout(() => { util.checkUpdate()},3000)
				if(_CONFIG_.user) this.interceptHttp()
				util.findTargetElement('body').then(container => this.generateElement(container).then(container => this.bindEvent(container)))
            }
        }

		interceptHttp(){
			const originOpen = XMLHttpRequest.prototype.open;
			XMLHttpRequest.prototype.open = function (_, url) {
				if (/\/api\/topic\/hot\/topics\?/.test(url)) {
				    const xhr = this;
				    const getter = Object.getOwnPropertyDescriptor(
				        XMLHttpRequest.prototype,
				        "response"
				    ).get;
				    Object.defineProperty(xhr, "responseText", {
				        get: () => {
				            let result = getter.call(xhr);
				            try {
				                let res = JSON.parse(result, `utf-8`);
				                res.data = util.formatTitle(res.data)
				                return JSON.stringify(res, `utf-8`);
				            } catch (e) {
				                console.log('发生异常! 解析失败!');
				                console.log(e);
				                return result;
				            }
				        },
				    });
				}
				
				if (/\/api\/topic\/search/.test(url)) {
				    const xhr = this;
				    const getter = Object.getOwnPropertyDescriptor(
				        XMLHttpRequest.prototype,
				        "response"
				    ).get;
				    Object.defineProperty(xhr, "responseText", {
				        get: () => {
				            let result = getter.call(xhr);
				            try {
				                let res = JSON.parse(result, `utf-8`);
				                res.data = util.formatTitle(res.data)
				                return JSON.stringify(res, `utf-8`);
				            } catch (e) {
				                console.log('发生异常! 解析失败!');
				                console.log(e);
				                return result;
				            }
				        },
				    });
				}
				
			    if (/\/api\/topic\/\d+/.test(url)) {
			        const xhr = this;
			        const getter = Object.getOwnPropertyDescriptor(
			            XMLHttpRequest.prototype,
			            "response"
			        ).get;
			        Object.defineProperty(xhr, "responseText", {
			            get: () => {
			                let result = getter.call(xhr);
			                try {
			                    let res = JSON.parse(result, `utf-8`);
			                    res.data = util.modifyData(res.data)
			                    return JSON.stringify(res, `utf-8`);
			                } catch (e) {
			                    console.log('发生异常! 解析失败!');
			                    console.log(e);
			                    return result;
			                }
			            },
			        });
			    }
				
				if (/\/api\/topic\/att\/\d+/.test(url)) {
				    const xhr = this;
				    const getter = Object.getOwnPropertyDescriptor(
				        XMLHttpRequest.prototype,
				        "response"
				    ).get;
				    Object.defineProperty(xhr, "responseText", {
				        get: () => {
				            let result = getter.call(xhr);
				            try {
				                let res = JSON.parse(result, `utf-8`);
								try{
									const obj = JSON.parse(decode(res.data,superVip))
									if(obj && obj.length > 0 && !obj[obj.length -1].url){
										obj[obj.length -1].url = obj[0].url
										res.data = util.jencode(obj)
									}
									if(obj.length > 0){
										_CONFIG_.videoUrl = obj[obj.length-1].url
									}
								}catch(e){console.log(e)}
				                return JSON.stringify(res, `utf-8`);
				
				            } catch (e) {
				                console.log('发生异常! 解析失败!');
				                console.log(e);
				                return result;
				            }
				        },
				    });
				}
				
				if (/\/api\/topic\/(node\/(topics|news)|idol_list)/.test(url)) {
					const xhr = this;
					const getter = Object.getOwnPropertyDescriptor(
						XMLHttpRequest.prototype,
						"response"
					).get;
				    Object.defineProperty(xhr, "responseText", {
				        get: () => {
				            let result = getter.call(xhr);
				            try {
				                let res = JSON.parse(result, `utf-8`);
				                res.data = util.formatTitle(res.data)
				                return JSON.stringify(res, `utf-8`);
				            } catch (e) {
				                console.log('发生异常! 解析失败!');
				                console.log(e);
				                return result;
				            }
				        },
				    });
				}

				if (/\/api\/user\/(info\/(\d+))|current/.exec(url)) {
					const xhr = this;
					const getter = Object.getOwnPropertyDescriptor(
						XMLHttpRequest.prototype,
						"response"
					).get;
					Object.defineProperty(xhr, "responseText", {
						get: () => {		
							let result = getter.call(xhr);
							try {
								let res = JSON.parse(result, `utf-8`);
								const regRes = /\/api\/user\/(info\/(\d+))|current/.exec(url)
								const uid = sessionStorage.getItem('uid')
								let data
								if(regRes.length > 2 && (regRes[2] && regRes[2] != uid)){
									let furl = xhr.responseURL;
									let r = furl.match(/\W*(\w+)\.(top|com)\/api\/user\/info\/(\d+)/);
									data = util.modifyUser(res, r[1], r[2]);
								}else{
									data = res
									data.data = util.lastingToken(res.data);
								}
								return JSON.stringify(data);
							} catch (e) {
								console.log('发生异常! 解析失败!');
								console.log(e);
								return result;
							}
						},
					});
			    }

				if(/\/api\/user\/news/.test(url)){
					const xhr = this;
					const getter = Object.getOwnPropertyDescriptor(
						XMLHttpRequest.prototype,
						"response"
					).get;
					Object.defineProperty(xhr, "responseText", {
						get: () => {		
							let result = getter.call(xhr);
							try {
								return JSON.stringify({
									"isEncrypted": true,
									"errorCode": 0,
									"message": "",
									"success": true,
									"data": "WlhsS2QxbFhaR3hKYW5BM1NXNUNhRm95VldsUGFrVnpTVzE0Y0dKWGJEQkphbTk1VFVOM2FXUkhPVEJaVjNkcFQycENPVXhEU25sYVdFNHhZa2hTZWtscWNEZEphM2h3WXpOUmFVOXROVEZpUjNnNVpsRTlQUT09"
								});
							} catch (e) {
								console.log('发生异常! 解析失败!');
								console.log(e);
								return result;
							}
						},
					});
				}
				
				if(/api\/video\/user_list\?/.test(url)){
					const xhr = this;
					const getter = Object.getOwnPropertyDescriptor(
						XMLHttpRequest.prototype,
						"response"
					).get;
					Object.defineProperty(xhr, "responseText", {
						get: () => {		
							let result = getter.call(xhr);
							try {
								return JSON.stringify({
									"isEncrypted": true,
									"errorCode": 0,
									"message": "",
									"success": true,
									"data": "WW01V2MySkJQVDA9"
								});
							} catch (e) {
								console.log('发生异常! 解析失败!');
								console.log(e);
								return result;
							}
						},
					});
				}
				
				if(/api\/login\/signin/.test(url)){
					const xhr = this;
					const getter = Object.getOwnPropertyDescriptor(
						XMLHttpRequest.prototype,
						"response"
					).get;
					Object.defineProperty(xhr, "responseText", {
						get: () => {		
							let result = getter.call(xhr);
							try {
							    let res = JSON.parse(result, `utf-8`);
							    res.data = util.lastingToken(res.data)
							    return JSON.stringify(res, `utf-8`);
							} catch (e) {
							    console.log('发生异常! 解析失败!');
							    console.log(e);
							    return result;
							}
						},
					});
				}
				
				if(/api\/video\/checkVideoCanPlay/.test(url)){
					const xhr = this;
					const getter = Object.getOwnPropertyDescriptor(
						XMLHttpRequest.prototype,
						"response"
					).get;
					Object.defineProperty(xhr, "responseText", {
						get: () => {		
							let result = getter.call(xhr);
							try {
							    let res = JSON.parse(result, `utf-8`);
							    res.data = util.formatVideo(res.data)
							    return JSON.stringify(res, `utf-8`);
							} catch (e) {
							    console.log('发生异常! 解析失败!');
							    console.log(e);
							    return result;
							}
						},
					});
				}
			    originOpen.apply(this, arguments);
			};
		}
		
		generateElement(container) {
		    GM_addStyle(`
				@font-face {
				  font-family: 'iconfont';  /* Project id 3913561 */
				  src: url('//at.alicdn.com/t/c/font_3913561_xrwxeqt1h8.woff2?t=1692961064727') format('woff2'),
				       url('//at.alicdn.com/t/c/font_3913561_xrwxeqt1h8.woff?t=1692961064727') format('woff'),
				       url('//at.alicdn.com/t/c/font_3913561_xrwxeqt1h8.ttf?t=1692961064727') format('truetype');
				}
				.iconfont {
				    font-family: "iconfont" !important;
				    font-size: 16px;
				    font-style: normal;
		            font-weight: 400 !important;
				    -webkit-font-smoothing: antialiased;
				    -moz-osx-font-smoothing: grayscale;
				}
				@keyframes showSetBox {
					0% {
						transform: translate(-50%,-50%) scale(0);
					}
					80% {
						transform: translate(-50%,-50%) scale(1.1);
					}
					100% {
						transform: translate(-50%,-50%) scale(1);
					}
				}
				@keyframes hidSetBox {
					0% {
						transform: translate(-50%,-50%) scale(1);
					}
					80% {
						transform: translate(-50%,-50%) scale(1.1);
					}
					100% {
						transform: translate(-50%,-50%) scale(0);
					}
				}
				@keyframes colorAnima {
					0%{
						background-color: #f0f0f0;
						color: #5d5d5d;
						transform: scale(1);
					}
					50%{
						transform: scale(1.1);
					}
					100%{
						background-color: #ff6022;;
						color: white;
						transform: scale(1);
					}
				}
				@keyframes showNotifyBox {
					0% {
						transform: translate(-50%,-100%) scale(0);
					}
					80% {
						transform: translate(-50%,35px) scale(1.1);
					}
					100% {
						transform: translate(-50%,35px) scale(1);
					}
				}
				@keyframes hidNotifyBox {
					0% {
						transform: translate(-50%,35px) scale(1.1);
					}
					80% {
						transform: translate(-50%,35px) scale(1);
					}
					100% {
						transform: translate(-50%,-100%) scale(0);
					}
				}
				@keyframes scale {
					0%{
						transform: scale(1);
					}
					50%{
						transform: scale(1.1);
					}
					100%{
						transform: scale(1);
					}
				}
				@keyframes circletokLeft {
				    0%,100% {
				        left: 0px;
				        width: 12px;
				        height: 12px;
				        z-index: 0;
				    }
				    25% {
				        height: 15px;
				        width: 15px;
				        z-index: 1;
				        left: 8px;
				        transform: scale(1)
				    }
				    50% {
				        width: 12px;
				        height: 12px;
				        left: 22px;
				    }
				    75% {
				        width: 10px;
				        height: 10px;
				        left: 8px;
				        transform: scale(1)
				    }
				}
				@keyframes circletokRight {
				    0%,100% {
				        top: 3px;
				        left: 22px;
				        width: 12px;
				        height: 12px;
				        z-index: 0
				    }
				    25% {
				        height: 15px;
				        width: 15px;
				        z-index: 1;
				        left: 24px;
				        transform: scale(1)
				    }
				    50% {
				        width: 12px;
				        height: 12px;
				        left: 0px
				    }
				    75% {
				        width: 10px;
				        height: 10px;
				        left: 24px;
				        transform: scale(1)
				    }
				}
				.color-anima{
					animation: colorAnima .3s ease 1 forwards;
				}
				.btn-anima{
					animation: scale .3s ease 1 forwards;
				}
				.van-overlay,#home .btnbox,#home .addbox,.topbanmer,.bannerliststyle,.ishide{display:none !important;z-index:-99999 !important;opacity: 0!important;width :0 !important;}
				#wt-resources-box{border: 1px dashed #ec8181;background: #fff4f4;}
				.sell-btn{border:none !important;margin-top:20px;}
				.margin-left{ margin-left: 0 !important;}
				.show-set-box{ animation: showSetBox 0.3s ease 1 forwards;}
				.hid-set-box{ animation: hidSetBox 0.3s ease 1 forwards;}
				.show-notify-box{ animation: showNotifyBox 0.3s ease 1 forwards;}
				.hid-notify-box{ animation: hidNotifyBox 0.3s ease 1 forwards;}
				#wt-loading-box{display: none;position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 100000;background-color: #0000004d;}
				#wt-loading-box .loading{position: absolute;width: 35px;height: 17px;top: 50%;left: 50%;transform: translate(-50%,-50%);}
				#wt-loading-box .loading::before,
				#wt-loading-box .loading::after{position: absolute;content: "";top: 3px;background-color: #ffe60f;width: 14px;height: 14px;border-radius: 20px;mix-blend-mode: multiply;animation: circletokLeft 1.2s linear infinite;}
				#wt-loading-box .loading::after{animation: circletokRight 1.2s linear infinite;background-color: #4de8f4;}
				#wt-left-show{ position: fixed;left: 20px;top: 50%;transform: translateY(-50%);z-index: 9999;transition: all 0.3s ease;}
				#wt-left-show i {color: #5f5b5b;font-size: 24px;color: #E91E63;text-shadow: #E91E63 2px 2px 12px;font-size: 25px;margin-left: -1px;}
		        #wt-${_CONFIG_.vipBoxId}{
					position: fixed;
					top: 50%;
					transform: translate(0, -50%);
					right: 10px;
					width: 46px;
					border-radius: 30px;
					background: rgb(64 64 64 / 81%);
					box-shadow: 1px 1px 8px 1px rgb(98 99 99 / 34%);
					z-index: 9999;
					transition: all 0.3s ease;
				}
				#wt-${_CONFIG_.vipBoxId} .item{position: relative;height: 70px;}
				#wt-${_CONFIG_.vipBoxId} .item:not(:last-child)::after{position: absolute;bottom: 0;left: 22.5%;content: '';width: 55%;height: 2px;background-color: #fff;}
				#wt-${_CONFIG_.vipBoxId} .item .iconfont,#wt-${_CONFIG_.vipBoxId} .item img{position: absolute;top:50%;left:50%;transform: translate(-50%,-50%)}
				#wt-login-box .close,#wt-set-box .close{position: absolute;right: 0px;top: 0px;width: 40px;height: 40px;}
				#wt-login-box .close::before,#wt-login-box .close::after{position: absolute;left: 50%;top: 50%;content: '';width: 12px;height: 2px;border-radius: 1px;background-color: #6a6a6a;transform: translate(-50%,-50%) rotate(45deg);visibility: visible;}
				#wt-set-box .close::before,#wt-set-box .close::after{position: absolute;left: 50%;top: 50%;content: '';width: 12px;height: 2px;border-radius: 1px;background-color: #6a6a6a;transform: translate(-50%,-50%) rotate(45deg);visibility: visible;}
				#wt-login-box .close::after,#wt-set-box .close::after{transform: translate(-50%,-50%) rotate(-45deg);}
				#wt-${_CONFIG_.vipBoxId} .absolute-center{ position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}
				#wt-${_CONFIG_.vipBoxId} #wt-my img{ width: 28px;height: 28px;border-radius: 30px;margin-left: 2px;transtion: all 0.3s ease;}
				#wt-${_CONFIG_.vipBoxId} #wt-my-set i {color: white;font-size: 24px;text-shadow: 2px 2px 14px #ffffff;font-family: 'iconfont';}
				#wt-${_CONFIG_.vipBoxId} #wt-my-copy i {color: white;font-size: 24px;text-shadow: 2px 2px 15px #ffffff;font-family: 'iconfont';}
				#wt-${_CONFIG_.vipBoxId} #wt-my-notify i {color: white;font-size: 23px;padding: 10px 1px;text-shadow: 2px 2px 12px #ffffff;}
				#wt-${_CONFIG_.vipBoxId} #wt-hid-box i {color: white;font-size: 24px;text-shadow: 2px 2px 12px #ffffff;font-size: 25px;margin-left: -1px;}
		        .wt-player-btn-box .player-btn{ position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);width: 20%}
		        .wt-player-btn-box .tips{ position: absolute;bottom: 20px;left:50%;transform: translateX(-50%);color: #FFC107;width: 80%;text-align: center;font-size: 15px;font-weight: 500;}
				#wt-mask-box,#wt-maxindex-mask{display:none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; background-color: #0000004d;}
				#wt-maxindex-mask{z-index: 90000;display:none;}
				#wt-set-box{ position:fixed; top:50%;left:45%; transform: translate(-50%,-50%) scale(0);background-color: white;box-shadow: 0 15px 30px rgba(0, 0, 0, .15);border-radius: 10px;z-index: 10010;padding: 10px 15px;padding-right: 5px;box-sizing: border-box;}
				#wt-set-box .selected-box .selected{ background-color: #ff6022;color: white;}
				#wt-set-box .user-box-container{display: none;letter-spacing: 1px;}
				#wt-set-box .info-box{display:flex;height: 50px;align-items: center;}
				#wt-set-box .info-box .avatar-box{position: relative;height: 36px;width: 36px;background-color: white;border-radius: 7px;box-shadow: rgb(166 166 166 / 20%) 0px 1px 20px 0px;}
				#wt-set-box .user-box .title{text-align: center;font-weight: 600;font-size: 16px;color: #3a3a3a;}
				#wt-set-box .user-box .desc{flex: 8;font-size: 10px;color: #5d5d5d;margin: 0 10px;}
				#wt-set-box .user-box .avatar{position: absolute; width: 36px;height:36px;border-radius: 30px;border-radius: 7px;}
				#wt-tips-box{ position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);width: 240px;min-height:130px;background-color: white;border-radius:10px;z-index: 95000;padding:10px 15px;}
				#wt-tips-box .title{font-size: 16px;text-align: center;font-weight: 600;}
				#wt-tips-box .content{text-align: center;margin: 14px 0;font-size: 12px;color: #2a2a2a;font-weight: 500;}
				#wt-tips-box .content p{color: #ff4757;text-align: left;}
				#wt-tips-box .btn-box{display:flex;justify-content: space-around;}
				#wt-tips-box .btn-box button{min-width: 60px;height: 28px;background-color: #ec407a;border-radius: 30px;color: white;border: none;font-size: 12px;}
				#wt-tips-box .btn-box .cancel{display: none;background-color: #eee;color:#2a2a2a}
				#wt-notify-box {position: fixed;top: 2%;left: 50%;transform:translate(-50%,-100%) scale(0);width: 80%;min-height: 75px;letter-spacing: 1px;background-color: white;color:#2a2a2a;border-radius: 15px;box-shadow: 0 15px 30px rgba(0, 0, 0, .15);z-index: 95000;}
				#wt-notify-box .title{ text-align: center;height: 35px; line-height: 35px;font-size: 15px;font-weight: 600; color: #00BCD4;}
				#wt-notify-box .content{ color: #44b7c6;padding: 10px 15px;font-size: 12px;}
				.wt-player-btn-box{ position:absolute;top:0;left:0;right:0;bottom:0;z-index: 9998;background-color: #0000004d;}
				`
			)
		    if (_CONFIG_.isMobile) {
		        GM_addStyle(`
		            #wt-set-box {width:72%;}
		        `);
		    }
			let scripts = '';
			_CONFIG_.scripts.forEach((item, index) => {
				scripts += `
					<div class="info-box" data-address="${item.url}">
						<div class="avatar-box">
							<img class="avatar" src="${item.icon}"/>
						</div>
						<div class="desc">
							<text>${item.desc}</text>
						</div>
					</div>
				`;
			})
		
		    $(container).append(`
		        <div id="wt-${_CONFIG_.vipBoxId}">
				    <div id="wt-my" class="item">
						<img src="https://mp-af307268-1b8a-482a-b75a-b6e98b125742.cdn.bspapp.com/system/null_square.png"></img>
				    </div>
				    <div id="wt-my-set" class="item">
					    <i class="iconfont">&#xec05;</i>
				    </div>
					<div id="wt-my-copy" class="item">
					    <i class="iconfont">&#xec07;</i>
					</div>
					<div id="wt-my-notify" class="item" style="padding: 0 11px;">
					    <i class="iconfont">&#xec08;</i>
					</div>
				    <div id="wt-hid-box" class="item">
					    <i class="iconfont">&#xec06;</i>
				    </div>
			    </div>
			    <div id="wt-left-show" style="transform: translate(-60px,-50%);padding: 10px;">
					<i class="iconfont">&#xe704;</i>
			    </div>
				<div id="wt-mask-box"></div>
				<div id="wt-set-box">
					<div class="close"></div>
					<div class="line-box" style="display:none">

					</div>
					<div class="user-box-container">
						<div class="user-box">
							<div class="title" style="margin-bottom: 10px">及时行乐工具库</div>
							${scripts}
						</div>
					</div>
				</div>
				<div id="wt-loading-box">
					<div class="loading"></div>
				</div>
				<div id="wt-maxindex-mask"></div>
				<div id="wt-tips-box">
					<div class="title">提示</div>
					<div class="content"></div>
					<div class="btn-box">
						<button class='cancel'>取消</button>
						<button class='submit'>确定</button>
					</div>
				</div>
				<div id="wt-notify-box">
					<div class="title">通知</div>
					<div class="content"></div>
				</div>
		    `)
			if(_CONFIG_.user && _CONFIG_.user.avatar){
				$("#wt-my img").addClass('margin-left')
				$('#wt-my img').attr('src',_CONFIG_.user.avatar)
			}
			if(!_CONFIG_.user){
				util.addLogin()
			}
		    return new Promise((resolve, reject) => resolve(container));
		}
	
		bindEvent(container) {
		    const vipBox = $(`#wt-${_CONFIG_.vipBoxId}`)
			if(GM_getValue('haijiao_hid_controller',null)){
				vipBox.css("transform","translate(125%, -50%)")
				$('#wt-left-show').css("transform","translate(0, -50%)")
			}
			//点击 我的
			vipBox.find("#wt-my").on("click", () => {
			    if(_CONFIG_.user){
					$('#wt-mask-box').css('display','block')
					$("#wt-set-box .user-box-container").css('display','block')
					$("#wt-set-box").removeClass('hid-set-box')
					$("#wt-set-box").addClass('show-set-box')
					$('#wt-set-box .user-box-container .nickname').html(_CONFIG_.user.nickname)
				}else{
					util.addLogin()
					$('#wt-login-mask').css('display','block')
					$("#wt-login-box").removeClass('hid-set-box')
					$("#wt-login-box").addClass('show-set-box')
					// const wt_haijiao_first_use = GM_getValue('wt_haijiao_first_use')
					if(wt_init_code){
						$("#wt-login-box input").val(md5x(md5x(),'de').code)
					}else{
						util.showTips({ title: _CONFIG_.initFailMsg})
					}
				}
			})
		
			// 点击 播放
			vipBox.find("#wt-my-set").on("click", () => {
				if(!_CONFIG_.user){
					$("#wt-my").click()
					return
				}
				if(_CONFIG_.videoUrl && _CONFIG_.isMobile){
					window.location.href = _CONFIG_.videoUrl
				}
				if(!_CONFIG_.videoUrl){
					util.showTips({ title: '视频不存在'})
				}
				if(!_CONFIG_.isMobile){
					util.showTips({ title: '请使用手机打开该网站'})
				}
			})
			
			// 点击 复制
			vipBox.find("#wt-my-copy").on("click", () => {
				if(!_CONFIG_.user){
					$("#wt-my").click()
					return
				}
				if(!_CONFIG_.videoUrl){
					util.showTips({ title: '视频不存在'})
				}else{
					navigator.clipboard.writeText(_CONFIG_.videoUrl).then(res =>{
						util.showTips({ title: '视频地址复制成功'})
					})
				}
			})
		
			//点击 隐藏控制器
			vipBox.find("#wt-hid-box").on("click", () => {
				vipBox.css("transform","translate(125%, -50%)")
				$('#wt-left-show').css("transform","translate(0, -50%)")
				GM_setValue('haijiao_hid_controller',1)
			})
		
			//点击 显示控制器
			$('#wt-left-show').on('click',()=>{
				$('#wt-left-show').css("transform","translate(-60px, -50%)")
				vipBox.css("transform","translate(0, -50%)")
				GM_setValue('haijiao_hid_controller','')
			})
		
			//点击 设置界面遮罩
			$('#wt-mask-box').on('click',()=>{
				$('#wt-mask-box').css('display','none')
				$("#wt-set-box").removeClass('show-set-box')
				$("#wt-set-box").addClass('hid-set-box')
				setTimeout(()=>{
					$("#wt-set-box .line-box").css('display','none')
					$("#wt-set-box .user-box-container").css('display','none')
				},500)
			})
			
			//点击了推广app
			$('#wt-set-box .user-box-container .user-box .info-box').on('click',function(e){
				let url = _CONFIG_.homePage
				try{
					// url = e.currentTarget.attributes['data-address'].value
				}catch(e){}
				if(url && url != 'undefined'){
					navigator.clipboard.writeText(url).then(res =>{
						util.showTips({ title: '网站地址复制成功'})
					})
				}else{
					util.showTips({ title: '请前往网址获取脚本地址'})
				}
			})
		
			//点击 设置/我的信息界面关闭
			$("#wt-set-box .close").on("click", () => {
				$('#wt-mask-box').click()
			})
			
			//点击 通知
			vipBox.find("#wt-my-notify").on("click", () => {
				if(_CONFIG_.showNotify){
					$('#wt-notify-box').click()
				}else{
					const notify = 	GM_getValue('haijiao_notify','')
					if(notify && (notify.date == new Date().setHours(0,0,0,0))){
						util.showNotify({ title: notify.msg})
					}else{
						console.log('2')
						util.showNotify({ title: '还没有通知信息'})
					}
					GM_setValue('haijiao_updated_version_date',new Date().setHours(0,0,0,0))
				}
			})
			util.urlChangeReload()
		}
	}

    return {
        start: () => {
			const wt_haijiao_first_use = GM_getValue('wt_haijiao_first_use','')
			if(!wt_haijiao_first_use) GM_setValue('wt_haijiao_first_use',Date.now() + (Math.round(Math.random() * 899999 + 100000) + ''))
			_CONFIG_.user = GM_getValue('wt_haijiao_user', '')
			util.initUnsafeWindow()
			if(_CONFIG_.user){
				if(_CONFIG_.user.login_date && (_CONFIG_.user.login_date != new Date().setHours(0,0,0,0))){
					_CONFIG_.user = ''
					GM_setValue('wt_haijiao_user', '')
				}
			}
			const info = GM_getValue('lasting_haijiao_token','')
			if(info){
				document.cookie = "uid=" + info.uid
				document.cookie = "token=" + info.token
			}
			const targetConsumer = new BaseConsumer
			targetConsumer.parse()
        },
		_CONFIG_
    }
})();

(function () {
   superVip.start();
})();