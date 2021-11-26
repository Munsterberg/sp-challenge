import axios from 'axios';

const client = axios;
client.defaults.baseURL = 'https://shakepay.github.io/programming-exercise/web';
client.defaults.headers.common['Content-Type'] = 'application/json';

// detect forbidden requests to "logout" user
client.interceptors.response.use(
  function handleResp(resp) {
    return resp;
  },
  function handleRespError(err) {
    return Promise.reject(err);
  },
);

export { client };
