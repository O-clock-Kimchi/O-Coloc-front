// import custom components
import Tagline from './HomePage_Tagline';
import QuestionsSection from './HomePage_Questions';
import AboutUs from './Homepage_AboutUs';
import Contact from './HomePage_Contact';
import ToTopButton from './HomePage_ToTopButton';

function HomePage() {
  return (
    <main className="flex flex-col grow min-h-screen py-36 max-w-full dark:text-jet-50">
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
