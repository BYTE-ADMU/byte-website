import React from 'react'
import '../styles/global.css'

import ProjectsHeroImg from '../assets/projects/projects-hero-image.png'
import ProjectsHeroBgRight from '../assets/projects/projects-hero-bg-right.png'
import ProjectsHeroBgLeft from '../assets/projects/projects-hero-bg-left.png'

const ProjectsHero = () => {
    return (
        <div className="w-full h-full bg-cover lg: h-screen flex flex-col justify-center content-center items-center bg-no-repeat bg-center bg-contain">
            <div className="absolute w-full flex justify-between items-center z-0 px-10 mb-40 sm:mt-10 mb-0 md:mb-0 lg:mt-24">
              <img className="relative w-2/5 h-auto left-0" src={ProjectsHeroBgLeft} />
              <img className="relative w-2/5 h-auto right-0" src={ProjectsHeroBgRight} />
            </div>
          <div className="z-10 md: w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="w-3/4 md:w-auto px-0">
              <img 
              src={ProjectsHeroImg}
              alt="Projects Hero Image"
              />
            </div>
            <h2 class="text-4xl pt-2 lg:pt-6">What we do</h2>
            <div className="flex flex-col md:items-center justify-center w-full">
                <p className="text-center px-11 sm:px-5">
                BYTE gives its members the opportunity to be at the forefront through the involvement in various projects
                </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectsHero
