// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

// Styles
import "../../styles/global.css"
import "swiper/css"
import "swiper/css/pagination"

// Assets
import image1 from '../../assets/about/image1.png'
import image2 from '../../assets/about/image2.png'
import image3 from '../../assets/about/image3.png'
import bg from '../../assets/about/about-aims-bg.png'
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

SwiperCore.use([Pagination])
SwiperCore.use([Autoplay])

const AboutAims = props => {
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
      className="mySwiper lg:min-h-3/4 min-h-1/2 h-full w-full 2xl:p-48 lg:p-24 md:px-8 py-12 px-4 flex flex-col sm:flex sm:flex-row items-center justify-center md:bg-contain bg-cover bg-no-repeat bg-center"
      style={{
      backgroundImage: `url(${bg})`
      }}
    >
        <SwiperSlide key={props.id} className="width-1/2">
            <div>
                <div className="flex flex-row items-center justify-center w-full g:min-h-3/4 min-h-1/2 h-full w-full 2xl:p-48 lg:p-24 md:px-8">
                    <div className="flex flex-col items-center">
                        <img src={image1} />
                        <p className="medium text-center">Be an inclusive home organization to its members</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={image2} />
                        <p className="medium text-center">Help members develop the ITE 3Hs</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={image3} />
                        <p className="medium text-center">Promote tech entreprenuer to the youth</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      
    </Swiper>
  )
}

export default AboutAims
