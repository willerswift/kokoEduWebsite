import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Check if it's a grid child for staggered delay
          const parent = entry.target.parentElement;
          const siblings = parent?.querySelectorAll('.reveal') || [];
          const idx = Array.from(siblings).indexOf(entry.target);
          
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 100); // 100ms stagger
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => observer.observe(el));

    return () => {
      revealEls.forEach(el => observer.unobserve(el));
    };
  }, []);
};
