import React from "react";

// layout -> image is in the left or right
// type -> type of media (gallery, testimonial, or startups)
// description -> description for the section

const Gallery = ({ images }) => (
    <div className="w-full h-auto flex flex-col justify-center items-center content-center relative">
      <img className="xl:w-96 xl:h-60 w-36 h-24 top-0 left-0" src={images[0]} />
      <img className="xl:w-96 xl:h-60 w-36 h-24 top-1/2 right-0" src={images[1]} />
      <img className="xl:w-96 xl:h-60 w-36 h-24 bottom-0 left-0" src={images[2]} />
    </div>
  )
  
  const Testimonial = ({ testimonial }) => (
    <div className="w-full h-auto flex justify-center items-center content-center">
      <div className="w-2/3 h-auto flex flex-col justify-center items-center content-center">
        <img className="w-full h-auto m-0 rounded-t-md" src={testimonial.image} />
        <div className="w-full h-auto flex justify-center items-center content-center py-6 px-4 bg-gray-darkest rounded-b-md">
          <p className="font-sans font-bold text-base text-gray-lightest">"{testimonial.quote}" -{testimonial.name}</p>
        </div>
      </div>
    </div>
  )
  
  const Startups = ({ startups }) => (
    <div className="w-full h-auto flex flex-col justify-center items-center content-center relative">
      <img className="xl:w-48 xl:h-48 w-36 h-24 rounded-full top-0 left-0" src={startups[0].logo} />
      <img className="xl:w-48 xl:h-48 w-36 h-24 rounded-full top-1/2 right-0" src={startups[1].logo} />
      <img className="xl:w-48 xl:h-48 w-36 h-24 rounded-full bottom-0 left-0" src={startups[2].logo} />
    </div>
  )

const LandingCommunity = ({ 
    layout,
    gallery,
    testimonial,
    startups,
    description
}) => (
    <div className="
        w-full h-auto md:py-20 py-12
        flex md:flex-row flex-col justify-center items-center content-center"
    >
        {
            layout == "left"
            ?
                <>
                    <div className="w-1/2 h-auto flex justify-center items-center content-center">
                        {
                            gallery && gallery
                            ?
                                <Gallery images={gallery} />
                            :
                            testimonial && testimonial
                            ?
                                <Testimonial testimonial={testimonial} />
                            :
                                <Startups startups={startups} />
                        }
                    </div>
                    <div className="w-1/2 h-auto flex justify-start items-center content-center m-0">
                        <p className="font-sans text-base text-gray-darkest">{description}</p>
                    </div>
                </>
            :
            <>
                    <div className="w-1/2 h-auto flex justify-start items-center content-center">
                        <p className="font-sans text-base text-gray-darkest">{description}</p>
                    </div>
                    <div className="w-1/2 h-auto flex justify-center items-center content-center">
                        {
                            gallery && gallery
                            ?
                                <Gallery images={gallery} />
                            :
                            testimonial && testimonial
                            ?
                                <Testimonial testimonial={testimonial} />
                            :
                                <Startups startups={startups} />
                        }
                    </div>
                </>
        }
    </div>
)

export default LandingCommunity;