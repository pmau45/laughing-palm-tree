// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        
        // Change icon
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    // Close menu when clicking a link
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with .reveal class
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Form submission handler with Netlify Forms integration
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formContainer = this.parentElement;
        const formData = new FormData(e.target);
        const formId = e.target.getAttribute('name');
        
        // Add form-name for Netlify
        formData.append('form-name', formId);
        
        // Submit form using fetch
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Show success message using DOM methods for security
            const successMessage = document.createElement('div');
            successMessage.style.cssText = 'padding: 2rem; background: var(--gold-dk); border-radius: 8px; text-align: center; margin-top: 1rem;';
            successMessage.setAttribute('role', 'status');
            successMessage.setAttribute('aria-live', 'polite');
            
            const heading = document.createElement('h3');
            heading.style.cssText = 'color: var(--gold); margin-bottom: 1rem;';
            heading.textContent = 'Thank you for your interest!';
            
            const paragraph = document.createElement('p');
            paragraph.textContent = 'We will contact you soon. For immediate assistance, please call ';
            
            const phoneLink = document.createElement('a');
            phoneLink.href = 'tel:9044587561';
            phoneLink.style.cssText = 'color: var(--gold-lt); font-weight: bold;';
            phoneLink.textContent = '(904) 458-7561';
            
            paragraph.appendChild(phoneLink);
            paragraph.appendChild(document.createTextNode('.'));
            
            successMessage.appendChild(heading);
            successMessage.appendChild(paragraph);
            
            // Hide form visually but keep in DOM for accessibility
            this.setAttribute('aria-hidden', 'true');
            this.style.display = 'none';
            formContainer.appendChild(successMessage);
            
            // Focus on success message for screen readers
            successMessage.setAttribute('tabindex', '-1');
            successMessage.focus();
            
            // Scroll to message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(error => {
            console.error('Form submission error:', error);
            alert('There was an error submitting your form. Please try again or call us directly at (904) 458-7561.');
        });
    });
}
