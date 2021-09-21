// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from 'react'
import '../../styles/global.css'

// Assets
import AboutHeroImg from '../../assets/about/about-hero-image.png'
import AboutBg from '../../assets/about/about-bg.png'
import arrow from '../../assets/about/arrow.png'
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const AboutHero = () => {
    return (
        <div className="w-full lg:h-screen h-3/4 bg-cover lg: h-screen flex flex-col justify-center content-center items-center bg-no-repeat bg-center lg:bg-contain bg-cover"
          style={{
            backgroundImage: `url(${AboutBg})`
          }}
        >
          <div className="z-10 md: w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative w-3/4 md:w-auto pb-10 px-0">
              <div className="w-full xl:h-64 lg:h-48 h-auto relative flex justify-center items-center content-center overflow-hidden rounded-2xl">
                <img 
                  src={AboutHeroImg}
                  alt="Projects Hero"
                  className="w-full h-auto transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <img 
                src={arrow}
                alt="Arrow"
                className="absolute -bottom-8 -left-16"
              />
            </div>
            <h2 class="text-4xl pt-2 lg:pt-6 medium py-6">Who are we.</h2>
            <div className="flex flex-col md:items-center justify-center w-full">
                <p className="text-center px-11 sm:px-5">
                  We cultivate young entrepreneurs who create innovative solutions for nation-building.
                </p>
            </div>
          </div>
        </div>
    )
}
// END: TEMPLATE = = = = = = = = = = = = = = = = = = = =

export default AboutHero
