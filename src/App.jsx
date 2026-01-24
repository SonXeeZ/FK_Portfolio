import React from 'react'
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Experience from "@/sections/Experience"
import Navbar from "@/layout/Navbar"
import Line from './components/Line'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <Line />
        <About />
        <Line />
        <Projects />
        <Line />
        <Experience />
      </main>
    </div>
  )
}

export default App