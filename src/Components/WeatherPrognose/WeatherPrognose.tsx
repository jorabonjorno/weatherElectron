import React from "react";
import Weather from "../Weather/Weather";


import axios from "axios";

const WeatherPrognose:React.FC = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [weatherData, setWeatherData] = React.useState("");
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setInputValue(event.target.value);
    };

    const getWeather = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=be763ddd42fc95303f63d7a2495176a2`
       const response =  await axios.get(url)
        setWeatherData(response.data)
    }

    const random = async () => {
        const arr = ['Москва', 'Челябинск', 'Чикаго', 'Лондон', 'Сидней']
        const city = arr[Math.floor(Math.random() * arr.length)];
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
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button className='btn' onClick={getWeather}>Запросить</button>
                    <button className='btn' onClick={random}>Рандом сити</button>
                </div>
            </div>
            {weatherData && <Weather weatherData={weatherData} />}
        </div>
    )
}

export default WeatherPrognose;
