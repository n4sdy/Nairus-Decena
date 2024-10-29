import React from 'react'
import styles from './ProjectsStyles.module.css';
import zenstore from '../../assets/Zenstore.png';
import zyntax from '../../assets/Zyntax.png';
import cvsu from '../../assets/Cvsulogo (1).png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={zenstore} 
                link="https://github.com/n4sdy/Nairus-Decena"
                h3="Zen Store"
                p="Grocery Management System"
            />            
            <ProjectCard 
                src={zyntax} 
                link="https://pichapie234.github.io/Zyntaxx/?fbclid=IwY2xjawGMCtdleHRuA2FlbQIxMAABHXRETZ-NswCLBMIQT-l7QK09F9Eg2DED8TRAohS-odvVCo2Gdu6f4-VwmQ_aem_ydpt2gka4dHJV-Q5gF1N8g"
                h3="ZyntaX"
                p="Project Website"
            />            
            <ProjectCard 
                src={cvsu} 
                link="https://cvsu111.netlify.app/"
                h3="CvSU Website"
                p="Glasses Shop"
            />            
            <ProjectCard 
                src={fitLift} 
                link="https://github.com/n4sdy/Nairus-Decena"
                h3="FitLift"
                p="Fitness App"
            />            
        </div>
    </section>
  )
}

export default Projects