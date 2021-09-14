import React from "react"
import Button from "./button"

const landing_hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-400 w-full h-full">
      <div className="w-full md:w-1/3 mx-5 my-10 md:my-60 flex flex-col md:flex-row items-center justify-center">
        <div className="h-60 w-60 bg-gray-700"></div>
      </div>
      <div className="w-full md:w-2/3 pb-8 px-8 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quasi minus, quas autem minima impedit maiores suscipit, similique,
            laudantium eos exercitationem. Cupiditate minima porro in accusamus
            reprehenderit? Ducimus, est minus?
          </p>
        </div>
        <Button link="#" label="Register Now" className="text-white" />
      </div>
    </div>
  )
}

export default landing_hero
