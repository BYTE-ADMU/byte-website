import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/default';
import ProjectsHero from "../components/projects/projects_hero";
import ProjectsLayout from "../components/projects/projects_layout";
import ProjectsGrowthCards from "../components/projects/projects_growth_cards";

const seo = {
    siteTitle: "BYTE Projects",
    siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const ProjectsPage = () => (
    <StaticQuery
        query={query}
        render={data => (
            <Layout seo={seo}>
                <div className="h-full">
                    <div class="h-full w-full">
                        <ProjectsHero />
                    </div>
                    <div className="w-full">
                        <ProjectsLayout data={data.flagshipProjects.edges} />
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-center" id="growth">
                        <ProjectsGrowthCards data={data.growthProjects.edges} />                    
                    </div>
                </div>
            </Layout>
        )} 
    />
)

export default ProjectsPage;

// Query data from Strapi
const query = graphql`
    query {
        flagshipProjects: allStrapiProjects(filter: {category: {name: {eq: "flagship"}}}, sort: {fields: id}) {
            edges {
                node {
                    id
                    name
                    subtitle
                    description
                    color
                    logo {
                        url
                    }
                    image_1 {
                        url
                    }
                    image_2 {
                        url
                    }
                }
            }
        }
        growthProjects: allStrapiProjects(filter: {category: {name: {eq: "growth"}}}, sort: {fields: id}) {
            edges {
                node {
                    id
                    name
                    color
                    description
                    image_1 {
                        url
                    }
                }
            }
        }
    }
`
