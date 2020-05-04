//Solicitud
export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
//Reaccion
export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED';

//Disparadores
export const fetchUserRequested = () => ({type: FETCH_USER_REQUESTED});
export const fetchUserSucceeded = users => ({type: FETCH_USER_SUCCEEDED, users});