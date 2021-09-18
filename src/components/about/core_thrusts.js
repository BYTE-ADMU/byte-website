import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"

import CommunityBg from "../../assets/community/community-bg.png"
import byteThreeH from "../../assets/about/byte-3h.png"
import byteUnicorn from "../../assets/about/byte-unicorn.png"
import byteHacker from "../../assets/about/byte-hacker.png"
import byteHipster from "../../assets/about/byte-hipster.png"
import byteHustler from "../../assets/about/byte-hustler.png"

SwiperCore.use([Autoplay])

const core_thrusts = props => {
  return (
    <div className="m-10 md:mx-20 md:my-20">
      <h1>Core Thrusts</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper border-2 border-red-primary rounded-2xl"
      >
        <SwiperSlide key={props.id}>
          <div
            className="
            h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20
            justify-center content-center items-center bg-white-primary bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${CommunityBg})`,
            }}
          >
            <h3 className="right-40 text-blue-primary text-2xl">Hacker</h3>
            <h3 className="relative -bottom-40 left-10 text-red-primary text-2xl">
              Hipster
            </h3>
            <div className="w-full mt-20 md:w-1/2 flex items-center justify-center mr-0 md:mr-10">
              <img src={byteThreeH} />
            </div>
            <h3 className="top-0 right-20 text-yellow-primary text-2xl">
              Hustler
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide key={props.id}>
          <div
            className="
            h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20
            justify-center content-center items-center bg-white-primary bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${CommunityBg})`,
            }}
          >
            <div className="w-full mt-20 md:w-1/2 flex items-center justify-around flex-col md:flex-row mr-0 md:mr-10">
              <img src={byteUnicorn} className="w-full md:w-1/2 h-80 w-100" />
              <div className="w-full md:w-1/2 ml-0 md:ml-10">
                <h3 className="text-purple-primary text-3xl pb-10">Unicorn</h3>
                <p className="w-full">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={props.id}>
          <div
            className="
            h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20
            justify-center content-center items-center bg-white-primary bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${CommunityBg})`,
            }}
          >
            <div className="w-full mt-20 md:w-1/2 flex items-center justify-around flex-col md:flex-row mr-0 md:mr-10">
              <img src={byteHacker} className="w-full md:w-1/2 h-100 w-40" />
              <div className="w-full md:w-1/2 ml-0 md:ml-10">
                <h3 className="text-blue-primary text-3xl pb-10">Hacker</h3>
                <p className="w-full">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={props.id}>
          <div
            className="
            h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20
            justify-center content-center items-center bg-white-primary bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${CommunityBg})`,
            }}
          >
            <div className="w-full mt-20 md:w-1/2 flex items-center justify-around flex-col md:flex-row mr-0 md:mr-10">
              <img src={byteHipster} className="w-full md:w-1/2 h-100 w-40" />
              <div className="w-full md:w-1/2 ml-0 md:ml-10">
                <h3 className="text-red-primary text-3xl pb-10">Hipster</h3>
                <p className="w-full">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={props.id}>
          <div
            className="
            h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20
            justify-center content-center items-center bg-white-primary bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${CommunityBg})`,
            }}
          >
            <div className="w-full mt-20 md:w-1/2 flex items-center justify-around flex-col md:flex-row mr-0 md:mr-10">
              <img src={byteHustler} className="w-full md:w-1/2 h-100 w-40" />
              <div className="w-full md:w-1/2 ml-0 md:ml-10">
                <h3 className="text-yellow-primary text-3xl pb-10">Hustler</h3>
                <p className="w-full">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default core_thrusts
