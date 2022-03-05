import './App.module.scss';
import BusinessCardPage from './BusinessCardPage';
import ContactMePage from './ContactMePage';
import NavbarPage from './NavbarPage';
import ProjectsPage from './ProjectsPage';
import VideosPage from './VideosPage';
import style from './App.module.scss'
import BackgroundLights from '../Components/BackgroundLights';

let navbar = document.getElementById('teste');
if (navbar) {
  let navbarHeight = navbar.clientHeight;
  alert(navbarHeight);
}

function App() {
  return (
    <div className={style.app}>
      <div className={style.navbar}>    
        <NavbarPage></NavbarPage>
      </div>
      <div className={style.content}>
        <div id="top"></div>     
        <BusinessCardPage></BusinessCardPage>
        <ProjectsPage></ProjectsPage>
        <VideosPage></VideosPage>
        <ContactMePage></ContactMePage>
      </div>
    </div>
  );
}

export default App;
