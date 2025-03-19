
import { useEffect, useRef, useState } from 'react';

// Custom hook for reveal on scroll animation
export function useRevealOnScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

// Custom hook for image lazy loading with blur effect
export function useLazyImageLoad(src: string) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (!imgRef.current) return;
    
    const img = imgRef.current;
    
    if (img.complete) {
      setLoaded(true);
    } else {
      img.onload = () => {
        setLoaded(true);
      };
    }
  }, [src]);
  
  return { loaded, imgRef };
}

// Custom hook for counting up animation
export function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    let observer: IntersectionObserver;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };
    
    if (countRef.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      });
      
      observer.observe(countRef.current);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [end, duration]);
  
  return { count, countRef };
}
