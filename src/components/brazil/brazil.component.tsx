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
      viewBox='0 0 612.51611 639.04297'
    >
      {Array.from(StateInfoMap.keys()).map((key) => (
        <State code={key} key={key} />
      ))}
    </svg>
  )
})
