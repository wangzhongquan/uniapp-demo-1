<template>
	<view class="container">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="false" :interval="3000">
			<swiper-item v-for="b in banners" :key="b.img">
				<view class="swiper-item">
					<image :src="b.img" mode="widthFix" style="width: 100%;"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="home-title">
			<text>
				首付60万买花园洋房 成华主城 中海物业 双地铁口 一梯两
			</text>
		</view>

		<view class="tags">
			<uni-grid :column="5" :showBorder="true">
				<uni-grid-item v-for="(item, index) in list" :key="item.key">
					<view class="item-wrapper" @click="selectItem(item)">
						<image :src="item.icon" class="icon"></image>
						<text>{{item.title}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>

		<uni-card title="基本信息" :isFull="false">
			<view class="im">
				<text class="s1">建筑面积：</text>
				<text>120 - 135 平</text>
			</view>
			<view class="im">
				<text class="s1">装修情况：</text>
				<text>清水、精装</text>
			</view>
			<view class="im">
				<text class="s1">参考价：</text>
				<text>¥：12000</text>
			</view>
			<view class="im">
				<text class="s1">物业费：</text>
				<text>¥：3.23</text>
			</view>
			<view class="im">
				<text class="s1">产权年限：</text>
				<text>70</text>
			</view>
		</uni-card>

		<uni-card title="地图位置" :isFull="false">
			<view class="loc">
				<map style="width: 100%; height: 100%;" :longitude="longitude" :latitude="latitude" :markers="markers">
				</map>
			</view>
		</uni-card>

		<uni-card title="楼盘详情" :isFull="false" id="detail">
			<view class="desc">
				<view>1、 地理位置优越</view>
				<view>2、 公交地铁十分方便。出行方便，上下班方便</view>
				<view>3、 购物方便，节省您的宝贵时间</view>
				<view>4、 小区绿化率高。环境优美。宁静和谐，好环境总会给人带来好心情</view>
				<view>5、 房干净整洁，温馨舒适，窗明几净，就等着您的拎包入住</view>
				<view>6、 宽敞明亮，布局大方，采光非常好</view>
			</view>
		</uni-card>

		<uni-card title="周边配套" :isFull="false" id="home">
			<view class="desc">
				<view>1、 地理位置优越</view>
				<view>2、 公交地铁十分方便。出行方便，上下班方便</view>
				<view>3、 购物方便，节省您的宝贵时间</view>
				<view>4、 小区绿化率高。环境优美。宁静和谐，好环境总会给人带来好心情</view>
				<view>5、 房干净整洁，温馨舒适，窗明几净，就等着您的拎包入住</view>
				<view>6、 宽敞明亮，布局大方，采光非常好</view>
			</view>
		</uni-card>

		<view class="menu">
			<uni-grid :column="4" :showBorder="false" :square="false" :highlight="true">
				<uni-grid-item v-for="(item, index) in menu" :key="item.key">
					<view class="item-wrapper" @click="selectMenu(item)">
						<image :src="item.icon" class="icon"></image>
						<text>{{item.title}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>

		<uni-popup ref="popup">
			<view class="content-inner">
				<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
					<swiper class="swiper-box" @change="change">
						<swiper-item v-for="(item ,index) in info" :key="index" class="swiper-image">
							<image class="swiper-image" :src="item.url" mode="scaleToFill">
							</image>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [],
				current: 0,
				mode: 'nav',
				latitude: 30.657401,
				longitude: 104.065861,
				markers: [{
					id: 0,
					latitude: 30.657401,
					longitude: 104.065861,
					iconPath: '../../static/location.png',
					width: 20,
					height: 20,
					callout: {
						content: '天府广场',
						display: "ALWAYS",
						borderColor: '#e0228a',
						borderWidth: 2,
						borderRadius: 4,
						padding: 2
					}
				}, ],
				banners: [{
						img: "../../static/img/dab00b077ec51090.jpg",
					},
					{
						img: "../../static/img/561ffcfad517890a.jpg"
					},
					{
						img: "../../static/img/8ed2836e4ad0c263.jpg"
					}
				],
				list: [{
						key: 1,
						icon: "../../static/img/home/icon.png",
						title: '图片'
					},
					{
						key: 2,
						icon: "../../static/img/home/1.jpg",
						title: '户型图'
					},
					{
						key: 3,
						icon: "../../static/img/home/2.png",
						title: '详情'
					},
					{
						key: 4,
						icon: "../../static/img/home/3.jpg",
						title: '配套'
					},
					{
						key: 5,
						icon: "../../static/img/home/4.png",
						title: '位置'
					},
				],
				menu: [{
						icon: "../../static/img/detail/m1.png",
						title: '关注',
						key: 0,
						act: false
					},
					{
						icon: "../../static/img/detail/m2.png",
						title: '待领取',
						key: 1,
						act: false
					},
					{
						icon: "../../static/img/detail/m3.png",
						title: '电话',
						key: 2,
					},
					{
						icon: "../../static/img/detail/m4.png",
						title: '立即预约',
						key: 3,
					},
				]
			};
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectItem(t) {
				const {
					key
				} = t;
				if (key === 1) {
					this.$refs.popup.open('center')
					this.info = [{
						content: '内景',
						url: "../../static/img/8ed2836e4ad0c263.jpg"
					}, {
						content: '外景',
						url: "../../static/img/8ed2836e4ad0c263.jpg"
					}, {
						content: '内外景',
						url: "../../static/img/8ed2836e4ad0c263.jpg"
					}]
				}

				if (key === 2) {
					this.$refs.popup.open('center')
					this.info = [{
						content: '户型1',
						url: "../../static/img/detail/hx.jpeg"
					}, {
						content: '户型2',
						url: "../../static/img/detail/hx.jpeg"
					}, {
						content: '户型3',
						url: "../../static/img/detail/hx.jpeg"
					}]
				}

				if (key === 3) {
					uni.pageScrollTo({
						selector: "#detail",
						duration: 300,
					})
				}
				if (key === 4) {
					uni.pageScrollTo({
						selector: "#home",
						duration: 300,
					})
				}

				if (key === 5) {
					const latitude = 30.494083
					const longitude = 104.073656
					uni.openLocation({
						latitude: parseFloat(latitude),
						longitude: parseFloat(longitude),
						scale: 18,
						name: "成都海昌极地海洋公园"
					})
				}
			},
			selectMenu(e) {
				const {
					key,
					act
				} = e;

				if (key === 0) {
					if (act) {
						this.menu[key].title = "关注"
						this.menu[key].icon = "../../static/img/detail/m1.png"
						uni.showToast({
							title: `已取消`,
							icon: 'success'
						})
					} else {
						this.menu[key].title = "已关注"
						this.menu[key].icon = "../../static/img/detail/m1_act.png"
						uni.showToast({
							title: `已关注`,
							icon: 'success'
						})
					}
					this.menu[key].act = !act
				}

				if (key === 1) {
					if (act) {
						this.menu[key].title = "待领取"
						this.menu[key].icon = "../../static/img/detail/m2.png"
						uni.showToast({
							title: `已退还`,
							icon: 'success'
						})
					} else {
						this.menu[key].title = "已领取"
						this.menu[key].icon = "../../static/img/detail/m2_act.png"
						uni.showToast({
							title: `已领取`,
							icon: 'success'
						})
					}
					this.menu[key].act = !act
				}
				if (key === 2) {
					uni.switchTab({
						url: "/pages/phones/phones",
						success: function(e) {}
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wp {}

	.content-inner {
		height: 750rpx;
		width: 750rpx;
		background-color: white;

	}

	.swiper-box {
		position: relative;
		height: 750rpx;
	}

	.swiper-image {
		width: 100%;
		height: 100%;
	}




	.im {
		display: flex;

		.s1 {
			width: 70px;
		}
	}

	.loc {
		height: 260px;
		position: relative;
	}



	.menu {
		font-size: $uni-font-size-sm;
		height: 70px;
		overflow: hidden;
		position: sticky;
		bottom: 0;
		width: 100%;



		.item-wrapper {
			background-color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 70px;
			width: 100%;
			color: $uni-text-color;


			text {
				color: $uni-text-color;
			}

			.icon {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 12rpx;
			}
		}

	}

	.tags {
		margin-top: 15px;
		padding: 0 15px;
		font-size: $uni-font-size-sm;

		.item-wrapper {
			background-color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;

			.icon {
				width: 50rpx;
				height: 50rpx;
				margin-bottom: 15rpx;
			}
		}

	}


	.swiper {
		height: 400rpx;
		background-color: #909399;
	}

	.home-title {
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		background-color: white;
		padding: 10px 15px;
	}

	.container {
		// padding-bottom: 15px;
	}
</style>
