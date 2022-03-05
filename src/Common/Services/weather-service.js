import axios from 'axios';
import { getLatLng } from './postcode-service';

export const getWeatherData = (postcode) => {
    const coords = getLatLng(postcode);

    
}