// @/components/ScrollUpButton.js
import { useState, useEffect, useCallback, useRef } from 'react';

const ScrollUpButton = ({ contentRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (
      contentRef.current &&
      contentRef.current.scrollTop > 300 &&
      contentRef.current.scrollHeight > contentRef.current.clientHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    contentRef.current.addEventListener('scroll', toggleVisibility);

    return () => {
      contentRef.current.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
