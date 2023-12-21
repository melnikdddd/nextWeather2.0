import {NextResponse} from "next/server";
import axios from "axios";
import {ICity, IWeather} from "@/app/lib/defenitions";
import {mapWeatherDataToIWeather} from "@/app/lib/service";

const api_key = process.env.WEATHER_API_KEY as string;

export async function GET(req: Request) {
    try {
        const {searchParams} = new URL(req.url);
        const description: string | null = searchParams.get('description');
        const id: string | null = searchParams.get('id');

        if (!description || !id) return NextResponse.json({message: "Bad request."}, {status: 400});

        const city: ICity = {id, description};

        const weatherData: IWeather | null = await getWeatherData(city);
        return weatherData ? NextResponse.json({weatherData: weatherData}, {status: 200})
            : NextResponse.json({message: "Weather can`t find.", weatherData: null}, {status: 200});

    } catch (error) {
        return NextResponse.json({message: "Server error", weatherData: null}, {status: 500});
    }
}


const getWeatherData = async (city: ICity): Promise<IWeather | null> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.description}&appid=${api_key}&cnt=1&units=metric`;
    try {
        const response = await axios.get(url);
        console.log(response);
        const weatherData: IWeather | undefined = response.data
        if (!weatherData) {
            return null;
        }
        return mapWeatherDataToIWeather(weatherData, city);
    } catch (error) {
        return null;
    }
}
