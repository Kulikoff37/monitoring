import { USERS } from './userData';

export class userAPI {
  static fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json();
    })
  }

  static fetchUsersTest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...USERS]);
      }, 1000);
    });
  }
}
