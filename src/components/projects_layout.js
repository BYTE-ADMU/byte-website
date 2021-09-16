import React from 'react'
import '../styles/global.css'

import ProjectsLayoutBg from '../assets/projects/projects-layout-bg.png'


const ProjectsLayout = () => {
    return (
        <div className="w-full h-full 2xl:p-48 lg:p-24 md:p-8 p-4 flex flex-col justify-center content-center items-center bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${ProjectsLayoutBg})`
          }}
        >
          <div className="h-full w-full flex flex-col sm:flex sm:flex-row items-center justify-center mb-50 md:mb-20">
            <div className="md:w-2/5 h-auto flex flex-row sm:flex sm:flex-col justify-center items-end content-center relative xl:py-32 lg:py-24 md:py-16 py-8">
              <img className="p-0 m-1 sm:m-0 xl:w-96 xl:h-60 lg:w-64 lg:h-40 w-40 h-24 rounded-2xl sm:absolute sm:top-0 sm:left-0 z-10 bg-black-primary" />
              <img className="p-0 m-1 sm:m-0 xl:w-96 xl:h-60 lg:w-64 lg:h-40 w-40 h-24 rounded-2xl z-20 bg-black-primary" />
            </div>
            
            <div className="h-full w-full px-5 sm:w-3/5 px-0 md:px-10 md:m-0">
              <h2 className="text-orange-primary">Startup Summit</h2>
              <h4 className="text-orange-secondary">BYTE 4 President</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectsLayout