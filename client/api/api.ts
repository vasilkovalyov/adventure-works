import axios from 'axios';

function $api() {
  let apiUrl = 'http://localhost:4000';

  return axios.create({
    baseURL: `${apiUrl}/api/`,
    withCredentials: true,
    method: 'get, post, put, delete',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
}

export default $api;
