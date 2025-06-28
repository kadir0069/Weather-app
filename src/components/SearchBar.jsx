import React, { Fragment, useContext, useState } from "react";
import { WeatherContext } from "../contex/WeatherContex";

const SearchBar =() => {
    const [input,setInput] = useState('')
    const {fetchWeather} = useContext(WeatherContext)

    const submitHandler = () => {
        e.preventDefault()
        if(input.trim()){
            fetchWeather(input.trim());
        }
    }
    return(
        <Fragment>
            <form className="flex items-center gap-2 w-full bgwhitee border border-blue-200 rounded-full px-4 py-2 shadow-sm focous-within:ring-2 focous-within:ring-blue-400 transition" onSubmit={submitHandler}>
                <input type="text"
                 placeholder="Search for your city"
                 value={input} 
                 onChange={(e)=>setInput(e.target.value)}
                 className="flex-grow outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400  p-3 rounded-md" />

                 <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-full transition font-mediun">
                    Search
                 </button>
            </form>
        </Fragment>
    )
}

export default SearchBar;