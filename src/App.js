import React from 'react';
import Header from './components/Header';
import Formular from './components/Formular';

function App() {
  return (
      <div className="container max-w-sm mx-auto bg-pink-200 max-h-screen">
        <Header />         
            <Formular />
      </div>
  );
}

export default App;
