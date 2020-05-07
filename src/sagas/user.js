import {call, put, select} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchUsersSucceeded, submitUserSucceeded} from '../actions/user';

const apiCallUsers = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/users');
    console.log(data);
    if (status !== 200) {
      return [];
    } 
    return data;
}

const apiSaveUser = user => {
  try{
    //Si tiene id, va a editar un usuario
    if (user.id) {
      return Axios.put(`http://localhost:3001/api/users/${user.id}`, user);
    }
    //Si no tiene id, va a agregar uno
    else {
      return Axios.post('http://localhost:3001/api/users', user);
    }
  }
  catch (err) {
    return {status: 500, data: null}
  }
}

export function* fetchUsers({filter}) {
    const users = yield call (apiCallUsers, filter);
    yield put(fetchUsersSucceeded(users));
}

export function* submitUser () {
  const {currentUsers} = yield select (state => state.users);
  const {status, data} = yield call(apiSaveUser, currentUsers);
  yield put (submitUserSucceeded(status, data));  
}