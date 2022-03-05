import axios from 'axios';

export const getLatLng = async (postcode) => {
    const result = await axios.get(`https://api.postcodes.io/postcodes/${postcode}`);

    const fetched = result.data.result;

    return {
        lat: fetched.latitude,
        lng: fetched.longitude
    }
}