import React, { useContext } from 'react'
import { CityContext } from '../context/CityContext'

const Weather = () => {
  const { city } = useContext(CityContext);

  return (
    <div>Weather for { city }</div>
  )
}

export default Weather