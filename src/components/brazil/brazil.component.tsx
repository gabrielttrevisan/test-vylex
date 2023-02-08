import { memo } from 'react'
import { BrazilProps } from './brazil.interface'
import { State, StateInfoMap } from '../state'
import { useSelectedState } from '../../contexts/state'

export const Brazil = memo<BrazilProps>(() => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='612.51611'
      height='639.04297'
      viewBox='-74.008595 5.275696 -34.789914 -33.743888'
    >
      {Array.from(StateInfoMap.keys()).map((key) => (
        <State code={key} />
      ))}
    </svg>
  )
})
