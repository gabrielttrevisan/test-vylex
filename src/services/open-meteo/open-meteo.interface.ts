export interface WeatherInfo {
  daily: {
    time: string[]
    temperature_2m_min: number[]
    temperature_2m_max: number[]
  }
}