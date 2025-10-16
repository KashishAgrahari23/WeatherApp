import { useState } from 'react'
import './App.css'
import SearchBar from './component/SearchBar'
import useFetch from './hooks/useFetch'

function App() {
  const [city , setCity] = useState(null)
  const API_KEy = import.meta.env.API_KEy
  const API_URL = city ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEy}&units=metric` : null

  const {data , loading , error} = useFetch(API_URL)

  const handleSearch=(searchCity) => {
    setCity(searchCity)
  }

  console.log({data, loading,error})

  return (
    <>
      <h3>Weather Info</h3>
      <SearchBar onSearch={handleSearch} />
    </>
  )
}

export default App
