import React, { useEffect, useState } from "react"
// import { StaticQuery, graphql } from 'gatsby';
import { Link } from "gatsby"
import axios from "axios";
import Button from './button'

import project_bg from "../assets/img/landing/projects.png"
import squigglyOne from "../assets/img/landing/squiggly_1.png"
import squigglyTwo from "../assets/img/landing/squiggly_2.png"
import cloud from "../assets/img/landing/cloud.png"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// const projectsInfo = {
//     flagship: [
//         {
//             id: 1,
//             name: "Startup Summit",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
//             logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
//             image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
//             image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
//             color: "red"
//         },
//         {
//             id: 2,
//             name: "Reboot",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
//             logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
//             image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
//             image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
//             color: "purple"
//         },
//         {
//             id: 3,
//             name: "ITECH",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
//             logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
//             image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
//             image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
//             color: "blue"
//         },
//         {
//             id: 4,
//             name: "FrostBYTE",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
//             logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
//             image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
//             image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
//             color: "green"
//         },
//         {
//             id: 5,
//             name: "BYTE Camp",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
//             logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
//             image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
//             image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
//             color: "yellow"
//         }
//     ]
// }

const LandingProjects = ({ data }) => {
    // Get first project as default
    const projects = data;
    const [selected, isSelected] = useState(data && data ? data[0].node : null);
    
    return (
        <div className="
            w-full h-max
            flex flex-col justify-center content-center items-center
            bg-contain bg-no-repeat bg-top
        ">
            <div className="
                w-full h-max pb-16
                flex sm:flex-row flex-col 
                justify-center content-center items-center
            ">
                {
                    projects && projects
                    ?
                        data.map((project) => (
                            <Button type={selected && selected.id == project.node.id ? "primary" : "secondary"} label={project.node.name} color={project.node.color} onClick={() => isSelected(project.node)} className="lg:mx-2 sm:mx-1 sm:my-0 my-1" />
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
            <div className={`
                2xl:w-4/5 h-max 2xl:p-32 relative
                lg:px-24 md:py-32 md:py-8 py-16 px-4 w-full
                flex ${selected && selected ? "justify-between" : "justify-center"} content-center items-center
                xl:flex-row flex-col
                rounded-lg bg-white bg-no-repeat xl:bg-125% md:bg-cover xl:bg-center sm:bg-right-top sm:bg-cover bg-contain bg-bottom
                border-4 border-solid border-${selected && selected ? selected.color : "red"}-primary
            `} style={{
                backgroundImage: `url(${project_bg})`
            }}>
                {
                    selected && selected
                    ?
                        <>
                            <img className="absolute top-20 -left-32 sm:block hidden" src={squigglyOne} />
                            <div className="
                                xl:w-1/2 xl:mb-0 w-full h-max mb-8
                                flex xl:flex-col md:flex-row-reverse flex-col-reverse justify-center content-center xl:items-start items-center
                            ">
                                <div className="
                                    w-full h-max
                                    flex flex-col justify-center content-center items-center md:items-start
                                    xl:pb-4 md:px-8
                                ">
                                    <h1 className={`font-sans font-bold text-xl text-${selected && selected ? selected.color : "red"}-primary mb-2`}>{selected && selected ? selected.name : ""}</h1>
                                    <p className="xl:h-32 font-sans text-base text-white md:text-left text-center">{selected && selected ? selected.description : ""}</p>
                                </div>
                                <img src={selected && selected ? selected.logo.url : ""} className="xl:w-60 xl:h-60 md:w-40 md:h-40 md:mb-0 mb-4 w-20 h-20 rounded-full" />
                            </div>
                            <div className="
                                xl:w-1/2 md:w-full h-max relative
                                flex flex-col md:flex-row xl:justify-center md:justify-between justify-center content-center items-center
                            ">
                                <img className="
                                    w-80 h-56 relative lg:py-0 py-4
                                    xl:absolute xl:-top-48 2xl:left-12 xl:left-4
                                    transform duration-300 ease-in-out transform hover:scale-105" src={selected && selected ? selected.image_1.url : ""} />
                                <img className="
                                    w-80 h-56 relative lg:py-0 py-4
                                    xl:absolute xl:-bottom-48 2xl:right-0 xl:-right-4 md:relative xl:z-10
                                    transform duration-300 ease-in-out transform hover:scale-105" src={selected && selected ? selected.image_2.url : ""} />
                                <img className="w-200 absolute -top-64 left-72 z-20 xl:block hidden" src={cloud} />
                            </div>
                            <img className="absolute top-48 -right-40 sm:block hidden" src={squigglyTwo} />
                        </>
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
            <Button type="primary" label="Learn More" link="" className="my-16" />
        </div>
    )
}

export default LandingProjects;