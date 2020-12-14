import { Action } from 'redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../action/actionType';
import Login from '../Api/Login';
import Logout from '../Api/Logout';

function* fetchUser(action) {
  try {
    const res = yield Login(action.payload);
    console.log('action.payload', action.payload);
    yield put({ type: types.USER_FETCH_SUCCEEDED, payload: res });
  } catch (error) {
    yield put({ type: types.USER_FETCH_FAILED, message: error.message });
  }
}

function* logoutUser(action) {
  try {
    const res = yield Logout(action.payload);
    console.log('action', action);
    yield put({ type: types.USER_LOGOUT_SUCCEEDED, payload: res });
  } catch (error) {
    yield put({ type: types.USER_LOGOUT_FAILED, message: error.message });
  }
}

export function* workerFetchUser() {
  yield takeLatest(types.USER_FETCH_REQUESTED, fetchUser);
  yield takeLatest(types.USER_LOGOUT_REQUESTED, logoutUser);
  // yield takeEvery(types.USER_FETCH_REQUESTED, fetchUser);
}

