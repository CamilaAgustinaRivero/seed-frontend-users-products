import React, {Component} from 'react';
import Axios from 'axios';
import Title from './components/Title';
import ProductsTable from './components/ProductsTable';

const fetchProducts = async () => {
  const {data, status} = await Axios.get('http://localhost:3001/api/products');
  console.log(data);
  if (status !== 200) {
    return [];
  } 
  return data;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
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
  }

  async componentDidMount() {
    const documents = await fetchProducts();
    this.setState({documents});
  }
  render(){
    const {documents, headers} = this.state;
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

export default App;