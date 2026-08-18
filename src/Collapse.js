export default class Collapse {
    constructor(container) {
        this.container = container;
        this.button = container.querySelector('.collapse-btn');
        this.body = container.querySelector('.collapse-body');
        this.arrow = this.button.querySelector('.arrow');

        this.isOpen = false;
        this.init();
    }

    init() {
        this.button.addEventListener('click', this.toggle.bind(this));
        // Устанавливаем начальное состояние
        this.body.style.maxHeight = '0px';
        this.body.style.overflow = 'hidden';
        this.body.style.transition =
      'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out';
        this.body.style.opacity = '0';
    }

    toggle() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        const contentHeight = this.body.scrollHeight;
        this.body.style.maxHeight = contentHeight + 'px';
        this.body.style.opacity = '1';
        this.arrow.style.transform = 'rotate(180deg)';
    }

    close() {
        this.body.style.maxHeight = '0px';
        this.body.style.opacity = '0';
        this.arrow.style.transform = 'rotate(0deg)';
    }
}
