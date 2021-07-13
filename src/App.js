import React from 'react';
import Header from './components/Header';
import Formular from './components/Formular';

function App() {
  return (
      <div className="container max-w-sm mx-auto max-h-screen font-sans bg-gray-50">
        <Header />         
        <Formular />
      </div>
  );
}

export default App;
