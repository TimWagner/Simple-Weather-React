import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

type Props = {
    minTemp: number,
    maxTemp: number,
}

const MinMax = (props: Props) => {
  return (
    <div className="min-max">
        <p className="min-max__min">
            <FaArrowDown className="min-max__icon" />{props.minTemp.toString()}
        </p>

        <p className="min-max__max">
            <FaArrowUp className="min-max__icon" />{props.maxTemp.toString()}
        </p>
    </div>
  )
}

export default MinMax;