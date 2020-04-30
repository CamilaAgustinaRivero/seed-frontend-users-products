//Root Sagas
import {all, takeEvery} from 'redux-saga/effects';

//Es una funcion de escucha
export default function* root () {
    //yield es una funcion de llamado, va a llamar algo y va a hacer que se ejecute
    yield all([])
}