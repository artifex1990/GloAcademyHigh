'use strict';

const Tag = function(name, text, cssStyle = {}) {
    this.generate = () => {
        const tag = document.createElement(name);
        tag.textContent = text.trim();
        tag.style.cssText = this.cssGenerate(cssStyle);

        return tag;
    }

    this.cssGenerate = (cssStyle) => {
        let template = '';

        for (let key in cssStyle) {
            template += `${key}: ${cssStyle[key]};`
        }

        return template;
    }
}

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.styles = {
        height: this.height,
        width: this.width,
        background: this.bg,
        'font-size': this.fontSize,
        top: '100px',
        left: '100px',
        position: 'absolute'
    };

    this.errorStyle = {
        color: 'red'
    };

    this.create = () => {
        let genTag = new Tag('h1', 'Нет правильного тега', this.errorStyle).generate();

        if (this.selector.indexOf('.') > -1) {
            genTag = new Tag('div', 'Контейнер с классом ' + this.selector.slice(1), this.styles).generate();
            genTag.classList.add(this.selector.slice(1));
        }

        if (this.selector.indexOf('#') > -1) {
            genTag = new Tag('p', 'параграф ' + this.selector.slice(1), this.styles).generate();
            genTag.id = this.selector.slice(1);
        }
        
        document.body.append(genTag);

        return genTag;
    }; 
};

document.addEventListener("DOMContentLoaded", () => {
    const block = new DomElement('.block', '100px', '100px', 'pink', '12px').create();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') block.style.top = `${parseInt(block.style.top) - 10}px`;
        if (event.key === 'ArrowLeft') block.style.left = `${parseInt(block.style.left) - 10}px`;
        if (event.key === 'ArrowRight') block.style.left = `${parseInt(block.style.left) + 10}px`;
        if (event.key === 'ArrowDown') block.style.top = `${parseInt(block.style.top) + 10}px`;
    });
});