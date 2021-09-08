import React from 'react'
import '../styles/global.css'

const ProjectsLayout = () => {
    return (
        <div className="h-full w-full flex md:flex-row flex-col items-center mb-50 md:mb-20">
          <div className="w-full md:w-1/2 flex-col justify-between">
            <div className="bg-gray-200 h-full w-auto flex items-center justify-center">
                <h2>img</h2>
            </div>
            <div className="bg-gray-200 h-3/5 w-auto flex items-center justify-center">
                <h2>img</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-col items-start justify-start flex-col mt-10 md:m-0">
            <h2>Startup Summit</h2>
            <h4>BYTE 4 President</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
    )
}

export default ProjectsLayout
