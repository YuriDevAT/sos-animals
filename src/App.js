import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReportAnimal from './components/ReportAnimal';
import ContactInformation from './components/ContactInformation';
import Condition from './components/Condition';
import Position from './components/Position';
import Home from './components/Home';

function App() {
  return (
      <div className="max-w-sm mx-auto bg-pink-200">
        <Header />         
            <Home />         
            <ReportAnimal />          
            <Condition />          
            <Position />          
            <ContactInformation />
        <Footer />
      </div>
  );
}

export default App;
