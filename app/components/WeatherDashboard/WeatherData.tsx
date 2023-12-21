'use client';

import {FC} from 'react';
import WeatherDataMain from "@/app/components/WeatherDashboard/WeatherDataMain";
import WeatherDataDesc from "@/app/components/WeatherDashboard/WeatherDataDesc";

import {selectWeather} from "@/app/store/slices/weather.slice";
import {useAppSelector} from "@/app/lib/hooks";
const WeatherData:FC = () => {
    const weatherData = useAppSelector(selectWeather);

    return (
        <div className={"flex"}>
            <WeatherDataMain data={weatherData}/>
            <WeatherDataDesc/>
        </div>
    );
};

export default WeatherData;
