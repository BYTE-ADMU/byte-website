// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

// Styles
import "../../styles/global.css"

// Assets
    // bluehbg = blue 3H background
import bluehbg from '../../assets/about/bluehbg.png'
import yellowhbg from '../../assets/about/yellowhbg.png'
import redhbg from '../../assets/about/redhbg.png'
import purpleubg from '../../assets/about/purpleubg.png'
    // bluehbitbot = design icon in front
import bluehbitbot from '../../assets/about/bluehbitbot.png'
import yellowhbitbot from '../../assets/about/yellowhbitbot.png'
import redhbitbot from '../../assets/about/redhbitbot.png'
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

SwiperCore.use([Autoplay])

const corethrustsdata = [
    {
        name: "Hacker",
        role: "coding",
        description: "Inclusive home organization to its members",
        image1: bluehbg,
        image2: bluehbitbot,
        color: "blue"
    },
    {
        name: "Hustler",
        role: "hustle mode",
        description: "Inclusive home organization to its members",
        image1: yellowhbg,
        image2: yellowhbitbot,
        color: "red"
    },
    {
        name: "Hipster",
        role: "design lord",
        description: "Inclusive home organization to its members",
        image1: redhbg,
        image2: redhbitbot,
        color: "yellow"
    },
    {
        name: "Unicorn",
        role: "hacker • hipster • hustler",
        description: "Inclusive home organization to its members",
        image1: purpleubg,
        color: "purple"
    },
]

const CoreThrusts = ({ }) => {

    return (
        <div className="
            w-full h-full 
            flex flex-col content-center items-center">
            <h1 className="w-full text-center sm:text-left sm:px-20 font-sans sm:text-4xl font-bold text-gray-darkest">
                Core Thrusts
            </h1>
            {
                corethrustsdata.map((data) => (
                    <div>hi {data.name}
                    </div>
                ))
            }
            <div className="
            w-full h-full"
            src={bluehbg}
            >
                <div className="flex flex-col">
                    <img src={bluehbitbot} />
                    <h3 className="">
                        Hacker
                    </h3>
                    <p>role 1 • role 2 • role 2</p>
                    <p>Inclusive home organization to its members</p>
                </div>
            </div>
        </div>
    )
}

export default CoreThrusts
