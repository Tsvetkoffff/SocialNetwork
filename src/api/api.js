import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b6717ad8-8479-454a-ad2a-268671917c9f"
    }
});

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get('/profile/status/' + userId).then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put('/profile/status/', {status: status}).then(response => response.data)
    }
};

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`).then(response => response.data)
    }
};