import { useState } from 'react'
import './App.css'
import MainPage from './Page/MainPage'
import {ProviderContext} from './ContextProvider/ProviderContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProviderContext>
        <MainPage />
      </ProviderContext>
    </div>
  )
}

export default App
