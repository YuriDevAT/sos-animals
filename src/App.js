import React from 'react';
import Header from './components/Header';
import Formular from './components/Formular';

function App() {
  return (
      <div className="w-screen h-screen bg-green-500 flex bg-img">
        <div className="w-404 h-736 font-sans bg-blue-500 shadow-xl m-auto">
            <Header />         
            <Formular />
        </div>
      </div>
  );
}

export default App;
