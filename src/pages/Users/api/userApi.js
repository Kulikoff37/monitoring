export class userApi {
  static fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json();
    })
  }
}
