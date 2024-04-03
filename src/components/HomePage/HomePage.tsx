import Tagline from './HomePage_Tagline';
import Testimonials from './HomePage_Testimonials';
import QuestionsSection from './HomePage_Questions';
import AboutUs from './Homepage_AboutUs';
import Contact from './HomePage_Contact';

function HomePage() {
  return (
    <main className="px-6 grow">
      {/* Tagline section with CTA and illustration */}
      <Tagline />

      {/* Fake testimonials */}
      <Testimonials />

      {/* FAQ */}
      <QuestionsSection />

      {/* About us page */}
      <AboutUs />

      {/* Contact */}
      <Contact />
    </main>
  );
}

export default HomePage;