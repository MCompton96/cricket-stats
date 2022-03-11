import axios from 'axios';
import { fetchLatLng } from './postcode-service';
import moment from 'moment';

const WEATHER_API = axios.create({
    baseURL: 'https://weatherapi-com.p.rapidapi.com/history.json'
});

export const fetchWeatherData = (postcode, dt) => {
    return fetchLatLng(postcode).then(({data}) => {
        const lngLat = `${data.result.latitude},${data.result.longitude}`;
        return WEATHER_API.request({
            params: {
                q: lngLat,
                dt: moment(dt).format('YYYY-MM-DD'),
                lang: 'en'
            },
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_WEATHER_KEY
            }
        })
    })
}