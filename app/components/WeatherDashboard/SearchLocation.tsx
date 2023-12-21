'use client';

import {useDebouncedCallback} from "use-debounce";
import {useState} from "react";
import {ICity, IWeather} from "@/app/lib/defenitions";
import axios from "axios";
import CitiesList from "@/app/components/WeatherDashboard/CitiesList";
import {useAppDispatch} from "@/app/lib/hooks";
import {setWeather} from "@/app/store/slices/weather.slice";

export default function SearchLocation() {
    const [cities, setCities] = useState<ICity[]>([]);
    const dispatch = useAppDispatch();

    const handleInputChange = useDebouncedCallback(async (input: string) => {
        if(input.length < 3){
            setCities([]);
            return;
        }
        const response = await axios.get('api/places', {params: {input}});
        if (response.data.places) {
            setCities(response.data.places);
            console.log(cities)
        }
    }, 300);
    const selectCity = (weatherData: IWeather | null) => {

        setCities([]);
        if (!weatherData) {
            alert('no weather data');
        }
        dispatch(setWeather(weatherData));
    }

    return (
        <div className={"relative"}>
            <input type="text" className={"p-2 px-4 rounded-lg"} onChange={(event) => {
                handleInputChange(event.target.value)
            }}/>
            <CitiesList cities={cities} selectCity={selectCity}/>
        </div>
    )
}
