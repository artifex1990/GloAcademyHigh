'use strict';

const firstnameInput = document.querySelector('input[name=firstname]');
const surnameInput = document.querySelector('input[name=surname]');
const ageInput = document.querySelector('input[name=age]');
const positionSelect = document.querySelector('select[name=position]');
const organizationInput = document.querySelector('input[name=organization]');
const categoryInput = document.querySelector('input[name=category]');
const presenceOfChildrenInput = document.querySelector('input[name=presenceOfChildren]');
const dateOfEmploymentInput = document.querySelector('input[name=dateOfEmployment]');
const saveBtn = document.querySelector('button[type=submit]');
const app = document.getElementById('app');

const forEventListener = [
    firstnameInput,
    surnameInput,
    organizationInput,
    ageInput,
    categoryInput
];

dateOfEmploymentInput.addEventListener('change', event => {
    event.target.checkValidity();
    event.target.setCustomValidity('');
    event.target.removeAttribute('required');
});
forEventListener.forEach(el => el.addEventListener('input', event => {
    event.target.checkValidity();
    event.target.setCustomValidity('');
    event.target.removeAttribute('required');
}));

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
    const tempClearAttributeRequired = forEventListener;

    tempClearAttributeRequired.push(dateOfEmploymentInput);
    tempClearAttributeRequired.forEach(el => {
        el.checkValidity();
        el.setCustomValidity('');
        el.removeAttribute('required');
    });

    firstnameInput.value = '';
    surnameInput.value = '';
    organizationInput.value = '';
    dateOfEmploymentInput.value = '';
    positionSelect.value = 'Слесарь';
    presenceOfChildrenInput.checked = false;
    ageInput.value = 16;
    categoryInput.value = 1;
};

saveBtn.addEventListener('click', (event) => {
    const employers = getData('employers');
    const fieldsForCheckOnEmpty = [
        firstnameInput,
        surnameInput,
        organizationInput,
        dateOfEmploymentInput
    ];
    const fieldsForCheckOnNumber = [
        ageInput,
        categoryInput
    ];
    const isEmpty = CheckForm.isEmpty(fieldsForCheckOnEmpty);
    const isNotNumber = !CheckForm.isNumber(fieldsForCheckOnNumber);
    const isNotAge = !CheckForm.isAge(ageInput);
    const isNotCategory = !CheckForm.isCategory(categoryInput);
    let employee = '';

    event.preventDefault();

    if (isEmpty || isNotNumber || isNotAge || isNotCategory) {
        return;
    }

    switch(positionSelect.options[positionSelect.selectedIndex].value) {
        case 'Слесарь':
            employee = new Plumber(firstnameInput.value, surnameInput.value, ageInput.value, organizationInput.value, categoryInput.value, presenceOfChildrenInput.checked, dateOfEmploymentInput.value);
            break;
        case 'Водитель':
            employee = new Driver(firstnameInput.value, surnameInput.value, ageInput.value, organizationInput.value, categoryInput.value, presenceOfChildrenInput.checked, dateOfEmploymentInput.value);
            break;    
    }

    employers.push(employee);
    setData('employers', employers);
    clearForm();
    render();
});

class Employee {
    constructor(
        firstname,
        surname,
        age,
        organization,
        category,
        presenceOfChildren,
        dateOfEmployment,
        id = 0
    ) {
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
    
    set firstname(firstname) {
        this._firstname = firstname;
    }

    get surname() {
        return this._surname;
    }

    set surname(surname) {
        this._surname = surname;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get organization() {
        return this._organization;
    }

    set organization(organization) {
        this._organization = organization;
    }

    get category() {
        return this._category;
    }

    set category(category) {
        this._category = category;
    }

    get presenceOfChildren() {
        return this._presenceOfChildren;
    }

    set presenceOfChildren(presenceOfChildren) {
        this._presenceOfChildren = presenceOfChildren;
    }

    get dateOfEmployment() {
        return this._dateOfEmployment;
    }

    set dateOfEmployment(dateOfEmployment) {
        this._dateOfEmployment = dateOfEmployment;
    }

    get position() {
        return this._position;
    }
}

class Plumber extends Employee {
    constructor(
        firstname,
        surname,
        age,
        organization,
        category,
        presenceOfChildren,
        dateOfEmployment,
        id = 0
    ) {
        super(firstname, surname, age, organization, category, presenceOfChildren, dateOfEmployment, id);
        this._position = 'Слесарь';
    }
}

class Driver extends Employee {
    constructor(
        firstname,
        surname,
        age,
        organization,
        category,
        presenceOfChildren,
        dateOfEmployment,
        id = 0
    ) {
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
        let isEmpty = false;

        for (let el of fields) {
            if (!el.value.trim()) {
                el.setAttribute('required', '');
                el.setCustomValidity('Поле не должно быть пустым!');
                el.checkValidity();

                isEmpty = true;
            } else {
                el.setCustomValidity('');
                el.removeAttribute('required');
            }
        }

        return isEmpty;
    }

    static isNumber(fields) {
        let isNumber = true;

        for (let el of fields) {
            if (!(!isNaN(parseInt(el.value)) && isFinite(el.value))) {
                el.setAttribute('required', '');
                el.setCustomValidity('Поле должно быть числовым!');
                el.checkValidity();

                isNumber = false;
            } else {
                el.setCustomValidity('');
                el.removeAttribute('required');
            }
        }
        
        return isNumber;
    }

    static isCategory(category) {
        const conditionCategory = 1 <= +category.value && +category.value <= 6;

        if (!conditionCategory) {
            category.setAttribute('required', '');
            category.setCustomValidity('Разряд может быть от 1 до 6!');
            category.checkValidity();
        } else {
            category.setCustomValidity('');
            category.removeAttribute('required');
        }

        return conditionCategory;
    }

    static isAge(age) {
        const conditionAge = 16 <= +age.value && +age.value <= 90;

        if (!conditionAge) {
            age.setAttribute('required', '');
            age.setCustomValidity('Возраст может быть от 16 до 90 лет!');
            age.checkValidity();
        } else {
            age.setCustomValidity('');
            age.removeAttribute('required');
        }

        return conditionAge;
    }
}

render();