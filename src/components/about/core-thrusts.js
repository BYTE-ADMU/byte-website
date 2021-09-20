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

// Swiper
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "swiper/css"
import "swiper/css/pagination"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

const coreThrustsData = [
    {
        name: "Hacker",
        role: "Coder • Engineer • Analyst",
        description: "Interested on the engineering side of tech startup ventures? Have a natural knack for numbers and logic? You’re most likely a HACKER! A Hacker usually coordinates the idea of your venture into a viable and usable product!",
        bg: blueBg,
        image: blueBitBot,
        color: "blue"
    },
    {
        name: "Hustler",
        role: "Businessman • Influencer • Networker",
        description: "On the verge of closing your next partnership? Or do you constantly connect with people on LinkedIn? You’re a HUSTLER! Hustlers find the most viable business opportunities for your venture and communicate your idea to have people buy into it.",
        bg: yellowBg,
        image: yellowBitbot,
        color: "yellow"
    },
    {
        name: "Hipster",
        role: "Designer • Animator • Artist",
        description: "Wanna be at the forefront designing a pleasant user experience? Or even the branding of your next launch? You’re a HIPSTER! Hipsters ideate on ways to make impactful designs within their ventures by marrying aesthetics and ease of use.",
        bg: redBg,
        image: redBitbot,
        color: "red"
    },
    {
        name: "Unicorn",
        role: "Hacker • Hipster • Hustler",
        description: "Unicorns are jacks-of-all-trades who decide they want to master all 3 H’s. It sounds appealing to become an expert at every aspect of a tech startup, but it’s not easy ― that’s why they’re nicknamed unicorns, because they aren’t common. Many students find their passion in one of the three H’s, and that’s perfectly fine, but those rare individuals that are able to balance all three can enter the business world equipped and experienced in every aspect of tech entrepreneurship.",
        bg: purpleBg,
        image: unicornImage,
        color: "purple"
    },
]

const CloseIcon = ({ onClick }) => (
    <div className="m-4 h-12 w-12 flex items-center justify-center rounded-full bg-red-primary transition duration-300 ease-in-out hover:shadow-hover cursor-pointer absolute top-0 right-0" 
        onClick={onClick}
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
        <img src={blueBlock} alt="Blue Block" className="logo-block blue-block" onClick={onBlueClick} />
        <img src={redBlock} alt="Red Block" className="logo-block red-block" onClick={onRedClick} />
        <img src={yellowBlock} alt="Yellow Block" className="logo-block yellow-block" onClick={onYellowClick} />
    </div>
)

const MobileLayout = ({ data }) => (
    <div className="w-full h-auto px-8 py-32 flex flex-col justify-center items-center content-center bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${data.bg})` }}
    >
        <img src={data.image} alt={data.name} className="w-1/2 h-auto pb-8" />
        <h2 className={`bold text-${data.color}-primary`}>{data.name}</h2>
        <p className="small pt-2 pb-4">{data.role}</p>
        <p>{data.description}</p>
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
                                <h1 className={`bold text-${selected.color}-primary pb-4`}>{selected.name}</h1>
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
