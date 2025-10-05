import React, { useState } from 'react'


const SearchBar = () => {
    const[city , setCity] = useState("")
    const handleOnChange=(e)=>{
        setCity(e.target.value)
        console.log(e.target.value)
    }
    const handleClick=()=>{
        console.log(city)
    }
    
  return (
    <div>
        <input type="text"  placeholder='search a city name' onChange={handleOnChange} />
        <button onClick={handleClick} >Submit</button>
    </div>
  )
}

export default SearchBar
