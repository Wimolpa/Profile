import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme.jsx';
import Skills from './components/skills';
import Activities from './components/activities.jsx';
import Project from './components/project.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AboutMe />
      </div>
      <Skills />
      <Activities />
      <div className='pt-10'>
        <Project />
      </div>

    </>
  )
}

export default App
