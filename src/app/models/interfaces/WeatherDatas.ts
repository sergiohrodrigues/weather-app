export interface WeatherDatas {
  coord: {
    long: number,
    lat: number
  },

  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],

  base: string,

  main: {
    temp: number,
    feels_like: string,
    temp_min: string,
    temp_max: string,
    pressure: string,
    humidity: string
  },

  visibility: string,

  wind: {
    speed: number,
    deg: number
  }

  clouds: {
    all: number
  }

  dt: number

  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  }

  timezone: number

  id: number

  name: string

  cod: number
}
