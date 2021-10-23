import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { useGeoLocation } from "./useGeoLocation";
import { fetchPresentLocationWeatherData } from "../../../utils/services/fetchPresentLocationWeatherData";
import { fetchWeatherDataByCity } from "../../../utils/services/fetchWeatherDataByCity";
import { WeatherApiResponse } from "../../../utils/types/WeatherApiResponse";
import _ from 'lodash'

/**
 * useHomeController hook contains logical code of Home component
 * @returns all logical states and functions which helps to display data to user.
 */
export const useHomeController = () => {
    const history = useHistory()
    const location = useGeoLocation()
    const { search } = useLocation()
    const cityQuery= new URLSearchParams(search).get('city')
    const [city, setCity] = useState<string>('')
    const [inputValue, setInputValue] = useState<string>('')
    const [cityForRouteQuery, setCityForRouteQuery] = useState<string>('')
    const [data, setData] = useState<WeatherApiResponse | null>(null)
    const [locationAllow, setLocationAllow] = useState({
        allow: false,
        message: 'loading....'
    })
    const [currentLocation, setCurrentLocation] = useState<boolean>(false)
    const [message, setMessage] = useState('')
    const [cardBGColor, setCardBGColor] = useState('#FFFFFF')

    /**
     * Mock function redirects user on view historical page component.
     */
    const onClickViewHistorical = ()=>{
        history.push(`/view-historical?city=${cityForRouteQuery}&startdate=2021-10-06&enddate=2021-10-12`)
    } 
    
    /**
     * Mock function gets the search box value whatever user types in and push that value on weather route using query string "city".
     * @param value accept string
     */
    const getSearchText = (value: string)=>{
        history.push(`?city=${value}`)
    }

    /**
     * Mock function fetch weather data of user's current location.
     * @param lat accept number
     * @param lng accept number
     */
    const fetchCurrentLocationWeatherData = async({lat, lng}:{lat: number, lng: number})=>{
        try{
            const res: WeatherApiResponse = await fetchPresentLocationWeatherData({data: {lat, lng}})
            if(res){
                setCityForRouteQuery(res.name)
                setData(res)
                setCurrentLocation(true)
            }
        }catch(error){
            setData(null)
            setMessage('Something went wrong. Please try again letter !')
        }
    }

    /**
     * Mock function to fetch weather data according to city (searched in the search box). 
     * @param cityName accept string
     */
    const fetchWeatherData = async({cityName}: {cityName: string})=>{
        try{
            const res: WeatherApiResponse = await fetchWeatherDataByCity({cityName})
            if(res){
                setCurrentLocation(false)
                setData(res)
            }
        }catch({ config, data, headers, request, status, statusText}){
            setData(null)
            if(status === 404){
                setMessage('City not found')
            }
        }
    }
    
    /**
     * Mock function to set background color of card element according to weather condition.
     * @param key accept string
     */
    const setCardBGAccordingToWeatherCondition = ({key}: {key: string})=>{
        let bgColor = cardBGColor
        switch (key) {
            case "Clouds":
                bgColor = '#B3D0FF'
                break;
            case "Thunderstorm":
                bgColor = '#CCCCCC'
                break;
            case "Drizzle":
                bgColor = '#B3FF9C'
                break;
            case "Rain":
                bgColor = '#48ABFE'
                break;            
            case "Snow":
                bgColor = '#DFFCFE'
                break;
            case "Clear":
                bgColor = '#FFFFFF'
                break;            
            case "Mist":
                bgColor = '#D6E1E7'
                break;
            case "Smoke":
                bgColor = '#C5C5C5'
                break;            
            case "Haze":
                bgColor = '#E6D4C3'
                break;
            case "Dust":
                bgColor = '#D1C2A8'
                break;
            case "Sand":
                bgColor = '#E2BE88'
                break;
            case "Ash":
                bgColor = '#CBCEC7'
                break;
            case "Squall":
                bgColor = '#B9CEDB'
                break;
            case "Tornado":
                bgColor = '#C4BEA9'
                break;
            default:
                bgColor = '#FFFFFF'
                break;
        }
        setCardBGColor(bgColor)
    }

    /**
     * Effect runs whenenver location state updates.
     */
    useEffect(()=>{
        if(location.loaded){
            setLocationAllow({
                allow: true,
                message: 'location accessed'
            })
            if(!cityQuery){
                fetchCurrentLocationWeatherData({lat: location.coordinates.lat, lng: location.coordinates.lng})
            }
        }else{
            setLocationAllow({
                allow: false,
                message: location.error.message
            })
        }
    }, [location])

    /**
     * Effect runs whenever location state, search and cityQuery updates.
     */
    useEffect(()=>{
        if(cityQuery != null){
            setData(null)
            setMessage('Loading...')
            setCityForRouteQuery(cityQuery)
            setInputValue(cityQuery)
            _.debounce(()=>{
                setCity(cityQuery)
            }, 2000)();
        }
    }, [search, location, cityQuery])

    /**
    * Effect runs whenever city state updates.
    */
    useEffect(()=>{
        if(city !== '' && cityQuery != null){
            fetchWeatherData({cityName: city})
        }else if(location.loaded){
            fetchCurrentLocationWeatherData({lat: location.coordinates.lat, lng: location.coordinates.lng})
        }
    }, [city])

    /**
    * Effect runs whenever data state updates.
    */
    useEffect(()=>{
        if(data){
            setCardBGAccordingToWeatherCondition({key: data.weather[0].main})
        }
    }, [data])

    return {
        onClickViewHistorical,
        getSearchText,
        city,
        data,
        locationAllow,
        message,
        currentLocation,
        inputValue,
        cardBGColor
    }
}