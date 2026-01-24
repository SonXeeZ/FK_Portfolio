import React from 'react'
import Button from '@/components/Button';
import { ArrowRight, Download, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
    {/* BG */}
      <div className='absolute inset-0'>
        <img src="/hero-bg.jpg" alt="Hero img"
          className='w-full h-full object-cover opacity-40'
        />
      </div>
      <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'></div>
    
    {/*Dots*/}

    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(30)].map((_,i) => (
        <div 
          key = {i}
          className='absolute w-1.5 h-1.5 opacity-15' 
          style={{
            backgroundColor: "#EC4186",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
          }}
        />
      ))}      
    </div>

    {/*content*/}
    <div className='container mx-auto px-6 pt-18 pb-2 relative z-10'>
      <div className='grid lg:grid-cols-2 gap-12 items-center'>
      {/*left side */}
        <div className='space-y-8'>
          <div className='animate-fade-in'>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
              <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
              • Junior Software Engineer
            </span>
          </div>

          {/* Headline */}
          <div className='space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100'>
              crafting <span className='text-primary glow-text'> digital</span>
              <br />
              experiences with
              <br />
              
              <span className='font-serif italic font-normal text-white'>
                precision
              </span>
            </h1>

            <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
              Hi, I'm Krisztofer Földesi - a Junior Software Engineer. Here I provide some information about myself and a few of my selected projects, that I’ve been working on.
            </p>
          </div>
          {/*Ctas */}
          <div className='flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300'>
            {/*<Button size="lg">
              Contact me <ArrowRight className="w-5 h-5" />
            </Button>*/}
            <a href="/Földesi_Krisztofer_CV_E.pdf" download className="inline-flex">
              <Button size="lg" className="bg-transparent border-2 border-primary hover:bg-primary">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </a>
          </div>

          <div className='flex text-center gap-4 pt-6 animate-fade-in animation-delay-400'>
            <span className='text-lg'>Social Links: </span>
            {[
              {icon: Github, href: "#"},
            ].map((social, idx) => (
              <a key={idx} href={social.href}>
                {<social.icon />}
              </a>
            ))}
          </div>
        </div>
      {/*Right side */}
      </div>
    </div>

    </section>
  );
};

export default Hero