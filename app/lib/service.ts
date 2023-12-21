import {any} from "prop-types";
import {ICity, IWeather, SolarCycle, UnixTime} from "@/app/lib/defenitions";

export const truncateStr = (str: string, length: number = 15) => {
    if (length <= 3) return str;
    return str.length > length ?
        str.substring(0, length - 3) + '...' : str;
}
export const mapWeatherDataToIWeather = (weatherData: any, city: ICity): IWeather => {
    return {
        id: weatherData.weather[0].id,
        city,
        dt: weatherData.dt,
        main: {
            feels_like: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            temp: weatherData.main.temp,
            temp_max: weatherData.main.temp_max,
            temp_min: weatherData.main.temp_min,
        },
        weather: {
            description: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon,
            main: weatherData.weather[0].main,
        },
        windSpeed: weatherData.wind.speed,
        solarCycle: {
            sunrise: weatherData.sys.sunrise,
            sunset: weatherData.sys.sunset,
        },
        cloudinessPercent: weatherData.clouds.all,
        visibility: weatherData.visibility,
    } as IWeather;
}


export const calculateTimeOfDay = (sunset: UnixTime, sunrise: UnixTime): 'day' | 'night' => {
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime >= sunrise && currentTime <= sunset ? 'day' : 'night';
}
