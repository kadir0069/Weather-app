import './App.css'
import { WeatherProvider } from './contex/WeatherContex'
import SearchBar from "./components/SearchBar";
import WeatherDisplay from './components/WeatherDisplay';

function App() {

  return (
    <>
      <WeatherProvider>
        <div className='max-w-md mx-auto mt-10 text-center'>
          <h1 className='text-4xl font-bold mb-4'>Weather App</h1>
          <SearchBar />
          <WeatherDisplay />
        </div>
      </WeatherProvider>
    </>
  )
}

export default App
