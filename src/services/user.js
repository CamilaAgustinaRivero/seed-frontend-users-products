import Axios from 'axios';
import HTTP from './http';

export default class User {

  static async apiCallUsers () {
    return HTTP.get('api/users');
  }
    
  static async apiCallOne(id) {
    return HTTP.get(`api/users/${id}`);
  }
    
  static async apiSaveUser(user) {
    try{
      //Si tiene id, va a editar un usuario
      if (user.id) {
        return HTTP.put('api/users', user);
      }
      //Si no tiene id, va a agregar uno
      else {
        return HTTP.post('api/users', user);
      }
    }
    catch (err) {
      return {status: 500, data: null}
    }
  }

  static async apiDeleteOne(id) {
  const {data, status} = await Axios.delete(`http://localhost:3001/api/users/${id}`);
  if (status !== 200) {
     return {};
  } 
  return data;
  }
}