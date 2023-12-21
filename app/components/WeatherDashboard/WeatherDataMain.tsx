import React, {FC} from 'react';
import {IWeather} from "@/app/lib/defenitions";

interface WeatherDataMain {
    data: IWeather | null;
}

const WeatherDataMain: FC<WeatherDataMain> = ({data}) => {
    if(!data){
        return <p>Select city</p>
    }
    return (
        <div>

        </div>
    );
};

export default WeatherDataMain;
