// General
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

// Components
import FirstComponent from './components/FirstComponent'

// Styles
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FirstComponent />
      </div>      
    </>
  )
}

export default App
