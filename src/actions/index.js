import axios from 'axios';
const API_KEY = '974a71eba51cd5d6d68c6d33c61ab33c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export  const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("Request Recevied ", request);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
