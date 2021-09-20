import React from "react";

// layout -> image is in the left or right
// type -> type of media (gallery, testimonial, or startups)
// description -> description for the section

const Gallery = ({ images }) => (
    <div className="md:w-full w-2/3 h-auto flex flex-col justify-center items-end content-center relative xl:py-32 lg:py-24 md:py-16 py-28">
        <div className="xl:w-96 xl:h-60 lg:w-64 lg:h-40 w-40 h-24 rounded-lg absolute top-0 left-0 z-10 overflow-hidden flex justify-center items-center content-center">
            <img className="w-full h-auto community-image" src={images[0].node.members.url} alt="Member Pic" />
        </div>
        <div className="xl:w-96 xl:h-60 lg:w-64 lg:h-40 w-40 h-24 rounded-lg z-20 overflow-hidden flex justify-center items-center content-center">
            <img className="w-full h-auto community-image" src={images[2].node.members.url} alt="Member Pic" />
        </div>
        <div className="xl:w-96 xl:h-60 lg:w-64 lg:h-40 w-40 h-24 rounded-lg absolute bottom-0 left-0 z-30 overflow-hidden flex justify-center items-center content-center">
            <img className="w-full h-auto community-image" src={images[4].node.members.url} alt="Member Pic" />
        </div>
    </div>
)

// Generate a random number between 0 and 3 for testimonials
function generateRandomNumber() {
    return Math.floor((Math.random() * 3));
}
  
const Testimonial = ({ testimonials }) => {
    var randomNumber = generateRandomNumber()
    
    return (
        <div className="w-full h-auto flex justify-center items-center content-center">
            <div className="xl:w-2/3 lg:w-full h-auto flex flex-col justify-center items-center content-center md:m-0 mb-4">
                <img className="w-full h-auto m-0 rounded-t-2xl" src={testimonials[randomNumber].node.image.url} alt={testimonials[randomNumber].node.name} />
                <div className="w-full h-auto flex justify-center items-center content-center p-6 bg-gray-darkest rounded-b-2xl">
                    <p className="font-sans text-sm text-gray-lightest m-0">"{testimonials[randomNumber].node.quote}" - {testimonials[randomNumber].node.name}</p>
                </div>
            </div>
        </div>
    )
}
  
const Startups = ({ startups }) => (
    <div className="lg:w-2/3 md:w-full w-3/4 h-auto flex flex-col justify-center items-end content-center relative xl:py-32 lg:py-24 py-16">
        <img className="xl:w-48 xl:h-48 w-32 h-32 rounded-full absolute top-0 left-0 z-10 community-image" src={startups[0].node.logo.url} alt={startups[0].node.name} />
        <img className="xl:w-48 xl:h-48 w-32 h-32 rounded-full z-20 community-image" src={startups[1].node.logo.url} alt={startups[1].node.name} />
        <img className="xl:w-48 xl:h-48 w-32 h-32 rounded-full absolute bottom-0 left-0 z-30 community-image" src={startups[2].node.logo.url} alt={startups[2].node.name} />
    </div>
)

const LandingCommunity = ({ 
    layout,
    gallery,
    testimonials,
    startups,
    description
}) => (
    <div className={`
        w-full h-auto md:py-20 py-12
        flex ${layout === "left" ? "md:flex-row flex-col" : "md:flex-row flex-col-reverse"} justify-center items-center content-center`}
    >
        {
            layout === "left"
            ?
                <>
                    <div className="md:w-1/2 w-full h-auto flex justify-center items-center content-center px-8">
                        {
                            gallery && gallery
                            ?
                                <Gallery images={gallery} />
                            :
                            testimonials && testimonials
                            ?
                                <Testimonial testimonials={testimonials} />
                            :
                                <Startups startups={startups} />
                        }
                    </div>
                    <div className="md:w-1/2 w-full h-auto flex justify-start items-center content-center px-16">
                        <p className="md:text-left text-center font-sans text-base text-gray-darkest">{description}</p>
                    </div>
                </>
            :
            <>
                    <div className="md:w-1/2 w-full h-auto flex flex-row justify-start items-center content-center px-16">
                        <p className="md:text-left text-center font-sans text-base text-gray-darkest">{description}</p>
                    </div>
                    <div className="md:w-1/2 w-full h-auto flex justify-center items-center content-center px-8">
                        {
                            gallery && gallery
                            ?
                                <Gallery images={gallery} />
                            :
                            testimonials && testimonials
                            ?
                                <Testimonial testimonials={testimonials} />
                            :
                                <Startups startups={startups} />
                        }
                    </div>
                </>
        }
    </div>
)


export default LandingCommunity;