//Solicitud
export const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
//Reaccion
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';

//Disparadores
export const fetchUsersRequested = () => ({type: FETCH_USERS_REQUESTED});
export const fetchUsersSucceeded = users => ({type: FETCH_USERS_SUCCEEDED, users});

export const UPDATE_USERS = 'UPDATE_USERS'
export const updateUsers = user => ({type: UPDATE_USERS, user});

export const SUBMIT_USER_REQUESTED = 'SUBMIT_USER_REQUESTED';
export const submitUserRequested = () => ({type: SUBMIT_USER_REQUESTED});

export const SUBMIT_USER_SUCCEEDED = 'SUBMIT_USER_SUCCEEDED';
export const submitUserSucceeded = (status, data) => ({type: SUBMIT_USER_SUCCEEDED, status, data});