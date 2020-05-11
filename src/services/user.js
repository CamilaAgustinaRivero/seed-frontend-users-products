import Axios from 'axios';
export default class User {
    static async apiCallUsers () {
        const {data, status} = await Axios.get('http://localhost:3001/api/users');
        console.log(data);
        if (status !== 200) {
          return [];
        } 
        return data;
    }
    
    static async apiCallOne(id) {
      const {data, status} = await Axios.get(`http://localhost:3001/api/users/${id}`);
      if (status !== 200) {
        return {};
      } 
      return data;
    }
    
    static async apiSaveUser(user) {
        try{
        //Si tiene id, va a editar un usuario
        if (user.id) {
          return Axios.put(`http://localhost:3001/api/users/${user.id}`, user);
        }
        //Si no tiene id, va a agregar uno
        else {
          return Axios.post('http://localhost:3001/api/users', user);
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