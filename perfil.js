document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    
    // Activar animación
    setTimeout(() => {
        subtitle.classList.add('animate');
        
        // Animación letra por letra
        const letters = document.querySelectorAll('.hero-subtitle .letter');
        letters.forEach((letter, i) => {
            letter.style.animationDelay = `${i * 0.1}s`;
        });
    }, 1000);
});