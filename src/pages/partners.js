import React from 'react'
import Layout from "../layouts/default"
import partnersbg from "../assets/partners/partners-coming-soon.png"

const partners = () => {
    return (
        <Layout>

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
