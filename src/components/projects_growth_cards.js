// START: DEPENDENCIES
import React from 'react'
import '../styles/global.css'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// END: DEPENDENCIES

// START: ASSETS
import GrowthCardsBg from '../assets/projects/growth-card-bg.png'
// END: ASSETS

// START: COMING SOON CARD
const comingSoon = [
  {
    node: {
      image_1: "https://res.cloudinary.com/byteadmu/image/upload/v1631902565/obt_540c9d9b00.png",
      color: "red",
      name: "Coming Soon!",
      description: "More content will come soon. Come back later!"
    }
  }
]

// END: COMING SOON CARD

// START: Card Component
const Card = ({ project }) => (
  <div className="md:w-80 w-full h-full flex flex-col justify-center items-center content-center bg-white-primary rounded-2xl mb-16 mx-7 lg:mx-4 md:mx-3 sm:mx-2">
    <img className="w-full h-40 rounded-t-xl p-0 m-0" src={project.node.image_1.url} />
    <div className="lg:p-8 p-4 min-h-56 h-auto w-full flex flex-col justify-center items-start content-center">
      <h3 className={`text-${project.node.color ? project.node.color : "red"}-primary w-full text-center text-xl bold m-0 p-0`}>{project.node.name}</h3>
      <p className="py-4 m-0">{project.node.description}</p>
    </div>
  </div>
)
// END: Card Component

// START: Growth Cards
const ProjectsGrowthCards = ({ data }) => {
    console.log(data)
    return (
        <div className="w-full h-full flex flex-col justify-center content-center items-center bg-purple-primary xl:bg-contain bg-cover bg-no-repeat py-24"
          style={{
            backgroundImage: `url(${GrowthCardsBg})`
          }}
        >
          <h1 className="text-white-primary my-16 mx-7 text-center bold">We value member growth.</h1>
            <div className="w-full h-full flex flex-wrap justify-evenly content-center items-start xl:px-32 lg:px-8 px-4">
              {
                data && data 
                ?
                  data.length > 0
                  ?
                    data.map((project) => (
                      <Card project={project} />
                    ))
                  :
                    comingSoon.map((project) => (
                      <Card project={project} />
                    ))
                :
                  <Loader
                    type="MutatingDots"
                    color="#F84A5E"
                    secondaryColor="#57CEFE"
                    height={80}
                    width={80}
                    timeout={3000} // 3 secs
                  />
              }
            </div>
        </div>
    )
}

export default ProjectsGrowthCards
// END: Growth Cards
