import React, { useEffect, useState } from 'react'
import MinMax from './MinMax';
import Temperature from './Temperature';
import Weather from './Weather';
import Wind from './Wind';

type Props = {
  coords: [number, number],
}

const WeatherWidget = (props: Props) => {

  return (
      <div className='weather-widget'>
          <Temperature temp={23} feelsLikeTemp={22} city={"Mainz"} />

          <Weather weather={'clear sky'} weatherIconId={'http://openweathermap.org/img/wn/01d@2x.png'} />

          <div className="details">
            <MinMax minTemp={22} maxTemp={25} />

            <Wind windSpeed={16} unit={"km/h"} />
          </div>
      </div>
  )
}

export default WeatherWidget;