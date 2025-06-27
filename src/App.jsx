import './App.css'
import { WeatherProvider } from './contex/WeatherContex'

function App() {

  return (
    <>
      <WeatherProvider>
        <div className='max-w-md mx-auto mt-10 text-center'>
          <h1 className='text-2xl font-bold mb-4'>Weather App</h1>
        </div>
      </WeatherProvider>
    </>
  )
}

export default App
