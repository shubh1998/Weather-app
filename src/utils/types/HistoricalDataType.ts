import { HistoricalDataArrayType } from "./HistoricalDataArrayType";

export type HistoricalDataType = {
    timezone: string,
    state_code: string,
    country_code: string,
    lat: number,
    lon: number,
    city_name: string,
    station_id: string,
    data: HistoricalDataArrayType[],
    sources: string[],
    city_id: string
}