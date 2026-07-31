// File Name: script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling mechanism for navigation infrastructure
    const links = document.querySelectorAll('nav a, .hero-buttons a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only apply to internal anchor references
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    console.log("Nova Dev Studio visual framework successfully initialized.");
});