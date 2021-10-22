export type locationStateType = {
    loaded: boolean,
    coordinates: {
        lat: number,
        lng: number,
    },
    error: {
        code: string | number,
        message: string
    },
}