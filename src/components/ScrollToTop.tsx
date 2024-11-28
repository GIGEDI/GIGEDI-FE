import { useState, useEffect } from 'react';
import up from '../assets/up.svg';

interface ScrollToTopProps {
    className?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ className }) => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', ShowButtonClick);
    return () => {
      window.removeEventListener('scroll', ShowButtonClick);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div>
          <img
            src={up}
            onClick={scrollToTop}
            className={`${className}`} 
            // style={{
            //   position: 'fixed',
            //   right: '320px',
            //   bottom: '220px',
            //   zIndex: 50,
            // }}
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
