<template>
	<div class="soical">
		<div v-for="(item, i) in userSay" :key="i">
			<van-row type="flex" justify="space-between">
				<van-col span="16">
					<van-row type="flex">
						<van-col span="6">
							<img src="../assets/img/community/tx1.jpg" alt="" class="tx" />
						</van-col>
						<van-col span="18">
							<div class="nichen">{{ item.nickname }}<em class="xz"></em></div>
							<div class="gxqm">{{ item.gxqm }}</div>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="8">
					<button type="primary" @click="alertMenu" class="fx">···</button>

					<van-action-sheet
						v-model="show"
						:actions="actions"
						cancel-text="取消"
						@select="onSelect"
					/>
				</van-col>
			</van-row>
			<p class="say">
				<a href="#">#{{ item.jhss }}#</a>{{ item.ss }}
			</p>
			<div class="tp">
				<van-image
					width="6rem"
					height="6rem"
					fit="cover"
					v-for="(img, index) in item.msimg"
					:key="index"
					:src="require('../' + img)"
				/>
			</div>
			<van-row type="flex" justify="space-between" class="buttoms">
				<van-col span="18">
					<van-row>
						<van-col span="7">
							<p class="publish">发布于{{ item.fby }}</p>
						</van-col>
						<van-col span="12" offset="1">
							<p class="from">
								来自 <span class="new">{{ item.from }}</span>
							</p>
						</van-col>
					</van-row>
				</van-col>
				<van-col span="6" class="dzpl">
					<a href="#"></a> <span>{{ item.plgs }}</span> <em @click="like"></em
					><span>{{ item.dzgs }}</span>
				</van-col>
			</van-row>
			<hr />
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			show: false,
			actions: [{ name: "收藏" }, { name: "举报" }],
			userSay: [
				{
					headPhoto: "assets/img/community/tx1.jpg",
					nickname: "Hi_小芋头",
					hydj: "1",
					gxqm: "番茄",
					jhss: "寻找同城捞友",
					ss: "有木有长春的小伙伴啊?不想一个人吃啊！",
					msimg: [
						"assets/img/community/ms1.jpg",
						"assets/img/community/ms2.jpg",
						"assets/img/community/ms3.jpg",
						"assets/img/community/ms4.jpg",
						"assets/img/community/ms5.jpg",
						"assets/img/community/ms6.jpg",
						"assets/img/community/ms7.jpg"
					],
					fby: "星期天",
					from: "海捞天地",
					plgs: "5",
					dzgs: "30"
				},
				{
					headPhoto: "assets/img/community/tx1.jpg",
					nickname: "Hi_小芋头",
					hydj: "1",
					gxqm: "番茄",
					jhss: "寻找同城捞友",
					ss: "有木有长春的小伙伴啊?不想一个人吃啊！",
					msimg: [
						"assets/img/community/ms1.jpg",
						"assets/img/community/ms2.jpg",
						"assets/img/community/ms3.jpg",
						"assets/img/community/ms4.jpg",
						"assets/img/community/ms5.jpg",
						"assets/img/community/ms6.jpg",
						"assets/img/community/ms7.jpg"
					],
					fby: "星期天",
					from: "海捞天地",
					plgs: "5",
					dzgs: "30"
				},
				{
					userId: "1", //用户id
					headPhoto: "assets/img/community/tx1.jpg", //用户头像
					nickname: "Hi_小芋头", //昵称
					hydj: "1", //会员等级
					gxqm: "番茄", //个性签名
					jhss: "寻找同城捞友", //标签说说
					ss: "有木有长春的小伙伴啊?不想一个人吃啊！", //说说
					msimg: [
						"assets/img/community/ms1.jpg",
						"assets/img/community/ms2.jpg",
						"assets/img/community/ms3.jpg",
						"assets/img/community/ms4.jpg",
						"assets/img/community/ms5.jpg",
						"assets/img/community/ms6.jpg",
						"assets/img/community/ms7.jpg"
					], //图片
					fby: "星期天", //发布于
					from: "海捞天地", //来源
					plgs: "5", //评论个数
					dzgs: "30" //点赞个数
				}
			]
		};
	},
	methods: {
		alertMenu() {
			this.show = true;
		},
		onSelect(item) {
			// 默认情况下，点击选项时不会自动关闭菜单
			// 可以通过 close-on-click-action 属性开启自动关闭
			this.show = false;
			this.$toast(item.name);
		},
		guanzhu(e) {
			e.target.style.display = "none";
			this.$toast("关注成功");
		},
		like(e) {
			var num = parseInt(e.target.nextSibling.innerHTML);
			// e.target.style.remove("active");
			if (e.target.getAttribute("class") !== "active") {
				e.target.nextSibling.innerHTML = num + 1;
				e.target.classList.add("active");
			} else {
				e.target.classList.remove("active");
				e.target.nextSibling.innerHTML = num - 1;
			}
		}
	}
};
</script>
<style scoped>
.soical {
	margin-top: 30px;
	padding: 10px;
}
.nichen {
	text-align: left;
	font-size: 13px;
}
.gxqm {
	margin-top: 8px;
	text-align: left;
	font-size: 10px;
	color: #9a9a9a;
}
.xz {
	display: inline-block;
	width: 13px;
	height: 14.5px;
	background: url(../assets/img/community/search_golden_icon.png);
	background-size: 100% 100%;
	vertical-align: middle;
	margin-left: 5px;
}
.gz {
	float: right;
	background: #fff;
	border-radius: 50px;
	border: 1px solid #c97d7f;
	font-size: 10px;
	color: #e70012;
	width: 51px;
	height: 24px;
	box-sizing: border-box;
}
.fx {
	float: right;
	font-size: 10px;
	color: #e70012;
	font-weight: 1000;
	border: none;
	letter-spacing: 3px;
	height: 24px;
	background: transparent;
}
.tx {
	width: 40px;
	border-radius: 50%;
	margin-right: 10px;
}
.say {
	margin: 10px 0;
	font-size: 13px;
	text-align: left;
	line-height: 17px;
}
a {
	font-size: 13px;
	color: #e70012;
}
.tp {
	width: 100%;
	text-align: left;
}
.tp > div {
	margin-right: 4px;
}
.publish,
.from {
	display: inline;
	height: 16px;
	font-size: 10px;
	color: #9a9a9a;
	line-height: 16px;
}
.new {
	color: #ffb012;
}
.dzpl {
}
.dzpl > a {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url(../assets/img/community/icon_10.png);
	background-size: 100% 100%;
	vertical-align: middle;
}
.dzpl > em {
	cursor: pointer;
	margin-left: 10px;
	display: inline-block;
	width: 16px;
	height: 16px;
	background-image: url(../assets/img/community/icon_13.png);
	background-size: 100% 100%;
	vertical-align: middle;
}
.dzpl > em.active {
	background-image: url(../assets/img/community/icon_21.png);
}
.dzpl > span {
	font-size: 10px;
	color: #9a9a9a;
}
hr {
	border: 1px solid #f1f1f1;
}
.buttoms {
	margin-top: 10px;
}
.van-col {
	text-align: left;
}
</style>
