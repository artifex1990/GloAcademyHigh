const xhrSetData = (url, user) => {
  const xhr = new XMLHttpRequest();
  const json = JSON.stringify(user);

  xhr.open('POST', url, false);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  try {
    xhr.send(json);
    if (xhr.status > 399) {
      return `Ошибка ${xhr.status}: ${xhr.statusText}`;
    }

    return JSON.parse(xhr.response);
  } catch (err) {
    return `Запрос не удался ${err}`;
  }
};

export default xhrSetData;
