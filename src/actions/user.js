//USUARIOS
export const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
export const fetchUsersRequested = () => ({type: FETCH_USERS_REQUESTED});

export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
export const fetchUsersSucceeded = users => ({type: FETCH_USERS_SUCCEEDED, users});

export const UPDATE_USERS = 'UPDATE_USERS'
export const updateUsers = user => ({type: UPDATE_USERS, user});

//USUARIO
export const SUBMIT_USER_REQUESTED = 'SUBMIT_USER_REQUESTED';
export const submitUserRequested = () => ({type: SUBMIT_USER_REQUESTED});

export const SUBMIT_USER_SUCCEEDED = 'SUBMIT_USER_SUCCEEDED';
export const submitUserSucceeded = (status, data) => ({type: SUBMIT_USER_SUCCEEDED, status, data});

export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
export const fetchUserRequested = id => ({type: FETCH_USER_REQUESTED, id});

export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED';
export const fetchUserSucceeded = user => ({type: FETCH_USER_SUCCEEDED, user});

//BORRAR
export const DELETE_USER_REQUESTED = 'DELETE_USER_REQUESTED';
export const DELETE_USER_SUCCEEDED = 'DELETE_USER_SUCCEEDED';

export const deleteUserRequested = id => ({type: DELETE_USER_REQUESTED, id});
export const deleteUserSucceeded = () =>  ({type: DELETE_USER_SUCCEEDED});