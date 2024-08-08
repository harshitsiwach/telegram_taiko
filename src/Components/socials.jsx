'use client';

import { useState, useRef, useEffect } from 'react';
import Uisocial from './uisocial';
function Download() {
  const [showDiv, setShowDiv] = useState(false);
  const targetRef = useRef(null);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  const handleClickOutside = (event) => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    if (showDiv) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDiv]);

  return (
    <div>
      <button onClick={handleClick}>socials</button>
      {showDiv && (
        <div className='z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
          <div ref={targetRef} className='z-50'>
          <Uisocial/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Download;
