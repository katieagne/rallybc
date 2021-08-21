import axios from "axios";
import { API_URL } from "../utils/util";

class AuthService {
  // user login
  login(email, password) {
    return axios
      .post(`${API_URL}/api/users/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
      });
  }

  // user logout
  logout() {
    localStorage.removeItem("user");
  }

  // user sign up
  register(email, name, password, postalCode) {
    return axios.post(`${API_URL}/api/users`, {
      email,
      name,
      password,
      postalCode,
    });
  }

  // get current user
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default AuthService;
