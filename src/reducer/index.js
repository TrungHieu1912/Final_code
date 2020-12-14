import { combineReducers } from 'redux';
import LogoutUser from './LogoutUser';
import UserFetch from './UserFetch';
export default combineReducers({
  user: UserFetch,
  LogoutUser :LogoutUser
})