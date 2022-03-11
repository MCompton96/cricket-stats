import axios from 'axios';

const POSTCODE_API = axios.create({
    baseURL: 'https://api.postcodes.io/postcodes'
});

export const fetchLatLng = (postcode) => {
    return POSTCODE_API.get(`/${postcode}`);
}