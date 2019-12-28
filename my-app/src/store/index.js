import Vue from "vue";
import Vuex from "vuex";
import print from "./module/print.js";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		bool: true,
		serverBaseURL: "http://176.122.13.170:4000",
		// serverBaseURL: "http://localhost:4000",
		data: {}
	},

	mutations: {
		changelogin(state, bool) {
			state.bool = bool;
		},
		getData(state, data) {
			// console.log(data);
			state.data = data;
			console.log("vuex");
			console.log(state.data);
		}
	},

	actions: {
		getlogin(context) {
			//当组件创建成功后调用
			//1:发送请求 cart
			(async function() {
				var url = "users/islogin";

				var result = await axios
					.get("http://176.122.13.170:4000/users/islogin")
					.then(res => {
						//2:获取返回结果
						if (res.data.code == -5) {
							//3:如果用户没有执行登录操作
							//提示交互提示/跳转登录组件
							context.commit("changelogin", true);
						} else {
							context.commit("changelogin", false);
						}
					});
			})();
		},
		logout(context) {
			var url = "users/logout";
			axios.get(url).then(res => {
				//2:获取返回结果
				if (res.data.code == -4) {
					//3:如果用户没有执行登录操作
					//提示交互提示/跳转登录组件
					context.commit("changelogin", "");
				}
			});
		}
	},

	modules: {
		print
	}
});
