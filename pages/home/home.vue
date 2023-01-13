<template>
	<view>
		<u-sticky>
			<view class="search">
				<u-search height="75" shape="round" placeholder="楼盘名称" v-model="keyword" @custom='searchKeyword'
					@search="searchKeyword"></u-search>
			</view>
		</u-sticky>

		<swiper class="swiper" circular :indicator-dots="true" :autoplay="false" :interval="3000">
			<swiper-item v-for="b in banners">
				<view class="swiper-item">
					<image :src="b.img" mode="widthFix" style="width: 100%;"></image>
				</view>
			</swiper-item>
		</swiper>

		<view>
			<uni-notice-bar :speed="20" show-icon show-close scrollable :text="text1" />
		</view>

		<view class="tags">
			<uni-grid :column="4" :showBorder="false">
				<uni-grid-item v-for="(item, index) in list">
					<view class="item-wrapper" @click="selectItem">
						<image :src="item.icon" class="icon"></image>
						<text>{{item.title}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>


		<view class="mb-10" v-for="item in links">
			<uni-section :title="item.name">
				<template v-slot:right>
					<uni-icons type="more-filled"></uni-icons>
				</template>
				<template v-slot:decoration>
					<uni-icons type="contact" size="20" color="#e0228a" style="margin-right: 4px;"></uni-icons>
				</template>
				<goods-list :goods="item.goods"></goods-list>
			</uni-section>
		</view>
	</view>
</template>

<script>
	import goodsList from "@/component/goods-list.vue"

	export default {
		components: {
			goodsList
		},
		data() {
			return {
				keyword: '',
				text1: '虽然插件市场也有其他前端模拟的下拉刷新，但性能不佳',
				banners: [{
						img: "../../static/img/561ffcfad517890a.jpg"
					},
					{
						img: "../../static/img/dab00b077ec51090.jpg"
					},
					{
						img: "../../static/img/8ed2836e4ad0c263.jpg"
					}
				],
				links: [{
						icon: "heart",
						name: "热销楼盘",
						goods: [{},
							{}
						]
					},
					{
						icon: "setting",
						name: "主力楼盘",
						goods: [{},
							{}
						]
					},
					{
						icon: "kefu-ermai",
						name: "特价楼盘",
						goods: [{},
							{}
						]
					},
					{
						icon: "share",
						name: "楼盘列表",
						goods: [{},
							{}
						]
					}
				],
				list: [{
						icon: "../../static/img/home/icon.png",
						title: '特价楼盘'
					},
					{
						icon: "../../static/img/home/1.jpg",
						title: '新上楼盘'
					},
					{
						icon: "../../static/img/home/2.png",
						title: '热销楼盘'
					},
					{
						icon: "../../static/img/home/3.jpg",
						title: '在售楼盘'
					},
					{
						icon: "../../static/img/home/4.png",
						title: '主城区'
					},
					{
						icon: "../../static/img/home/5.png",
						title: '高新区'
					},
					{
						icon: "../../static/img/home/7.jpg",
						title: '天府新区'
					},
					{
						icon: "../../static/img/home/6.png",
						title: '二圈层'
					},
					{
						icon: "../../static/img/home/8.jpg",
						title: '三圈层'
					},
					{
						icon: "../../static/img/home/9.png",
						title: '别墅'
					},
					{
						icon: "../../static/img/home/10.png",
						title: '住宅'
					},
					{
						icon: "../../static/img/home/11.png",
						title: '公寓'
					},
				],
			};
		},
		methods: {
			searchKeyword() {
				console.log("search...")
			},
			selectItem(k) {
				console.log("search...", k)
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			gotoPage(k) {
				console.log("search...", k)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		background-color: white;
		padding: 10px;
	}

	.tags {
		font-size: $uni-font-size-base;

		.item-wrapper {
			font-size: 12px;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			justify-content: center;
			align-items: center;

			.icon {
				width: 40px;
				height: 40px;
				border-radius: 20px;
				margin-bottom: 4px;
			}

		}
	}

	.k-cell-icon {
		width: 16px;
		height: 16px;
	}

	.more {
		color: #909399;
	}


	.swiper {
		margin-top: 10rpx;
		height: 400rpx;
		background-color: #909399;
	}

	.swiper-item {
		display: flex;
		height: 100%;
	}

	.mb-10 {
		margin: 10px 0;
	}
</style>
