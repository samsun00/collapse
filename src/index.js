import './styles.css';
import Collapse from './Collapse.js';

document.addEventListener('DOMContentLoaded', () => {
    // Создаем экземпляр Collapse для каждого контейнера
    const containers = document.querySelectorAll('.collapse-wrapper');

    containers.forEach((container, index) => {
    // Добавляем уникальный id если его нет
        const body = container.querySelector('.collapse-body');
        if (!body.id) {
            body.id = `collapse${index + 1}`;
        }

        // Инициализируем виджет
        new Collapse(container);
    });
});
