import React from 'react'
import Layout from "../layouts/default"
import Button from "../components/button"

import bg from "../assets/partners/background.png"
import gif from "../assets/gif/404.gif"

const seo = {
  siteTitle: "Bitbot couldn't find the page",
  siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const NotFoundPage = () => (
  <Layout seo={seo}>
      {/* START: Container*/}
      <div
          className="w-full h-screen px-12 flex justify-center items-center content-center
                  bg-gray-background bg-no-repeat bg-cover bg-center" 
          style={{
              backgroundImage: `url(${bg})`
          }}
      >
          {/* START: Wrapper */}
          <div className="xl:w-1/2 w-full h-auto flex flex-col justify-center items-center content-center">
              <img src={gif} className="w-full h-auto" />
              <p className="pt-8 pb-12 text-center">Oh no! This page does not exist on our website. Go back home and check out the rest of the site!</p>
              <Button link="/" label="Go Home" type="primary" />
          </div>
          {/* END: Wrapper */}
      </div>
      {/* END: Container */}
  </Layout>
)

export default NotFoundPage
