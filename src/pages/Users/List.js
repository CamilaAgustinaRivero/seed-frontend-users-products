import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Title from '../../components/Title';
import UsersTable from '../../components/Table';

import {fetchUsersRequested, deleteUserRequested} from '../../actions/user';


class Users extends Component {
  componentDidMount() {
    this.props.requestUser();
  }
  render(){
    const {headers, documents} = this.props;
    return (
      <div>
        <header>
          <Title title="Lista de usuarios"/>
          <Link to={'/users/new'}> Nuevo usuario </Link>
        </header>
        
        <UsersTable {...{documents, headers, linkTo:'/users'}} onDelete={id => this.props.deleteUser(id)}/> 
        
      </div>
    );
  }
}
//mapStateToProps - Tomo el store y se lo paso al componente como props
//MapDispatchtoProps - Tomo las acciones y se lo paso al componente como props
//mergeProps - Fuciona accinoes y propiedades

//Nuestro Store, Todas las propiedades que vienen por herencia
const mapStateToProps = (state) => ({
  headers: state.user.headers,
  documents: state.user.users
})
//Nuestro disparador de acciones, Todas las propiedades que vienen por herencia
const mapDispatchToProps = (dispatch) => ({
  requestUser: () => dispatch(fetchUsersRequested()),
  deleteUser: id => dispatch(deleteUserRequested(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);