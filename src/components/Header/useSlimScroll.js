import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const useSlimScroll = (threshold = 25) => {
  const [scrolled, setScrolled] = useState(false);
  const [headerSecondary, setHeaderSecondary] = useState(false);
  const [isSecondaryIcon, setIsSecondaryIcon] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef(null);
  let scrollBarWidth = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        if (!headerSecondary) {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    const delay = headerSecondary || scrolled ? 200 : 130;
    timeoutRef.current = setTimeout(() => {
      setIsSecondaryIcon(headerSecondary || scrolled);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [headerSecondary, scrolled]);

  const handleLinkClick = () => {
    const event = new KeyboardEvent("keydown", {
      key: "Escape",
      keyCode: 27,
      code: "Escape",
      which: 27,
      bubbles: true,
    });
    setHeaderSecondary(false);
    document.dispatchEvent(event);
  };

  useEffect(() => {
    handleLinkClick();
  }, [pathname]);

  useEffect(() => {
    if (scrollBarWidth === 0) {
      scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    }
    if (headerSecondary) {
      document.body.style.overflow = "hidden"; // Disable scroll
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = ""; // Re-enable scroll
      document.body.style.paddingRight = `0px`;

    }

    // Cleanup to re-enable scroll when the component unmounts or the state changes
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = `0px`;

    };
  }, [headerSecondary]);

  return {
    scrolled,
    setHeaderSecondary,
    headerSecondary,
    pathname,
    isSecondaryIcon,
  };
};

export default useSlimScroll;
