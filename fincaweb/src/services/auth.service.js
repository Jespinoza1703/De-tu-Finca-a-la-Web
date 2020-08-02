import axios from "axios";

const API_URL = "https://kz-mock-productmanager.herokuapp.com/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "users", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, lastName, email, password, phone, role, ubicacion) {
    return axios.post(API_URL + "signup", {
      name,
      lastName,
      email,
      password,
      phone,
      role,
      ubicacion
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
