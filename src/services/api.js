import axios from 'axios';

const api = axios.create({
  baseURL: 'https://custom-omdbapi.herokuapp.com/movies',
  //timeout: 3000,
});

export default api;
