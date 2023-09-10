import axios from "axios";
import { useEffect, useState } from "react";
import useAbortController from "./useAbortController";

const useFetchData = <T>(url: string): FetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const { signal } = useAbortController();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { signal });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("error in fetching data", error);
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};
export default useFetchData;

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error?: unknown;
}

//another way of fetching data
// useEffect(() => {
//   axios
//     .get(url)
//     .then((res) => {
//       setData(res.data);
//       setIsLoading(false);
//     })
//     .catch((err) => {
//       setError(err);
//       setIsLoading(false);
//     });
// }, [url]);
