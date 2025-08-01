// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const headerHeight = document.querySelector('.header').offsetHeight;
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add loading animation to images
    const images = document.querySelectorAll('.step-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(img);
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-video');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Add typing effect to hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.style.minWidth = element.offsetWidth + 'px';
        element.style.minHeight = element.offsetHeight + 'px';
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize typing effect after a delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 100);
        }
    }, 1000);
    
    // Add glitch effect to certain elements
    function addGlitchEffect() {
        const glitchElements = document.querySelectorAll('.hero-title, .section-header h2');
        
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch 0.3s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            });
        });
    }
    
    // Add CSS for glitch animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        
        .active {
            color: var(--primary-green) !important;
            border-color: var(--primary-green) !important;
            box-shadow: 0 0 15px rgba(46, 204, 113, 0.5) !important;
            text-shadow: 0 0 5px var(--primary-green) !important;
        }
    `;
    document.head.appendChild(style);
    
    addGlitchEffect();
    
    // Console ASCII art
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                      GIGATECH1 SYSTEMS                      ║
    ║                ADVANCED COMPUTER RESTORATION                 ║
    ║                         PROTOCOLS                           ║
    ║                                                              ║
    ║              "THE FUTURE IS IN GOOD HANDS"                  ║
    ╚══════════════════════════════════════════════════════════════╝
    
    System Status: OPERATIONAL
    Security Level: MAXIMUM
    Access Granted: TUTORIAL MODE
    `);
});