import React from 'react'
import '../styles/global.css'

import ProjectsHeroImg from '../assets/projects/projects-hero-img.png'
import ProjectsHeroBg from '../assets/projects/projects-hero-bg.png'

const ProjectsHero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen">
          <div className="md: w-full md:w-1/2 flex flex-col items-center justify-center">
            <img className="w=full h=full px-5 absolute sm:" src={ProjectsHeroBg} />
            <div className="w-auto">
            <img 
            src={ProjectsHeroImg}
            alt="Projects Hero Image"
            />
            </div>
            <h2 class="text-4xl pt-6">What we do</h2>
            <div className="flex flex-col md:items-center justify-center w-full">
                <p className="text-center p-0 m-0">
                BYTE gives its members the opportunity to be at the forefront through the involvement in various projects
                </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectsHero
