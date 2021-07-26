import React from 'react';
import Header from './components/Header';
import Formular from './components/Formular';

function App() {
  return (
      <div className="w-screen h-screen bg-green-500 body">
        <div className="h-md max-w-sm font-sans bg-gray-50 shadow-xl mx-auto">
          <div className="max-w-xs mx-auto h-full bg-red-100">
            <Header />         
            <Formular />
            </div>
        </div>
      </div>
  );
}

export default App;
