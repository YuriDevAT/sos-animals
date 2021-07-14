import React from 'react';
import Header from './components/Header';
import Formular from './components/Formular';

function App() {
  return (
      <div className="container max-w-sm mx-auto font-sans bg-gray-50 h-screen shadow-xl">
        <Header />         
        <Formular />
      </div>
  );
}

export default App;
