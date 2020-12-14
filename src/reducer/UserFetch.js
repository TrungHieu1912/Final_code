import * as types from '../action/actionType';
const initialUser = {
    email: '',
    password: '',
    token: ''
};

export default (state = initialUser, action) => {
    switch (action.type) {
        case types.USER_FETCH_SUCCEEDED: {
            return {
                ...state,
                email: action.payload.user.email,
                password: action.payload.user.password,
                token: action.payload.user.token,
            }
        }
    }
    return state;
}