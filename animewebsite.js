document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation
    gsap.from('header', {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: 'power4.out'
    });

    // Intro section animation
    gsap.from('.intro', {
        duration: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.intro',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true
        }
    });

    // Gallery images animation
    gsap.from('.gallery-img', {
        scale: 0.8,
        duration: 0.5,
        opacity: 0.7,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        paused: true
    });

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('mouseover', () => {
            gsap.to(img, { scale: 1.1, opacity: 1, duration: 0.5 });
        });
        img.addEventListener('mouseout', () => {
            gsap.to(img, { scale: 0.8, opacity: 0.7, duration: 0.5 });
        });
    });

    // Gallery title animation
    gsap.from('.gallery-title', {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.gallery-title',
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: true
        }
    });

    // Contact
