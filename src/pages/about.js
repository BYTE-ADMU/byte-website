// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from 'react'
import Layout from "../layouts/default"

// Components
import AboutHero from "../components/about/about-hero"
import AboutAims from "../components/about/about-aims"
import AboutByte from "../components/about/about-byte"
import CTA from "../components/cta"
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
            <div>
                <h1 className="w-full text-center sm:text-left sm:px-20 font-sans sm:text-4xl font-bold text-gray-darkest pb-10">
                    BYTE aims to...
                </h1>
                <AboutAims />
            </div>
            <CTA />
        </Layout>
    )
}

export default about