import axios from 'axios';

const KEY = 'AIzaSyBqz1bpwfzS28hO4XdbzBmRJmmqLE_ZLEg'

export default axios.create({
  // later we can get our instance of axios and GET from it using /search
  baseURL: 'https:///www.googleapis.com/youtube/v3',
  // all the query string params we want added onto request
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
