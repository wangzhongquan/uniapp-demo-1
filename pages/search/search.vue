<template>
	<view>
		<u-sticky>
			<view class="wrapper">
				<view class="menu">
					<view class="prev" @click="toggle(1)">
						<text>区域</text>
						<uni-icons v-if="open && openIndex === 1" type="top" size="12"></uni-icons>
						<uni-icons v-else type="bottom" size="12"></uni-icons>
					</view>
					<view class="prev" @click="toggle(2)">

						<text>别墅</text>
						<uni-icons v-if="open && openIndex === 2" type="top" size="12"></uni-icons>
						<uni-icons v-else type="bottom" size="12"></uni-icons>
					</view>

					<view class="prev" @click="toggle(3)">
						<text>面积</text>
						<uni-icons v-if="open && openIndex === 3" type="top" size="12"></uni-icons>
						<uni-icons v-else type="bottom" size="12"></uni-icons>
					</view>
					<view class="prev" @click="toggle(4)">
						<text>总价</text>
						<uni-icons v-if="open && openIndex === 4" type="top" size="12"></uni-icons>
						<uni-icons v-else type="bottom" size="12"></uni-icons>
					</view>
				</view>
				<view class="selector" :style="{height:screenHeight+'px'}" v-if="open">
					<view class="space"></view>
					<view class="select-item-wrap">
						<view class="uni-list">
							<checkbox-group @change="checkboxChange">
								<label class="uni-list-cell " v-for="item in items" :key="item.value">
									<view>
										<checkbox style="transform:scale(0.8)" :value="item.value"
											:checked="item.checked" />
									</view>
									<view>{{item.name}}</view>
								</label>
							</checkbox-group>
						</view>
					</view>
					<view class="empty" @click="close"></view>
				</view>
			</view>
		</u-sticky>
		<view class="goods-list-wrapper">
			<goods-list :goods="goods"></goods-list>
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
				open: false,
				openIndex: 0,
				screenHeight: 0,
				goods: [{},
					{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
				],
				items: [{
						value: '1',
						name: '100万以下',
						checked: 'true'
					},
					{
						value: '2',
						name: '100-150万'
					},
					{
						value: '3',
						name: '150-200万'
					},
					{
						value: '4',
						name: '200-250万'
					},
					{
						value: '5',
						name: '250万以上'
					},
				]
			};
		},
		methods: {
			getHeight() {
				this.screenHeight = uni.getSystemInfoSync().windowHeight //获取当前页面的高度
			},
			toggle(index) {
				if (this.openIndex === index) {
					this.close()
				} else {
					this.openIndex = index
					this.open = true
				}
			},
			close() {
				this.openIndex = 0
				this.open = false
			}
		},
		mounted() {
			this.getHeight();
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		position: relative;
	}



	.menu {
		display: flex;
		width: 750rpx;
		text-align: center;
		font-size: $uni-font-size-base;
		background-color: white;
		align-items: center;
		height: 50px;
		box-shadow: 0 2px 8px 0 #e4dfdf;
		position: relative;
		z-index: 2;

		.prev {
			flex: 1;

			text {
				margin-right: 2px;
			}
		}
	}

	.selector {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.space {
			height: 50px;
		}

		.select-item-wrap {
			background-color: white;
			padding: 10px 44rpx;
			font-size: $uni-font-size-sm;

			.uni-list {
				display: flex;
				flex-direction: column;

				.uni-list-cell {
					display: flex;
					align-items: center;
					margin-top: 10px;
					font-size: $uni-font-size-base;
				}
			}
		}

		.empty {
			flex: 1;
			background-color: rgba(0, 0, 0, 0.8);
		}
	}

	.goods-list-wrapper {}
</style>
