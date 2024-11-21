

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
        if (window.innerWidth > 1000) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pin-content',
                    start: 'top top',
                    end: '+=1000',
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            timeline.to('.animation-card', {
                yPercent: -100,
                ease: 'none',
                stagger: 0.1,
            });
        }
    };

    initAnimation();

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimation();
    });
});





document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const initAnimation = () => {
        if (window.innerWidth > 1000) {
            gsap.fromTo(
                '.song-about-item',
                {
                    scale: 3.5,
                    opacity: 0,
                    y: -800,
                    z: -700,
                },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    z: 0,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '.song-about-section',
                        start: 'top 20%',
                        end: 'top bottom',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    };

    initAnimation();

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimation();
    });
});

