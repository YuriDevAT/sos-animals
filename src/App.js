import Header from './components/Header';
import Footer from './components/Footer';
import ReportAnimal from './components/ReportAnimal';
import ContactInformation from './components/ContactInformation';
import Condition from './components/Condition';
import Position from './components/Position';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Header />     
      {/* <Home /> */}
      {/* <Condition /> */}
      {/* <ReportAnimal /> */}
      <ContactInformation />
      <Footer />
    </div>
  );
}

export default App;
