document.addEventListener('DOMContentLoaded', function() {
    // Show sticky subscribe bar on scroll
    window.addEventListener('scroll', function() {
        const stickySubscribe = document.getElementById('stickySubscribe');
        if (window.scrollY > 500) {
            stickySubscribe.style.display = 'block';
        } else {
            stickySubscribe.style.display = 'none';
        }
    });

    // Form submission handler
    const subscribeForm = document.getElementById('subscribeForm');
    subscribeForm.addEventListener('submit', handleSubscribe);

    // Add intersection observers for animation effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

function scrollToSubscribe() {
    document.querySelector('.subscribe-form').scrollIntoView({
        behavior: 'smooth'
    });
}

function handleSubscribe(event) {
    event.preventDefault();
    const email = event.target.querySelector('.email-input').value;
    
    // Add your email collection logic here
    console.log('Subscribed email:', email);
    
    // Show confirmation
    alert('Thanks for subscribing! We\'ll keep you updated on our time travel mission.');
    event.target.reset();
}