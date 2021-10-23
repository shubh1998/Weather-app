import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import { useGeoLocation } from "./useGeoLocation";
import { fetchPresentLocationWeatherData } from "../../../utils/services/fetchPresentLocationWeatherData";
import { fetchWeatherDataByCity } from "../../../utils/services/fetchWeatherDataByCity";
import { WeatherApiResponse } from "../../../utils/types/WeatherApiResponse";
import _ from 'lodash'

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

    const fetchCurrentLocationWeatherData = async(lat: number, lng: number)=>{
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

    useEffect(()=>{
        if(location.loaded){
            setLocationAllow({
                allow: true,
                message: 'location accessed'
            })
            if(!cityQuery){
                fetchCurrentLocationWeatherData(location.coordinates.lat, location.coordinates.lng)
            }
        }else{
            setLocationAllow({
                allow: false,
                message: location.error.message
            })
        }
    }, [location])

    const onClickViewHistorical = ()=>{
        history.push(`/view-historical?city=${cityForRouteQuery}&startdate=2021-10-06&enddate=2021-10-12`)
    } 
    
    const getSearchText = (value: string)=>{
        history.push(`?city=${value}`)
    }

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

    useEffect(()=>{
        if(city !== '' && cityQuery != null){
            fetchWeatherData({cityName: city})
        }else if(location.loaded){
            fetchCurrentLocationWeatherData(location.coordinates.lat, location.coordinates.lng)
        }
    }, [city])

    return {
        onClickViewHistorical,
        getSearchText,
        city,
        data,
        locationAllow,
        message,
        currentLocation,
        inputValue
    }
}