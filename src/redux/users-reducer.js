import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 22,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }


        default:
            return state
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING ,isFetching})
export const toggleIsFollowingInProgress = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS ,isFetching, userID})

export const requestUsers = (page, pageSize)  => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.requestUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }

}
export const follow = (userID)  => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userID))
        usersAPI.follow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(toggleIsFollowingInProgress(false, userID))
            })

    }

}
export const unfollow = (userID)  => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userID))
        usersAPI.unfollow(userID)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleIsFollowingInProgress(false, userID))
            })
    }

}


export default usersReducer

