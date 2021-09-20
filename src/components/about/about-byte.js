import React, { useEffect, useState } from "react"
import Button from '../button'

import bg from "../../assets/about/about-aims-bg.png"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// GIFS
import vision from "../../assets/gif/vision.gif"
import mission from "../../assets/gif/mission.gif"
import advocacy from "../../assets/gif/advocacy.gif"
import empowerment from "../../assets/gif/empowerment.gif"


const about = [
    {
        name: "Vision",
        text: "BYTE envisions itself to be a technological and entrepreneurial network spearheaded by existing and potential catalysts for change.",
        color: "purple",
        gif: vision
    },
    {
        name: "Mission",
        text: "BYTE cultivates young entrepreneurs who create innovative and technological solutions that strive for nation-building.",
        color:"green",
        gif: mission
    },
    {
        name: "Advocacy",
        text: "BYTE aims to promote the importance of tech entrepreneurship to the youth in today’s age. We believe in the importance of cultivating tech, innovation and entrepreneurial skills to create solutions that make a positive impact.",
        color: "blue",
        gif: advocacy
    },
    {
        name: "Empowerment",
        text: "At BYTE, we believe in equipping each one of our members with the skills and experience they need to build a successful startup and providing an inclusive environment for their growth. We are committed to making it happen by enabling opportunitieis through our projects and intiatives.",
        color:"yellow",
        gif: empowerment
    }
]
const AboutByte = () => {
    const [selected, isSelected] = useState(about[0]);

    return (
        <div className={`
            2xl:w-full h-max relative
            2xl:px-64 xl:px-32 md:px-16 sm:px-8 px-4 2xl:py-32 py-16 w-full
            flex flex-col justify-center content-center items-start
            rounded-lg bg-gray-background bg-no-repeat md:bg-cover bg-contain md:bg-center bg-top lg:bg-fixed bg-scroll
            `} style={{ backgroundImage: `url(${bg})`}}
            id="values"
        >
            <h1 className="w-full text-center sm:text-left font-sans sm:text-4xl font-bold text-gray-darkest">
                What BYTE stands for...
            </h1>

            {/* START: BUTTONS */}
            <div className="w-full flex justify-start items-center content-center">
                <div className="lg:w-full w-1/2 h-auto flex lg:flex-row flex-col lg:justify-start justify-center lg:items-center items-start content-center lg:pt-12 py-4">
                    {
                        about && about
                        ?
                            about.map((value) => (
                                <Button
                                    type={selected.name == value.name ? "primary" : "secondary"}
                                    label={value.name}
                                    color={value.color}
                                    onClick={() => isSelected(value)} // onClick function to change the selected project
                                    className="lg:mr-4 mr-2 ml-4 sm:ml-0 lg:my-0 my-2" />
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
                <img src={selected.gif} className="md:w-1/3 w-1/2 h-auto lg:hidden block" />
            </div>
            {/* END: BUTTONS */}

            {/* START: CONTENT */}
            <div className="w-full h-auto flex content-center items-start py-4">
                <div className="lg:w-1/2 w-full h-auto">
                    <p className="w-full lg:text-left text-center w-full">{selected.text}</p>
                </div>
                <div className="lg:w-1/2 h-60 lg:flex hidden justify-center items-start content-center">
                    <img src={selected.gif} className="xl:h-full md:h-1/2 h-full w-auto" />
                </div>
            </div>
            {/* END: CONTENT */}
        </div>
    )
}

export default AboutByte;