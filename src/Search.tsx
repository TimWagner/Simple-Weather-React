import React from 'react'
import {FaArrowRight } from 'react-icons/fa';

type Props = {}

const Search = (props: Props) => {
  return (
    <form className="search">
        <div className="search__field">
            <input className="search__input" type="text" placeholder="Search for a city ..." />
            <button className="search__submit" type="submit">{<FaArrowRight />}</button>
        </div>
        <button className="search__unit">°C</button>
    </form>
  )
}

export default Search;