import './App.module.scss';
import BusinessCardPage from './BusinessCardPage';
import ContactMePage from './ContactMePage';
import NavbarPage from './NavbarPage';
import ProjectsPage from './ProjectsPage';
import VideosPage from './VideosPage';

function App() {
  return (
    <>
      <NavbarPage></NavbarPage>      
      <BusinessCardPage></BusinessCardPage>
      <ProjectsPage></ProjectsPage>      
      <VideosPage></VideosPage>
      <ContactMePage></ContactMePage>
      
    </>
  );
}

export default App;
