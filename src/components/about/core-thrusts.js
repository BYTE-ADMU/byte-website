// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React, { useState } from "react"
import Toggle from 'react-toggle'

// Styles
import "../../styles/global.css"
import "./core-thrusts.css"
import "react-toggle/style.css"

// Assets
// blocks
import blueBlock from "../../assets/about/blue-block.png"
import redBlock from "../../assets/about/red-block.png"
import yellowBlock from "../../assets/about/yellow-block.png"

// backgrounds
import bg from "../../assets/about/thrusts.png"
import blueBg from '../../assets/about/bluehbg.png'
import yellowBg from '../../assets/about/yellowhbg.png'
import redBg from '../../assets/about/redhbg.png'
import purpleBg from '../../assets/about/purpleubg.png'

// bitbots
import blueBitBot from '../../assets/about/bluehbitbot.png'
import yellowBitbot from '../../assets/about/yellowhbitbot.png'
import redBitbot from '../../assets/about/redhbitbot.png'
import unicornImage from '../../assets/about/unicorn-image.png'

// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

const coreThrustsData = [
    {
        name: "Hacker",
        role: "Coder • Engineer • Analyst",
        description: "The hacker focuses on the tech side of the business ― back-end web design, coding, and programming. Hackers can look at a tech idea and make it happen, whether it’s getting a prototype website to work or turning an app from an idea to a product.",
        bg: blueBg,
        image: blueBitBot,
        color: "blue"
    },
    {
        name: "Hustler",
        role: "Businessman • Influencer • Networker",
        description: "The hustler focuses on the core of every business: management. This is where the entrepreneurship part of ITE comes in. Like the name says, hustlers have what it takes to take a business from ideation to success, and aren’t afraid to get their hands dirty when doing it.",
        bg: yellowBg,
        image: yellowBitbot,
        color: "yellow"
    },
    {
        name: "Hipster",
        role: "Designer • Animator • Artist",
        description: "The hipster focuses on design and functionality in a business ― designing user interfaces, visual layouts, and crafting an overall intuitive user experience for their customers. Hipsters have an eye and mind for creativity and can apply it to web design, mobile design, and even the marketing aspects of a business.",
        bg: redBg,
        image: redBitbot,
        color: "red"
    },
    {
        name: "Unicorn",
        role: "Hacker • Hipster • Hustler",
        description: "Unicorns are the master of all 3 H’s. It sounds appealing to be knowledgeable at every aspect of a tech startup, but it’s not easy ― that’s why they’re nicknamed unicorns, because they aren’t common. Those rare individuals who balance all three are equipped and experienced in every aspect of tech entrepreneurship.",
        bg: purpleBg,
        image: unicornImage,
        color: "purple"
    },
]

function getColor(color) {
    if (color === "red") {
        return `text-red-primary`
    } else if (color === "blue") {
        return `text-blue-primary`
    } else if (color === "purple") {
        return `text-purple-primary`
    } else if (color === "green") {
        return `text-green-primary`
    } else if (color === "yellow") {
        return `text-yellow-primary`
    } else {
        return `text-orange-primary`
    }   
}

const CloseIcon = ({ onClick }) => (
    <div className="m-4 h-12 w-12 flex items-center justify-center rounded-full bg-red-primary transition duration-300 ease-in-out hover:shadow-hover cursor-pointer absolute top-0 right-0" 
        onClick={onClick} onKeyPress={onClick} role="presentation"
    >
      <svg
        width="35"
        height="34"
        viewBox="0 0 35 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.2474 25.3847C24.0284 26.1658 25.2947 26.1658 26.0758 25.3847C26.8568 24.6037 26.8568 23.3374 26.0758 22.5563L20.3479 16.8284L25.9336 11.2427C26.7147 10.4616 26.7147 9.19531 25.9336 8.41426C25.1526 7.63321 23.8863 7.63321 23.1052 8.41426L17.5195 14L11.9337 8.41417C11.1526 7.63313 9.88628 7.63313 9.10523 8.41417C8.32419 9.19522 8.32419 10.4616 9.10523 11.2426L14.691 16.8284L8.96307 22.5564C8.18202 23.3374 8.18202 24.6038 8.96307 25.3848C9.74412 26.1659 11.0104 26.1659 11.7915 25.3848L17.5195 19.6568L23.2474 25.3847Z"
          fill="white"
        />
      </svg>
    </div>
)

const Description = ({ title, subtitle, color, className }) => (
    <div className={`w-auto h-auto flex flex-col justify-center items-start content-center ${className}`}> 
        <h2 className={`text-${color}-primary bold`}>{title}</h2>
        <p>{subtitle}</p>
        <p>(Click the box to find out more!)</p>
    </div>
)

