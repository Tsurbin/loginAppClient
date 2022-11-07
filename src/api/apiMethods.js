import axios from 'axios';

export function apiPost({postData,url,logError}) {
  let data = {
    data: postData
  };
  return axios({
    method: 'post',
    url: url,
    data: data
  }).then(response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  }).catch(error => {
    console.error(logError + error);
    throw (error);
  });
}

export function apiGet({url, logError}) {
    return axios({
      method: 'get',
      url: url
    }).then(response => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    }).catch(error => {
      console.error(logError + error);
      throw (error);
    });
}


































































