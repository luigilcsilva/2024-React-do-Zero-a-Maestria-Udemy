import { useState } from 'react'
import reactLogo from './assets/react.svg'
import City from './assets/city.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem"/>
        </div>
        {/* Imagem em assets */}
        <div>
          <img src={City} alt="Cidade"/>
        </div>
      </div>
      <ManageData />
    </>
  )
}

export default App
