import {IWeather, SolarCycle, WeatherDataForTheme} from "@/app/lib/defenitions";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/app/store/store";

const initialState: IWeather | null = null;

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather(state, action) {
            return state = action.payload;
        },
        clearWeather(state) {
            return state = null;
        }
    }
});

export const selectWeather = (state: RootState): IWeather | null => state.weather;

export const selectWeatherForTheme = (state: RootState): WeatherDataForTheme | null => {
    if(!state.weather){
        return null;
    }
    const tempWeather: IWeather = state.weather;
    const mainType: string = tempWeather.weather.main;
    const solarCycle: SolarCycle = tempWeather.solarCycle;
    return {mainType, solarCycle};
}

export const {setWeather, clearWeather} = weatherSlice.actions;

export default weatherSlice.reducer;
