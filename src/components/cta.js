import React, { useState } from "react"
import { Link } from "gatsby"
import sleep from "../assets/cta/BitBotSleep.png"
import awake from "../assets/cta/BitBotAwake.png"
import smile from "../assets/cta/BitBotSmile.png"
import snooze from "../assets/cta/Snooze.png"
import "./cta.scss";
import Button from "./button"

const Cta = ({}) => {
    // State management for bit bot interactions
    // Sleep vs Awake for Hovers
    const [sleeping, isSleeping] = useState(sleep)
    
    // Sleep vs Smile for Clicks
    const [smiling, isSmiling] = useState(false)
    return (
        <div className="
            w-full h-max px-16 py-48 
            flex flex-col justify-center content-center items-center
            bg-white
        ">
            <div className="relative">
                {
                    smiling
                    ?
                        /* Insert speech balloon with text, Join BYTE! It's fun! */
                        <div className="absolute -top-28 -right-40">
                            <p className="speech text-md font-sans">Come join BYTE!</p>
                        </div>
                    :
                    sleeping == sleep
                    ?
                        /* Insert snooze images here */
                        <div className="absolute -top-24 -right-28">
                            <img src={snooze} className="snooze" />
                        </div>
                    :
                        /* Insert speech balloon with typing animation */
                        <div className="absolute -top-28 -right-40">
                            <p className="speech text-md font-sans">...</p>
                        </div>
                }
                <img src={smiling ? smile : sleeping} 
                    onMouseEnter={() => isSleeping(awake)} 
                    onMouseLeave={() => isSleeping(sleep)} 
                    onClick={() => isSmiling(!smiling)}
                    className="bitbot" 
                />
            </div>
            <h1 className="pt-12 pb-4 font-sans font-bold text-2xl text-black">Lorem ipsum dolor sit amet, consectetur</h1>
            <Button 
                link="#"
                label="Register Now"
            />
        </div>
    )
}

export default Cta;