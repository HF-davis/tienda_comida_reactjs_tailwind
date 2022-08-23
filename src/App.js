import React from 'react';

import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Category from './components/Category';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
