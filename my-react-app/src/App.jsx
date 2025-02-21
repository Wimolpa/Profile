import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme.jsx';
import Skills from './components/skills';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe />
      <div className='pb-10'>
        <p class="text-3xl text-blue-500 font-bold">--- Skills ---</p>
      </div>
      <div className="w-full px-4">
        <Skills />
      </div>
    </>
  )
}

export default App
