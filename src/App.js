import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
// import Programs from './components/programs/programs';
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
