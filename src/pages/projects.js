import React from 'react'
import Layout from '../layouts/default'
import ProjectsHero from "../components/projects_hero"
import ProjectsLayout from "../components/projects_layout"
import ProjectsGrowthCards from "../components/projects_growth_cards"

const seo = {
    siteTitle: "BYTE Projects",
    siteDescription: "This is the official website of BYTE: Building Young Tech Entrepreneurs."
}

const ProjectsPage = () => {
    return (
        <Layout seo={seo}>
            <div className="h-full">
                <div class="h-full w-full">
                    <ProjectsHero />
                </div>
                <div className="w-full">
                    <ProjectsLayout />
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <ProjectsGrowthCards />                    
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage
