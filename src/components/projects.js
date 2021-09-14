import React, { useState } from "react"
import { Link } from "gatsby"
import Button from './button'

const projectsInfo = {
    flagship: [
        {
            id: 1,
            name: "Startup Summit",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094"
        },
        {
            id: 2,
            name: "Reboot",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094"
        },
        {
            id: 3,
            name: "ITECH",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094"
        },
        {
            id: 4,
            name: "FrostBYTE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094"
        },
        {
            id: 5,
            name: "BYTE Camp",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.",
            logo: "https://ik.imagekit.io/ripzjge77zz/BYTE/startup_summit_A4psKgXGj.png?updatedAt=1631382590896",
            image_1: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_uBolSO5vggN.png?updatedAt=1631382591108",
            image_2: "https://ik.imagekit.io/ripzjge77zz/BYTE/pic_2_FYy2yfAhy.png?updatedAt=1631382592094"
        }
    ]
}

const Projects = ({ }) => {
    const [selected, isSelected] = useState(projectsInfo.flagship[0])
    
    return (
        <div className="
            w-full h-max
            flex flex-col justify-center content-center items-center
        ">
            <div className="
                w-full h-max pb-16
                flex justify-center content-center items-center
            ">
                {
                    projectsInfo.flagship.map((project) => (
                        <Button type={selected.id == project.id ? "primary" : "secondary"} label={project.name} onClick={() => isSelected(project)} className="mx-2" />
                    ))
                }
            </div>
            <div className="
                w-4/5 h-max px-16 py-24
                flex justify-center content-center items-center
                bg-gray-400 rounded-lg
            ">
                <div className="
                    w-2/5 h-max
                    flex flex-col justify-center content-center items-start
                ">
                    <div className="
                        w-full h-max
                        flex flex-col justify-center content-center items-start
                    ">
                        <h1 className="font-sans font-bold text-xl text-white">{selected.name}</h1>
                        <p className="font-sans text-base text-white">{selected.description}</p>
                    </div>
                    <img src={selected.logo} className="w-60 h-60 rounded-full" />
                </div>
                <div className="
                    w-3/5 h-max relative
                    flex justify-center content-center items-center
                ">
                    <img className="
                        w-1/2 h-auto absolute -top-44 left-16
                        transform duration-300 ease-in-out transform hover:scale-105" src={selected.image_1} />
                    <img className="
                        w-1/2 h-auto absolute -bottom-44 right-16 z-10
                        transform duration-300 ease-in-out transform hover:scale-105" src={selected.image_2} />
                </div>
            </div>
        </div>
    )
}

export default Projects;