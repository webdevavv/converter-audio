



// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);
//
//
//     const initAnimation = () => {
//         // Проверка ширины экрана
//         if (window.innerWidth > 1000) {
//             // Закрепляем секцию и создаем таймлайн для движения карточек
//
//             gsap.to('.animation-card', {
//                 scrollTrigger: {
//                     trigger: '.pin-content', // Секция
//                     start: 'top top', // Начало пиннинга
//                     end: 'bottom bottom', // Продолжительность эффекта
//                     // end: '+=2000', // Продолжительность эффекта
//                     scrub: true, // Связь со скроллом
//                     pin: true, // Закрепляем секцию
//                     anticipatePin: 3, // Смягчение закрепления
//                     // markers: true, // Отладка (убрать в продакшене)
//                 },
//                 y: -500, // Движение вверх
//                 stagger: 0.2, // Задержка между анимациями карточек
//                 ease: 'power1.inOut', // Плавное ускорение и замедление
//             });
//
//         }
//     };
//
//     // Инициализация анимации при загрузке
//     initAnimation();
//
//     // Перезапуск анимации при изменении размера экрана
//     window.addEventListener('resize', () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Удаляем существующие ScrollTrigger
//         initAnimation();
//     });
//
// });







document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
        if (window.innerWidth > 1000) {
            // Закрепляем фон и создаем анимацию прокрутки карточек
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pin-content', // Секция для триггера
                    start: 'top top', // Начало эффекта
                    end: '+=1000', // Продолжительность скролла
                    scrub: true, // Связь с прокруткой
                    pin: true, // Фиксация секции
                    anticipatePin: 1, // Смягчение
                    // markers: true, // Для отладки
                }
            });

            timeline.to('.animation-card', {
                yPercent: -100, // Карточки прокручиваются вверх
                ease: 'none', // Без ускорения/замедления
                stagger: 0.1, // Лёгкая задержка между карточками
            });
        }
    };

    initAnimation();

    // Перезапуск анимации при изменении размера экрана
    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimation();
    });
});





document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
        // Проверка ширины экрана
        if (window.innerWidth > 1000) {
            // Анимация появления
            gsap.fromTo(
                '.song-about-item',
                {
                    scale: 3.5, // Уменьшенный размер (появляются из центра)
                    opacity: 0, // Изначально невидимые
                    y: -800, // Появляются снизу
                    z: -700, // Глубина
                },
                {
                    scale: 1, // Нормальный размер
                    opacity: 1, // Полностью видимые
                    y: 0, // На своих местах
                    z: 0, // Плоскость экрана
                    duration: 1, // Длительность появления
                    ease: 'power3.out', // Плавный эффект
                    stagger: 0.2, // Интервалы между карточками
                    scrollTrigger: {
                        trigger: '.song-about-section',
                        start: 'top top',
                        end: 'top bottom',
                        toggleActions: 'play none none reverse',
                        // markers: true, // Отладка (убрать в продакшене)
                    },
                }
            );
        }
    };

    // Инициализация анимации при загрузке
    initAnimation();

    // Перезапуск анимации при изменении размера экрана
    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Удаляем существующие ScrollTrigger
        initAnimation();
    });
});

