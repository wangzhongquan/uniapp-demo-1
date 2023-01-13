<template>
	<view>
		<view class="news-wrapper">
			<view v-for="single in news" :key="single.key">
				<view class="item" @click="goDetail(single)">
					<view class="left">
						<text class="desc-text">
							{{single.desc}}
						</text>
						<view class="desc-share">
							<uni-icons type="paperplane" size="16"></uni-icons>
						</view>
					</view>
					<image class="main-img" src="/static/img/561ffcfad517890a.jpg" mode="scaleToFill">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [{
					key: 1,
					desc: "总体描述. 风格、方位、采光. 优势性描述：全明、360°采光，户型方正，南北朝向，户型通透，功能分区. 全明户型，南北通透空间，惬意悠享假日生活；全明气派尊贵户型，室内阳光流连、清风婉转；. 全明方正奢华户型，"
				}, {
					key: 2,
					desc: "总体描述. 风格、方位、采光. "
				}, {
					key: 3,
					desc: "总体描述."
				}]
			};
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: "/pages/focus/info/info",
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news-wrapper {}

	.item {
		display: flex;
		height: 80px;
		overflow: hidden;
		font-size: $uni-font-size-sm;
		padding: 5px 15px;
		background-color: white;
		justify-content: center;
		align-items: center;
		margin-bottom: 6px;
		box-shadow: 0 3px 1px 0 #eee;

		.left {
			flex: 1;
			padding-right: $uni-spacing-row-base;

			.desc-text {
				color: $uni-text-color;
				height: 60px;
				line-height: 20px;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				lines: 3;
				text-overflow: ellipsis;
			}

			.desc-share {
				display: flex;
				justify-content: flex-end;
			}
		}


	}

	.main-img {
		width: 70px;
		height: 70px;
	}
</style>
