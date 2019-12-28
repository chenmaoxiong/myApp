import axios from "axios";

export function apiLogin(user) {
	return (async function() {
		// console.log(user);
		var result = await axios.post("users/signin", user);
		// console.log(result);
		return result;
	})();

	// return new Promise((resolve, reject) => {
	// 	axios
	// 		.post(
	// 			"users/signin",
	// 			{ params: user },
	// 			{
	// 				// 设置headers
	// 				headers: {
	// 					"Content-Type": "application/json"
	// 				}
	// 			}
	// 		)
	// 		.then(result => {
	// 			resolve(result);
	// 		});
	// });
}
