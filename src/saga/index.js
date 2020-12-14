import { all, fork } from 'redux-saga/effects';


import * as Usersaga from './Usersaga';

export default function* sagas() {
    yield all([
        fork(Usersaga.workerFetchUser),
    ])
}