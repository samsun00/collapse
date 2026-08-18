export default class Collapse {
    constructor(container) {
        this.container = container;
        this.button = container.querySelector('.collapse-btn');
        this.body = container.querySelector('.collapse-body');

        this.isOpen = false;
        this.init();
    }

    init() {
        this.button.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.body.classList.toggle('open');

        if (this.isOpen) {
            const contentHeight = this.body.scrollHeight;
            this.body.style.maxHeight = contentHeight + 'px';
        } else {
            this.body.style.maxHeight = '0px';
        }
    }
}
