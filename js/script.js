'use strict';

const firstname = document.querySelector('input[name=firstname]');
const surname = document.querySelector('input[name=surname]');
const age = document.querySelector('input[name=age]');
const position = document.querySelector('select[name=position]');
const organization = document.querySelector('input[name=organization]');
const category = document.querySelector('input[name=category]');
const presenceOfChildren = document.querySelector('input[name=presenceOfChildren]');
const dateOfEmployment = document.querySelector('input[name=dateOfEmployment]');
const saveBtn = document.querySelector('button[type=submit]');
const app = document.getElementById('app');

const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setData = (key, object) => localStorage.setItem(key, JSON.stringify(object));

const render = () => {
    app.innerHTML = '';
    getData('employers').forEach(employee => {
        let tempEmployee = employee;

        switch(tempEmployee._position) {
            case 'Слесарь':
                tempEmployee = new Plumber(tempEmployee._firstname, tempEmployee._surname, tempEmployee._age, tempEmployee._organization, tempEmployee._category, tempEmployee._presenceOfChildren, tempEmployee._dateOfEmployment, tempEmployee._id);
                break;
            case 'Водитель':
                tempEmployee = new Driver(tempEmployee._firstname, tempEmployee._surname, tempEmployee._age, tempEmployee._organization, tempEmployee._category, tempEmployee._presenceOfChildren, tempEmployee._dateOfEmployment, tempEmployee._id);
                break;    
        }

        WorkDOM.appendCard((new Table()).create(tempEmployee));
    });
};

const clearForm = () => {
    firstname.value = '';
    surname.value = '';
    age.value = '';
    organization.value = '';
    category.value = '';
    dateOfEmployment.value = '';
    position.value = 'Слесарь';
    presenceOfChildren.checked = false;
};

saveBtn.addEventListener('click', (event) => {
    const employers = getData('employers');
    const fieldsForCheckOnEmpty = [
        firstname.value,
        surname.value,
        age.value,
        organization.value,
        category.value,
        dateOfEmployment.value
    ];
    const fieldsForCheckOnNumber = [
        age.value,
        category.value
    ];

    let employee = '';

    event.preventDefault();

    if (CheckForm.isEmpty(fieldsForCheckOnEmpty)) {
        alert('Заполните все поля!');

        return;
    }

    if (CheckForm.isNumber(fieldsForCheckOnNumber)) {
        alert('Для полей возраст, или категории указан не числовой формат!');

        return;
    }

    switch(position.options[position.selectedIndex].value) {
        case 'Слесарь':
            employee = new Plumber(firstname.value, surname.value, age.value, organization.value, category.value, presenceOfChildren.checked, dateOfEmployment.value);
            break;
        case 'Водитель':
            employee = new Driver(firstname.value, surname.value, age.value, organization.value, category.value, presenceOfChildren.checked, dateOfEmployment.value);
            break;    
    }

    employers.push(employee);
    setData('employers', employers);
    clearForm();
    render();
});

class Employee {
    constructor(firstname, surname, age, organization, category, presenceOfChildren, dateOfEmployment, id = 0) {
        this._id = !id ? new Date().getTime() : id;
        this._firstname = firstname;
        this._surname = surname;
        this._age = age;
        this._organization = organization;
        this._category = category;
        this._presenceOfChildren = presenceOfChildren;
        this._dateOfEmployment = dateOfEmployment;
    }

    get id() {
        return this._id;
    }

    get firstname() {
        return this._firstname;
    }

    get surname() {
        return this._surname;
    }

    get age() {
        return this._age;
    }

    get organization() {
        return this._organization;
    }

    get category() {
        return this._category;
    }

    get presenceOfChildren() {
        return this._presenceOfChildren;
    }

    get dateOfEmployment() {
        return this._dateOfEmployment;
    }

    get position() {
        return this._position;
    }

    set firstname(firstname) {
        this._firstname = firstname;
    }

    set surname(surname) {
        this._surname = surname;
    }

    set age(age) {
        this._age = age;
    }

    set organization(organization) {
        this._organization = organization;
    }

    set category(category) {
        this._category = category;
    }

    set presenceOfChildren(presenceOfChildren) {
        this._presenceOfChildren = presenceOfChildren;
    }

    set dateOfEmployment(dateOfEmployment) {
        this._dateOfEmployment = dateOfEmployment;
    }
}

class Plumber extends Employee {
    constructor(firstname, surname, age, organization, category, presenceOfChildren, dateOfEmployment, id = 0) {
        super(firstname, surname, age, organization, category, presenceOfChildren, dateOfEmployment, id);
        this._position = 'Слесарь';
    }
}

class Driver extends Employee {
    constructor(firstname, surname, age, organization, category, presenceOfChildren, dateOfEmployment, id = 0) {
        super(firstname, surname, age, organization, category, presenceOfChildren, dateOfEmployment, id);
        this._position = 'Водитель';
    }
}

class Table {
    create(employee) {
        const table = document.createElement('table');

        table.append(this.tr([this.td('Имя', employee.firstname), this.td('Фамилия', employee.surname)]));
        table.append(this.tr([this.td('Возраст', employee.age)]));
        table.append(this.tr([this.td('Должность', employee.position)]));
        table.append(this.tr([this.td('Организация', employee.organization), this.td('Разряд', employee.category)]));
        table.append(this.tr([this.td('Наличие детей', employee.presenceOfChildren ? 'есть' : 'нет')]));
        table.append(this.tr([this.td('Дата принятия на работу', employee.dateOfEmployment)]));
        table.append(this.tr([this.btnDeleteCard(employee.id)]));

        return table;
    }

    td(labelText, value) {
        const td = document.createElement('td');
        const span = document.createElement('span');

        span.textContent = `${labelText}: ${value}`;
        td.append(span)

        return td;
    }

    tr(tds) {
        const tr = document.createElement('tr');

        tds.forEach(td => tr.append(td));

        return tr;
    }

    btnDeleteCard(id) {
        const btn = document.createElement('button');
        btn.classList.add('del');
        btn.setAttribute('id-card', id);
        btn.textContent = 'Удалить';

        btn.addEventListener('click', () => {
            setData('employers', getData('employers').filter(employee => employee._id !== id));
            render();
        });

        return btn;
    }
}

class WorkDOM {
    static appendCard(card) {
        app.append(card);
        app.append(document.createElement('br'));
    }
}

class CheckForm {
    static isEmpty(fields) {
        for (let el of fields) {
            if (!el.trim()) return true;
        }

        return false;
    }

    static isNumber(fields) {
        for (let el of fields) {
            if (!isNaN(parseInt(el)) && isFinite(el)) return false;
        }
        
        return true;
    }
}

render();