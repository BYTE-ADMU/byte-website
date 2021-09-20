// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React, { useState } from "react"
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

// Swiper
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "swiper/css"
import "swiper/css/pagination"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

SwiperCore.use([Pagination])
SwiperCore.use([Autoplay])

const corethrustsdata = [
    {
        name: "Hacker",
        role: "coding",
        description: "Inclusive home organization to its members",
        bg: bluehbg,
        image1: bluehbitbot,
        color: "blue"
    },
    {
        name: "Hustler",
        role: "hustle mode",
        description: "Inclusive home organization to its members",
        bg: yellowhbg,
        image1: yellowhbitbot,
        color: "yellow"
    },
    {
        name: "Hipster",
        role: "design lord",
        description: "Inclusive home organization to its members",
        bg: redhbg,
        image1: redhbitbot,
        color: "red"
    },
    {
        name: "Unicorn",
        role: "hacker • hipster • hustler",
        description: "Inclusive home organization to its members",
        bg: purpleubg,
        color: "purple"
    },
]

const CoreThrusts = ( ) => {
    const [selected] = useState(corethrustsdata[0]);

    return (
        <div className="
            w-full h-full py-3
            flex flex-col content-center items-center">
            <h1 className="w-full text-center pb-1 sm:text-left sm:px-20 font-sans sm:text-4xl font-bold text-gray-darkest">
                Core Thrusts
            </h1>
            
            {/* START: SWIPER */}
            <Swiper
                spaceBetween={80}
                pagination={{
                clickable: true,
                }}
                loop={true}
                autoplay={false}
                cssMode={true}
                className="mySwiper"
            >
                {
                    corethrustsdata && corethrustsdata
                    ?
                        corethrustsdata.map((value) => (
                            <SwiperSlide key={selected.value}>
                                <div 
                                    className="w-full h-full pt-10 bg-white flex justify-start items-center content-center
                                    bg-cover bg-white-background bg-no-repeat md:bg-cover bg-contain md:bg-center
                                    "
                                    style={{ backgroundImage: `${selected.bg}`}}>
                                    <div className="flex flex-col justify-center content-center items-center">
                                        <img src={selected.image1} className="h-16 w-auto z-1 absolute bottom-4 left-1/2" />
                                        <h2 className={`text-2xl bold text-${selected.color}-primary w-full text-center`}>
                                            {selected.name}
                                        </h2>
                                        <p className="pb-1 pt-2 small">{selected.role}</p>
                                        <p className="w-4/5 text-center">{selected.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        ))
                        :
                        <Loader
                            type="MutatingDots"
                            color="#F84A5E"
                            height={80}
                            width={80}
                            timeout={3000} // 3 secs
                        />
                }   
            </Swiper>            
        </div>
    )
}

export default CoreThrusts
