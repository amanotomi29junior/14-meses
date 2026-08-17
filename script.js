// Obtención de elementos del DOM
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

// Ajuste del volumen inicial
music.volume = 0.35;

// Función para iniciar el audio respetando las políticas del navegador
function startAudio() {
  music.play().catch(() => {
    // Si el navegador bloquea la reproducción automática, inicia con el primer clic en la pantalla
    document.addEventListener('click', () => music.play(), { once: true });
  });
}

window.addEventListener('load', startAudio);

// Botón para pausar o reanudar manualmente la música
musicToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

// Función para generar corazones flotantes dinámicamente
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.body.appendChild(heart);

  // Eliminar el corazón del DOM después de que cae
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Crear un corazón nuevo cada 300 milisegundos
setInterval(createHeart, 300);
