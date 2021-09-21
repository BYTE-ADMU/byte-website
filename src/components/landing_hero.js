import React from "react"
import Button from "./button"

import bg from "../assets/img/landing/hero.png"
import logo from "../assets/img/landing/logo.png"

const landing_hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-white bg-center bg-no-repeat bg-cover xl:px-40 lg:px-24 md:px-8 md:py-0 md:flex-row xl:bg-contain"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="flex flex-col items-center justify-center w-full mx-5 my-10 md:w-1/3 md:my-20 md:flex-row">
        <img src={logo} alt="BYTE Logo" className="w-24 h-auto md:w-60" />
      </div>
      <div className="w-full md:w-2/3 pb-8 px-8 flex md:items-start items-center justify-center flex-col">
        <div className="flex md:items-start items-center justify-center flex-col">
          <h3 className="text-2xl pb-4 md:text-left text-center font-sans font-bold not-italic">
            Build Hope, Make Change, With Tech{" "}
          </h3>
          <p className="lg:w-3/4 pb-8 w-full text-base md:text-left text-center font-sans font-normal not-italic">
            In BYTE, we don't just build young tech entrepreneurs, we make a change and serve as catalysts of the future.
          </p>
        </div>
        <Button link="https://bit.ly/BYTE4-MemberApps" label="Register Now" type="primary" />
      </div>
    </div>
  )
}

export default landing_hero
