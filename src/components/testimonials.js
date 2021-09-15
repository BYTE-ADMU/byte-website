import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

import "../styles/global.css"

import "swiper/css"
import "swiper/css/pagination"

// import message from "../../public/icons/message.png"
// import play from "../../public/icons/play.png"

import message from "../assets/message.png"
import play from "../assets/play.png"

SwiperCore.use([Pagination])
SwiperCore.use([Autoplay])

const testimonials_data = [
  {
    id: 1,
    name: "Kirsten Sy",
    position: "BYTE 4 President",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
  {
    id: 2,
    name: "TJ Lao",
    position: "BYTE 3 President",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
  {
    id: 3,
    name: "Lance Villacin",
    position: "BYTE 3 Executive VP",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium harum accusamus et? Veritatis recusandae inventore necessitatibus quisquam velit, consequuntur error voluptatum beatae delectus eveniet dolore totam et sequi adipisci ea.",
  },
]

const Testimonials = props => {
  return (
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
      className="mySwiper"
    >
      <SwiperSlide key={props.id}>
        <div className="h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20">
          <div className="w-full md:w-1/2 flex items-center justify-center mr-0 md:mr-10">
            <div className="bg-gray-light h-96 w-80 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-start flex-col mt-10 md:m-0">
            <div>
              <img src={message} alt="Message" className="hidden md:block" />
            </div>
            <div className="flex items-center">
              <div className="h-32 w-32 bg-gray-dark mr-10 mb-10 rounded-full md:hidden block"></div>
              <div>
                <h2>Kirsten Sy</h2>
                <h3>BYTE 4 President</h3>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              modi fuga ex libero cupiditate et consectetur eligendi ut sapiente
              facere magni, veniam doloribus tempora ipsa autem, laudantium
              atque. Dolore, velit?
            </p>
          </div>
          <img src={play} alt="Play" />
        </div>
      </SwiperSlide>
      <SwiperSlide key={props.id}>
        <div className="h-full w-full flex md:flex-row flex-col items-center justify-around mb-50 md:mb-20">
          <div className="w-full md:w-1/2 flex items-center justify-center mr-0 md:mr-10">
            <div className="bg-gray-light h-96 w-80 hidden md:block"></div>
          </div>
          <div className="w-full md:w-1/2 flex items-start  flex-col mt-10 md:m-0">
            <div>
              <img src={message} alt="Message" className="hidden md:block" />
            </div>
            <div className="flex items-center ">
              <div className="h-32 w-32 bg-gray-dark mr-10 mb-10 rounded-full md:hidden block"></div>
              <div>
                <h2>Kirsten Sy</h2>
                <h3>BYTE 4 President</h3>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
              modi fuga ex libero cupiditate et consectetur eligendi ut sapiente
              facere magni, veniam doloribus tempora ipsa autem, laudantium
              atque. Dolore, velit?
            </p>
          </div>
          <img src={play} alt="Play" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Testimonials
