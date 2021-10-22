import { WeatherApiResponse } from '../types/WeatherApiResponse'
import { apiClient } from './apiCLient'

export const fetchWeatherDataByCity = async ({ 
    cityName 
}:{ 
    cityName:string 
}): Promise<WeatherApiResponse>  => await apiClient.get(
    `/weather?q=${cityName}&appid=${process.env.REACT_APP_API_SECRET_KEY}`
    )