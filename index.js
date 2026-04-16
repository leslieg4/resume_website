/* Typewriter Effect */
const phrases = [
    'whoami',
    'ls ./projects',
    'git commit -m "build cool things"',
    'npm run start'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById('typewriter');
 
function type() {
    const current = phrases[phraseIndex];
 
    if (isDeleting) {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
    }
 
    let delay = isDeleting ? 40 : 80;
 
    if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400;
    }
 
    setTimeout(type, delay);
}
 
type();

/* Scroll Reveal */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
 
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
