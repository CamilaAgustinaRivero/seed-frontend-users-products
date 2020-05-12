import HTTP from './http';

export default class User {
  static async apiCallUsers () {
    return HTTP.get('api/users');
  }
    
  static async apiCallOne(id) {
    return HTTP.get(`api/users/${id}`);
  }
    
  static async apiSaveUser(user) {
    if (user.id) {
      return HTTP.put('api/users', user);
    }
    else {
      return HTTP.post('api/users', user);
    }
  }

  static async apiDeleteOne(id) {
    return HTTP.delete(`api/users/${id}`);
  }
}