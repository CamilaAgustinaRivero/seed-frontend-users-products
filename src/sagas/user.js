import {call, put, select} from 'redux-saga/effects';
import {fetchUsersSucceeded, submitUserSucceeded, fetchUserSucceeded, deleteUserSucceeded} from '../actions/user';
import UserService from '../services/user';

export function* fetchUsers({filter}) {
    const users = yield call (UserService.apiCallUsers, filter);
    yield put(fetchUsersSucceeded(users));
}

export function* submitUser () {
  const {currentUsers} = yield select (state => state.user);
  const {status, data} = yield call(UserService.apiSaveUser, currentUsers);
  yield put (submitUserSucceeded(status, data));  
}

export function* fetchUser({id}) {
  const user = yield call (UserService.apiCallOne, id);
  yield put(fetchUserSucceeded(user));
}

export function* deleteUser({id}) {
  yield call (UserService.apiDeleteOne, id);
  yield put(deleteUserSucceeded(true));
  yield call(fetchUsers, {});
}