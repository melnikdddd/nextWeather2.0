import React from 'react';
import Container from "@/app/components/ui/Container";
import SearchLocation from "@/app/components/WeatherDashboard/SearchLocation";
import WeatherData from "@/app/components/WeatherDashboard/WeatherData";

const WeatherDashboard = () => {
    return (
        <Container>
            <div className={"flex flex-col justify-between p-5"}>
                <div className={"flex justify-between"}>
                    <SearchLocation/>
                    <button>foavorites</button>
                </div>
                <div>
                    <WeatherData/>
                </div>
                <div>
                    Charts
                </div>
            </div>
        </Container>
    );
};

export default WeatherDashboard;
