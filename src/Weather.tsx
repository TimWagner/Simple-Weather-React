import React from 'react'

type Props = {
    weather: string,
    weatherIconId: string,
}

const Weather = (props: Props) => {
  return (
    <div className='weather'>
        <img className='weather__icon' src={props.weatherIconId} alt={props.weather + ' icon'} />
        <p className='weather__text'>{props.weather}</p>
    </div>
  )
}

export default Weather;