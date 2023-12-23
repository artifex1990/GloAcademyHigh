'use strict';

const calendar = {
    defaultLocale: 'ru',
    locales: {
        ru: {
            weekDayNames: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
        }
    },
    setLocale: function(locale) {
        this.defaultLocale = locale in this.locales ? locale : this.defaultLocale;

        return this;
    },
    getWeekDays: function() {
        return this.locales[this.defaultLocale].weekDayNames;
    },
    getCurrentDayName: function() {
        const dayOfWeekIndex = (new Date()).getDay() - 1;

        return this.getWeekDays()[dayOfWeekIndex];
    },
    getWeekendDayNames: function() {
        return this.getWeekDays().slice(5);
    },
};

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

const printOnDom = {
    addElementInBody: function(element = '') {
        document.body.innerHTML += element;
    },
    clearBody: function() {
        document.body.innerHTML = '';
    }
};

const weekDayNames = calendar.getWeekDays().map(name => {
    let tempName = name;

    if (name === calendar.getCurrentDayName()) {
        tempName = generatorHtml.b(tempName);
    }

    if (calendar.getWeekendDayNames().indexOf(name) !== -1) {
        tempName = generatorHtml.i(tempName);
    }

    return generatorHtml.p(tempName);
});

printOnDom.clearBody();
printOnDom.addElementInBody(weekDayNames.join(''));