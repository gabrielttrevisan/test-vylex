import { useState } from 'react'
import { Brazil } from './components/brazil'
import { SelectedStateContext } from './contexts/state'
import { BrazilianIso31662Code } from './components/state'
import { StateDrawer } from './components/state-drawer'

const App = () => {
  const [selectedState, setSelectedState] =
    useState<BrazilianIso31662Code | null>(null)

  return (
    <div className='App'>
      <SelectedStateContext.Provider
        value={{
          code: selectedState,
          select: (code) => setSelectedState(code),
        }}
      >
        <Brazil />
        <StateDrawer />
      </SelectedStateContext.Provider>
    </div>
  )
}

export default App
