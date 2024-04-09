import { useState, useEffect } from 'react';
import { MoveUp } from 'lucide-react';
import { Button } from '../ui/button';

function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // code snippet from: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
    const handleScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      if (scrolled > 100) {
        setIsVisible(true);
      } else if (scrolled <= 100) {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={`fixed middle right-10 transition-opacity duration-300 mr-10  ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        top: '50%',
        right: '0%',
      }}
    >
      <Button
        className="flex flex-col w-15 bg-tainoi-300 hover:bg-tainoi-100"
        onClick={scrollBackToTop}
      >
        <MoveUp />
      </Button>
    </div>
  );
}

export default ToTopButton;
