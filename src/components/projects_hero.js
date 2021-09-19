// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from 'react';
import '../styles/global.css';

// Assets
import ProjectsHeroImg from '../assets/projects/projects-hero-image.png';
import bg from "../assets/projects/hero-bg.png";
import bench from "../assets/projects/bench.png";
import cloud from "../assets/projects/cloud.png";

// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const ProjectsHero = () => {
    return (
        <div className="w-full lg:h-screen h-3/4 bg-cover lg: h-screen flex flex-col justify-center content-center items-center bg-no-repeat bg-center lg:bg-contain bg-cover"
          style={{
            backgroundImage: `url(${bg})`
          }}
        >
            {/* <div className="absolute w-full flex justify-between items-center z-0 px-10 mb-40 sm:mt-10 mb-0 md:mb-0 lg:mt-24">
              <img className="relative w-2/5 h-auto left-0" src={ProjectsHeroBgLeft} />
              <img className="relative w-2/5 h-auto right-0" src={ProjectsHeroBgRight} />
            </div> */}
          <div className="z-10 md: w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="w-3/4 pb-10 md:w-auto px-0 relative">
              <div className="w-full h-64 relative flex justify-center items-center content-center overflow-hidden rounded-2xl z-10">
                <img className="w-auto h-full transform duration-300 ease-in-out transform hover:scale-105 z-10 relative"
                  src={ProjectsHeroImg}
                  alt="Projects Hero Image"
                />
              </div>
              <img className="absolute absolute -bottom-32 -left-60 lg:block hidden z-20"
                src={bench}
                alt="BYTE Tables"
              />
              <img className="absolute absolute -top-20 -right-40 lg:block hidden z-20"
                src={cloud}
                alt="Bitbot in the Clouds"
              />
            </div>
            <h2 class="text-4xl pt-2 lg:pt-6 medium py-6">What we do</h2>
            <div className="flex flex-col md:items-center justify-center w-full">
                <p className="text-center px-11 sm:px-5">
                BYTE gives its members the opportunity to be at the forefront through the involvement in various projects
                </p>
            </div>
          </div>
        </div>
    )
}
// END: TEMPLATE = = = = = = = = = = = = = = = = = = = =

export default ProjectsHero
