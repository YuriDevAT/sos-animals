import React, { useState } from 'react';
import Formular from './components/Formular';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep(step - 1);
  }

  const nextStep = () => {
      setStep(step + 1)
  }





  return (
        <div className="app">   
          <Header />
          <Formular />
          <Footer prevStep={prevStep} nextStep={nextStep} />
        </div>
  );
}

export default App;
