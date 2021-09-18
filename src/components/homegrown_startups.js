import React, { useState } from "react"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Tooltip from "react-simple-tooltip";

// import "../styles/global.css"
import "./homegrown_startups.css"

import bitbot from "../assets/community/startup.png"

const HomeGrownStartups = ({ startups }) => {
  const [open, setOpen] = useState(false)
  const [selectedStartup, setSelectedStartup] = useState(null)

  function setStartup(startup) {
    setOpen(true);
    setSelectedStartup(startup);
  }

  function deselectStartup() {
    setOpen(false);
    setSelectedStartup(null);
  }

  const closeIcon = (
    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-primary">
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

  return (
    <div className="px-10 py-40 h-full w-full bg-gray-200 flex items-center justify-center flex-col bg-styles">
      <div className="flex items-center justify-center flex-col py-12">
        <h1 className="bold pb-4">Homegrown Startups</h1>
        <p className="w-2/3 text-center text-md md:text-lg">
          See the homegrown startups making a difference. We're here to support and hopefully see you here soon.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center content-center w-full md:w-2/3">
        {
          startups && startups
          ?
            startups.map((startup) => (
              <Tooltip
                content={startup.node.name}
                arrow="8"
                background="#FAFAFA"
                border="#FAFAFA"
                color="#1F2228"
                fontFamily="'Objectivity', sans-serif"
                fontSize="1rem"
                offset="0"
                padding="8"
                placement="bottom"
                radius="5"
                className="md:block hidden"
              >
                <div className="flex flex-col justify-center items-center content-center m-4">
                  <img src={startup.node.logo.url} 
                    className="h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24
                    bg-white rounded-full cursor-pointer 
                    transition-all duration-300 ease-in-out 
                    hover:shadow-hover startup-logo"
                    onClick={() => setStartup(startup.node)}
                  />
                  <p className="rounded-md my-4 py-2 px-4 bg-gray-lightest text-center md:hidden block">{startup.node.name}</p>
                </div>
              </Tooltip>
            ))
          :
            <Loader
              type="MutatingDots"
              color="#F84A5E"
              secondaryColor="#57CEFE"
              height={80}
              width={80}
              timeout={3000} // 3 secs
            />
        }
        {/* <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-dark rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-dark rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-dark rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-dark rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div>
        <div
          className="h-12 w-12 md:h-16 md:w-16 bg-gray-dark rounded-full mx-2 cursor-pointer"
          onClick={onOpenModal}
        ></div> */}
      </div>

      <Modal
        open={open}
        onClose={() => deselectStartup()}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        {
          selectedStartup && selectedStartup 
          ?
            <div className="flex flex-col md:flex-row items-center justify-center w-full px-2 py-2 sm:px-4 sm:py-4 md:px-10 md:py-10">
              <div className="flex flex-col items-center justify-center md:w-1/2 w-full">
                <div className="flex justify-center items-center content-center relative">
                  <img src={selectedStartup.logo.url} className="w-60 h-60 rounded-full bg-gray-lightest m-5" />
                  <img src={bitbot} className="lg:w-24 lg:h-auto w-16 h-auto absolute bottom-0 left-0" />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <h2 className="bold pt-12 pb-4">{selectedStartup.name}</h2>
                  <div className="flex items-center justify-center">
                    {
                      selectedStartup && selectedStartup
                      ?
                        selectedStartup.founders.map((founder) => (
                          <Tooltip
                            content={founder.name}
                            arrow="0"
                            background="#FAFAFA"
                            border="#FAFAFA"
                            color="#1F2228"
                            fontFamily="'Objectivity', sans-serif"
                            fontSize="1rem"
                            padding="4"
                            placement="bottom"
                            radius="5"
                            className="md:block hidden"
                          >
                            <div className="flex justify-center items-center content-center m-4">
                              <img src={founder.photo.url} 
                                className="h-4 w-4 md:h-8 md:w-8 lg:h-16 lg:w-16
                                bg-white rounded-full cursor-pointer 
                                transition-all duration-300 ease-in-out 
                                hover:shadow-hover startup-logo"
                              />
                              <p className="rounded-md my-4 py-2 px-4 bg-gray-lightest text-center md:hidden block">{founder.name}</p>
                            </div>
                          </Tooltip>
                        ))
                      :
                        <>
                        </>
                    }
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-5 w-full md:w-1/2 ">
                <div className="bg-gray-light p-28 rounded-t-2xl"></div>
                <div className="bg-gray-lightest p-5 rounded-b-2xl">
                  <p className="p-0 m-0">
                    {selectedStartup.description}
                  </p>
                </div>
              </div>
            </div>
          :
            <Loader
              type="MutatingDots"
              color="#F84A5E"
              secondaryColor="#57CEFE"
              height={80}
              width={80}
              timeout={3000} // 3 secs
            />
        }
      </Modal>
    </div>
  )
}

export default HomeGrownStartups
