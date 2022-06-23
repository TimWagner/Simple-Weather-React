import React, { useState } from 'react'
import {FaArrowRight } from 'react-icons/fa';

type Props = {}

const Search = (props: Props) => {

  const [unit, setUnit] = useState("celsius");

  let unitBtnText = unit === "celsius" ? "°C" : "°F";

  function handleUnitBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    unit === "celsius" ? setUnit("imperial") : setUnit("celsius");
    e.currentTarget.blur();
  }

  return (
    <form className="search">
        <div className="search__field">
            <input className="search__input" type="text" placeholder="Search for a city ..." />
            <button className="search__submit" type="submit">{<FaArrowRight />}</button>
        </div>
        <button onClick={handleUnitBtnClick} className="search__unit">{unitBtnText}</button>
    </form>
  )
}

export default Search;