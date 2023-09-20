import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { GetServerSideProps } from "next"
import { useState } from "react"
import axios from 'axios'




//const roboto = Roboto({weight: '400', style: 'normal' , subsets: ['latin']})


export default function WeatherCard() {
  const [city, setCity] = useState('')
  const [city1, setCity1] = useState('')
  const [temp, setTemp] = useState('')
  const [weatherData, setweatherData] = useState('')
  const [wind, setWind] = useState('')
  const [hum, setHum] = useState('')
  const [weatherImage, setWeatherImage] = useState('');


  function hydrateImage(x: string[]) {
    //@ts-ignore
    const imgUrl = `${process.env.NEXT_WEATHER_IMG_URL}${x[0].icon}@2x.png`
    setWeatherImage(imgUrl)
   

  }


  async function hydrateElements() {
    try {
      const res = await axios.get(`${process.env.NEXT_WEATHER_URL}q=${city}&apiKey=${process.env.NEXT_WEATHER_KEY}&units=metric`);
      setCity1(res.data.name)
      setweatherData(res.data.weather)
      hydrateImage(res.data.weather)
      setTemp(res.data.main.temp);
      setWind(res.data.wind.speed);
      setHum(res.data.main.humidity);


    } catch (error) {
      // Handle errors here
      console.error("Error fetching weather data:", error);
    }
  }
  async function handleInputKeyPress(e: any) {
    if (e.key === 'Enter') {
      await hydrateElements();
    }
  }


  return <div>
    <div className="">
      <Card className="mt-20 mx-auto w-3/5 md:w-2/5 block md:flex md:flex-col shadow-xl">
        <CardHeader className="flex flex-col items-center ">
          <div className="flex items-center w-full md:w-3/5">
            <Input placeholder="Enter City Name" className="text-center shadow-lg"
              onKeyDown={handleInputKeyPress}
              onChange={(e) => { setCity(e.target.value) }}>
            </Input>
            <button className="ml-4 p-2 bg-black rounded-xl text-white
        hover:bg-slate-300 hover:text-black transition duration-400"
              onClick={hydrateElements}
            >Search</button>
          </div>

          <img src={weatherImage} alt="Name" className="w-20 h-20 shadow-sm" />
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl">{city1}</h1>
            <h1 className="text-5xl font-[600]">{temp} °C</h1>
          </div>

          <div className="flex w-full justify-between py-6 md:px-7">
            <div className="flex flex-col items-center ">
              <span>
                <svg height="30" width="30" viewBox="0 0 32 32" className="fill-current">
                  <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                  <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z">
                  </path></svg>
              </span>
              <h1 className="text-2xl font-medium">Wind speed:</h1> <span className="text-xl">{wind} km/h</span>
            </div>
            <div className="flex flex-col items-center">
              <span>
                <svg height="30" width="30" viewBox="0 0 32 32" className="fill-current">
                  <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                  <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z">
                  </path></svg>
              </span>
              <h1 className="text-2xl font-medium">Humidity: </h1> <span>{hum} %</span>

            </div>

          </div>
        </CardHeader>
      </Card>
    </div>
  </div>
}




