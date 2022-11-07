
const LocalStorageService = (function(){
    let service;
    function getService() {
        if(!service) {
          service = this;
          return service
      }
      return service
    }
    function setToken(tokenObj) {
      try {
        localStorage.setItem('accessToken', tokenObj.accessToken);
        localStorage.setItem('refreshToken', tokenObj.refreshToken);
        localStorage.setItem('userId', tokenObj.userId);
      }
      catch(err) {
        console.log(err);
      }
      
    }
    function getAccessToken() {
      return localStorage.getItem('accessToken');
    }
    function getRefreshToken() {
      return localStorage.getItem('refreshToken');
    }
    function getUserId() {
      return localStorage.getItem('userId');
    }
    function clearToken() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
    }

    
   return {
      getService : getService,
      setToken : setToken,
      getAccessToken : getAccessToken,
      getRefreshToken : getRefreshToken,
      clearToken : clearToken,
      getUserId: getUserId
    }
   })();
   export default LocalStorageService;