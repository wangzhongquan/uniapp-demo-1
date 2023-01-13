<template>
	<view>
		<!-- <view >联系我们： 11234</view> -->
		<view class="item" @click="callPhone('1560000001')">
			<image class="slot-image" src="/static/img/home/4.png" mode="widthFix"></image>
			<view class="slot-inner">
				<view class="phone">1560000001</view>
				<view class="txt">咨询热线</view>
			</view>
			<image class="slot-end" src="/static/img/detail/call.png" mode="widthFix"></image>
		</view>
		<view class="item" @click="callPhone('1560000002')">
			<image class="slot-image" src="/static/img/home/4.png" mode="widthFix"></image>
			<view class="slot-inner">
				<view class="phone">1560000002</view>
				<view class="txt">卖房子专员</view>
			</view>
			<image class="slot-end" src="/static/img/detail/call.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			callPhone(tel) {
				uni.makePhoneCall({
					phoneNumber: tel
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		height: 50px;
		background-color: white;
		font-size: $uni-font-size-sm;
		padding: 0 12px;
		margin-bottom: 16px;
		align-items: center;
	}

	.slot-image {
		width: 30px;
		height: 30px;
		margin-right: 12px;
	}

	.slot-inner {
		flex: 1;

		.phone {
			font-size: $uni-font-size-base;
		}
	}

	.slot-end {
		width: 20px;
		height: 20px;
	}

	.slot-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
