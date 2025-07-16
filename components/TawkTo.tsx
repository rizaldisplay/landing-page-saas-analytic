"use client"
import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6877300a7f202b19181ec1b3/1j08p7b5r";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkTo;