const Logo = ({ className, onBlueClick, onRedClick, onYellowClick }) => (
    <div className={`relative lg:flex hidden justify-center items-center content-center ${className}`}>
        <img src={blueBlock} alt="Blue Block" className="logo-block blue-block" onClick={onBlueClick} onKeyPress={onBlueClick} role="presentation" />
        <img src={redBlock} alt="Red Block" className="logo-block red-block" onClick={onRedClick} onKeyPress={onRedClick} role="presentation" />
        <img src={yellowBlock} alt="Yellow Block" className="logo-block yellow-block" onClick={onYellowClick} onKeyPress={onYellowClick} role="presentation" />
    </div>
)

const MobileLayout = ({ data }) => (
    <div className="w-full h-auto px-8 py-32 flex flex-col justify-center items-center content-center bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${data.bg})` }}
    >
        <img src={data.image} alt={data.name} className="w-1/2 h-auto pb-8" />
        <h2 className={`bold ${getColor(data.color)}`}>{data.name}</h2>
        <p className="small pt-2 pb-4">{data.role}</p>
        <p className="text-center sm:text-left">{data.description}</p>
    </div>
)

const CoreThrusts = () => {
    const [toggled, isToggled] = useState(false);
    const [selected, setSelected] = useState(null);

    function toggleHandler() {
        isToggled(!toggled);
        setSelected(selected && selected ? null : coreThrustsData[3])
    }

    return (
        <div className="
            w-full lg:h-screen h-auto py-4 2xl:px-64 xl:px-32 md:px-16 sm:px-8 px-4
            flex flex-col justify-center content-center items-center
            lg:bg-contain bg-0% bg-no-repeat bg-bottom"
            id="core-thrusts"
            style={selected && selected ? {
                backgroundImage: `url(${selected.bg})`
            } : {
                backgroundImage: `url(${bg})`
            }}
        >
            <div className="w-full h-auto flex justify-between items-center content-center">
                <h1 className="w-auto text-center sm:text-left font-sans font-bold text-gray-darkest">
                    Core Thrusts
                </h1>
                {
                    selected && !toggled
                    ?
                        <></>
                    :
                        <Toggle
                            checked={toggled}
                            icons={false}
                            onChange={() => toggleHandler()}
                            className="unicorn-toggle" 
                        />
                }
            </div>

            {/* START: DESKTOP VERSION */}
            <div className="h-2/3 w-full justify-center items-center content-center relative lg:flex hidden">
                {
                    selected && selected
                    ?
                        <div className="h-full w-full relative flex justify-between items-center content-center"  >
                            {
                                toggled && toggled
                                ?
                                    <></>
                                :
                                    <CloseIcon onClick={() => setSelected(null)} />
                            }
                            <img src={selected.image} alt={selected.name} className="w-1/3 h-auto px-16" />
                            <div className="w-2/3 h-auto flex flex-col justify-center items-start content-center px-16">
                                <h1 className={`bold ${getColor(selected.color)} pb-4`}>{selected.name}</h1>
                                <p>{selected.description}</p>
                            </div>
                        </div>
                    :
                        <>
                            <Description 
                                title="Hacker"
                                subtitle="Coder, Engineer, Analyst"
                                color="blue"
                                className="absolute xl:top-24 xl:left-24 top-16 left-0"
                            />
                            <Description 
                                title="Hustler"
                                subtitle="Businessman, Influencer, Networker"
                                color="yellow"
                                className="absolute xl:right-24 top-32 right-0"
                            />
                            
                            <Logo className="mt-24" 
                                onBlueClick={() => setSelected(coreThrustsData[0])}
                                onYellowClick={() => setSelected(coreThrustsData[1])}
                                onRedClick={() => setSelected(coreThrustsData[2])}
                            />

                            <Description 
                                title="Hipster"
                                subtitle="Designer, Animator, Artist"
                                color="red"
                                className="absolute xl:bottom-24 xl:left-24 bottom-16 left-0"
                            />
                        </>
                }
            </div>
            {/* END: DESKTOP VERSION */}

            {/* START: MOBILE/TABLET VERSION */}
            <div className="h-auto w-full flex-col justify-center items-center content-center relative lg:hidden flex">
                {
                    coreThrustsData.map((thrust) => (
                        <>
                            <MobileLayout data={thrust} />
                        </>
                    ))
                }
            </div>
            {/* END: MOBILE/TABLET VERSION */}
        </div>
    )
}

export default CoreThrusts
