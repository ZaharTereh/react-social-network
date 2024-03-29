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
        console.warn("Obsolete method. Please use profileAPI object");
        return profileAPI.getProfile(id);
    }
};

export const profileAPI = {
    getProfile(id){
        return axiosInstanse.get(`profile/${id}`);
    },

    getStatus(id){
        return axiosInstanse.get(`profile/status/${id}`);
    },

    updateStatus(status){
        return axiosInstanse.put(`profile/status`,{status});
    }    
}

export const authAPI = {
    me(){
        return axiosInstanse.get(`auth/me`);
    },

    login(email,password,rememberMe = false){
        return axiosInstanse.post(`auth/login`,{email,password,rememberMe});
    },

    logout(){
        return axiosInstanse.delete(`auth/login`);
    }
}
