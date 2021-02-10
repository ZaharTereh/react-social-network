import * as axios from 'axios';

const axiosInstanse = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY":"3d511394-0a49-41e4-88c7-1895c93a616a"
    }
})

export const userAPI = {
    getAllUsers(){
        return axiosInstanse.get(`users`,{withCredentials : true})
        .then(response => {
            return response.data;
        });
    },

    getUsersBySize(page,pageSize){
        return axiosInstanse.get(`users?page=${page}&count=${pageSize}`,{withCredentials : true})
        .then(response => {
            return response.data;
        });
    },

    follow(userId){
        return axiosInstanse.post(`follow/${userId}`);
    },

    unfollow(userId){
        return axiosInstanse.delete(`follow/${userId}`);
    },

    getProfile(id){
        return axiosInstanse.get(`profile/${id}`);
    }
};

export const authAPI = {
    me(){
        return axiosInstanse.get(`auth/me`);
    }
}

