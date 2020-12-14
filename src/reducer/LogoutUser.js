import * as types from '../action/actionType';
const defaultState = {
    token: ''
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.USER_LOGOUT_SUCCEEDED: {
            return {
                ...state,
                // email: action.payload.user.email,
                // password: action.payload.user.password,
                // token: action.payload.user.token,
            }
        }
    }
    return state;
}