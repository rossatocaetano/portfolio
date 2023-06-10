import React from 'react';
import Projects from '../Components/Projects';
import { Title, Container } from '../styles/sharedstyles';

const ProjectsPage = () => {
    const lottery = '/images/projects/lottery.png';
    const courseList = '/images/projects/courselist.png';
    const flaskIcon = '/images/projects/flask.svg';

    const lotteryInformation:string[] = ['React Lottery','A front-end project to draw lottery numbers', 'React, typescript and Sass'];
    const courseListInformation:string[] = ['Course List', 'A front-end project to show course schedule', 'HTML, CSS and Javascript'];
    const registrationApiInformation:string[] = ['Register People', 'A project to study CRUD in back-end', 'Python - Flask'];
    //Projects Links
    const links:string[] = ['https://react-lottery.netlify.app/', 'https://courselist-template.netlify.app/', 'https://github.com/rossatocaetano/crudflask-estudo-alura']

    //Projects Images
    const images:string[] = [lottery, courseList, flaskIcon]

    return  (    
        <Container>
            <Title id="projects">PROJECTS</Title>
            <p>Here is some projects there I made</p>
            <Projects links={links} images={images} descriptions={[lotteryInformation, courseListInformation, registrationApiInformation]}></Projects>
        </Container>    
    )

}

export default ProjectsPage