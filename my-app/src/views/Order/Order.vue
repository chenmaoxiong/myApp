<template>
	<div class="order">
		<van-tabs v-model="active" line-height="0">
			<van-tab title="标签 1">内容 1</van-tab>
			<van-tab title="标签 2" class="unselected">内容 2</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 2
		};
	}
};
</script>

<style lang="scss" scoped>
.order {
}
.van-tabs {
	padding: 10px;
	padding-top: 50px;
	background: #000;
}
/deep/ .van-hairline--top-bottom::after {
	border: none;
}
/deep/.van-tabs__nav {
	background: #000;
	border-top: 1px solid #000;
}
/deep/ .van-tab.van-tab--active {
	background: #fff;
	border-radius: 10px 10px 0 0;
	height: 45px;
	margin: 0;
}
/deep/ .van-tab {
	background: #ccc;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 8px;
	border-radius: 0 10px 0 0;
}
</style>
