import axios from 'axios';
import { getLatLng } from './postcode-service';
import moment from 'moment';

const BASE_URL = "http://api.weatherapi.com/v1/history.json";

export const getWeatherData = (postcode, date) => {
    return getLatLng(postcode).then((res) => {
        const locQuery = `q=${res.lat},${res.lng}`;
        const dateQuery = `dt=${moment(date).format('YYYY-MM-DD')}`;
    
        const finalUrl = `${BASE_URL}?key=${process.env.REACT_APP_WEATHER_KEY}&${locQuery}&${dateQuery}`;

        axios.get(finalUrl);
    });


}