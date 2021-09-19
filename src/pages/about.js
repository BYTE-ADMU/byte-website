// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from 'react'
import Layout from "../layouts/default"

// Components
import AboutHero from "../components/about/about-hero"
import AboutAims from "../components/about/about-aims"
import AboutByte from "../components/about/about-byte"
import CTA from "../components/cta"

// Assets
import bg from '../assets/about/about-aims-bg.png'
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

const seo = {
    siteTitle: "About BYTE",
    siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const about = () => {
    return (
        <Layout seo={seo}>
            <AboutHero />
            <AboutByte />
            <div className="2xl:px-64 xl:px-32 md:px-16 sm:px-8 px-4 2xl:py-32 py-16 w-full
                bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
                <h1 className="w-full sm:text-left text-center font-sans font-bold text-gray-darkest pb-10">
                    BYTE aims to...
                </h1>
                <AboutAims />
            </div>
            <CTA />
        </Layout>
    )
}

export default about