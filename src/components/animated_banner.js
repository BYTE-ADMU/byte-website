import React from "react"
import "./banner.css"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import upperCaption from "../assets/community/upperCaption.png";
import lowerCaption from "../assets/community/lowerCaption.png";

const Card = ({ member }) => (
  <img src={member.node.members.url} 
      alt="placeholder" 
      className="lg:w-full lg:h-auto w-auto sm:h-full h-40
                lg:my-8 lg:mx-4 my-4 mx-2
                rounded-3xl
                transition-all ease-in-out
                hover:scale-105"
      onClick={() => window.open(member.node.members.url, "_blank")}    
  />
)

const AnimatedBanner = ({ members }) => (
  <div className="w-full h-screen overflow-hidden bg-gray-lightest relative flex flex-col justify-center items-center content-center">
    <div className="top-fade"></div>
    <div className="h-screen items-center content-center flex lg:flex-row lg:justify-center flex-col justify-between">
      <div className="
        lg:h-auto sm:h-1/3 h-1/8 
        xl:w-1/3 lg:w-1/4 w-auto 
        lg:py-0 pb-4 px-0 overflow-visible 
        flex lg:flex-col flex-row justify-start items-center content-center 
        banner-column left-animation"
      >
        {
          members && members
          ?
            members.map((member, index) => (
              index % 2 == 0
              ?
                <Card member={member} />
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

      <div className="
        lg:h-auto sm:h-1/3 h-1/8
        xl:w-1/3 lg:w-1/4 w-auto 
        lg:py-0 pt-4 px-0 overflow-visible 
        flex lg:flex-col flex-row justify-start items-center content-center
        banner-column right-animation"
      >
        {
          members && members
          ?
            members.map((member, index) => (
              index % 2 == 1
              ?
                <Card member={member} />
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

    {/* <div class="block md:hidden py-10 md:py-0">
      {
        members.map((member, index) => (
          index % 2 == 0
          ?
            <div className="card">
              <img src={member.node.members.url} alt="placeholder" className="card_img" />
            </div>
          :
            <></>
        ))
      }
      <div className="text-center">
        <h1 className="p-4 m-4">
          We foster a community of growth and innovation
        </h1>
      </div>
      <div className="flex items-center justify-around">
        {
          members.map((member, index) => (
            index % 2 == 1
            ?
              <div className="card">
                <img src={member.node.members.url} alt="placeholder" className="card_img" />
              </div>
            :
              <></>
          ))
        }
      </div>
    </div> */}
  </div>
)

export default AnimatedBanner;
