const heartRain = document.getElementById("heart-rain");
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");

let musicStarted = false;

/* Crea un corazón azul que cae desde arriba */
function createFallingHeart() {
  const heart = document.createElement("span");

  const size = Math.random() * 16 + 12;
  const duration = Math.random() * 5 + 6;
  const left = Math.random() * 100;
  const drift = Math.random() * 160 - 80;

  heart.className = "rain-heart";
  heart.textContent = "💙";

  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.setProperty("--drift", `${drift}px`);

  heartRain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

/* Inicia la lluvia poco a poco para no afectar el rendimiento */
function startHeartRain() {
  for (let i = 0; i < 10; i++) {
    setTimeout(createFallingHeart, i * 450);
  }

  setInterval(createFallingHeart, 700);
}

/* Actualiza el aspecto y accesibilidad del botón de música */
function updateMusicButton() {
  const isPlaying = !music.paused;

  musicButton.classList.toggle("playing", isPlaying);
  musicButton.setAttribute("aria-pressed", String(isPlaying));
  musicButton.setAttribute(
    "aria-label",
    isPlaying ? "Pausar música" : "Reproducir música",
  );
  musicButton.setAttribute(
    "title",
    isPlaying ? "Pausar música" : "Reproducir música",
  );

  musicIcon.textContent = isPlaying ? "❚❚" : "▶";
}

/*
  Los navegadores bloquean audio automático con sonido.
  Por eso la música intenta comenzar con el primer toque, clic o tecla.
*/
async function startMusicOnFirstInteraction() {
  if (musicStarted) return;

  try {
    music.volume = 0.45;
    await music.play();

    musicStarted = true;
    updateMusicButton();
  } catch (error) {
    console.log("La música necesita una interacción adicional:", error);
  }
}

/* Eventos de primera interacción en la página */
["click", "touchstart", "keydown"].forEach((eventName) => {
  window.addEventListener(eventName, startMusicOnFirstInteraction, {
    once: true,
    passive: eventName === "touchstart",
  });
});

/* Control manual: reproducir o pausar */
musicButton.addEventListener("click", async (event) => {
  event.stopPropagation();

  if (music.paused) {
    try {
      music.volume = 0.45;
      await music.play();
      musicStarted = true;
    } catch (error) {
      console.log("No se pudo iniciar la música:", error);
    }
  } else {
    music.pause();
  }

  updateMusicButton();
});

/* Mantiene sincronizado el botón si el audio cambia de estado */
music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);

/* Inicia el fondo animado */
startHeartRain();
updateMusicButton();
