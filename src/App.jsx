import './css/index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import SurfsharkOne from './components/SurfsharkOne/SurfsharkOne';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SurfsharkOne />
      <Footer />
    </div>
  );
}

export default App;
