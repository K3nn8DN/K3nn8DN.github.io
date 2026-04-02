import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { AboutHeader } from '../components/AboutHeader';

export function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (!location.hash) {
      // Scroll to top/about section when navigating to /about without a hash
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-16">
      <AboutHeader />
      <About />
      <Contact />
    </div>
  );
}
