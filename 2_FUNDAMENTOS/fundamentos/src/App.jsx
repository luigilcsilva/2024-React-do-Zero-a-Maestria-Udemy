// General
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

// Styles
import './App.css'

// Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
import ChallengeSolution from './components/ChallengeSolution'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/*
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
        <Challenge />
        */}
        <ChallengeSolution />
      </div>      
    </>
  )
}

export default App
