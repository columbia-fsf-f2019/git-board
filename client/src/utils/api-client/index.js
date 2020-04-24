import axios from 'axios';

// see https://github.com/axios/axios/issues/2321#issuecomment-516559303
//  for setting up axios to retry requests on 401 automatically
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY
)}`;

export default {
  auth: require('./auth.client')(axios),
  lists: require('./list.client')(axios),
};
