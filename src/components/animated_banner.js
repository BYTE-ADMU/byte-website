import React, { useState } from "react"
import "./banner.css"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import upperCaption from "../assets/community/upperCaption.png";
import lowerCaption from "../assets/community/lowerCaption.png";

import community from "../assets/community/community.png";

const Card = ({ member
  // counter, setCounter 
}) => {
  const [loaded, hasLoaded] = useState(false)

  function onLoadHandler() {
    hasLoaded(true);
    // setCounter(counter + 1);
  }

  return (
    // <a href={member.node.members.url} target="_blank" rel="noreferrer" className="lg:w-full lg:h-auto lg:min-h-8 lg:min-h-16 h-full w-auto">
      <img src={member.node.members.url} 
          alt="placeholder" 
          className={`lg:w-full lg:h-auto w-auto sm:h-full h-40
                    lg:my-8 lg:mx-4 my-4 mx-2
                    rounded-3xl ${loaded ? "" : "blur-xl bg-white"}
                    transition-all ease-in-out
                    hover:scale-105`}
          onLoad={() => onLoadHandler()}
          onError={community} // fallback image if image doesn't load
      />
    // </a>
  )
}

const AnimatedBanner = ({ members }) => {
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-lightest relative flex flex-col justify-center items-center content-center">
      <div className="top-fade"></div>
      <div className="h-screen items-center content-center flex lg:flex-row lg:justify-center flex-col justify-between">
        <div className={`
          lg:h-auto sm:h-1/3 h-1/8 
          xl:w-1/3 lg:w-1/4 w-auto 
          lg:py-0 pb-4 px-0 overflow-visible 
          flex lg:flex-col flex-row justify-start items-center content-center 
          banner-column left-animation`} 
          // ${counter === length ? "left-animation" : ""}`}
        >
          {
            members && members
            ?
              members.map((member, index) => (
                index % 2 === 0
                ?
                  <Card member={member} 
                    // counter={counter} setCounter={setCounter} 
                  />
                :
                  <></>
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

        <div className="
          lg:h-auto sm:h-1/3 h-3/4
          xl:w-1/3 lg:w-1/2 w-auto lg:py-0 p-4
          flex flex-col justify-start items-center content-center text-center"
        >
          <div>
            <img src={upperCaption} alt="placeholder" />
          </div>
          <div className="w-2/3">
            <h1 className="bold">We foster a community of growth and innovation</h1>
          </div>
          <div>
            <img src={lowerCaption} alt="placeholder" />
          </div>
        </div>

        <div className={`
          lg:h-auto sm:h-1/3 h-1/8
          xl:w-1/3 lg:w-1/4 w-auto 
          lg:py-0 pt-4 px-0 overflow-visible 
          flex lg:flex-col flex-row justify-start items-center content-center
          banner-column right-animation`} 
          // ${counter === length ? "right-animation" : ""}`}
        >
          {
            members && members
            ?
              members.map((member, index) => (
                index % 2 === 1
                ?
                  <Card member={member} 
                    // counter={counter} setCounter={setCounter} 
                  />
                :
                  <></>
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
      </div>
      <div className="bottom-fade"></div>
    </div>
  )
}

export default AnimatedBanner;
