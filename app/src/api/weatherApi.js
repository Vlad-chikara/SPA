import axios from 'axios';

const API_KEY = '89de229583924284925200348253004'; 
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'no',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних погоди:', error);
    throw error;
  }
};
