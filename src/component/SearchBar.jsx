import React, { useState } from 'react'


const SearchBar = () => {
    const[city , setCity] = useState("")
    const handleClick=()=>{
        
    }
    
  return (
    <div>
        <input type="text"  placeholder='search a city name' onChange={(e)=>setCity(e.target.value)} />
        <button onClick={handleClick} >Submit</button>
    </div>
  )
}

export default SearchBar
