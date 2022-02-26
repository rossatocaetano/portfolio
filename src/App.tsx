import './App.scss';
import Navbar from './Components/Navbar';
import BusinessCard from './Components/BusinessCard';
import image from './assets/BusinessCard.png'

function App() {
  const navBarTitles: string[] = ['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me'];  
  const personalInformation:string[] = ['Raphael Rossato Caetano', '27 years old', 'Based in São Paulo', 'Web developer and public policy manager', 'Actually work at FAB LAB LIVRE SP', 'rossato.caetano@gmail.com']
  
  return (
    <>
      <Navbar links={navBarTitles}></Navbar>
      <h1>BUSINESS CARD</h1>
      <BusinessCard items={personalInformation} image={image}></BusinessCard>
    </>
  );
}

export default App;
