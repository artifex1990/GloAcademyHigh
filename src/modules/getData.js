const getData = (url) => fetch(url)
  .then((response) => response.json())
  .catch((error) => console.log(error.message));

export default getData;
