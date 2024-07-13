


gsap.from(".project", { opacity: 0, y: 50, stagger: 0.3, duration: 1.5 });

// Optional: Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});