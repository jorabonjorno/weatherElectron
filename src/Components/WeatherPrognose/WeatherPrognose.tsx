import React from "react";
import Weather from "../Weather/Weather";


import {getResponse} from "../api/api";
import {randomCity} from "../../helpers/randomCity";

const WeatherPrognose:React.FC = () => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const [weatherData, setWeatherData] = React.useState(null);

    const getWeather = async () => {
      const result = await getResponse(inputValue)
        if (result) {
            setWeatherData(result)
        } else {
            setInputValue('')
            setWeatherData(null)
        }
    }

    const random = async () => {
        const city = randomCity()
        setInputValue(city)
    }
    return (
        <div className="app">
            <div className="search">
                <input
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    placeholder='Введите название'
                    type="text" />
                <div className="btn_group">
                    <button className='btn' onClick={getWeather}>Узнать погоду</button>
                    <button className='btn' onClick={random}>Случайный город</button>
                </div>
            </div>
            {weatherData && <Weather weatherData={weatherData} />}
        </div>
    )
}

export default WeatherPrognose;
