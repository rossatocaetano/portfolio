import React from 'react';
import logo from './assets/logo.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import { isPropertySignature } from 'typescript';
import BusinessCard from './Components/BusinessCard';

function App() {
  return (
    <>
      <Navbar links={['Business Card', 'Projects', 'Public Policy Manager', 'Contact Me']}></Navbar>
      <h1>BUSINESS CARD</h1>
      <BusinessCard></BusinessCard>    
    </>
  );
}

export default App;
