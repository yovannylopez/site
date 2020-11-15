import React from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import FeatureSection from './components/FeatureSection';
import ClientSection from './components/ClientSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FooterAlt from './components/FooterAlt';

class App extends React.Component {
  componentDidMount() {
    document.getElementById('main_navbar').classList.add('navbar-light');
  }

  render() {
    return (
      <>

        {/* preloader */}
        <Preloader />

        {/* Navigation Menu */}
        <Navbar />

        {/* HomeSection Menu */}
        <Home />

        {/* AboutSection Menu */}
        <AboutSection />

        {/* ServiceSection Menu */}
        <ServiceSection />

        {/* FeatureSection Menu */}
        <FeatureSection />

        {/* PricingSection Menu */}
        <PricingSection />

        {/* ClientSection Menu */}
        <ClientSection />

        {/* BlogSection Menu */}
        <BlogSection />

        {/* ContactSection Menu */}
        <ContactSection />

        {/* Footer Menu */}
        <Footer />

        {/* FooterAlt Menu */}
        <FooterAlt />

      </>

    );
  }
}

export default App;
