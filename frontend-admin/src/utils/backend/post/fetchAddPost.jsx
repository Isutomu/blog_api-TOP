const fetchAddPost = async (formData, userToken) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
    mode: "cors",
    method: "POST",
    body: formData,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error("Creation failed");
      }

      return response.json();
    })
    .then((json) => json)
    .catch((error) => ({ error }));

  return response;
};

export default fetchAddPost;
