const xhrGetData = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);

  try {
    xhr.send();
    if (xhr.status > 399) {
      return `Ошибка ${xhr.status}: ${xhr.statusText}`;
    }

    return JSON.parse(xhr.response);
  } catch (err) {
    return `Запрос не удался ${err}`;
  }
};

export default xhrGetData;
