import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Volunteer from '@/components/Volunteer';
import Donate from '@/components/Donate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Volunteer />
      <Donate />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
