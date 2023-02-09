import { useEffect, useMemo, useState } from 'react'
import { useSelectedState } from '../../contexts/state'
import {
  DailyWeatherCard,
  DrawerOverlay,
  DrawerPaper,
  StateCode,
  StateName,
} from './state-drawer.styles'
import { useStateInfo } from '../state/state.hooks'
import { OpenMeteoService } from '../../services/open-meteo'
import { WeatherInfo } from '../../services/open-meteo/open-meteo.interface'

export const StateDrawer = () => {
  const state = useSelectedState()
  const info = useStateInfo(state?.code)
  const [weather, setWeather] = useState<WeatherInfo | null>(null)

  useEffect(() => {
    if (state?.code) {
      setWeather(null)
      new OpenMeteoService()
        .getWeather(info)
        .then((response) => response.json())
        .then((value) => setWeather(value as WeatherInfo))
    }
  }, [state?.code])

  return state?.code ? (
    <DrawerOverlay onClick={() => state.select(null)}>
      <DrawerPaper>
        <StateCode>{state.code}</StateCode>

        <StateName>{info.name}</StateName>

        {weather ? (
          <>
            {weather.daily.time.map((t, i) => (
              <DailyWeatherCard key={t}>
                <div>{t.replace(/(\d{4})\-(\d{2})\-(\d{2})/i, '$3/$2/$1')}</div>
                <span>
                  <strong>Máx:</strong> {weather.daily.temperature_2m_max[i]}ºC
                </span>
                &nbsp;|&nbsp;
                <span>
                  <strong>Min:</strong> {weather.daily.temperature_2m_min[i]}ºC
                </span>
              </DailyWeatherCard>
            ))}
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </DrawerPaper>
    </DrawerOverlay>
  ) : (
    <></>
  )
}
