import React, {Component} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import Title from '../components/Title';
import ProductsTable from '../components/ProductsTable';
import {fetchProductRequested, fetchProductSucceeded} from '../actions/product';

const fetchProducts = async () => {
  const {data, status} = await Axios.get('http://localhost:3001/api/products');
  console.log(data);
  if (status !== 200) {
    return [];
  } 
  return data;
}

class Products extends Component {
  async componentDidMount() {
    this.props.requestProduct();
    const documents = await fetchProducts();
    this.props.productSucceeded(documents);
    this.forceUpdate();
  }
  render(){
    const {headers, documents} = this.props;
    return (
      <div>
        <header>
          <Title title="Lista de productos"/>
        </header>
        <body>
          <ProductsTable {...{documents, headers}}/> 
        </body>
      </div>
    );
  }
}
//mapStateToProps - Tomo el store y se lo paso al componente como props
//MapDispatchtoProps - Tomo las acciones y se lo paso al componente como props
//mergeProps - Fuciona accinoes y propiedades

//Nuestro Store, Todas las propiedades que vienen por herencia
const mapStateToProps = (state) => ({
  headers: state.product.headers,
  documents: state.product.products
})
//Nuestro disparador de acciones, Todas las propiedades que vienen por herencia
const mapDispatchToProps = (dispatch) => ({
  requestProduct: () => dispatch(fetchProductRequested()),
  productSucceeded: products => dispatch(fetchProductSucceeded(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);