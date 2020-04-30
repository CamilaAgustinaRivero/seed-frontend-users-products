import {FETCH_PRODUCT_REQUESTED, FETCH_PRODUCT_SUCCEEDED} from '../actions/product';

const initialState = {
    products: [],
    headers: [
        {
          label: 'PRODUCTO',
          key: 'name'
        },
        {
          label: 'PRECIO',
          key: 'price'
        }, 
        {
          label: 'STOCK',
          key: 'stock'
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PRODUCT_REQUESTED:
        return {...state, products:[]};
      case FETCH_PRODUCT_SUCCEEDED:
        return {...state, products: action.products};
      default:
        return {...state}
    }
}