import './App.css';
import AIContentForge from './components/AIContentForge';
import Footer from './components/Footer';
import Formsection from './components/Formsection';
import Myloader from './components/Myloader';

function App() {
  return (
    <>
      <Myloader/>
      <AIContentForge />
      <Formsection />
      <Footer/>
    </>
  );
}

export default App;
