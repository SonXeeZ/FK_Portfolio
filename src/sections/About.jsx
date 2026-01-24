import React from 'react'
import Line from '@/components/Line'

const About = () => {
  return (
    <section id="about" className='py-16 relative overflow-hidden'>
      <div className="container mx-auto px-6 relative z-10">
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/*Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              A few words 
              <span className='font-serix italic font-normal text-white'>
                {" "}
               to get to know me.
               </span>
            </h2>

            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                Junior Software Developer with a BSc degree in Computer Science, with a strong commitment to the .NET ecosystem and various web technologies.
              </p>
              <p>
                I develop my knowledge mainly through smaller projects, as well as a long-term personal full-stack application running in a production environment.
              </p>
              <p>
                My main goal is to step out of my comfort zone and join a team where I can work on projects that help me advance to the next level as a developer.
              </p>
            </div>
          </div>
           {/*Right Column */}
        </div>
      </div>
    </section>
  )
}

export default About