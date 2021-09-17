import React from 'react'
import '../styles/global.css'

import image1 from '../assets/projects/image1.png'
import image2 from '../assets/projects/image2.png'
import image3 from '../assets/projects/image3.png'
import GrowthCardsBg from '../assets/projects/growth-card-bg.png'

const growth_cards_data = [
  {
    name: "Love at First BYTE",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    name: "Online BYTE Tables",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    name: "Talks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
]



const ProjectsGrowthCards = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center content-center items-center bg-cover bg-no-repeat mb-16"
          style={{
            backgroundImage: `url(${GrowthCardsBg})`
          }}
        >
          <h2 className="text-3xl text-white-primary my-16 mx-7 text-center">We value member growth.</h2>
            <div className="w-full h-full flex flex-wrap justify-center content-center items-start lg:mt-5">
              <div className="lg:w-1/4 md:w-64 min-w-52 h-full bg-white-primary rounded-2xl mb-16 mx-7">
                <img className="p-0 m-0" src={image1} />
                <div className="p-5 min-h-56 max-h-96">
                  <h3 className="text-2xl text-blue-primary text-center m-0 p-0">Love at First BYTE</h3>
                  <p className="p-5 m-0">
                    Bit Bot found you, but its time for you to find the ONE! In this valentine’s season intiative, get the chance to meet the other members of BYTE and develop friendships or even something more! (Closer Friendships)
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-64 min-w-52 h-full bg-white-primary rounded-2xl mb-16 mx-7 lg:mx-4 md:mx-3 sm:mx-2">
                <img className="p-0 m-0" src={image2} />
                <div className="p-5 min-h-56 max-h-96">
                  <h3 className="text-2xl text-yellow-primary text-center m-0 p-0">Online BYTE Tables</h3>
                  <p className="p-5 m-0">
                  THE virtual hangout spot and hopefully your hangout spot SOON! We have intiatives from game nights, e-numans, kwentuhans and music bots! But we need you to make that come into reality :D so come join B)
                  </p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-64 min-w-52 h-full bg-white-primary rounded-2xl mb-16 mx-7">
                <img className="p-0 m-0" src={image3} />
                <div className="p-5 min-h-56 max-h-96">
                  <h3 className="text-2xl text-red-primary text-center m-0 p-0">Talks</h3>
                  <p className="p-5 m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
}

{/* <div className="w-full h-full flex flex-nowrap md:flex-nowrap items-start lg: mt-5 w-full">
<div className="lg:w-1/3 md:w-17 w-12 mx-2 my-3 w-24 bg-white">
    <img src={image1} />
    <div className="p-5">
        <h3 className="text-3xl">Love at First BYTE</h3>
        <p className="p-0 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        ratione, repudiandae nesciunt minima exercitationem porro earum
        labore beatae molestiae dolor voluptates ad excepturi incidunt
        ipsum cupiditate, in dicta iure officia?
        </p>
    </div>
  </div>
  <div className="lg:w-1/3 md:w-17 w-12 mx-2 my-3 w-24">
    <img src={image2} />
    <div className="bg-white p-5">
        <h3 className="text-3xl">BYTE Tables</h3>
        <p className="p-0 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        ratione, repudiandae nesciunt minima exercitationem porro earum
        labore beatae molestiae dolor voluptates ad excepturi incidunt
        ipsum cupiditate, in dicta iure officia?
        </p>
    </div>
  </div>
  <div className="lg:w-1/3 md:w-17 w-12 mx-2 my-3 w-24">
    <img src={image3} />
    <div className="bg-white-primary p-5">
        <h3 className="text-3xl">Talks</h3>
        <p className="p-0 m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        ratione, repudiandae nesciunt minima exercitationem porro earum
        labore beatae molestiae dolor voluptates ad excepturi incidunt
        ipsum cupiditate, in dicta iure officia?
        </p>
    </div>
  </div>
</div> */}
export default ProjectsGrowthCards
