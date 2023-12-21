import {FC} from 'react';
import {ICity, IWeather} from "@/app/lib/defenitions";
import {truncateStr} from "@/app/lib/service";
import axios from "axios";

interface CitiesListProps {
    cities: ICity[];
    selectCity: (weatherData: IWeather | null) => void;
}


const CitiesList: FC<CitiesListProps> = ({cities, selectCity}) => {

    const handleCitySelect = async (city: ICity) => {
        console.log(city.description);
        const response = await axios.get(`api/weather?description=${city.description}&id=${city.id}`);
        const weatherData: IWeather | null = response.data.weatherData;
        selectCity(weatherData);
    };


    if (cities.length > 0) {
        return (
            <ul className={'flex flex-col absolute bg-white'}>
                {
                    cities.map((city) => (
                        <li key={city.id} className={"cursor-pointer transition-colors hover:bg-slate-500 text-black"}
                            onClick={() => handleCitySelect(city)}>
                            <span className={" text-lg"}>
                                {truncateStr(city.description, 20)}
                            </span>
                        </li>
                    ))
                }
            </ul>
        );
    }
};


export default CitiesList;
