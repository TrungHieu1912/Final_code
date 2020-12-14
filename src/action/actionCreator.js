import * as types from './actionType';
export const fetchUser = (payload) => ({
    type: types.USER_FETCH_REQUESTED,
    payload
})



export const logoutUser = (payload) => ({
    type: types.USER_LOGOUT_REQUESTED,
    payload
})
