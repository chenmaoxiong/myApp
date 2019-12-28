<template>
	<div class="com">
		<!-- <v-touch v-on:swipe="swipe" 
 class="wrapper"> -->
		<van-sticky>
			<van-row type="flex" justify="space-between">
				<van-col span="3"
					><img src="../assets/img/community/icon_03.png"
				/></van-col>
				<van-col span="6"
					><span class="top-community active">社区</span></van-col
				>
				<van-col span="3"
					><img src="../assets/img/community/icon_05.png"
				/></van-col>
			</van-row>
		</van-sticky>
		<div class="left-community">社区</div>
		<van-tabs
			v-model="activeName"
			line-width="90px"
			line-height="2px"
			title-inactive-color="#3f3f3f"
			title-active-color="#e70012"
			sticky
			:offset-top="30"
		>
			<van-tab title="关注" name="a">
				<concren></concren>
			</van-tab>
			<van-tab title="推荐" name="b"> <recommend></recommend> </van-tab>
			<van-tab title="最新" name="c">
				<newest></newest>
			</van-tab>
			<van-tab title="达人" name="d"><expert></expert> </van-tab>
		</van-tabs>
		<!-- </v-touch> -->
	</div>
</template>
<script>
import Newest from "../components/Newest.vue";
import Recommend from "../components/Recommend.vue";
import Expert from "../components/Expert.vue";
import Concren from "../components/Concren.vue";
export default {
	components: {
		expert: Expert,
		recommend: Recommend,
		newest: Newest,
		concren: Concren
	},
	data() {
		return {
			activeName: "b"
		};
	},
	methods: {
		swipe: function() {
			// console.log("huohua");
		},
		showIcon() {
			var leftCommunity = document.getElementsByClassName("left-community")[0];
			var topCommunity = document.getElementsByClassName("top-community")[0];
			var heights =
				document.documentElement.scrollTop || document.body.scrollTop;
			// console.log(heights);
			if (heights > 27) {
				//页面高度大于200执行操作;
				leftCommunity.classList.add("active");
				topCommunity.classList.remove("active");
			} else {
				// 页面高度小于200执行操作;
				leftCommunity.classList.remove("active");
				topCommunity.classList.add("active");
			}
		}
	},
	mounted() {
		window.addEventListener("scroll", this.showIcon);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.showIcon);
	}
};
</script>
<style scoped>
.com {
	padding: 10px 0 0 0;
	background: #fff;
}

.van-row {
	background: #fff;
}
.van-row > .van-col {
	text-align: center;
	margin: 5px 0;
}
.van-row > .van-col > .top-community {
	margin: 5px 0;
	color: #3f3f3f;
	font-weight: bold;
	font-size: 16px;
}
.van-row > .van-col > .top-community.active {
	display: none;
	margin: 10px 0;
}
img {
	height: 20px;
}
.van-tab {
	color: aqua;
	font-size: 1rem;
	width: 10px;
}
.left-community {
	font-size: 24px;
	text-align: left;
	padding-left: 10px;
	color: #3f3f3f;
	font-weight: bold;
}
.left-community.active {
	display: none;
}
</style>
