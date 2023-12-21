export type UnixTime = number;

export type Main = {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}
export type Weather = {
    description: string;
    icon: string;
    main: string;
}
export type SolarCycle = {
    sunrise: UnixTime;
    sunset: UnixTime;
}

export interface WeatherDataForTheme {
    mainType: string,
    solarCycle: SolarCycle,
}
export interface ICity {
    id: string;
    description: string;
}
export interface IWeather {
    id: number;
    city: ICity;
    dt: UnixTime;
    main: Main;
    weather: Weather;
    windSpeed: number;
    solarCycle: SolarCycle;
    visibility: number;
    cloudinessPercent: number;
}
