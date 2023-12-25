'use strict';

const getTitle = (title) => title.length ? title[0].toUpperCase() + title.slice(1) : title;

const declensions = {
    hour: ['час', 'часа','часов'],
    minute: ['минута', 'минуты', 'минут'],
    second: ['секунда', 'секунды', 'секунд'],
};
  
const getDeclension = (n, value) => {
    const number = Math.abs(+n) % 100 % 10;

    if (+n > 10 && +n < 20)
        return declensions[value][2];

    if (number > 1 && number < 5)
        return declensions[value][1];

    if (number === 1) 
        return declensions[value][0];
    
    return declensions[value][2];
}

const workerForDate = {
    optionDateA: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: 'numeric'
    },
    optionDateYMD_B: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    },
    optionDateHMS_B: {
        hourCycle: "h24",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    },

    generateDate: () => {
        const dateA = new Date();
        const dateB = new Date();

        const partTime = {
            year: '',
            month: '',
            day: '',
            weekday: '',
            hour: '',
            minute: '',
            second: ''
        };

        new Intl.DateTimeFormat('ru', this.optionDateA).formatToParts(dateA).forEach((p) => {
            if (p.type in partTime)
                partTime[p.type] = p.value;
        });

        const currentDateA = `Сегодня ${getTitle(partTime.weekday)}, ${partTime.day} ${partTime.month} ${partTime.year} года, ${partTime.hour} ${getDeclension(partTime.hour, 'hour')} ${partTime.minute} ${getDeclension(partTime.minute, 'minute')} ${partTime.second} ${getDeclension(partTime.second, 'second')}`;
        const currentDateB = `${new Intl.DateTimeFormat("ru", this.optionDateYMD_B).format(dateB)} - ${new Intl.DateTimeFormat("ru", this.optionDateHMS_B).format(dateB)}`;

        return [currentDateA, currentDateB];
    }

}

const generatorHtml = {
    list: function(array = [], type = 'ul') {
        const tempLi = array.map(el => this.genTag('li', el));
       
        type = type !== 'ol' ? 'ul' : type;

        return this.genTag(type, tempLi.join(''));
    },
    p: function(value) {
        return this.genTag('p', value);
    },
    b: function(value) {
        return this.genTag('b', value);
    },
    i: function(value) {
        return this.genTag('i', value);
    },
    genTag: function(tag, value = '') {
        return `<${tag}>${value}</${tag}>`;
    }
};


const workWithDOM = {
    addElementInBody: function(element = '') {
        document.body.innerHTML += element;
    },
    clearBody: function() {
        document.body.innerHTML = '';
    }
};

setInterval(() => {
    const dates = workerForDate.generateDate().map(el => generatorHtml.p(el));
    workWithDOM.clearBody();
    workWithDOM.addElementInBody(dates.join(''));
}, 1000);

