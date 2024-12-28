// Ensure the script runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Responsive Navigation Menu (for mobile screens)
    const nav = document.querySelector('nav ul');
    const toggleMenu = document.createElement('button');
    toggleMenu.textContent = '☰'; // Menu icon
    toggleMenu.classList.add('toggle-menu');
    document.querySelector('nav').prepend(toggleMenu);

    toggleMenu.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Add keyboard navigation support for accessibility
    toggleMenu.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            nav.classList.toggle('open');
        }
    });

    // Contact Form Submission Feedback
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault(); // Prevent actual form submission
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset(); // Clear the form
        });
    }

    // Dynamic Year in Footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} DXC HUB. All rights reserved.`;

    // Accordion for FAQs
    const faqSections = document.querySelectorAll('#faq div');
    faqSections.forEach(section => {
        const question = section.querySelector('h3');
        const answer = section.querySelector('p:last-of-type');
        question.addEventListener('click', () => {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            question.classList.toggle('open');
        });
    });

    // Blog Post Expandable Previews
    const blogReadMoreLinks = document.querySelectorAll('#blog a');
    blogReadMoreLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            alert('This feature will redirect you to the full article soon!');
        });
    });
});
