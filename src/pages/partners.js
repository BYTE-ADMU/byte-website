import React from 'react'
import Layout from "../layouts/default"
import partnersbg from "../assets/partners/partners-coming-soon.png"

const seo = {
    siteTitle: "BYTE Partners",
    siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const partners = () => {
    return (
        <Layout seo={seo}>
            <div
                className="flex flex-col justify-center items-center content-center w-auto h-screen bg-no-repeat bg-top bg-contain px-10 mb-20 sm:px-0" 
                style={{
                backgroundImage: `url(${partnersbg})`
                }}> 
            </div>
        </Layout>
    )
}

export default partners
