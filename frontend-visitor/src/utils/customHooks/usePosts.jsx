import { useEffect, useState } from "react";

function usePosts(apiUrl) {
  const [posts, setPosts] = useState(null);
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
        setPosts(data["data"]);
      })
      .catch((error) => {
        console.log("error");
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      setPosts(null);
      setError(null);
      setLoading(true);
    };
  }, [apiUrl]);

  return { posts, error, loading };
}

export default usePosts;
