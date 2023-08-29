import { Dispatch, FC, SetStateAction, useEffect } from "react";

const useIntersectionObserver = (
  lastElement: Element | null,
  setNumberOfElementsToShow: Dispatch<SetStateAction<number>>
) => {
  let observerRef: IntersectionObserver;
  useEffect(() => {
    observerRef = new IntersectionObserver(([entery]) => {
      if (entery.isIntersecting) {
        setNumberOfElementsToShow((prev) => prev + 10);
      }
    });

    if (lastElement) {
      observerRef.observe(lastElement);
    }

    return () => {
      lastElement && observerRef.unobserve(lastElement);
    };
  });
};
export default useIntersectionObserver;
