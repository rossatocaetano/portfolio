import BusinessCardPage from './business';
import ContactMePage from './contactme';
import NavbarPage from './navbar';
import ProjectsPage from './projects';
import VideosPage from './videos';
import BackgroundLights from '../Components/BackgroundLights';


function App() {
  return (
    <div>
      <div>    
        <NavbarPage></NavbarPage>
      </div>
      <div>
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
