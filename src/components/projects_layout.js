import React from 'react'
import '../styles/global.css'

const ProjectsLayout = () => {
    return (
        <div className="h-full w-full p-16 flex md:flex-row items-center mb-50 md:mb-20 sm: flex flex-col">
          <div className="relative w-2/5 mx-2 p-0 h-full items-center sm: flex flex-row">
            <div className="bg-gray-200 h-32 w-52 absolute bottom-0 left-0 rounded-2xl">
                <h2>img</h2>
            </div>
            <div className="bg-gray-400 h-32 w-52 absolute top-012 right-0 rounded-2xl">
                <h2>img</h2>
            </div>
          </div>
          <div className="w-3/5 px-10 md:m-0">
            <h2>Startup Summit</h2>
            <h4>BYTE 4 President</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
    )
}

export default ProjectsLayout