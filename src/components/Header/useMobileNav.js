import React, { useEffect, useRef, useState } from 'react'

export const useMobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [steps, setSteps] = useState({
    activeIndex: 0,
    subActiveIndex: 0,
    currentStep: 0,
  });

  const handleIndex = (activeIndex, subActiveIndex, currentStep) => {
    setSteps({
      activeIndex: activeIndex,
      subActiveIndex: subActiveIndex,
      currentStep: currentStep,
    });
  };

  const menuRef = useRef(null);
  let timeout;
  // Toggle mobile menu visibility
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside of the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    // Handle body overflow based on menu state
    if (isOpen) {
      // Add event listener for outside clicks
      
      document.addEventListener("mousedown", handleClickOutside);

      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
    
      document.removeEventListener("mousedown", handleClickOutside);

      // Allow scrolling
      document.body.style.overflow = "auto";
    }

    if (!isOpen) {
 
      timeout = setTimeout(() => {
        handleIndex(0, 0, 0);
      }, 1000);
    }

    // Cleanup function to remove the event listener and reset body overflow
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure overflow is reset
      clearTimeout(timeout);
    };
  }, [isOpen]);
  return {
    toggleMenu, 
    isOpen,
setIsOpen,
steps,
setSteps,
handleIndex,
menuRef
  }
}
