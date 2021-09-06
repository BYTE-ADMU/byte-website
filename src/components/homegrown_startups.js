import React, { useState } from "react"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

import '../styles/global.css'

const HomeGrownStartups = props => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  const closeIcon = (
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-400">
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
          fill="black"
        />
      </svg>
    </div>
  )

  return (
    <div className="px-10 py-40 h-full w-full bg-gray-200 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col my-10">
        <h2 className="text-xl md:text-3xl">Homegrown Startups</h2>
        <p className="w-2/3 text-center text-md md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          velit nesciunt alias maxime ut odit atque tempora facere.
        </p>
      </div>
      <div className="flex items-center justify-around w-full md:w-2/3">
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
      </div>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-2 py-2 sm:px-4 sm:py-4 md:px-10 md:py-10">
          <div className="flex flex-col items-center justify-center md:w-1/2 w-full">
            <div className="w-50 h-50 rounded-full bg-gray-400 p-20 m-5"></div>
            <div className="flex items-center justify-center flex-col">
              <h3>StartUp Name</h3>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-red-800 mr-2"></div>
                <div className="w-10 h-10 rounded-full bg-red-800 mr-2"></div>
                <div className="w-10 h-10 rounded-full bg-red-800 mr-2"></div>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-5 w-full md:w-1/2">
            <div className="bg-red-900 p-28"></div>
            <div className="bg-gray-200 p-5">
              <p className="p-0 m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                ratione, repudiandae nesciunt minima exercitationem porro earum
                labore beatae molestiae dolor voluptates ad excepturi incidunt
                ipsum cupiditate, in dicta iure officia?
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default HomeGrownStartups
