// ==================== SMOOTH SCROLL ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.querySelector('.menu-toggle').classList.remove('active');
            }
        }
    });
});

// ==================== MOBILE MENU ==================== 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    }
});

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card').forEach(el => {
    observer.observe(el);
});

// ==================== NAVBAR BACKGROUND ON SCROLL ==================== 
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(233, 30, 99, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== ACTIVE NAV LINK ==================== 
const navLinksElements = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        } else {
            link.style.color = 'var(--text-gray)';
        }
    });
});

// ==================== FORM SUBMISSION (if added) ==================== 
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add form handling logic here
        console.log('Form submitted');
    });
}

// ==================== PAGE LOAD ANIMATION ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== PARTICLES EFFECT (Optional) ==================== 
function createParticles() {
    const particleContainer = document.querySelector('.hero');
    if (!particleContainer) return;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 300 + 100 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.zIndex = '0';
        particle.style.pointerEvents = 'none';
        particle.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;
        particleContainer.appendChild(particle);
    }
}

// Add float animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-40px) translateX(-10px); }
        75% { transform: translateY(-20px) translateX(10px); }
    }
`;
document.head.appendChild(style);

createParticles();

// ==================== KEYBOARD NAVIGATION ==================== 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu on Escape
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// ==================== CONSOLE LOG ==================== 
console.log('%c👋 Bienvenue sur le portfolio de Meryem TOUHAFI RIFFI!', 'color: #e91e63; font-size: 20px; font-weight: bold;');
console.log('%c📧 Email: m.touhafiriffi@esisa.ac.ma', 'color: #d81b60; font-size: 12px;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/meryem-touhafi-riffi-173a58398', 'color: #d81b60; font-size: 12px;');
console.log('%c🎓 ESISA - 1ère année Génie Logiciel (IL)', 'color: #d81b60; font-size: 12px;');
