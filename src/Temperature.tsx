import React from 'react'

type Props = {
    temp: number,
    feelsLikeTemp: number,
    city: string,
}

const Temperature = (props: Props) => {
  return (
    <div className='temp-box'>
        <p className='temp-box__city'>{props.city}</p>
        <p className='temp-box__temp'>{props.temp.toString() + '°'}</p>
        <p className='temp-box__feelslike'>feels like {props.feelsLikeTemp.toString()}</p>
    </div>
  )
};

export default Temperature;