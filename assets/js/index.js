const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');

    }


});

window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});

document.querySelectorAll('.btn-main').forEach(btn => {
    const iconVoice = btn.parentElement.querySelector('.icon-voice');
    const mainActions = btn.closest('.main-actions');

    btn.addEventListener('mouseenter', () => {
        if (iconVoice) {
            iconVoice.classList.add('icon-hover');
        }
        mainActions.classList.add('active'); // Добавляем класс active

    });

    btn.addEventListener('mouseleave', () => {
        if (iconVoice) {
            iconVoice.classList.remove('icon-hover');
        }
        mainActions.classList.remove('active'); // Удаляем класс active

    });
});


function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.often-asks-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    // Переключаем активный класс только для выбранного элемента
    item.classList.toggle('active');
}

document.querySelectorAll('.often-asks-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.asks-list-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});


function updateSlider(slider, valueDisplay) {
    const tempSliderValue = slider.value;
    valueDisplay.textContent = tempSliderValue;

    const progress = (tempSliderValue / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, #0057FF ${progress}%, #ccc ${progress}%)`;
}

document.querySelectorAll('.range-input').forEach(sliderEl => {
    const valueDisplay = document.querySelector(sliderEl.getAttribute('data-value'));

    sliderEl.addEventListener('input', () => updateSlider(sliderEl, valueDisplay));

    updateSlider(sliderEl, valueDisplay);
})


function handleScroll() {
    const elements = document.querySelectorAll('.scroll-element');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

document.querySelectorAll('.song-images-column').forEach((column) => {
    column.addEventListener('mouseover', () => {
        column.style.animationPlayState = 'paused';
    });

    column.addEventListener('mouseout', () => {
        column.style.animationPlayState = 'running';
    });
});



