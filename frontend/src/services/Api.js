import axios from "axios"

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 403) {  window.location.href = "/" }
    if(error.response.status === 401) {  window.location.href = "/" }

    return Promise.reject(error);
});

export default axios;