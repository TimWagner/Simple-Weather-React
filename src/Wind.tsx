import React from 'react'
import { FaWind } from 'react-icons/fa'

type Props = {
    windSpeed: number,
    unit: string,
}

const Wind = (props: Props) => {
  return (
    <div className="wind">
      <FaWind className="wind__icon" />{props.windSpeed.toString()} {props.unit.toString()}
    </div>
  )
}

export default Wind;