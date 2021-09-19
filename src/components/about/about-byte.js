import React, { useEffect, useState } from "react"
import Button from '../button'

import bg from "../../assets/about/about-aims-bg.png"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const about = [
    {
        name: "Vision",
        text: "living in this big blue world, with my head in outer space, i know i'll be a-o a-ok!~~",
        color:"#F84A5E",
        secondaryColor:"#57CEFE"
    },
    {
        name: "Mission",
        text: "good morning",
        color:"#F84A5E",
        secondaryColor:"#57CEFE"
    }
]
const AboutByte = ({ data }) => {
    const [selected, isSelected] = useState(data && data ? data[0].node : null);

    return (
        <div className={`
            2xl:w-full h-max 2xl:p-32 relative
            lg:px-4 md:py-10 md:py-8 py-16 px-4 w-full
            flex "justify-between" : "justify-center"} content-center items-center
            xl:flex-row flex-col
            rounded-lg bg-white bg-no-repeat xl:bg-125% md:bg-cover xl:bg-center sm:bg-right-top sm:bg-cover bg-contain bg-bottom
            `} style={{
            backgroundImage: `url(${bg})`
        }}>
            <h1 className="w-full text-center sm:text-left sm:px-20 font-sans sm:text-4xl font-bold text-gray-darkest">
                What BYTE stands for...
            </h1>
            {
                    about && about
                    ?
                        // map through all of the projects
                        // for project in data:
                        about.map((about) => (
                            <Button 
                                name={about.name} // if selected, make primary button. else, secondary 
                                text={about.text} // label of the button = name of the project
                                color={about.color} // color of the button = located in Strapi backend
                                onClick={() => isSelected(about.node)} // onClick function to change the selected project
                                className="lg:mx-2 sm:mx-1 sm:my-0 my-1" />
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
            <div className="w-full h-max flex flex-col content-center items-center">
                {/* buttons */}
                <div className="w-full h-full flex flex-row content-center items-center sm:flex-row">
                    <p className="text-center w-64 md:px-12 md:w-3/5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="w-0 sm:w-64 h-32 bg-gray-darkest rounded-2xl"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutByte;