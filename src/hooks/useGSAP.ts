import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Custom hook for GSAP animations to reduce code duplication
export const useGSAP = (animationFn: (gsapInstance: any, scrollTrigger: any) => void, deps: any[] = []) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animationFn(gsap, ScrollTrigger);
  }, deps);

  return elementRef;
};

export const useScrollTrigger = (trigger: string, animation: any) => {
  useEffect(() => {
    gsap.fromTo(trigger, animation.from, {
      ...animation.to,
      scrollTrigger: {
        trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }, [trigger, animation]);
};
