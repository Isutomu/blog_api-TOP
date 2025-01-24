const fetchLogIn = async (userInfo) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/logIn`, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Authentication failed");
      }

      return response.json();
    })
    .then((json) => json)
    .catch((error) => ({ error }));

  return response;
};

export default fetchLogIn;
