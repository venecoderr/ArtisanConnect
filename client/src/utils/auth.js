import jwtDecode from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();

    if (!token) {
      return null;
    }

    const decodedToken = jwtDecode(token)
    return decodedToken;
  }

  loggedIn() {
    const token = this.getToken();

    if(token === null){
      return false
    }
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = jwtDecode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token ? token : null;
  }
  

  login(idToken) {
    localStorage.setItem('token', idToken);
    window.location.assign('/profile');
  }

  logout() {
    localStorage.removeItem('token');
    window.location.replace('/');
  }
}

export default new AuthService();
