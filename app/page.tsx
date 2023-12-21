import axios from "axios";
import SearchLocation from "@/app/components/WeatherDashboard/SearchLocation";
import WeatherDashboard from "@/app/pages/WeatherDashboard/WeatherDashboard";

export default function Home() {

    // const handleButtonClick = async () => {
    //     const response = await axios.get('/api/places', {
    //         params: {
    //             input: 'Paris'
    //         }
    //     });
    // }

    return (
        <WeatherDashboard/>
    )
}
