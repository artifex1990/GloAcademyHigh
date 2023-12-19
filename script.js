const typeLanguage = confirm('Хотите установить русский формат даты? По умолчанию дата будет на английском') ? 'ru' : 'en';
const dates = {
    'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
};
const namePerson = prompt('Как вас зовут? ->').toLowerCase();

if (typeLanguage === 'ru') {
    console.log(['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'].join(', '));
} else {
    console.log(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].join(', '));
}

switch(typeLanguage) {
    case 'ru':
        console.log(['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'].join(', '));
        break;
    case 'en':
        console.log(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].join(', '));
        break;
}

console.log(dates[typeLanguage].join(', '));

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

