import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'


let initialState = {
    posts: [
        {message: 'Hello everyone', likes: '13', id: '1'},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '5',
                message: action.newPostText,
                likes: '0'
            }
            return {
                ...state,
                posts: [...state.posts,newPost],
            }

        }
            case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
            case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postID )
            }
            case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
            case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }

}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }

}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    }
}
export const saveProfileSuccess = (profile) => {
    return {
        type: SAVE_PROFILE_SUCCESS, profile
    }
}

export const deletePost = (postID) => ({type: DELETE_POST, postID})

export const getUserProfile = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getUserStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
        if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }


}
export const saveProfile = (profile) => async (dispatch) => {
    let response = await profileAPI.saveProfile(profile)
        if(response.data.resultCode === 0) {
            // dispatch(saveProfileSuccess(response.data.profile))
        }


}




export default profileReducer

