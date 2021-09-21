import React, { useState } from "react"

import bg from "../assets/img/cta/background.png"
import sleep from "../assets/img/cta/BitBotSleep.png"
import awake from "../assets/img/cta/BitBotAwake.png"
import smile from "../assets/img/cta/BitBotSmile.png"
import snooze from "../assets/img/cta/Snooze.png"

import Button from "./button"

const Cta = () => {
    // State management for bit bot interactions
    // Sleep vs Awake for Hovers
    const [sleeping, isSleeping] = useState(sleep && sleep)
    
    // Sleep vs Smile for Clicks
    const [smiling, isSmiling] = useState(false)
    return (
        <div className="flex flex-col items-center content-center justify-center w-full px-16 py-48 bg-white bg-center bg-no-repeat bg-contain  h-max" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="relative">
                {
                    smiling
                    ?
                        /* Insert speech balloon with text, Join BYTE! It's fun! */
                        <div className="absolute md:-top-28 md:-right-40 -top-32 right-1/4">
                            <p className="font-sans speech text-md">Come join BYTE!</p>
                        </div>
                    :
                    sleeping === sleep
                    ?
                        /* Insert snooze images here */
                        <div className="absolute md:-top-24 md:-right-28 -top-32 right-1/4">
                            <img src={snooze} alt="snooze" className="snooze" />
                        </div>
                    :
                        /* Insert speech balloon with typing animation */
                        <div className="absolute md:-top-28 md:-right-40 -top-32 right-1/4">
                            <p className="font-sans speech text-md">click me!</p>
                        </div>
                }
                <img src={smiling ? smile : sleeping} 
                    onMouseEnter={() => isSleeping(awake)} 
                    onMouseLeave={() => isSleeping(sleep)} 
                    onClick={() => isSmiling(!smiling)}
                    onKeyDown={() => isSmiling(!smiling)}
                    role="presentation"
                    className="bitbot" 
                    alt="bitbot"
                />
            </div>
            <h1 className="pt-12 pb-4 mb-2 font-sans text-2xl font-bold text-center text-black">Get those brain juices going!</h1>
            <Button 
                link="https://bit.ly/BYTE4-MemberApps"
                label="Register Now"
                type="primary"
            />
        </div>
    )
}

export default Cta;