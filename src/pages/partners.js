import React from 'react'
import Layout from "../layouts/default"
import Button from "../components/button"

import comingSoon from "../assets/partners/coming-soon.png"
import bg from "../assets/partners/background.png"

const seo = {
    siteTitle: "BYTE Partners",
    siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const partners = () => {
    return (
        <Layout seo={seo}>
            {/* START: Container*/}
            <div
                className="w-full h-screen px-12 flex justify-center items-center content-center
                        bg-no-repeat bg-cover bg-center" 
                style={{
                    backgroundImage: `url(${bg})`
                }}
            >
                {/* START: Wrapper */}
                <div className="xl:w-1/2 w-full h-auto flex flex-col justify-center items-center content-center">
                    <img src={comingSoon} alt="Coming Soon" className="w-full h-auto" />
                    <p className="pt-8 pb-12 text-center">BYTE is hard at work to build this page for your pleasant viewing experience. <br /><br />In the meantime, check out the rest of our website!</p>
                    <Button link="/" label="Go Home" type="primary" />
                </div>
                {/* END: Wrapper */}
            </div>
            {/* END: Container */}
        </Layout>
    )
}

export default partners
