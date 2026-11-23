document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(
        '.hero-content, .hero-image, .intro, .menu-card, .contact'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(element => {
        element.classList.add('reveal');
        observer.observe(element);
    });
});
