<template>
	<div class="edit">
		<van-nav-bar title="个人资料" left-arrow @click-left="me" />
		<van-cell title="头像" is-link />
		<van-cell title="用户名" is-link :value="userName1" to="/name" />
		<van-cell title="真实姓名" is-link to="/userName" :value="userName" />
		<div class="sex">
			<span>性别</span>
			<van-radio-group v-model="radio">
				<van-radio name="1">男</van-radio>
				<van-radio name="0">女</van-radio>
			</van-radio-group>
		</div>

		<div class="salary">
			<van-cell title="收入范围" is-link @click="sal" :value="salVal" />
			<van-popup v-model="salShow" position="bottom" :style="{ height: '40%' }">
				<van-area
					:area-list="salList"
					:columns-placeholder="['0-5k']"
					title="收入范围"
					@confirm="salConfirm"
					@cancel="salCancel"
					columns-num="1"
				/>
			</van-popup>
		</div>

		<div class="address">
			<van-cell title="活动范围" is-link @click="address" :value="val" />
			<van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
				<van-area
					:area-list="areaList"
					:columns-placeholder="['请选择', '请选择', '请选择']"
					title="活动范围"
					@confirm="addrConfirm"
					@cancel="addrCancel"
					columns-num="2"
				/>
			</van-popup>
		</div>

		<van-cell title="生日" value="2015-12-16" class="birthday" />
		<div :class="classSign" @click="sign">
			<van-cell title="个性签名" :value="signVal" />
		</div>

		<div class="phone">
			<van-cell title="手机号" is-link :value="13421563050" />
			<van-cell title="邮箱" is-link :value="email" @click="setEmail" />
			<van-cell title="修改密码" is-link @click="setPwd" />
		</div>
	</div>
</template>
<script>
import areaList from "../../common/area.js";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
	data() {
		return {
			email: "请填写",
			classSign: "sign",
			userName: "请填写",
			userName1: "请填写",
			radio: "1",
			show: false,
			salShow: false,
			areaList: areaList,
			val: "",
			salVal: "",
			salList: {
				province_list: {
					1: "5-8k",
					2: "8-10k",
					3: "10-15k",
					4: "15-30k",
					5: "30-50k",
					6: ">50k"
				}
			},
			signVal: "一句话介绍自己的兴趣爱好"
		};
	},
	watch: {
		radio() {
			this.$api
				.update({ sex: this.radio })
				.then(res => {
					// console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	methods: {
		setPwd() {
			this.$router.push("/forget");
		},
		setEmail() {
			this.$router.push("/email");
		},
		sign1(val) {
			this.signVal = val;
		},
		sign() {
			this.$router.push("/sign");
		},
		sal() {
			this.salShow = true;
		},
		salConfirm(e) {
			this.salShow = false;
			this.salVal = e[0].name;
			this.$api
				.update({ salary: this.salVal, id: this.data.uid })
				.then(res => {
					// this.salVal = res.data.salary;
					this.$toast("修改成功");
				})
				.catch(err => {
					console.log(err);
				});
		},
		salCancel() {
			this.salShow = false;
		},
		addrConfirm(e) {
			this.show = false;
			// console.log(e[0].name + e[1].name);
			this.val = `${e[0].name} ${e[1].name}`;
			this.$api
				.update({ city: this.val, id: this.data.uid })
				.then(res => {
					this.$toast("修改成功");
					// this.val = res.data.city;
				})
				.catch(err => {
					console.log(err);
				});
		},

		addrCancel() {
			this.show = false;
		},
		address() {
			this.show = true;
		},
		me() {
			this.$router.push("/me");
		},
		realName(name) {
			if (name == "") {
				this.userName = "请填写";
			} else {
				this.userName = name;
			}
		},
		getEmail(email) {
			if (email == "") {
				this.email = "请填写";
			} else {
				this.email = email;
			}
		},
		userName2(name) {
			if (name == "") {
				this.userName1 = "请填写";
			} else {
				this.userName1 = name;
			}
		},
		updatum() {
			new Promise((resolve, reject) => {
				resolve(
					this.$api
						.get({ uid: this.data.uid })
						.then(res => {
							console.log(222);
							// console.log(res);
							this.getData(res.data.user);
						})
						.catch(err => {
							console.log(err);
						})
				);
			})
				.then(res => {
					this.radio = this.data.sex + "";
					this.salVal = this.data.salary;
					this.email = this.data.email;
					this.signVal = this.data.say;
					this.val = this.data.city;
					this.userName = this.data.real_name || "请填写";
					this.userName1 = this.data.uname || "请填写";
					this.bus.$on("realName", this.realName);
					this.bus.$on("sign1", this.sign1);
					this.bus.$on("email", this.getEmail);
					this.bus.$on("userName2", this.userName2);
					console.log("更新");
					console.log(this.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
		...mapActions(["getlogin"]),
		...mapMutations(["getData"])
	},
	computed: {
		...mapState(["data", "bool"])
	},
	created() {
		this.updatum();
	},
	updated() {
		this.updatum();
	},
	beforeDestroy() {
		this.bus.$emit("Name", this.userName);
		this.bus.$emit("sign2", this.signVal);
		this.bus.$emit("cemail", this.email);
		this.bus.$emit("userName1", this.userName1);
		this.updatum();
	}
};
</script>
<style scoped lang="scss">
.edit {
	background: #fff;
}
.van-icon-arrow-left:before {
	color: #000;
}
.van-cell__title {
	text-align: left;
}
.van-cell__value {
	color: #323233;
}
.sex {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 43px;
	padding: 0 15px;
	font-size: 14px;
	border-bottom: 1px solid #eee;
}
.van-radio-group {
	display: flex;
	justify-content: space-between;
}
.van-radio-group .van-radio {
	margin: 0 5px;
}
/deep/ .van-picker-column {
	font-size: 14px;
}
/deep/ .van-picker__title {
	font-size: 14px;
}
.salary,
.address,
.birthday,
.sign {
	border-bottom: 1px solid #f0f0f0;
}
.sign .van-cell__value {
	font-size: 12px;
	color: #999;
}
.phone {
	padding: 10px 0;
	background: #f0f0f0;
}
// .van-cell {
//   border-bottom: 1px solid #f0f0f0;
// }
</style>
