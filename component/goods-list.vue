<template>
	<view>
		<view class="item-single" v-for="g in goods" @click="toDetailPage()">
			<view class="single-left">
				<image class="img" src="/static/img/561ffcfad517890a.jpg" mode="scaleToFill"></image>
				<view class="look">
					<uni-icons type="eye" color="white" size="16"></uni-icons>
					<text class="look-count">130</text>
				</view>

			</view>
			<view class="single-right">
				<text class="right-title">中海国际</text>
				<view class="right-content">
					<view>
						<text>参考单价：</text>
						<text>¥ 12,000</text>
					</view>
					<view>
						<text>建筑面积：</text>
						<text>120 - 150</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "goodsList",
		props: {
			goods: {
				type: Array,
				default: []
			}
		},
		data() {
			return {}
		},
		mounted() {
			console.log(this.goods)
		},
		methods: {
			toDetailPage(opts) {
				uni.navigateTo({
					url: "/pages/detail/detail"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-single {
		display: flex;
		border-top: 1px solid #f3f6fc;
		padding: 20rpx;
		margin: 0 20rpx;
		height: 200rpx;
		overflow: hidden;
		align-items: center;
		background-color: white;

		.single-left {
			position: relative;
			height: 200rpx;
			width: 200rpx;
			margin-right: 20rpx;

			.look {
				position: absolute;
				display: flex;
				z-index: 3;
				bottom: 0px;
				left: 0px;
				color: white;
				background-color: rgba(0, 0, 0, 0.5);
				padding: 0 2px;

				.look-count {
					margin-left: 4px;
					font-size: 12px;
				}
			}

			.img {
				width: 100%;
				height: 100%;
				border-radius: 2px;
				overflow: hidden;

			}
		}

		.single-right {
			.right-title {
				font-size: $uni-font-size-base;
			}

			.right-content {
				font-size: $uni-font-size-sm;

				view {
					margin-top: 3px;
				}
			}
		}
	}
</style>
