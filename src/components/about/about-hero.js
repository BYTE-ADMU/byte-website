// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from 'react'
import '../../styles/global.css'

// Assets
import AboutHeroImg from '../../assets/about/about-hero-image.png'
import AboutBg from '../../assets/about/about-bg.png'
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const AboutHero = () => {
    return (
        <div className="w-full h-full bg-cover lg: h-screen flex flex-col justify-center content-center items-center bg-no-repeat bg-center bg-contain">
            <div className="absolute w-full flex justify-center items-center z-0 px-10 mb-40 sm:mt-10 mb-0 md:mb-0">
              <img className="relative w-full h-screen left-0" src={AboutBg} />
            </div>
          <div className="z-10 md: w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="w-3/4 pb-10 md:w-auto px-0">
              <img 
              src={AboutHeroImg}
              alt="Projects Hero Image"
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
