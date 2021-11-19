// START: DEPENDENCIES
import React from 'react'
import '../../styles/global.css'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// END: DEPENDENCIES

// START: ASSETS
// import projectsLayoutBg from "../assets/projects/projects-layout-bg.png";
import startupSummit from '../../assets/projects/startup-summit.png'
import reboot from '../../assets/projects/reboot.png'
import itech from '../../assets/projects/itech.png'
import frostbyte from '../../assets/projects/frostbyte.png'
import byteCamp from '../../assets/projects/byte-camp.png'
// END: ASSETS

// Function to get the background for the project
function getBackground(name) {
  if (name.toLowerCase() === "startup summit") {
    return startupSummit
  } else if (name.toLowerCase() === "reboot") {
    return reboot
  } else if (name.toLowerCase() === "itech") {
    return itech
  } else if (name.toLowerCase() === "frostbyte") {
    return frostbyte
  } else {
    return byteCamp
  }
}

function getColor(type, color) {
  if (type === "primary") {
    if (color === "red") {
        return `text-red-primary`
    } else if (color === "blue") {
        return `text-blue-primary`
    } else if (color === "purple") {
        return `text-purple-primary`
    } else if (color === "green") {
        return `text-green-primary`
    } else if (color === "yellow") {
        return `text-yellow-primary`
    } else {
        return `text-orange-primary`
    }
  } else {
    if (color === "red") {
      return `text-red-secondary`
    } else if (color === "blue") {
        return `text-blue-secondary`
    } else if (color === "purple") {
        return `text-purple-secondary`
    } else if (color === "green") {
        return `text-green-secondary`
    } else if (color === "yellow") {
        return `text-yellow-secondary`
    } else {
        return `text-orange-secondary`
    }
  }
}

// function getId(name) {
//   return name.replace(/\s+/g, '-').toLowerCase()
// }

// START: Project Component
const Project = ({ layout, data, bg }) => (
  <div className="lg:min-h-3/4 min-h-1/2 h-full w-full 2xl:p-48 lg:p-24 md:px-8 py-12 px-4 flex flex-col sm:flex sm:flex-row items-center justify-center md:bg-contain bg-cover bg-no-repeat bg-center"
    style={{
      backgroundImage: `url(${bg})`
    }}
  >
    {
      layout === "left"
      ?
        <>
          <div className="md:w-2/5 xl:h-96 lg:h-64 h-auto flex flex-row sm:flex sm:flex-col justify-center items-center content-center relative xl:py-32 lg:py-24 md:py-16 sm:py-8 py-4">
            <div className="mr-1 sm:mr-0 xl:w-96 xl:h-60 md:w-64 md:h-40 lg:py-0 sm:py-2 py-0 
                w-1/2 h-auto rounded-2xl lg:absolute lg:top-0 lg:left-0 z-10
                flex justify-center content-center items-center overflow-hidden"
            >
              <img className="md:w-auto md:h-full w-full h-auto rounded-2xl transform duration-300 ease-in-out transform hover:scale-105" src={data.node.image_1.url} alt={`${data.node.name}`} />
            </div>
            <div className="ml-1 sm:ml-0 xl:w-96 xl:h-60 md:w-64 md:h-40 lg:py-0 sm:py-2 py-0
                w-1/2 h-full rounded-2xl lg:absolute lg:bottom-0 lg:right-0 z-20
                flex justify-center content-center items-center overflow-hidden"
            >
              <img className="md:w-auto md:h-full w-full h-auto rounded-2xl transform duration-300 ease-in-out transform hover:scale-105" src={data.node.image_2.url} alt={`${data.node.name}`} />
            </div>
          </div>
          
          <div className="h-full w-full px-0 md:w-3/5 md:px-4 lg:px-8">
            <h2 className={`${getColor("primary", data.node.color)} bold py-2`}>{data.node.name}</h2>
            <h3 className={`${getColor("secondary", data.node.color)} medium pb-4`}>{data.node.subtitle}</h3>
            <p>{data.node.description}</p>
          </div>
        </>
      :
      <>
        <div className="h-full w-full px-0 md:w-3/5 md:px-4 lg:px-8">
          <h2 className={`${getColor("primary", data.node.color)} bold py-2`}>{data.node.name}</h2>
          <h3 className={`${getColor("secondary", data.node.color)} medium pb-4`}>{data.node.subtitle}</h3>
          <p>{data.node.description}</p>
        </div>

        <div className="md:w-2/5 xl:h-96 lg:h-64 h-auto flex flex-row sm:flex sm:flex-col justify-center items-center content-center relative xl:py-32 lg:py-24 md:py-16 sm:py-8 py-4">
          <div className="mr-1 sm:mr-0 xl:w-96 xl:h-60 md:w-64 md:h-40 lg:py-0 sm:py-2 py-0
              w-1/2 h-full rounded-2xl lg:absolute lg:top-0 lg:left-0 z-10
              flex justify-center content-center items-center overflow-hidden"
          >
            <img className="md:w-auto md:h-full w-full h-auto rounded-2xl transform duration-300 ease-in-out transform hover:scale-105" src={data.node.image_1.url} alt={`${data.node.name}`} />
          </div>
          <div className="ml-1 sm:ml-0 xl:w-96 xl:h-60 md:w-64 md:h-40 lg:py-0 sm:py-2 py-0
              w-1/2 h-full rounded-2xl lg:absolute lg:bottom-0 lg:right-0 z-20
              flex justify-center content-center items-center overflow-hidden"
          >
            <img className="md:w-auto md:h-full w-full h-auto rounded-2xl transform duration-300 ease-in-out transform hover:scale-105" src={data.node.image_2.url} alt={`${data.node.name}`} />
          </div>
        </div>
      </>
    }
  </div>
)
// END: Project Component

// START: Project Layout
const ProjectsLayout = ({ data }) => (
  <div className="w-full h-full flex flex-col justify-center content-center items-center bg-cover bg-no-repeat bg-center"
    // style={{
    //   backgroundImage: `url(${ProjectsLayoutBg})`
    // }}
    id="flagship"
  >
    {
      data && data
      ?
        data.map((project, index) => (
          <Project layout={index % 2 === 0 ? "left" : "right"} data={project} bg={getBackground(project.node.name)} 
            // id={getId(project.node.name)} 
          />
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
)
// END: Project Layout

export default ProjectsLayout;