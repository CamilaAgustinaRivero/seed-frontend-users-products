import {
  FETCH_USERS_REQUESTED, 
  FETCH_USERS_SUCCEEDED, 
  UPDATE_USERS,
  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCEEDED
 } from '../actions/user';

const initialState = {
    users: [],
    currentUsers: {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      avatar: '',
      code: ''
    },
    headers: [
        {
          label: 'NOMBRE',
          key: 'first_name'
        },
        {
          label: 'APELLIDO',
          key: 'last_name'
        }, 
        {
          label: 'USERNAME',
          key: 'username'
        },
        {
          label: 'E-MAIL',
          key: 'email'
        },
        {
          label: 'PASSWORD',
          key: 'password'
        },
        {
          label: 'AVATAR',
          key: 'avatar'
        },
        {
          label: 'CODE',
          key: 'code'
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_USERS_REQUESTED:
        return {...state, users:[]};
      case FETCH_USERS_SUCCEEDED:
        return {...state, users: action.users};
      case UPDATE_USERS:
        return {...state, currentUsers: action.user};
      case FETCH_USER_REQUESTED:
        return {...state, currentUsers: initialState.currentUsers};
      case FETCH_USER_SUCCEEDED:
        return {...state, currentUsers: action.user}
      default:
        return {...state}
    }
}