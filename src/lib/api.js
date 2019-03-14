import axios from 'axios';

export function getAPOD(date = ' ') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=mAThFG0tHb7fv33sfbnVhnMlx6Rctos4X24Ie9Eg&date=${date}`)
}