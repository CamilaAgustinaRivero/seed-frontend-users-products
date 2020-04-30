//Solicitud
export const FETCH_PRODUCT_REQUESTED = 'FETCH_PRODUCT_REQUESTED';
//Reaccion
export const FETCH_PRODUCT_SUCCEEDED = 'FETCH_PRODUCT_SUCCEEDED';

//Disparadores
export const fetchProductRequested = () => ({type: FETCH_PRODUCT_REQUESTED});
export const fetchProductSucceeded = products => ({type: FETCH_PRODUCT_SUCCEEDED, products});