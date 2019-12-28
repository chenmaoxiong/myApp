<template>
	<div class="takeout">
		<van-nav-bar
			title="外卖点餐"
			left-text="关闭"
			left-arrow
			@click-left="onClickLeft"
		/>
		<van-tabs v-model="active">
			<van-tab title="标签 1">内容 1</van-tab>
			<van-tab title="标签 2">内容 2</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import Vuex from "../../store/index.js";
let sq = sqData.recommend;
export default {
	data() {
		return {
			data: sq,
			activeKey: 0,
			indexList: [],
			active: 1,
			ID: 12
		};
	},
	components: {
		vuex: Vuex
	},
	mounted() {
		console.log(this.data);
	},
	methods: {
		onClickLeft() {
			// Toast("关闭");
			console.log(123);
			this.$store.commit("print/setPrint", {
				//print 表示vuex的文件名
				ID: this.ID,
				BrandID: 402
			});
		},
		onChange(index) {
			console.log(index);
			this.i = index;
		}
	}
};
</script>

<style lang="scss" scoped>
.order {
	display: flex;
}
img {
	width: 50px;
	height: 50px;
}
.van-nav-bar__text,
.van-nav-bar .van-icon {
	color: #000;
}
</style>
