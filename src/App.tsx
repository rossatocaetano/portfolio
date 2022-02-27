import style from './App.module.scss';
import Navbar from './Components/Navbar';
import BusinessCard from './Components/BusinessCard';
import image from './assets/BusinessCard.png'
import lottery from './assets/images/projects/lottery.png'
import courseList from './assets/images/projects/courselist.png'
import flaskIcon from './assets/images/projects/flask.svg'
import Projects from './Components/Projects';
import VideosComponent from './Components/VideosComponent';
import ContactMe from './Components/ContactMe';
import linkedin from './assets/images/contactme/linkedin.svg';
import github from './assets/images/contactme/github.svg';
import mail from './assets/images/contactme/mail.svg';

function App() {
  const navBarTitles: string[] = ['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me'];
  const navBarLink: string[] = ['#business_card', '#projects', '#public_policy_manager', '#contact_me']

  const personalInformation:string[] = ['Raphael Rossato Caetano', '27 years old', 'Based in São Paulo', 'Web developer and public policy manager', 'Actually work at FAB LAB LIVRE SP', 'rossato.caetano@gmail.com'];

  //Projets Descriptions
  const lotteryInformation:string[] = ['React Lottery','A front-end project to draw lottery numbers', 'React, typescript and Sass'];
  const courseListInformation:string[] = ['Course List', 'A front-end project to show course schedule', 'HTML, CSS and Javascript'];
  const registrationApiInformation:string[] = ['Register People', 'A project to study CRUD in back-end', 'Python - Flask'];

  //Projects Links
  const links:string[] = ['https://react-lottery.netlify.app/', 'https://courselist-template.netlify.app/', 'https://github.com/rossatocaetano/crudflask-estudo-alura']

  //Projects Images
  const images:string[] = [lottery, courseList, flaskIcon]

  //Videos
  const videos:string[] = ['https://www.youtube.com/embed/FOuonKpGK_c', 'https://www.youtube.com/embed/ONi404GH4sM?start=1983', 'https://www.youtube.com/embed/ulLE2_CgArc?start=1983', 'https://www.youtube.com/embed/Arwyghnf0b4']
  const titles:string[] = ['TV BRASIL Interview', '4th WeGo Awards - Winner at Open and Inclusive City', 'Campus Party Brasil - Printing Houses and Fab Labs', 'Brincando com Ideias - Meet the Fab Labs']

 
//Contact Me
  const icons = [github, mail, linkedin];
  const alts = ['Github', 'E-mail', 'Linkedin'];
  const contactMeTitle = 'Contact Me';
  const linkIcons: string[] = ['https://github.com/rossatocaetano', 'mailto:rossato.caetano@gmail.com', 'https://www.linkedin.com/in/rossato-caetano/']

  return (
    <>
      <Navbar titles={navBarTitles} links={navBarLink}></Navbar>
      <h1 id="business_card">BUSINESS CARD</h1>
      <div className={style.cardcontainer}>
        <BusinessCard items={personalInformation} image={image} vertical={false}></BusinessCard>
      </div>      
      <h1 id="projects">PROJECTS</h1>
      <Projects links={links} images={images} descriptions={[lotteryInformation, courseListInformation, registrationApiInformation]}></Projects>
      <h1 id ="public_policy_manager">PUBLIC POLICY MANAGER</h1>
      <VideosComponent videos={videos} titles={titles}></VideosComponent>
      <footer>
        <h1 id = "contact_me">CONTACT ME</h1>
        <ContactMe icons={icons} alts={alts} title={contactMeTitle} links={linkIcons}></ContactMe>
      </footer>
    </>
  );
}

export default App;
