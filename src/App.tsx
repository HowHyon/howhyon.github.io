import Hero from './components/Hero';
import PropertiesCarousel from './components/PropertiesCarousel';
import ContactSection from './components/ContactSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PropertiesCarousel />
      <ContactSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
