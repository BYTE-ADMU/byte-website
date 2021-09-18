import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/default';

import "./community.css";

import AnimatedBanner from "../components/animated_banner";
import HomeGrownStartups from "../components/homegrown_startups";
import Testimonials from "../components/testimonials";

import testimonialsBg from "../assets/community/community-bg.png"

const seo = {
  siteTitle: "BYTE Community",
  siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const CommunityPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout seo={seo}>
        <div>
          {/* <CommunityBanner /> */}
          <AnimatedBanner members={data.allStrapiGallery.edges} />
          <div className="2xl:px-48 xl:px-32 lg:px-16 md:px-8 px-4 py-20 h-full w-full lg:bg-cover bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${testimonialsBg})`
            }}
          >
            <Testimonials testimonials={data.allStrapiTestimonials.edges} />
          </div>
          <div className="h-full">
            <HomeGrownStartups startups={data.allStrapiStartups.edges} />
          </div>
        </div>
      </Layout>
    )}
  />
)

export default CommunityPage;

// START: GRAPHQL QUERY DATA
const query = graphql`
    query {
      allStrapiGallery {
        edges {
          node {
            members {
              url
            }
          }
        }
      }
      allStrapiTestimonials {
        edges {
          node {
            id
            name
            quote
            image {
              url
            }
          }
        }
      }
      allStrapiStartups(sort: {fields: id}) {
        edges {
          node {
            name
            description
            logo {
              url
            }
            founders {
              name
              photo {
                url
              }
            }
          }
        }
      }
    }
`
// END: GRAPHQL QUERY DATA
