//Root Sagas
import {all, takeEvery} from 'redux-saga/effects';

import {FETCH_PRODUCT_REQUESTED} from '../actions/product';
import {fetchProducts} from './product';

import {FETCH_USERS_REQUESTED, SUBMIT_USER_REQUESTED} from '../actions/user';
import {fetchUsers, submitUser} from './user';

//Es una funcion de escucha
export default function* root () {
    //yield es una funcion de llamado, va a llamar algo y va a hacer que se ejecute
    yield all([
        takeEvery(FETCH_PRODUCT_REQUESTED, fetchProducts),
        takeEvery(FETCH_USERS_REQUESTED, fetchUsers),
        takeEvery(SUBMIT_USER_REQUESTED, submitUser)
    ])
}