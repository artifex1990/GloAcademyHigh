const getData = (url, options = {}) => {
  // eslint-disable-next-line no-param-reassign
  options.headers = { 'Content-type': 'application/json' };

  return fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

export default getData;
