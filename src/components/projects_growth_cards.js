import React from 'react'
import '../styles/global.css'

const ProjectsGrowthCards = () => {
    return (
        <div className="w-full mb-32 flex flex-row items-center justify-center md: flex-wrap">
          <div className="mx-2 my-3 w-3/12">
            <div className="bg-gray-400 h-36"></div>
            <div className="bg-gray-50 p-5">
                <h3 className="text-3xl">Love at First BYTE</h3>
                <p className="p-0 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ratione, repudiandae nesciunt minima exercitationem porro earum
                labore beatae molestiae dolor voluptates ad excepturi incidunt
                ipsum cupiditate, in dicta iure officia?
                </p>
            </div>
          </div>
          <div className="mx-2 my-3 w-3/12">
            <div className="bg-gray-400 h-36"></div>
            <div className="bg-gray-50 p-5">
                <h3 className="text-3xl">BYTE Tables</h3>
                <p className="p-0 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ratione, repudiandae nesciunt minima exercitationem porro earum
                labore beatae molestiae dolor voluptates ad excepturi incidunt
                ipsum cupiditate, in dicta iure officia?
                </p>
            </div>
          </div>
          <div className="mx-2 my-3 w-3/12">
            <div className="bg-gray-400 h-36"></div>
            <div className="bg-gray-50 p-5">
                <h3 className="text-3xl">Talks</h3>
                <p className="p-0 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ratione, repudiandae nesciunt minima exercitationem porro earum
                labore beatae molestiae dolor voluptates ad excepturi incidunt
                ipsum cupiditate, in dicta iure officia?
                </p>
            </div>
          </div>
        </div>
    )
}

export default ProjectsGrowthCards
