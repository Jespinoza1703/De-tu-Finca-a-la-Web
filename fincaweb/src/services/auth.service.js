const API_URL = "https://kz-product-manager-2.herokuapp.com/";

class AuthService {
  login(email, password, role, setApp) {
    let type = '';
    if(role === 'consumer'){
      type = 'users/'
    }
    if(role === 'producer'){
      type = 'productores/'
    }
    var url = API_URL + type + 'login';
    var data = {
      email: email,
      password: password
    };

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be string or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
        .catch(error => {
          console.error('Error:', error);
        })
        .then(response => {
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("loggedIn", "yes");
          setApp({
            isLoggedIn: localStorage.getItem('loggedIn'),
            currentUser: response.user
          })
          console.log('Success:', response);
        });
  }

  logout(setApp) {
    localStorage.removeItem("user");
    localStorage.setItem("loggedIn", "no");
    setApp({
      isLoggedIn: localStorage.getItem('loggedIn'),
      currentUser: undefined
    })
  }

  register(name, lastName, email, password, telephone, role, region, x, y) {
    var url = API_URL + 'users';
    var data = {
      name: name,
      lastname: lastName,
      email: email,
      telephone: telephone,
      password: password,
      region: region,
      role: role,
      location: {"lat": y, "lng": x}
    };

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be string or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
