import './App.css';
import Header from './components/Header';
import ReportAnimal from './components/ReportAnimal';
import ContactInformation from './components/ContactInformation';
import Condition from './components/Condition';
import Position from './components/Position';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />  
      <ReportAnimal />    
      <Position />
      <Condition />
      <ContactInformation />      
    </div>
  );
}

export default App;
