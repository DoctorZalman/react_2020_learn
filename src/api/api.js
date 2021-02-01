import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL : 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY" : "03dcfcb3-b206-4bb6-9dc2-cdad312203ff"
	}
});

export const usersAPI = {
	getUsers (currentPage = 1, pageSize= 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	}
}
