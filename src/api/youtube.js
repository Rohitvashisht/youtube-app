import axios from 'axios';

//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'AIzaSyDJF9585SrDF9E7GPvGTUFkD44gq7vm1B0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY,
    },
})