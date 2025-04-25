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

document.addEventListener('DOMContentLoaded', function() {
    // Animación de letras del subtítulo
    const letters = document.querySelectorAll('.hero-subtitle .letter');
    letters.forEach((letter, i) => {
        letter.style.animation = `fadeIn 0.5s ease forwards ${i * 0.1 + 0.5}s`;
        letter.style.opacity = '0';
    });

    // Efecto de máquina de escribir para el subtítulo
    const cursor = document.querySelector('.cursor');
    setTimeout(() => {
        cursor.style.animation = 'blink 0.8s infinite';
    }, (letters.length * 100) + 500);

    // Animación de las líneas del título
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, i) => {
        line.style.animation = `slideUp 0.8s ease forwards ${i * 0.2 + 1.5}s`;
        line.style.opacity = '0';
        line.style.transform = 'translateY(20px)';
    });

    // Animación de otros elementos
    const tagline = document.querySelector('.tagline');
    const buttons = document.querySelectorAll('.hero-buttons a');
    const socialIcons = document.querySelectorAll('.hero-social a');
    const heroImage = document.querySelector('.hero-image');

    tagline.style.animation = 'fadeIn 1s ease forwards 2.2s';
    tagline.style.opacity = '0';

    buttons.forEach((btn, i) => {
        btn.style.animation = `fadeIn 0.8s ease forwards ${2.4 + i * 0.2}s`;
        btn.style.opacity = '0';
    });

    socialIcons.forEach((icon, i) => {
        icon.style.animation = `fadeIn 0.5s ease forwards ${2.8 + i * 0.1}s`;
        icon.style.opacity = '0';
    });

    heroImage.style.animation = 'fadeInRight 1s ease forwards 1.5s';
    heroImage.style.opacity = '0';

    // Animación del badge
    const badge = document.querySelector('.hero-badge');
    badge.style.animation = 'fadeIn 0.8s ease forwards 0.8s';
    badge.style.opacity = '0';

    // Animación de los números de los links de navegación
    const navNumbers = document.querySelectorAll('.link-number');
    navNumbers.forEach((num, i) => {
        num.textContent = `0${i + 1}.`;
        num.style.animation = `fadeIn 0.5s ease forwards ${i * 0.1}s`;
        num.style.opacity = '0';
    });

    // Efecto flotante para la imagen
    const floatingImage = document.querySelector('.floating');
    function floatAnimation() {
        floatingImage.style.transform = `translateY(${Math.sin(Date.now() / 800) * 10}px)`;
        requestAnimationFrame(floatAnimation);
    }
    floatAnimation();
});