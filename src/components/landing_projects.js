import React, { useState } from "react"
import Button from './button'

import project_bg from "../assets/img/landing/projects.png"
import squigglyOne from "../assets/img/landing/squiggly_1.png"
import squigglyTwo from "../assets/img/landing/squiggly_2.png"
import cloud from "../assets/img/landing/cloud.png"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LandingProjects = ({ data }) => {
    // Get first project as default
    const projects = data;
    const [selected, isSelected] = useState(data && data ? data[0].node : null);

    // data && data means that we have data and it isn't null or undefined
    // data[0] means you get first project / auto selecting the first project as soon as data is passed
    // null meaning walang selected

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
                        // map through all of the projects
                        // for project in data:
                        data.map((project) => (
                            <Button 
                                type={selected && selected.id === project.node.id ? "primary" : "secondary"} // if selected, make primary button. else, secondary 
                                label={project.node.name} // label of the button = name of the project
                                color={project.node.color} // color of the button = located in Strapi backend
                                onClick={() => isSelected(project.node)} // onClick function to change the selected project
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
                            <img className="absolute top-20 -left-32 sm:block hidden" src={squigglyOne} alt="Squiggly Line" />
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
                                    <p className="xl:h-32 font-sans text-base text-white md:text-left text-center">{selected && selected ? selected.teaser : ""}</p>
                                </div>
                                <div className={`xl:w-60 xl:h-60 md:w-40 md:h-40 md:mb-0 mb-4 w-20 h-20 rounded-full overflow-hidden flex justify-center items-center content-center border-2 border-solid border-${selected && selected ? selected.color : "red"}-primary`}>
                                    <img src={selected && selected ? selected.logo.url : ""} className="h-full w-auto transform duration-300 ease-in-out transform hover:scale-105" alt={selected.name} />
                                </div>
                            </div>
                            <div className="
                                xl:w-1/2 md:w-full h-max relative
                                flex flex-col md:flex-row xl:justify-center md:justify-between justify-center content-center items-center
                            ">
                                <div className="w-80 h-56 relative lg:py-0 py-4 rounded-2xl 
                                    flex justify-center content-center items-center overflow-hidden 
                                    xl:absolute xl:-top-48 2xl:left-12 xl:left-4"
                                >
                                    <img className="w-auto h-full transform duration-300 ease-in-out transform hover:scale-105" src={selected && selected ? selected.image_1.url : ""} alt={`${selected.name}`} />
                                </div>
                                <div className="w-80 h-56 relative lg:py-0 py-4 rounded-2xl
                                    flex justify-center content-center items-center overflow-hidden
                                    xl:absolute xl:-bottom-48 2xl:right-0 xl:-right-4 md:relative xl:z-10"
                                >
                                    <img className="w-auto h-full transform duration-300 ease-in-out transform hover:scale-105" src={selected && selected ? selected.image_2.url : ""} alt={`${selected.name}`} />
                                </div>
                                <img className="w-200 absolute -top-64 left-72 z-20 xl:block hidden" src={cloud} alt="Cloud" />
                            </div>
                            <img className="absolute top-48 -right-40 sm:block hidden" src={squigglyTwo} alt="Squiggly Line" />
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
            <Button type="primary" label="Learn More" link="/projects" className="my-16" />
        </div>
    )
}

export default LandingProjects;