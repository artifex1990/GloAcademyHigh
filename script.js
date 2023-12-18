const typeLanguage = confirm('Хотите установить русский формат даты? По умолчанию дата будет на английском') ? 'ru' : 'en';
const dates = [
    ['ru', new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(new Date())],
    ['en', new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date())]
];
const namePerson = prompt('Как вас зовут? ->').toLowerCase();

if (typeLanguage === 'ru') {
    console.log(new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(new Date()));
} else {
    console.log(new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date()));
}

switch(typeLanguage) {
    case 'ru':
        console.log(new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(new Date()));
        break;
    case 'en':
        console.log(new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(new Date()));
        break;
}

console.log((dates.filter((v) => v[0] === typeLanguage))[0][1]);

console.log(
    'Вы ' +
    (
        namePerson === 'артем'
            ? 'директор'
            : namePerson === 'александр'
                ? 'преподаватель'
                : 'студент'
    ) +
    '!'
);

