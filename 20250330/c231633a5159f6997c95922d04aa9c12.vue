<template>
	<view>
		<view @touchmove.prevent.stop class="reward-popup" v-if="reward">
			<uni-popup ref="registerReward" type="center" :maskClick="false">
				<view class="reward-wrap">
					<image :src="$util.img('public/uniapp/register_reward/register_reward_img.png')" mode="widthFix"
						class="bg-img-head" />
					<image :src="$util.img('public/uniapp/register_reward/register_reward_money.png')" mode="widthFix"
						class="bg-img-money" />
					<image :src="$util.img('public/uniapp/register_reward/register_reward_head.png')" mode="widthFix"
						class="bg-img" />
					<view class="wrap">
						<view>
							<scroll-view scroll-y="true" class="register-box">
								<view class="reward-content">
									<view class="reward-item" v-if="reward.point > 0">
										<view class="head">积分奖励</view>
										<view class="content">
											<view class="info">
												<view>
													<text class="num">{{ reward.point }}</text>
													<text class="type">积分</text>
												</view>
												<view class="desc">用于下单时抵现或兑换商品等</view>
											</view>
											<view class="tip" @click="closeRewardPopup('point')">立即查看</view>
										</view>
									</view>
									<view class="reward-item" v-if="reward.growth > 0">
										<view class="head">成长值</view>
										<view class="content">
											<view class="info">
												<view>
													<text class="num">{{ reward.growth }}</text>
													<text class="type">成长值</text>
												</view>
												<view class="desc">用于提升会员等级</view>
											</view>
											<view class="tip" @click="closeRewardPopup('growth')">立即查看</view>
										</view>
									</view>
									<view class="reward-item" v-if="reward.balance > 0">
										<view class="head">红包奖励</view>
										<view class="content">
											<view class="info">
												<view>
													<text class="num">{{ reward.balance }}</text>
													<text class="type">元</text>
												</view>
												<view class="desc">不可提现下单时可用</view>
											</view>
											<view class="tip" @click="closeRewardPopup('balance')">立即查看</view>
										</view>
									</view>
									<view class="reward-item" v-if="reward.coupon_list.length > 0">
										<view class="head">优惠券奖励</view>
										<view class="content" v-for="(item, index) in reward.coupon_list" :key="index">
											<view class="info">
												<view>
													<text class="num coupon-name">{{ item.coupon_name }}</text>
												</view>
												<view class="desc" v-if="item.at_least > 0">
													满{{ item.at_least }}{{ item.type == 'discount' ? '打' + item.discount
														+ '折' : '减' + item.money }}
												</view>
												<view class="desc" v-else>
													无门槛，{{ item.type == 'discount' ? '打' + item.discount + '折' : '减' +
														item.money }}
												</view>
												<view v-if="item.num && item.num > 1" class="coupon-count">x{{ item.num }}张</view>
											</view>
											<view class="tip" @click="closeRewardPopup('coupon')">立即查看</view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
					<view class="close-btn" @click="closeRewardPopup()"><text class="iconfont icon-close"></text></view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';

