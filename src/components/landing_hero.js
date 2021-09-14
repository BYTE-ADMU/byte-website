import React from "react"
import Button from "./button"

import bg from "../assets/landing/hero.png"
import logo from "../assets/landing/logo.png"

const landing_hero = () => {
  return (
    <div className="
      w-full min-h-screen h-full xl:px-40 lg:px-24 md:px-8 md:py-0 py-24
      flex flex-col md:flex-row justify-center items-center 
      bg-white xl:bg-contain bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="w-full md:w-1/3 mx-5 my-10 md:my-60 flex flex-col md:flex-row items-center justify-center">
        <img src={logo} className="md:w-60 w-24 h-auto" />
      </div>
      <div className="w-full md:w-2/3 pb-8 px-8 flex md:items-start items-center justify-center flex-col">
        <div className="flex md:items-start items-center justify-center flex-col">
          <h3 className="text-2xl md:text-left text-center">
            Lorem ipsum dolor sit amet conse.
          </h3>
          <p className="lg:w-3/4 w-full text-base md:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique porttitor amet ac molestie lectus.
          </p>
        </div>
        <Button link="#" label="Register Now" type="primary" />
      </div>
    </div>
  )
}

export default landing_hero
