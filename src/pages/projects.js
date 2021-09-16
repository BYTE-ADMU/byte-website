import React from 'react'

import ProjectsHero from "../components/projects_hero"
import ProjectsLayout from "../components/projects_layout"
import ProjectsGrowthCards from "../components/projects_growth_cards"
import Footer from "../components/footer"


const ProjectsPage = () => {
    return (
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
                <Footer />
        </div>
    )
}

export default ProjectsPage
