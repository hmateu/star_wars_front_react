import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Common/Header/Header'
import { Body } from './Pages/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
