import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "../styles/global.css"

import "swiper/css"
import "swiper/css/pagination"

// import message from "../../public/icons/message.png"
// import play from "../../public/icons/play.png"

import message from "../assets/img/message.png"
import arrowOutline from "../assets/community/arrow-outline.png"
import arrow from "../assets/community/arrow.png"

SwiperCore.use([Pagination])
SwiperCore.use([Autoplay])

const colors = ["red", "yellow", "blue", "green", "purple", "orange"]

function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)]
}

const NextArrow = ({ onClick }) => (
  <div className="absolute right-4 top-2/5 cursor-pointer xl:block hidden w-auto h-auto flex justify-center items-center content-center" onClick={onClick}>
    <div className="relative">
      <img src={arrowOutline} className="relative z-10 arrow__container" />
      <img src={arrow} 
        className="absolute -bottom-4 -left-4 z-0 
        transition-all duration-300 ease-in-out
        arrow__filled" 
      />
    </div>
  </div>
)

const Testimonial = ({ testimonial, onNext }) => (
  <div className="
      h-full w-full flex md:flex-row flex-col 2xl:px-32 lg:px-24 md:px-16 px-8 py-16 py-16
      justify-center content-center items-center bg-transparent relative"
    >
    <div className="w-full xl:w-1/3 lg:w-1/2 
                  lg:flex hidden justify-center items-center content-center"
    >
      <img src={testimonial.node.image.url} alt="Message" className="h-full w-auto px-8" />
    </div>
    
    <div className="w-full 2xl:w-1/3 lg:w-1/2 md:w-full
                  flex flex-col items-start justify-start
                  px-4"
    >
      <img src={message} alt="Message" className="hidden lg:block" />
      <div className="flex flex justify-center items-center content-center pt-4 pb-8">
        <img src={testimonial.node.image.url} alt="Message" className="h-16 w-16 rounded-full lg:hidden block mr-4" />
        <h1 className={`text-${getRandomColor()}-primary bold`}>{testimonial.node.name}</h1>
      </div>
      <p className="xl:h-56 lg:h-64 h-auto">{testimonial.node.quote}</p>
    </div>

    <NextArrow onClick={onNext} />
  </div>
)

const Testimonials = ({ testimonials }) => {
  const [slider, setSlider] = useState(null);

  return (
    <Swiper
      onInit={(ev) => {
        setSlider(ev)
      }}
      spaceBetween={80}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={false}
      cssMode={true}
      className="mySwiper border-2 border-red-primary rounded-2xl"
    >
      {
        testimonials && testimonials
        ?
          testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.node.id}>
              <Testimonial testimonial={testimonial} onNext={() => slider.slideNext()} />
            </SwiperSlide>
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
    </Swiper>
  )
}

export default Testimonials
