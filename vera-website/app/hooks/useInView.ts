// hooks/useInView.ts

import { useState, useEffect, useRef, RefObject } from "react";

const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit,
  triggerOnce: boolean = true
): { ref: RefObject<T>; isInView: boolean } => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry], observerInstance) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observerInstance.unobserve(entry.target);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options, triggerOnce]);

  return { ref, isInView };
};

export default useInView;
