import { createContext, useContext } from 'react'
import { BrazilianIso31662Code } from '../components/state'

export interface SelectedState {
  code: BrazilianIso31662Code | null
  select: (code: BrazilianIso31662Code) => void
}

export const SelectedStateContext = createContext<SelectedState | null>(null)

export const useSelectedState = () => useContext(SelectedStateContext)
