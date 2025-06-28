import { createContext, useState } from "react";

export const WeatherContext = createContext();


export const WeatherProvider = ({children}) =>{
    const [city, setCity] = useState('')
    const [weather,setWeather] = useState(null)


    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('');

    const fetchWeather = async (cityName) =>{
        setLoading(true);
        setError('');
        setCity(cityName)
        
        try{
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5a179803e0609cb09c0637db323fabf1&units=metric')
            const data = await response.json()
            console.log("Weather Data",data)

            if(response.ok){
                setWeather(data)
            }else{
                setError(data.message ||' City not found')
            }
        } catch (error){
            setError('Network error, please try again later')
        }finally{
            setLoading(false)
        }
    }

    return(
        <WeatherContext.Provider value={{city, weather, loading, error,fetchWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}