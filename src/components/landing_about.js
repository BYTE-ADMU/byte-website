import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "./button";

import bg from "../assets/landing/about.png"
import valuePropOne from "../assets/landing/value_prop_1.png"
import valuePropTwo from "../assets/landing/value_prop_2.png"
import valuePropThree from "../assets/landing/value_prop_3.png"

gsap.registerPlugin(ScrollTrigger);

const DesktopValueProp = ({
    imageOne,
    imageTwo,
    imageThree,
    textOne,
    textTwo,
    textThree
}) => (
    <div className={`2xl:w-1/4 xl:w-1/2 w-full h-auto flex flex-col justify-center items-center content-center about-children py-24`}>
        <div className="w-64 h-64 flex flex-col justify-center items-center content-center relative my-8">
            <img src={imageOne} className={`w-64 h-64 my-4 value-prop-image-1 absolute`} />
            <img src={imageTwo} className={`w-48 h-48 my-4 value-prop-image-2 absolute`} />
            <img src={imageThree} className={`w-64 h-64 my-4 value-prop-image-3 absolute`} />
        </div>
        <div className="w-full h-1/3 flex flex-col justify-center items-center content-center relative">
            <p className={`w-full text-center font-sans font-normal not-italic value-prop-text-1 absolute`}>{textOne}</p>
            <p className={`w-full text-center font-sans font-normal not-italic value-prop-text-2 absolute`}>{textTwo}</p>
            <p className={`w-full text-center font-sans font-normal not-italic value-prop-text-3 absolute`}>{textThree}</p>
        </div>
    </div>
)

const MobileValueProp = ({
    image,
    text,
    className
}) => (
    <div className={`2xl:w-1/4 xl:w-1/2 w-full h-auto flex flex-col justify-center items-center content-center about-children ${className}`}>
        <img src={image} className="w-48 h-48 my-4" />
        <p className="text-center font-sans font-normal not-italic">{text}</p>
    </div>
)

const LandingAbout = ({}) => {
    useEffect(() => {
        // Create GSAP Timeline for container
        let valueProp = gsap.timeline({
            scrollTrigger: {
                trigger: ".value-prop-container",
                toggleActions: "restart pause reverse pause",
                pin: true,
                scrub: 1,
            }
        })

        valueProp
            .from('.value-prop-image-1', { opacity: 1, ease: "slow", duration: 10, delay: 1 }, "<30")
            .from('.value-prop-text-1', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<15")
            .to('.value-prop-text-1', { opacity: 1, ease: "slow", duration: 20}, "<20")
            .to('.value-prop-image-1', { opacity: 1, transform: "scale(1.1)", ease: "slow", duration: 20}, "<0")
            .to('.value-prop-image-1', { opacity: 0, ease: "slow", duration: 40}, "<0")
            .to('.value-prop-text-1', { opacity: 0, ease: "slow", duration: 40}, "<0")

            .from('.value-prop-image-2', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<30")
            .from('.value-prop-text-2', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<15")
            .to('.value-prop-image-2', { opacity: 1, ease: "slow", duration: 20}, "<0")
            .to('.value-prop-image-2', { opacity: 1, transform: "scale(1.1)", ease: "slow", duration: 20}, "<0")
            .to('.value-prop-text-2', { opacity: 1, ease: "slow", duration: 20}, "<20")
            .to('.value-prop-image-2', { opacity: 0, ease: "slow", duration: 40}, "<0")
            .to('.value-prop-text-2', { opacity: 0, ease: "slow", duration: 40}, "<0")

            .from('.value-prop-image-3', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<30")
            .from('.value-prop-text-3', { opacity: 0, ease: "slow", duration: 10, delay: 1 }, "<15")
            .to('.value-prop-image-3', { opacity: 1, ease: "slow", duration: 20}, "<0")
            .to('.value-prop-text-3', { opacity: 1, ease: "slow", duration: 20}, "<0")
            .to('.value-prop-image-3', { opacity: 1, transform: "scale(1.1)", ease: "slow", duration: 20}, "<0")
      }, []);

    // function sectionAnimation(prop, before) {
    //     gsap.to(prop, {
    //         scrollTrigger: {
    //             trigger: prop,
    //             start: "center 50%",
    //             startTrigger: before,
    //             end: "bottom center",
    //             markers: true,
    //             toggleActions: "restart pause reverse pause",
    //             pin: true,
    //         }
    //     })
    // };

    return (
        <div className="w-full lg:min-h-screen lg:h-full h-auto py-16 2xl:py-32 xl:py-24 lg:px-24
            flex flex-col justify-center items-center content-center
            lg:bg-contain bg-cover bg-no-repeat bg-center lg:max-h-screen value-prop-container"
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <h1 className="font-sans font-bold text-2xl text-gray-darkest text-center mb-0">
                BYTE is the premier startup organization of Ateneo.
            </h1>

            {/* Desktop Version (with Animations) */}
            <div className="w-full min-h-3/4 h-auto hidden lg:flex flex-col justify-center items-center content-center about-container lg:justify-start px-14 overflow-scroll">
                <DesktopValueProp
                    imageOne={valuePropOne}
                    imageTwo={valuePropTwo}
                    imageThree={valuePropThree}
                    textOne="As a community, we provide opportunities in crafting solutions that addresses problems encountered by our fellows."
                    textTwo="Different gears work as a system leading to great impact. In BYTE our gears are the Hackers, Hipsters and Hustlers."
                    textThree="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus. 3" 
                />
            </div>

            {/* Mobile Version */}
            <div className="w-full h-auto flex flex-col justify-center items-center content-center about-container lg:justify-start px-14 lg:hidden">
                <MobileValueProp image={valuePropOne} text="As a community, we provide opportunities in crafting solutions that addresses problems encountered by our fellows." className="py-4" />
                <MobileValueProp image={valuePropTwo} text="Different gears work as a system leading to great impact. In BYTE our gears are the Hackers, Hipsters and Hustlers." className="py-4"/>
                <MobileValueProp image={valuePropThree} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus. 3" className="pt-4 pb-16 xl:pb-24 2xl:pb-32" />
            </div>

            <Button link="/about" type="primary" label="Learn More" className="mt-4" />
        </div>
    )
}

export default LandingAbout;