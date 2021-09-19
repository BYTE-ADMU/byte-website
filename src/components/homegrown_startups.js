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
    <div className="m-4 h-12 w-12 flex items-center justify-center rounded-full bg-red-primary transition duration-300 ease-in-out hover:shadow-hover">
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
    <div className="px-10 py-40 h-full w-full bg-gray-200 flex items-center justify-center flex-col bg-styles" id="startups">
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
            <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 sm:px-8 lg:px-12 xl:px-24">
              <div className="flex flex-col items-center justify-center md:w-1/2 w-full">
                <div className="flex justify-center items-center content-center relative">
                  <div className="xl:w-48 xl:h-48 lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24 rounded-full overflow-hidden flex justify-center items-center content-center m-2">
                    <img src={selectedStartup.logo.url} className="w-auto  h-full" />
                  </div>
                  <img src={bitbot} className="lg:w-16 sm:w-12 w-8 h-auto absolute bottom-0 left-0" />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <h2 className="bold pt-8 pb-4">{selectedStartup.name}</h2>
                  <div className="flex flex-col justify-center items-start content-center">
                    {
                      selectedStartup && selectedStartup
                      ?
                        selectedStartup.founders.map((founder) => (
                          <div className="flex justify-center items-center content-center mb-2">
                            <div className="w-8 h-8 lg:h-12 lg:w-12 rounded-full overflow-hidden flex justify-center items-center content-center">
                              <img src={founder.photo.url} 
                                className="w-full h-auto founders
                                transition-all duration-300 ease-in-out"
                              />
                            </div>
                            <p className="px-4 text-center">{founder.name}</p>
                          </div>
                        ))
                      :
                        <>
                        </>
                    }
                  </div>
                </div>
              </div>
              <div className="p-2 md:p-4 w-full md:w-1/2 md:rounded-2xl">
                {
                  selectedStartup && selectedStartup.banner
                  ?
                    <img src={selectedStartup.banner.url} className="bg-gray-lightest w-full h-auto rounded-t-2xl md:block hidden" />
                  :
                    selectedStartup && selectedStartup.logo 
                    ?
                      <img src={selectedStartup.logo.url} className="bg-gray-lightest w-full h-auto rounded-t-2xl md:block hidden" />
                    :
                    <></>
                }
                <div className="md:bg-gray-lightest py-8 px-4 rounded-b-2xl md:shadow-footer">
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
