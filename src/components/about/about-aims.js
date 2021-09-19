// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

// Styles
import "../../styles/global.css"

// Assets
import img1 from '../../assets/about/img1.png'
import img2 from '../../assets/about/img2.png'
import img3 from '../../assets/about/img3.png'
import bg from '../../assets/about/about-aims-bg.png'
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

SwiperCore.use([Autoplay])

const AboutAims = props => {
  return (  
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper lg:min-h-3/4 h-full w-full px-4 flex flex-col sm:flex sm:flex-col items-center justify-center md:bg-contain bg-cover bg-no-repeat bg-center"
        style={{
        backgroundImage: `url(${bg})`
        }}
      >
        <SwiperSlide key={props.id} className="width-1/2">
            <div className="flex flex-row items-center justify-center
                            h-full w-full lg:p-24 md:px-8">
              <div className="flex flex-col items-center w-1/2">
                  <img src={img2} />
                  <p className="medium text-center py-4">Be an inclusive home organization to its members</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide key={props.id} className="width-1/2">
            <div className="flex flex-row items-center justify-center 
                            h-full w-full lg:p-24 md:px-8">
              <div className="flex flex-col items-center w-1/2">
                  <img src={img2} />
                  <p className="medium text-center py-4">Help members develop the ITE 3H's</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide key={props.id} className="width-1/2">
            <div className="flex flex-row items-center justify-center w-full 
                            h-full w-full lg:p-24 md:px-8">
              <div className="flex flex-col items-center w-1/2">
                  <img src={img3} />
                  <p className="medium text-center py-4">Promote tech entreprenuer to the youth</p>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
  )
}

export default AboutAims
