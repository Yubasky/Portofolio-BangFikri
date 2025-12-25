document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearSpan = document.querySelector('#year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth Scroll for setup links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section'); // Add CSS class for initially hidden
        observer.observe(section);
    });
});
