
import axios from 'axios';
import LocalStorageService from "./localStorage/localStorageService";
const localStorageService = LocalStorageService.getService();
const envConfig = require('../config/dev');


let refreshTokenPromise;

const interceptor = () => {
    axios.interceptors.request.use(
      config => {
          const token = localStorageService.getAccessToken();
          if (token) {
              config.headers['authorization'] = token;
              config.headers['userId'] = localStorageService.getUserId();
          }
          return config;
      },
      error => {
          Promise.reject(error)
      });

    axios.interceptors.response.use((response) => {
      return response;
    }, error => {
      if (error && error.response && error.config && error.response.status === 500 && !error.config.__isRetryRequest) {
        return handleRefreshToken().then(response => {
          insertToLocalStorage(response.data);
          error.config.__isRetryRequest = true;
          error.config.headers.Authorization = response.data;
          refreshTokenPromise = null;
          return axios(error.config);
        }).catch(err => {
          handleRejection(error);
        });
      } else {
        handleRejection(error);
      }
    });

}


function handleRefreshToken() {
  let refreshToken = localStorage.getItem("refreshToken");
  return new Promise((resolve, reject) => {
    if (!refreshToken) {
      reject("no refresh token");
    } else {
      resolve(refreshTokenPromise = refreshTokenPromise || axios({
        method: 'post',
        url: envConfig.serverHost + '/refreshToken',
        data: {
          data: refreshToken
        }
      }));
    }
  });
}

function insertToLocalStorage(userData) {
    localStorageService.setToken(userData);
}
function handleRejection(error) {
  console.error("interceptor - response.use() problem with refreshToken response from server:" + error);
  if (error.response.status === 401 || error.response.status === 500) {
    window.location = '/login'
  }
  refreshTokenPromise = null;
  throw (error);
}


export default interceptor;



































































