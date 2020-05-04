import React, {Component} from 'react';
import {connect} from 'react-redux';
import Title from '../components/Title';
import ProductsTable from '../components/Table';
import {fetchProductRequested} from '../actions/product';


class Products extends Component {
  async componentDidMount() {
    this.props.requestProduct();
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
  requestProduct: () => dispatch(fetchProductRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);