// 注册奖励弹出层
export default {
	name: 'register-reward',
	components: {
		uniPopup
	},
	data() {
		return {
			reward: null,
			back: ''
		};
	},
	created() { },
	methods: {
		open(back) {
			if (back) this.back = back;
			if (this.addonIsExist.memberregister) {
				this.getRegisterReward();
			} else {
				this.closeRewardPopup();
			}
		},
		cancel() {
			this.$refs.registerReward.close();
		},
		/**
		 * 获取新人礼配置
		 */
		getRegisterReward() {
			this.$api.sendRequest({
				url: '/memberregister/api/Config/Config',
				success: res => {
					if (res.code >= 0) {
						let data = res.data;
						if (data.is_use == 1 && (data.value.point > 0 || data.value.balance > 0 || data.value.growth > 0 || data.value.coupon_list.length > 0)) {
							if (data.value.coupon_list && data.value.coupon_list.length && data.value.coupon_new) {
								const numMap = Object.fromEntries(
									data.value.coupon_new.map(item => [item.id, item.num])
								);
								data.value.coupon_list = data.value.coupon_list.map(item => ({
									...item,
									num: numMap[item.coupon_type_id]
								}));
							}
							this.reward = data.value;
							this.$nextTick(() => {
								if (this.$refs.registerReward) this.$refs.registerReward.open();
							});
						}
					}
					this.closeRewardPopup();
				}
			});
		},
		closeRewardPopup(type) {
			if (this.$refs.registerReward) this.$refs.registerReward.close();
			switch (type) {
				case 'point':
					this.$util.redirectTo('/pages_tool/member/point_detail', {});
					break;
				case 'balance':
					this.$util.redirectTo('/pages_tool/member/balance_detail', {});
					break;
				case 'growth':
					this.$util.redirectTo('/pages_tool/member/level', {});
					break;
				case 'coupon':
					this.$util.redirectTo('/pages_tool/member/coupon', {});
					break;
				default:
					if (this.back) this.$util.redirectTo(decodeURIComponent(this.back), {}, 'redirectTo');
					else this.$util.redirectTo('/pages/index/index');
					break;
			}
		}
	}
};
</script>
<style scoped>
.register-box /deep/ .uni-scroll-view {
	background: unset !important;
}

.register-box {
	max-height: 630rpx;
	overflow-y: scroll;
}

.register-box /deep/.uni-popup__wrapper-box {
	overflow: unset !important;
}

.reward-popup /deep/.uni-popup__wrapper {
	background: none;
}
</style>

<style lang="scss">
.uni-popup__wrapper-box {
	overflow: unset !important;
}

.close-btn {
	text-align: center;
	margin-top: 20rpx;

	.iconfont {
		color: #fff;
		font-size: 40rpx;
	}
}

.reward-wrap {
	width: 80vw;
	height: auto;
	position: relative;
	// padding-top: 150rpx;

	&>uni-image,
	.bg-img {
		width: 100%;
		will-change: transform;
	}

	.bg-img-head {
		position: absolute;
		top: -150rpx;
		width: 100vw;
		left: -10vw;
	}

	.bg-img-money {
		position: absolute;
		width: 93vw;
		left: -48rpx;
		top: 100rpx;
		z-index: 10;
	}

	.wrap {
		width: calc(100% - 2rpx);
		height: 100%;
		background-color: #ef3030;
		margin-top: -80rpx;
		padding-bottom: 30rpx;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;

		&>view {
			position: relative;
		}
	}

	.reward-content {
		margin: 0 50rpx 0 50rpx;
	}

	.reward-item {
		.head {
			color: #fff;
			text-align: center;
			line-height: 1;
			margin: 20rpx 0;
		}

		.content {
			display: flex;
			padding: 16rpx 26rpx;
			background: #fff;
			border-radius: 10rpx;
			margin-bottom: 10rpx;

			.info {
				flex: 1;
			}

			.tip {
				color: #ff222d;
				padding: 10rpx 0 10rpx 30rpx;
				width: 70rpx;
				line-height: 1.5;
				letter-spacing: 2rpx;
				border-left: 2rpx dashed #e5e5e5;
			}

			.num {
				font-size: 52rpx;
				color: #ff222d;
				font-weight: bolder;
				line-height: 1;
			}

			.coupon-name {
				font-size: 38rpx;
			}
			
			.coupon-count {
				font-size: 24rpx;
				color: #ff6000;
				line-height: 1.2;
				margin-top: 8rpx;
				display: flex;
				align-items: center;
				font-weight: bold;
				
				&:before {
					content: "";
					display: inline-block;
					width: 16rpx;
					height: 16rpx;
					border-radius: 50%;
					background-color: #ff6000;
					margin-right: 8rpx;
				}
			}

			.type {
				font-size: $font-size-base;
				margin-left: 10rpx;
				line-height: 1;
			}

			.desc {
				margin-top: 8rpx;
				color: $color-tip;
				font-size: $font-size-tag;
				line-height: 1;
			}
		}
	}

	.btn {
		position: absolute;
		width: calc(100% - 100rpx);
		bottom: 40rpx;
		left: 50rpx;

		.btn-img {
			width: 100%;
		}
	}
}
</style>