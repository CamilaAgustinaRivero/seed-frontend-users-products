import {FETCH_USER_REQUESTED, FETCH_USER_SUCCEEDED} from '../actions/user';

const initialState = {
    users: [],
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
          label: 'E-MAIL',
          key: 'email'
        },
        {
          label: 'AVATAR',
          key: 'avatar'
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_USER_REQUESTED:
        return {...state, users:[]};
      case FETCH_USER_SUCCEEDED:
        return {...state, users: action.users};
      default:
        return {...state}
    }
}