export const GET_RANDOM_FOOD = 'GET_RANDOM_FOOD'
export const SET_GEOLOCATION = 'SET_GEOLOCATION'
export const SET_MARKERS = 'SET_MARKERS';

export const getRandomFood = () => {
    return {type:GET_RANDOM_FOOD}
}
export const setLocation = (location) => {
    return {type:SET_GEOLOCATION,location:location}
}

export const setMarkers = (markers) => {
    return { type:SET_MARKERS,markers:markers}
}