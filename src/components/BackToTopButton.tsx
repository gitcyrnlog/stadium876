import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return show ? (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[9999] bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full shadow-lg transition flex items-center group"
      title="Back to Top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
      <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition">Back to Top</span>
    </button>
  ) : null;
};

export default BackToTopButton;
