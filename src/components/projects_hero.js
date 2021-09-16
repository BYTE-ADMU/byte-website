import React from 'react'
import '../styles/global.css'

import ProjectsHeroImg from '../assets/img/projects/projects-hero-img.png'
import ProjectsHeroBg from '../assets/img/projects/projects-hero-bg.png'

const ProjectsHero = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen md:flex-row">
          <div className="flex flex-col items-center justify-center w-full md: md:w-1/2">
            <img className="w=full h=full px-5 absolute sm:" src={ProjectsHeroBg} />
            <div className="w-auto">
            <img 
            src={ProjectsHeroImg}
            alt="Projects Hero Image"
            />
            </div>
            <h2 class="text-4xl pt-6">What we do</h2>
            <div className="flex flex-col justify-center w-full md:items-center">
                <p className="p-0 m-0 text-center">
                BYTE gives its members the opportunity to be at the forefront through the involvement in various projects
                </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectsHero
