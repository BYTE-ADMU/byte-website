import React, { useState } from "react"
import { Link } from "gatsby"
import Button from './button'

import projects from "../assets/img/landing/projects.png"
import squigglyOne from "../assets/img/landing/squiggly_1.png"
import squigglyTwo from "../assets/img/landing/squiggly_2.png"
import cloud from "../assets/img/landing/cloud.png"

const projectsInfo = {
    flagship: [
        {
            id: 1,
            name: "Startup Summit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
            color: "red"
        },
        {
            id: 2,
            name: "Reboot",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
            color: "purple"
        },
        {
            id: 3,
            name: "ITECH",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
            color: "blue"
        },
        {
            id: 4,
            name: "FrostBYTE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
            color: "green"
        },
        {
            id: 5,
            name: "BYTE Camp",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094",
            color: "yellow"
        }
    ]
}

const LandingProjects = ({ }) => {
    
    // Get first project as default
    const [selected, isSelected] = useState(projectsInfo.flagship[0])
    var color = selected.color
    
    return (
        <div className="flex flex-col items-center content-center justify-center w-full bg-top bg-no-repeat bg-contain  h-max">
            <div className="flex flex-col items-center content-center justify-center w-full pb-16  h-max sm:flex-row">
                {
                    projectsInfo.flagship.map((project) => (
                        <Button type={selected.id == project.id ? "primary" : "secondary"} label={project.name} color={project.color} onClick={() => isSelected(project)} className="my-1 lg:mx-2 sm:mx-1 sm:my-0" />
                    ))
                }
            </div>
            <div className={`
                2xl:w-4/5 h-max 2xl:p-32 relative
                lg:px-24 md:py-32 py-16 px-4 w-full
                flex justify-between content-center items-center
                xl:flex-row flex-col
                rounded-lg bg-white bg-no-repeat xl:bg-125% md:bg-cover xl:bg-center sm:bg-right-top sm:bg-cover bg-contain bg-bottom
                border-4 border-solid border-${color}-primary
            `} style={{
                backgroundImage: `url(${projects})`
            }}>
                <img className="absolute hidden top-20 -left-32 sm:block" src={squigglyOne} />
                <div className="flex flex-col-reverse items-center content-center justify-center w-full  xl:w-1/2 h-max xl:flex-col md:flex-row-reverse xl:items-start">
                    <div className="flex flex-col items-center content-center justify-center w-full  h-max md:items-start xl:pb-4 md:px-8">
                        <h1 className={`font-sans font-bold text-xl text-${color}-primary mb-2`}>{selected.name}</h1>
                        <p className="font-sans text-base text-center text-white md:text-left">{selected.description}</p>
                    </div>
                    <img src={selected.logo} className="w-20 h-20 rounded-full xl:w-60 xl:h-60 md:w-40 md:h-40" />
                </div>
                <div className="relative flex flex-col items-center content-center justify-center  xl:w-1/2 md:w-full h-max md:flex-row xl:justify-center md:justify-between">
                    <img className="relative duration-300 ease-in-out transform  w-240 h-160 xl:w-320 xl:h-240 xl:absolute xl:-top-48 2xl:left-12 xl:left-4 hover:scale-105" src={selected.image_1} />
                    <img className="duration-300 ease-in-out transform  w-320 h-240 xl:absolute xl:-bottom-48 2xl:right-0 xl:-right-4 md:relative xl:z-10 hover:scale-105" src={selected.image_2} />
                    <img className="absolute z-20 hidden w-200 -top-64 left-72 xl:block" src={cloud} />
                </div>
                <img className="absolute hidden top-48 -right-40 sm:block" src={squigglyTwo} />
            </div>
            <Button type="primary" label="Learn More" link="" className="my-16" />
        </div>
    )
}

export default LandingProjects;