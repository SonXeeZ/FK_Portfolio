import { ArrowUpRight, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    title: "Online Game Server",
    description: "Full stack appliaction running on a VPS environment.",
    tags: ["C++", "PHP", "SQL", "HMailer"],
    link: "https://flymuonline.com/",
    github: "",
  },
  {
    title: "Multiplayer Game Development",
    description: "A Multiplayer Game prototype made in Unity Engine.",
    tags: ["C#", "Unity3D", "Unity Relay", "Netcode", "Unity-Firebase"],
    link: "",
    github: "https://github.com/SonXeeZ/Szakdolgozat_Unity_TRFK",
  },
  {
    title: "CseppSite - Pastry Shop Website & Automation",
    description: "Static website made for a local business, with automated product manegement.",
    tags: ["HTML", "CSS", "JavaScript", "PowerShell"],
    link: "https://sonxeez.github.io/CseppSite/",
    github: "https://github.com/SonXeeZ/CseppSite",
  },
  {
    title: "Movie Search Engine",
    description: "Dynamic website, connected to an external API, which processes and visualizes movie datas.",
    tags: ["React", "Vite", "TMDB"],
    link: "https://sonxeez.github.io/Vite-React-Movies-Site/",
    github: "https://github.com/SonXeeZ/Vite-React-Movies-Site",
  },
]

const Projects = () => {
  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      {/*Bg Glows */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        {/*section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects 
            <span className='font-serif italic font-normal text-white'>
            {" "}
            to mention
            </span>
          </h2>
          <p className='text-muted-foreground aniamte-fade-in animation-delay-200'>
            A selection of my projects.
          </p>
        </div>

        {/*Projects Grid*/}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-strong text-lg p-4 rounded-2xl animate-fade-in space-y-4">

              <h3 className="text-lg font-bold italic text-secondary-foreground glow-text">{project.title}</h3>

              <div className="text-sm text-muted-foreground flex flex-wrap gap-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className='glass rounded-2xl px-2 '>
                    {tag}
                    {/*i < project.tags.length - 1 ? "," : ""*/}
                  </span>
                ))}
              </div>

              <p>{project.description}</p>

              <span className="flex space-x-4">
                {project.link && (
                  <a href={project.link} alt="Project Link">
                    <ArrowUpRight />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} alt="Github Link">
                    <Github />
                  </a>
                )}
              </span>
            </div>
          ))}
      </div>
        
      </div>
    </section>
  )
}

export default Projects