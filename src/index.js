import getData from './modules/getData';
import setData from './modules/sendData';
import xhrGetData from './modules/xhrGetData';
import xhrSetData from './modules/xhrSetData';

const localUsrData = './data/db.json';
const jsonplaceholder = 'https://jsonplaceholder.typicode.com/posts';

console.log('=======Через fetch==========');
await getData(localUsrData)
  .then((data) => setData(jsonplaceholder, data))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log('=======Через XmlHttpRequest==========');
const developer = xhrGetData(localUsrData);
const sendDeveloper = xhrSetData(jsonplaceholder, developer);
console.log(sendDeveloper);
