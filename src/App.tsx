import style from './App.module.scss';
import Navbar from './Components/Navbar';
import BusinessCard from './Components/BusinessCard';
import image from './assets/BusinessCard.png'
import lottery from './assets/images/projects/lottery.png'
import courseList from './assets/images/projects/courselist.png'
import flaskIcon from './assets/images/projects/flask.svg'
import Projects from './Components/Projects';

function App() {
  const navBarTitles: string[] = ['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me'];  
  const personalInformation:string[] = ['Raphael Rossato Caetano', '27 years old', 'Based in São Paulo', 'Web developer and public policy manager', 'Actually work at FAB LAB LIVRE SP', 'rossato.caetano@gmail.com'];

  //Projets Descriptions
  const lotteryInformation:string[] = ['React Lottery','A front-end project to draw lottery numbers', 'React, typescript and Sass'];
  const courseListInformation:string[] = ['Course List', 'A front-end project to show course schedule', 'HTML, CSS and Javascript'];
  const registrationApiInformation:string[] = ['Register People', 'A project to study CRUD in back-end', 'Python - Flask'];

  //Projects Links
  const links:string[] = ['https://react-lottery.netlify.app/', 'https://courselist-template.netlify.app/', 'https://github.com/rossatocaetano/crudflask-estudo-alura']

  //Projects Images
  const images:string[] = [lottery, courseList, flaskIcon]

  //Projects

  return (
    <>
      <Navbar links={navBarTitles}></Navbar>
      <h1>BUSINESS CARD</h1>
      <div className={style.cardcontainer}>
        <BusinessCard items={personalInformation} image={image} vertical={false}></BusinessCard>
      </div>      
      <h1>PROJECTS</h1>
      <Projects links={links} images={images} descriptions={[lotteryInformation, courseListInformation, registrationApiInformation]}></Projects>
    </>
  );
}

export default App;
