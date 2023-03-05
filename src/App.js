import React from 'react'
import './App.css';
import './App1.css'

// Importing Components that are used

import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Forms from './Components/Forms';
import Middle_section from './Components/Middle_section';
import Pricing from './Components/Pricing';
import Rules from './Components/Rules';
import Top_side from './Components/Top_side';

function App() {
  return (
    <>
      <Top_side />
      <Middle_section />
      <Carousel />
      <Pricing />
      <Rules />
      <Forms />
      <Footer />
    </>
  );
}

export default App;
