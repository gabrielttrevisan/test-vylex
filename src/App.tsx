import { useState } from 'react'
import './App.css'
import { Brazil } from './components/brazil'
import { SelectedState, SelectedStateContext } from './contexts/state'
import { BrazilianIso31662Code } from './components/state'

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
      </SelectedStateContext.Provider>
    </div>
  )
}

export default App
