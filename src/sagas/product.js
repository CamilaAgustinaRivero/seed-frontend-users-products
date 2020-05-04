import {call, put} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchProductSucceeded} from '../actions/product';

const apiCallProducts = async () => {
    const {data, status} = await Axios.get('http://localhost:3001/api/products');
    console.log(data);
    if (status !== 200) {
      return [];
    } 
    return data;
}

export function* fetchProducts({filter}) {
    const products = yield call (apiCallProducts, filter);
    yield put(fetchProductSucceeded(products));
}

