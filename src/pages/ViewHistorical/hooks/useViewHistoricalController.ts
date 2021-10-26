import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import historicalData from 'utils/JSON/historicalData.json'
import { HistoricalDataArrayType } from 'utils/types/HistoricalDataArrayType'
import { HistoricalDataType } from 'utils/types/HistoricalDataType'
import { LineChartGraphDataType } from 'utils/types/LineChartGraphDataType'

/**
 * useViewHistoricalController hook contains logical code of ViewHistorical component
 * @returns all logical states and functions which helps to display data to user.
 */
export const useViewHistoricalController = () => {
  const [data, setData] = useState<HistoricalDataType | null>(null)
  const [dataLoaded, setdataLoaded] = useState<boolean>(false)
  const [temperatureGraphData, setTemperatureGraphData] = useState<LineChartGraphDataType | null>(
    null
  )
  const [windGraphData, setWindGraphData] = useState<LineChartGraphDataType | null>(null)
  const [cloudAndSolarGraphData, setCloudAndSolarGraphData] =
    useState<LineChartGraphDataType | null>(null)
  const { search } = useLocation()
  const cityQuery = new URLSearchParams(search).get('city')
  const dummyHistoricalData = historicalData

  /**
   * Mock function to fetch and set historical data of weather.
   */
  const fetchHistoricalWeatherData = () => {
    new Promise<HistoricalDataType>((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(dummyHistoricalData)
        }, 500)
      } catch (error) {
        reject('Something went wrong !')
      }
    }).then((res) => {
      setdataLoaded(true)
      setData(res)
      const labels = res.data.map((item: HistoricalDataArrayType) => item.datetime)
      const minTemperature = res.data.map((item: HistoricalDataArrayType) => item.min_temp)
      const maxTemperature = res.data.map((item: HistoricalDataArrayType) => item.max_temp)
      const maxWindSpeed = res.data.map((item: HistoricalDataArrayType) => item.max_wind_spd)
      const solarRadData = res.data.map((item: HistoricalDataArrayType) => item.solar_rad)
      const cloudsData = res.data.map((item: HistoricalDataArrayType) => item.clouds)
      setTemperatureGraphData({
        labels,
        datasets: [
          {
            label: 'Max Temperature',
            data: minTemperature,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgb(155,50,23)',
          },
          {
            label: 'Min Temperature',
            data: maxTemperature,
            fill: false,
            borderColor: 'rgb(229,92,92)',
          },
        ],
      })
      setWindGraphData({
        labels,
        datasets: [
          {
            label: 'Wind Speed',
            data: maxWindSpeed,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(0, 204, 24)',
          },
        ],
      })
      setCloudAndSolarGraphData({
        labels,
        datasets: [
          {
            label: 'Solar Radiation',
            data: solarRadData,
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: 'Clouds',
            data: cloudsData,
            fill: false,
            borderColor: '#742774',
          },
        ],
      })
    })
  }

  /**
   * Effect runs first time when component loaded first time i.e. when component mounts.
   */
  useEffect(() => {
    fetchHistoricalWeatherData()
  }, [])

  return {
    dataLoaded,
    temperatureGraphData,
    windGraphData,
    cloudAndSolarGraphData,
    data,
    cityQuery,
  }
}
