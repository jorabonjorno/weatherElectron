import * as React from "react";

interface IMyProps {
    weatherData: any,
}

const Weather:React.FC<IMyProps> = (props:{weatherData:any}) => {
    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{props.weatherData.name}</p>
                </div>
                <div className="temp">
                    {props.weatherData.main ? <h1>{props.weatherData.main.temp.toFixed() - 273}°C</h1> : null}
                </div>
                <div className="description">
                    {props.weatherData.weather ? <p>{props.weatherData.weather[0].main}</p> : null}
                </div>
            </div>

            {props.weatherData.name !== undefined &&
                <div className="bottom">
                    <div className="feels">
                        {props.weatherData.main ? <p className='bold'>{props.weatherData.main.feels_like.toFixed() - 273}°C</p> : null}
                        <p>Ощущается как</p>
                    </div>
                    <div className="humidity">
                        {props.weatherData.main ? <p className='bold'>{props.weatherData.main.humidity}%</p> : null}
                        <p>Влажность</p>
                    </div>
                    <div className="wind">
                        {props.weatherData.wind ? <p className='bold'>{(props.weatherData.wind.speed * 0.44704).toFixed()} м/c</p> : null}
                        <p>Скорость ветра</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Weather;
