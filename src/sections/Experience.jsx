import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/*Section header*/}
        <div className='text-center mx-auto max-w-3xl mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
              My 
                <span className='font-serif italic font-normal text-white'>
                {" "}
                Experiences
                </span>
            </h2>
        </div>

        {/*Exps */}
        <div className='grid md:grid-cols-2 gap-12 animate-fade-in animation-delay-200'>
          <div className=''>
              <div className='hidden md:block absolute left-1/2 -ml-0.5 w-0.5  h-screen bg-gray-800'></div>
              <div className='space-y-4 glass rounded-2xl p-2 text-left'>
            <h2 className='text-secondary-foreground  text-xl leading-tight py-2 glow-text'>
            ALSTOM Hungary Kft. - Production Planner
            </h2>
            <span className='text-sm text-muted-foreground flex flex-wrap'>
              2023-2025
            </span>
            <p>
              {/*▪ Vevői igények és gyártási ciklusok ütemezése SAP-ban, a gyártáshoz szükséges anyagok időzített biztosítása és adatvizualizáció.*/}
              ▪ Scheduling customer requirements and production cycles in SAP, ensuring the timely availability of materials required for production and data visualization.
            </p>
            <p>
            {/*▪ Manuális munkafolyamatok kiváltása Excel VBA makrók fejlesztésével, növelve a hatékonyságot. */}
              ▪ Replacing manual workflows through the development of Excel VBA macros, increasing efficiency.
            </p>
            <p>
            {/*▪ SAP GSI ERP bevezetésének támogatása, tesztelési folyamatok koordinálása és hibajavítás nemzetközi csapatokkal. */}
              ▪ Supporting the implementation of SAP GSI ERP, coordinating testing processes and bug fixing with international teams.
            </p>
          </div>
          </div>

          <div className='space-y-4 glass rounded-2xl p-2 text-left mt-6 md:mt-64'>
            <h2 className='text-secondary-foreground text-xl leading-tight py-2 glow-text'>
              Internship - ALSTOM Hungary Kft.
            </h2>
            <span className='text-sm text-muted-foreground flex flex-wrap'>
            2022
            </span>
            <p>
            {/*▪ Részvétel egy web-alapú, PHP/MySQL hátterű QR-kódos rendszer fejlesztésében és tesztelésében. User Interface és adatbázis-tervek készítése. */}
              ▪ Participation in the development and testing of a web-based, PHP/MySQL backend QR code system. Preparation of User Interface and database designs.
            </p>
            <p>
            {/*▪ A Logisztikai osztály által használt Andon szoftver tesztelése, hibajegyek kezelése és közvetlen együttműködés a fejlesztőkkel. */}
              ▪ Testing the Andon software used by the logistics department, handling bug reports, and direct collaboration with developers.
            </p>
            <p>
            {/* ▪ Raspberry Pi munkaállomások konfigurálása, hálózati integrációja és operációs rendszerek telepítése. */}
             ▪ Configuration of Raspberry Pi workstations, network integration, and installation of operating systems.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience