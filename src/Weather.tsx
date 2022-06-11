import React, { useEffect, useState } from 'react'

type Props = {
  temp: Number,
}

const Weather = (props: Props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [temp, setTemp] = useState<Number>();


  return (
      <div>
        <h2>{props.temp.toString()}</h2>
      </div>
  )
}

export default Weather;