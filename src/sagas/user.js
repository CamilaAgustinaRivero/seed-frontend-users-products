import {call, put} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchUserSucceeded} from '../actions/user';

const apiCallUsers = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/users');
    console.log(data);
    if (status !== 200) {
      return [];
    } 
    return data;
}

export function* fetchUsers({filter}) {
    const users = yield call (apiCallUsers, filter);
    yield put(fetchUserSucceeded(users));
}