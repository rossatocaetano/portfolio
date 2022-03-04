import React from 'react';
import Projects from '../../Components/Projects';
import style from './ProjectsPage.module.scss';
import lottery from '../../assets/images/projects/lottery.png'
import courseList from '../../assets/images/projects/courselist.png'
import flaskIcon from '../../assets/images/projects/flask.svg'

const ProjectsPage = () => {
    const lotteryInformation:string[] = ['React Lottery','A front-end project to draw lottery numbers', 'React, typescript and Sass'];
    const courseListInformation:string[] = ['Course List', 'A front-end project to show course schedule', 'HTML, CSS and Javascript'];
    const registrationApiInformation:string[] = ['Register People', 'A project to study CRUD in back-end', 'Python - Flask'];
    //Projects Links
    const links:string[] = ['https://react-lottery.netlify.app/', 'https://courselist-template.netlify.app/', 'https://github.com/rossatocaetano/crudflask-estudo-alura']

    //Projects Images
    const images:string[] = [lottery, courseList, flaskIcon]

    return  (
        <div className={style.pageContainer}>
            <h1 id="projects">PROJECTS</h1>
            <p>Here is some projects there I made</p>
            <Projects links={links} images={images} descriptions={[lotteryInformation, courseListInformation, registrationApiInformation]}></Projects>
        </div>
    )

}

export default ProjectsPage