// Control de música ambiental ultra minimalista
const ambientMusic = document.getElementById('ambientMusic');
const musicCtrl = document.getElementById('musicCtrl');
let isMusicPlaying = false;

// Configuración inicial
ambientMusic.volume = 0.2; // Volumen bajo y agradable

function toggleAmbientMusic() {
    if (isMusicPlaying) {
        // Pausar con fade out
        fadeOutMusic();
        isMusicPlaying = false;
        musicCtrl.classList.remove('playing');
        document.body.classList.remove('music-active');
        localStorage.setItem('ambientMusic', 'off');
        showToast('Música en pausa');
    } else {
        // Reproducir con fade in
        ambientMusic.play().then(() => {
            fadeInMusic();
            isMusicPlaying = true;
            musicCtrl.classList.add('playing');
            document.body.classList.add('music-active');
            localStorage.setItem('ambientMusic', 'on');
            showToast('Música ambiental');
        }).catch(() => {
            showToast('Haz clic para escuchar música');
        });
    }
}

function fadeInMusic() {
    ambientMusic.volume = 0;
    const target = 0.2;
    let vol = 0;
    const fade = setInterval(() => {
        vol += 0.01;
        if (vol >= target) {
            ambientMusic.volume = target;
            clearInterval(fade);
        } else {
            ambientMusic.volume = vol;
        }
    }, 50);
}

function fadeOutMusic() {
    const start = ambientMusic.volume;
    let vol = start;
    const fade = setInterval(() => {
        vol -= 0.01;
        if (vol <= 0) {
            ambientMusic.volume = 0;
            ambientMusic.pause();
            clearInterval(fade);
        } else {
            ambientMusic.volume = vol;
        }
    }, 50);
}

function showToast(message) {
    const existing = document.querySelector('.music-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'music-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2000);
}

// Atajo de teclado: tecla 'M'
document.addEventListener('keydown', (e) => {
    if (e.key === 'm' && !e.ctrlKey && !e.metaKey && document.activeElement === document.body) {
        toggleAmbientMusic();
    }
});

// Cargar preferencia guardada (pero no auto-reproducir)
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('ambientMusic');
    if (saved === 'on') {
        musicCtrl.classList.add('playing');
        document.body.classList.add('music-active');
        // No auto-reproducir, esperar interacción
    }
});

// Resto de funcionalidades del blog
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    searchInput.addEventListener('input', function