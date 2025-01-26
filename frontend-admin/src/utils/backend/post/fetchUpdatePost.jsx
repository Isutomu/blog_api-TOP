const fetchUpdatePost = async (formData, userToken, postId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/posts/${postId}`,
    {
      mode: "cors",
      method: "PATCH",
      body: formData,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${userToken}`,
      },
    }
  )
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Update failed");
      }

      return response.json();
    })
    .then((json) => json)
    .catch((error) => ({ error }));

  return response;
};

export default fetchUpdatePost;
