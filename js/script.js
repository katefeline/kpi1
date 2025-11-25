// Burger menu functionality
const burgerMenu = document.getElementById('burger-menu');
const mainNav = document.getElementById('main-nav');

if (burgerMenu && mainNav) {
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Dropdown menu functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    // Toggle dropdown on click for mobile/touch devices
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
        
        // Close other dropdowns
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal popup functionality
const formModal = document.getElementById('form-modal');
const openFormBtn = document.getElementById('open-form-btn');
const closeModalBtn = document.getElementById('close-modal');

if (openFormBtn && formModal) {
    // Open modal
    openFormBtn.addEventListener('click', function() {
        formModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
}

if (closeModalBtn && formModal) {
    // Close modal
    closeModalBtn.addEventListener('click', function() {
        formModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
}

// Close modal when clicking outside the form
if (formModal) {
    formModal.addEventListener('click', function(e) {
        if (e.target === formModal) {
            formModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Auto-open modal after 3 seconds
    setTimeout(function() {
        formModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 3000);
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };
        
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        
        this.reset();
        
        // Close modal after submission
        if (formModal) {
            formModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

console.log('Website loaded successfully!');