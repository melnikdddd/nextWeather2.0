import {combineReducers} from '@reduxjs/toolkit'
import WeatherReducer from '@/app/store/slices/weather.slice'

const rootReducer = combineReducers({
    weather: WeatherReducer
})

export default rootReducer;
