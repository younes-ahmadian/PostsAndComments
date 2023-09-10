import { useEffect } from "react";

const useAbortController = () => {
  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    return () => {
      if (process.env.NODE_ENV !== "development") controller.abort();
    };
  }, [controller]);

  return {signal}
};
export default useAbortController;
