<script>
	import Vue from 'vue'
	export default {
		globalData: {
			ids: ''
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif        

					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})

		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}

	::v-deep .uni-load-more {
		height: 70px !important;
	}

	checkbox .wx-checkbox-input {
		border-radius: 50% !important;
	}

	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		color: #fff;
		background: #B78D56;
	}

	/* .top-text {
		width: 100%;
		color: #fff;
		padding: calc(var(--status-bar-height) + 30rpx) 20rpx 20rpx 50rpx;
	}

	.top_view {
		color: #000000;
		font-size: 38rpx;
	} */
</style>
