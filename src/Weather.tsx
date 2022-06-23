import React from 'react'

type Props = {
    weather: string,
    weatherIconId: string,
}

const Weather = (props: Props) => {
  return (
    <div className='weather'>
        <img className='weather__icon' src={props.weatherIconId} alt={props.weather + ' icon'} />
        <div className='weather__text'>{props.weather}</div>
    </div>
  )
}

export default Weather;