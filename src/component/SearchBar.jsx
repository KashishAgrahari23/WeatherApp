import React, { useState } from 'react'


const SearchBar = ({onSearch}) => {
    const[city , setCity] = useState("")
    const handleOnChange=(e)=>{
        setCity(e.target.value)
        // console.log(e.target.value)
    }
    const handleClick=()=>{
        console.log(city)
        onSearch(city)
    }
    
  return (
    <div>
        <input type="text"  placeholder='search a city name' onChange={handleOnChange} value={city}/>
        <button onClick={handleClick} >Submit</button>
    </div>
  )
}

export default SearchBar
