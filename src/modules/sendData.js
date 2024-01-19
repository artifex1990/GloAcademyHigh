const setData = (url, object) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(object),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

export default setData;
