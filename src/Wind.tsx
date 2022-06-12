import React from 'react'
import { FaWind } from 'react-icons/fa'

type Props = {
    windSpeed: number,
    unit: string,
}

const Wind = (props: Props) => {
  return (
    <div className="wind">
        <p>
            <FaWind className="wind__icon" />{props.windSpeed.toString()} {props.unit.toString()}
        </p>
    </div>
  )
}

export default Wind;