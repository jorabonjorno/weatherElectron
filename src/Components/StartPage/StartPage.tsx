import anime from 'animejs/lib/anime.es.js';
import React, {useEffect, useState} from "react";
import WeatherPrognose from "../WeatherPrognose/WeatherPrognose";
import stars from "../../assets/stars.png";
import moon from "../../assets/moon.png";
import mountains_behind from "../../assets/mountains_behind.png";
import mountains_front from "../../assets/mountains_front.png";
import './StartPage.css';

const StartPage:React.FC = () => {
    const [state, setState] = useState(false)

    useEffect(() => {
        var animation = anime.timeline({
            autoplay: false,
        });
        animation.add({
            targets: '#btn',
            top: '1500px',
            duration: 500,
            easing: 'easeInOutSine'
        })
        animation.add({
            targets: '#stars',
            top: '0px',
            duration: 1000,
            easing: 'easeInOutSine'
        })

        animation.add({
            targets: '#mount_behind',
            bottom: '0px',
            duration: 1000,
            easing: 'easeInOutSine'
        })

        animation.add({
            targets: '#moon',
            top: '0px',
            duration: 1000,
            easing: 'easeInOutBack'
        })

        animation.add({
            targets: '#mount_front',
            bottom: '0px',
            duration: 1000,
            easing: 'easeInOutSine'
        })

        animation.add({
            targets: '#textok',
            duration: 1000,
            marginRight: 0,
            easing: 'easeInOutBack'
        })

        animation.add({
            targets: '#btn',
            top: '50%',
            duration: 1000,
            easing: 'easeInOutBack'
        })
        // @ts-ignore
        document.querySelector('#btn').onclick = animation.play()
    }, [])

    const changeHandler = () => {
        setState(true)
    }

    return (
        <>
            {!state
                ?
                <div className='start_div'>
                    <section>
                        <img src={stars} alt='stars' id='stars'/>
                        <img src={moon} alt='moon' id='moon'/>
                        <img src={mountains_behind} alt='mount_behind' id='mount_behind'/>
                        <h2 id='textok'>Welcome to the <span>Weather App</span></h2>
                        <button onClick={changeHandler} id="btn">Start</button>
                        <img src={mountains_front} alt='mount_front' id='mount_front'/>
                    </section>
                </div>
                :
                <WeatherPrognose/>
            }
        </>
    );
}

export default StartPage;
