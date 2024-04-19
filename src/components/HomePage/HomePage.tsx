import Tagline from './HomePage_Tagline';
import Testimonials from './HomePage_Testimonials';
import QuestionsSection from './HomePage_Questions';
import AboutUs from './Homepage_AboutUs';
import Contact from './HomePage_Contact';
import ToTopButton from './HomePage_ToTopButton';

function HomePage() {
  return (
    <main className="flex flex-col grow min-h-screen py-36 max-w-full">
      {/* Tagline section with CTA and illustration */}
      <Tagline />

      {/* FAQ */}
      <QuestionsSection />

      {/* About us page */}
      <AboutUs />

      {/* Contact */}
      <Contact />
      <ToTopButton />
    </main>
  );
}

export default HomePage;
