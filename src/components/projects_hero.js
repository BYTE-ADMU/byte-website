import React from 'react'
import '../styles/global.css'

const ProjectsHero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen bg-gray-200">
          <div className="md: w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="bg-gray-600 p-16 w-1/5"></div>
            <h2 class="text-4xl pt-12">What we do</h2>
            <div className="flex flex-col md:items-center justify-center w-full">
                <p className="text-center p-0 m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeratione, repudiandae nesciunt minima exercitationem porro earumlabore beatae molestiae dolor voluptates ad excepturi inciduntipsum cupiditate, in dicta iure officia?
                </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectsHero
