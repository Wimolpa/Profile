import { useState } from 'react'
import './App.css'
import AboutMe from './components/aboutme.jsx';
import Skills from './components/skills';
import Activities from './components/activities.jsx';
import Project from './components/project.jsx';
import Contact from './components/contact.jsx'


function App() {

  return (
    <>
      <div>
        <div className="h-[50vh] bg-[#406994] to-transparent">
          <div className='pt-10'>
            <AboutMe />
          </div>
        </div>
        <div className="p-3 pt-100">
          <Skills />
          <div className="max-w-screen-xl mx-auto">
            <Activities />
          </div>
          <div className="pt-10 max-w-screen-xl mx-auto">
            <Project />
          </div>
        </div>
        <Contact />
      </div>




    </>
  )
}

export default App
