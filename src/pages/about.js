// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import React from 'react'
import Layout from "../layouts/default"

// Components
import AboutHero from "../components/about/about-hero"
import AboutAims from "../components/about/about-aims"
import AboutByte from "../components/about-byte"
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
            <AboutAims />
        </Layout>
    )
}

export default about
