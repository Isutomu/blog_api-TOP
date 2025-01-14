import { useEffect, useState } from "react";

function usePostData(apiUrl) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl, {
      mode: "cors",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Unable to fetch posts. Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data["data"]);
      })
      .catch((error) => {
        console.log("error");
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      setData(null);
      setError(null);
      setLoading(true);
    };
  }, [apiUrl]);

  return { data, error, loading };
}

export default usePostData;
