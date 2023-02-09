import { FunctionComponent, useEffect, useMemo } from 'react'
import { StateProps } from './state.interface'
import { useStateInfo } from './state.hooks'
import { StatePath } from './state.styles'
import { useSelectedState } from '../../contexts/state'

export const State: FunctionComponent<StateProps> = (props) => {
  const info = useMemo(() => useStateInfo(props.code), [props.code])
  const selectedState = useSelectedState()

  return (
    <StatePath
      title={info.name}
      d={info.path}
      onClick={() => selectedState!.select(props.code)}
    />
  )
}
