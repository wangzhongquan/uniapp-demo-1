<template>
	<view class="container" :style="{height: screenHeight+'px'}">
		<view>我的信息</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: 0
			};
		},
		mounted() {
			this.screenHeight = uni.getSystemInfoSync().windowHeight;
		}

	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
