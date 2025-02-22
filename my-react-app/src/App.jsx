import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme.jsx';
import Skills from './components/skills';
import Activities from './components/activities.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AboutMe />
      <Skills />
      <Activities />

    </>
  )
}

export default App
