import { IStateInfo } from '../../components/state'

export class OpenMeteoService {
  async getWeather(state: IStateInfo) {
    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${state.latitude}&longitude=${state.longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America/Sao_Paulo`
    )

    return data
  }
}
