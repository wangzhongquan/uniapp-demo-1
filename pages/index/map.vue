<template>
	<view class="content">
		<view>
			<button>00</button>
		</view>
		<map style="width: 750rpx;height: 50%;" :longitude="longitude" :latitude="latitude" :markers="markers"
			:polyline="polyline" :include-points="includePoints">
		</map>
	</view>
</template>

<script>
	import amap from '../../common/amap-wx.js';

	export default {
		data() {
			return {
				amapPlugin: null,
				key: '78015d76b52447b5350d951929e176bc',
				latitude: 39.954125,
				longitude: 116.45664,
				markers: [{
						id: 0,
						latitude: 39.989643,
						longitude: 116.481028,
						iconPath: '../../static/location.png',
						width: 40,
						height: 40,
					},
					{
						id: 1,
						latitude: 39.90816,
						longitude: 116.434446,
						iconPath: '../../static/location.png',
						width: 40,
						height: 40,
					},
					{
						id: 3,
						latitude: 39.954125,
						longitude: 116.45664,
						iconPath: '../../static/location.png',
						width: 40,
						height: 40,
					}
				], //标记点
				includePoints: [], //缩放视野以包含所有给定的坐标点
				polyline: []
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
			console.log(100)
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});
			this.map1(); // map1:使用高德的API进行定位
			// map2:uni.getLocation定位，在小程序内拿不到address数据。数据对比看下图
			// #endif

			// #ifdef APP-PLUS
			console.log(200)
			uni.showToast({
				title: "wzq"
			})
			uni.getLocation({
				// map组件默认为国测局坐标gcj02，调用 uni.getLocation返回结果传递给组件时，需指定 type 为 gcj02 
				type: 'gcj02',
				geocode: true,
				success: ({
					longitude,
					latitude
				}) => {
					// 定位得到的经纬度
					console.log('当前位置的经度：' + longitude)
					console.log('当前位置的纬度：' + latitude)
					this.longitude = longitude
					this.latitude = latitude
					// 画出定位位置
					this.markers[0] = {
						longitude,
						latitude,
						title: '我的位置',
						iconPath: '../../static/location.png',
					}
				}
			})
			// #endif
		},
		methods: {
			map1() {
				var that = this
				// 静态死数据
				this.amapPlugin.getDrivingRoute({
					origin: '116.481028,39.989643',
					destination: '116.434446,39.90816',
					success: function(data) {
						var points = [];
						// 通过一个点一个点生成地图轨迹数据
						if (data.paths && data.paths[0] && data.paths[0].steps) {
							var steps = data.paths[0].steps;
							for (var i = 0; i < steps.length; i++) {
								var poLen = steps[i].polyline.split(';');
								for (var j = 0; j < poLen.length; j++) {
									points.push({
										longitude: parseFloat(poLen[j].split(',')[0]),
										latitude: parseFloat(poLen[j].split(',')[1])
									})
								}
							}
						}
						that.includePoints = points
						that.polyline = [{
							points: points, //地图轨迹数据
							color: "#0091ff", //轨迹颜色
							width: 6 //线条宽度
						}]
					},
					fail: function(info) {

					}
				})

				return;
				let _this = this;
				uni.showLoading({
					title: '获取信息中'
				});
				this.amapPlugin.getRegeo({
					success: (res) => {
						_this.latitude = res[0].latitude;
						_this.longitude = res[0].longitude;
						let market = {
							id: 1,
							latitude: _this.latitude,
							longitude: _this.longitude,
							iconPath: '../../static/location.png',
							width: 40,
							height: 40,
							title: res[0].name,
							callout: {
								content: res[0].name,
								color: '#ffffff',
								fontSize: '14',
								display: 'ALWAYS',
								bgColor: '#FF6F1E',
								padding: '10',
								textAlign: 'center',
								borderRadius: '5'
							}
						}
						_this.markers[0] = market;
						_this.address1 = market;
						_this.markers = [..._this.markers];
						_this.includePoints[0] = market;
					}
				})
				uni.hideLoading();
			}
		}
	}
</script>

<style>
	.content {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	.map {
		width: 100%;
		height: 100%;
	}
</style>
