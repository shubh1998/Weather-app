import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const useViewHistoricalController = () => {
    const [data, setData] = useState<any>(null)
    const [dataLoaded, setdataLoaded] = useState<boolean>(false)
    const [temperatureGraphData, setTemperatureGraphData] = useState<any>(null)
    const [windGraphData, setWindGraphData] = useState<any>(null)
    const [cloudAndSolarGraphData, setCloudAndSolarGraphData] = useState<any>(null)
    const { search } = useLocation()
    const cityQuery= new URLSearchParams(search).get('city')
    const historicalData = {
        "timezone": "Asia/Kolkata",
        "state_code": "35",
        "country_code": "IN",
        "lat": 22.71792,
        "lon": 75.8333,
        "city_name": "Indore",
        "station_id": "427540-99999",
        "data": [
          {
            "rh": 73.4,
            "max_wind_spd_ts": 1633791600,
            "t_ghi": 6552.8,
            "max_wind_spd": 3.1,
            "solar_rad": 224.4,
            "wind_gust_spd": 3.1,
            "max_temp_ts": 1633773600,
            "min_temp_ts": 1633744800,
            "clouds": 49,
            "max_dni": 938.2,
            "precip_gpm": 0,
            "wind_spd": 1.7,
            "slp": 1008.9,
            "ts": 1633717800,
            "max_ghi": 930.2,
            "temp": 26.7,
            "pres": 946.2,
            "dni": 367.5,
            "dewpt": 21.4,
            "snow": 0,
            "dhi": 45.1,
            "precip": 0,
            "wind_dir": 217,
            "max_dhi": 121,
            "ghi": 273,
            "max_temp": 33,
            "t_dni": 8820,
            "max_uv": 8.4,
            "t_dhi": 1081.5,
            "datetime": "2021-10-09",
            "t_solar_rad": 5384.5,
            "min_temp": 24,
            "max_wind_dir": 217,
            "snow_depth": null
          },
          {
            "rh": 74.3,
            "max_wind_spd_ts": 1633611600,
            "t_ghi": 6624.1,
            "max_wind_spd": 6.2,
            "solar_rad": 274.3,
            "wind_gust_spd": 6.2,
            "max_temp_ts": 1633593600,
            "min_temp_ts": 1633568400,
            "clouds": 18,
            "max_dni": 939,
            "precip_gpm": 5,
            "wind_spd": 2.3,
            "slp": 1006.6,
            "ts": 1633545000,
            "max_ghi": 937.2,
            "temp": 27.9,
            "pres": 944.1,
            "dni": 369.4,
            "dewpt": 21.6,
            "snow": 0,
            "dhi": 45.3,
            "precip": 5,
            "wind_dir": 205,
            "max_dhi": 121.2,
            "ghi": 276,
            "max_temp": 33,
            "t_dni": 8864.9,
            "max_uv": 7.8,
            "t_dhi": 1087.8,
            "datetime": "2021-10-07",
            "t_solar_rad": 6584.3,
            "min_temp": 22,
            "max_wind_dir": 205,
            "snow_depth": null
          },
          {
            "rh": 74.6,
            "max_wind_spd_ts": 1633960800,
            "t_ghi": 6480.7,
            "max_wind_spd": 4.1,
            "solar_rad": 238,
            "wind_gust_spd": 4.1,
            "max_temp_ts": 1633946400,
            "min_temp_ts": 1633903200,
            "clouds": 38,
            "max_dni": 937.4,
            "precip_gpm": 0,
            "wind_spd": 1.7,
            "slp": 1009.9,
            "ts": 1633890600,
            "max_ghi": 923,
            "temp": 26,
            "pres": 946.7,
            "dni": 365.6,
            "dewpt": 20.9,
            "snow": 0,
            "dhi": 44.8,
            "precip": 0,
            "wind_dir": 193,
            "max_dhi": 120.7,
            "ghi": 270,
            "max_temp": 33,
            "t_dni": 8773.8,
            "max_uv": 7.9,
            "t_dhi": 1075,
            "datetime": "2021-10-11",
            "t_solar_rad": 5711.9,
            "min_temp": 23,
            "max_wind_dir": 193,
            "snow_depth": null
          },
          {
            "rh": 66.6,
            "max_wind_spd_ts": 1634036400,
            "t_ghi": 6444.5,
            "max_wind_spd": 3.6,
            "solar_rad": 206.8,
            "wind_gust_spd": 3.6,
            "max_temp_ts": 1634032800,
            "min_temp_ts": 1634004000,
            "clouds": 33,
            "max_dni": 937,
            "precip_gpm": 0,
            "wind_spd": 1.6,
            "slp": 1009.6,
            "ts": 1633977000,
            "max_ghi": 919.3,
            "temp": 26,
            "pres": 946.3,
            "dni": 380.4,
            "dewpt": 19.4,
            "snow": 0,
            "dhi": 46.6,
            "precip": 0,
            "wind_dir": 52,
            "max_dhi": 120.6,
            "ghi": 280.2,
            "max_temp": 32,
            "t_dni": 8750.1,
            "max_uv": 8.9,
            "t_dhi": 1071.7,
            "datetime": "2021-10-12",
            "t_solar_rad": 4755.3,
            "min_temp": 21,
            "max_wind_dir": 52,
            "snow_depth": null
          },
          {
            "rh": 75.2,
            "max_wind_spd_ts": 1633510800,
            "t_ghi": 6659.5,
            "max_wind_spd": 5.1,
            "solar_rad": 265,
            "wind_gust_spd": 5.1,
            "max_temp_ts": 1633510800,
            "min_temp_ts": 1633478400,
            "clouds": 48,
            "max_dni": 939.4,
            "precip_gpm": 0,
            "wind_spd": 2.6,
            "slp": 1007,
            "ts": 1633458600,
            "max_ghi": 940.7,
            "temp": 27.9,
            "pres": 944.4,
            "dni": 370.3,
            "dewpt": 22.2,
            "snow": 0,
            "dhi": 45.5,
            "precip": 0,
            "wind_dir": 122,
            "max_dhi": 121.4,
            "ghi": 277.5,
            "max_temp": 32,
            "t_dni": 8886.7,
            "max_uv": 7.7,
            "t_dhi": 1090.8,
            "datetime": "2021-10-06",
            "t_solar_rad": 6360.1,
            "min_temp": 23,
            "max_wind_dir": 122,
            "snow_depth": null
          },
          {
            "rh": 70.4,
            "max_wind_spd_ts": 1633701600,
            "t_ghi": 6588.5,
            "max_wind_spd": 3.1,
            "solar_rad": 255,
            "wind_gust_spd": 3.1,
            "max_temp_ts": 1633690800,
            "min_temp_ts": 1633654800,
            "clouds": 44,
            "max_dni": 938.6,
            "precip_gpm": 0,
            "wind_spd": 1.4,
            "slp": 1007.5,
            "ts": 1633631400,
            "max_ghi": 933.7,
            "temp": 28.9,
            "pres": 944.7,
            "dni": 368.4,
            "dewpt": 21.5,
            "snow": 0,
            "dhi": 45.2,
            "precip": 0,
            "wind_dir": 212,
            "max_dhi": 121.1,
            "ghi": 274.5,
            "max_temp": 33,
            "t_dni": 8842.6,
            "max_uv": 6,
            "t_dhi": 1084.6,
            "datetime": "2021-10-08",
            "t_solar_rad": 6119.2,
            "min_temp": 23,
            "max_wind_dir": 212,
            "snow_depth": null
          },
          {
            "rh": 73.5,
            "max_wind_spd_ts": 1633860000,
            "t_ghi": 6516.8,
            "max_wind_spd": 3.1,
            "solar_rad": 270.7,
            "wind_gust_spd": 3.1,
            "max_temp_ts": 1633860000,
            "min_temp_ts": 1633824000,
            "clouds": 36,
            "max_dni": 937.8,
            "precip_gpm": 0,
            "wind_spd": 1.9,
            "slp": 1010.8,
            "ts": 1633804200,
            "max_ghi": 926.6,
            "temp": 26,
            "pres": 948.1,
            "dni": 366.5,
            "dewpt": 20.7,
            "snow": 0,
            "dhi": 44.9,
            "precip": 0,
            "wind_dir": 187,
            "max_dhi": 120.8,
            "ghi": 271.5,
            "max_temp": 32,
            "t_dni": 8797.1,
            "max_uv": 8.8,
            "t_dhi": 1078.3,
            "datetime": "2021-10-10",
            "t_solar_rad": 6495.7,
            "min_temp": 22,
            "max_wind_dir": 187,
            "snow_depth": null
          }
        ],
        "sources": [
          "427540-99999",
          "IN011171400",
          "IN011170400",
          "IN011171700",
          "imerg",
          "merra2",
          "era5",
          "modis"
        ],
        "city_id": "1269743"
    }

    const fetchAndSetData = () => {
        new Promise( (resolve, reject) => {
            setTimeout(() => {
              resolve(historicalData)
            }, 500)
        }).then((res:any) => {
            setdataLoaded(true)
            setData(res)
            const labels = res.data.map((item:any) => item.datetime)
            const minTemperature = res.data.map((item:any) => item.min_temp)
            const maxTemperature = res.data.map((item:any) => item.max_temp)
            const maxWindSpeed = res.data.map((item:any) => item.max_wind_spd)
            const solarRadData = res.data.map((item:any) => item.solar_rad)
            const cloudsData = res.data.map((item:any) => item.clouds)
            setTemperatureGraphData({
                labels,
                datasets: [
                    {
                      label: "Max Temperature",
                      data: minTemperature,
                      fill: false,
                      backgroundColor: "rgba(75,192,192,0.2)",
                      borderColor: "rgb(155,50,23)"
                    },
                    {
                      label: "Min Temperature",
                      data: maxTemperature,
                      fill: false,
                      borderColor: "rgb(229,92,92)"
                    }
                ]
            })
            setWindGraphData({
                labels,
                datasets: [
                    {
                        label: "Wind Speed",
                        data: maxWindSpeed,
                        fill: false,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(0, 204, 24)"
                      },
                ]
            })
            setCloudAndSolarGraphData({
                labels,
                datasets: [
                    {
                      label: "Solar Radiation",
                      data: solarRadData,
                      fill: true,
                      backgroundColor: "rgba(75,192,192,0.2)",
                      borderColor: "rgba(75,192,192,1)"
                    },
                    {
                      label: "Clouds",
                      data: cloudsData,
                      fill: false,
                      borderColor: "#742774"
                    }
                ]
            })
        })
    }

    useEffect(() => {
        fetchAndSetData()
    }, [])

    return {
        dataLoaded,
        temperatureGraphData,
        windGraphData,
        cloudAndSolarGraphData,
        data,
        cityQuery
    }
}
