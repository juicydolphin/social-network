import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '67c248d7-4ea2-4cfd-bffc-7e212fe99d1c'
    }
})

export const usersAPI = {
    requestUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }, follow(userID) {
        return instance.post(`follow/` + userID)
    },
    unfollow(userID) {
        return instance.delete(`follow/` + userID)
    }

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email,password,rememberMe = false){
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status:status})
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image',photoFile)
        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`,profile)

    }


}


