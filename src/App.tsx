import React from 'react';
import logo from './assets/logo.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import { isPropertySignature } from 'typescript';

function App() {
  return (
    <>
      <Navbar links={['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me']}></Navbar>
    </>
  );
}

export default App;
