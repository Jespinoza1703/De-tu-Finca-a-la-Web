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
          if(response.user){
            localStorage.setItem("user", JSON.stringify(response.user));
          }
          if(response.productor){
            localStorage.setItem("user", JSON.stringify(response.productor));
          }
          localStorage.setItem("loggedIn", "yes");
          localStorage.setItem("token", response.token);
          setApp({
            isLoggedIn: localStorage.getItem('loggedIn'),
            currentUser: localStorage.getItem('user'),
          });
          console.log('Success:', response);
        });
  }

  logout(setApp) {
    localStorage.removeItem("user");
    localStorage.setItem("loggedIn", "no");
    localStorage.removeItem("token");
    setApp({
      isLoggedIn: localStorage.getItem('loggedIn'),
      currentUser: undefined
    })
  }

  register(name, lastName, email, password, telephone, role, region, x, y) {
    let type = '';
    if(role === 'regularConsumer'){
      type = 'users'
    }
    if(role === 'producer'){
      type = 'productores'
    }
    var url = API_URL + type ;
    var data = {
      name: name,
      lastname: lastName,
      email: email,
      phone: telephone,
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
