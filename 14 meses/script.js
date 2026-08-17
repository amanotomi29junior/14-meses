const fechaInicio = new Date(2025, 5, 17, 0, 0, 0);

const cartas = [
  {
    mes: "Junio de 2025",
    preview: "Junio 2025",
    texto:
      "Junio fue el comienzo de algo que para mí se volvió demasiado especial. Quizás en ese momento no imaginábamos todo lo que íbamos a vivir, pero desde que llegaste a mi vida comenzaste a ocupar un lugar muy bonito en mi corazón. Gracias por cada conversación, cada sonrisa y cada momento que hizo que poco a poco nos convirtiéramos en nosotros."
  },
  {
    mes: "Julio de 2025",
    preview: "Julio 2025",
    texto:
      "Julio llegó y contigo también llegaron más razones para sentirme feliz. Me gusta pensar en cómo hemos ido construyendo esto con detalles, palabras, risas y momentos que tal vez parecen pequeños, pero que para mí significan muchísimo. Tenerte en mi vida ha sido una de las cosas más lindas que me han pasado."
  },
  {
    mes: "Agosto de 2025",
    preview: "Agosto 2025",
    texto:
      "Agosto me recuerda que el tiempo contigo no se siente como tiempo perdido, sino como recuerdos que quiero guardar para siempre. Contigo entendí que amar no siempre es hacer cosas enormes; también es preocuparse, estar presente, escuchar y elegir a una persona todos los días. Y yo te elijo a ti."
  },
  {
    mes: "Septiembre de 2025",
    preview: "Septiembre 2025",
    texto:
      "Septiembre fue otro capítulo de nuestra historia, uno que me hizo darme cuenta de lo mucho que vales para mí. Me encanta tu forma de ser, tu manera de hacerme sentir y esa capacidad que tienes de iluminar incluso mis días más normales. Gracias por ser refugio, alegría y una razón tan bonita para sonreír."
  },
  {
    mes: "Octubre de 2025",
    preview: "Octubre 2025",
    texto:
      "Octubre me hace pensar en todos los momentos que todavía nos faltan por vivir. Quiero seguir creando recuerdos contigo, compartiendo sueños, riéndonos de cualquier cosa y acompañándonos en cada etapa. No sé exactamente qué nos espera en el futuro, pero sí sé que deseo que tú estés en él."
  },
  {
    mes: "Noviembre de 2025",
    preview: "Noviembre 2025",
    texto:
      "Noviembre llegó para recordarme que, incluso cuando las cosas no son perfectas, tener a alguien como tú hace una gran diferencia. Gracias por tu cariño, por tu paciencia y por cada vez que has estado para mí. Eres una persona increíble, y espero que nunca dudes de lo importante que eres para mi corazón."
  },
  {
    mes: "Diciembre de 2025",
    preview: "Diciembre 2025",
    texto:
      "Diciembre tiene algo mágico, pero para mí lo más bonito ha sido poder compartir parte de esa magia contigo. Tu presencia hace que los momentos se sientan más cálidos y que las fechas tengan un significado más especial. Gracias por regalarme tu amor y por permitir que yo también forme parte de tu vida."
  },
  {
    mes: "Enero de 2026",
    preview: "Enero 2026",
    texto:
      "Enero fue el inicio de un nuevo año, pero yo solo podía pensar en seguir sumando días, meses y recuerdos a tu lado. Me ilusiona imaginar todo lo que podemos alcanzar juntos, apoyándonos y celebrando cada pequeña victoria. Eres alguien a quien quiero cuidar, valorar y tener siempre cerca."
  },
  {
    mes: "Febrero de 2026",
    preview: "Febrero 2026",
    texto:
      "Febrero, el mes del amor, me recuerda que contigo descubrí un sentimiento muy bonito y sincero. No necesito una fecha especial para decirte cuánto te quiero, pero hoy quiero que sepas que mi cariño por ti crece cada día. Gracias por ser mi persona favorita, por hacerme sentir querido y por llenar mi vida de tanto amor."
  },
  {
    mes: "Marzo de 2026",
    preview: "Marzo 2026",
    texto:
      "Marzo llegó con más momentos para confirmar que lo nuestro es importante para mí. A tu lado he aprendido que amar también es aprender, tener paciencia, comunicarse y seguir eligiéndose incluso en los días difíciles. Quiero que sepas que valoro cada esfuerzo, cada detalle y cada pedacito de tiempo que compartes conmigo."
  },
  {
    mes: "Abril de 2026",
    preview: "Abril 2026",
    texto:
      "Abril me hace recordar que eres una de las personas más bonitas que tengo en mi vida. No solo por lo que haces, sino por quien eres: por tu esencia, tu forma de sentir, tu sonrisa y todo eso que te hace ser tan especial. Me siento muy afortunado de poder llamarte mi amor."
  },
  {
    mes: "Mayo de 2026",
    preview: "Mayo 2026",
    texto:
      "Mayo fue otro mes para admirar lo mucho que hemos avanzado y todo lo que hemos compartido. Puede que no todo haya sido perfecto, pero cada experiencia nos ha dado algo que aprender y nos ha hecho llegar hasta estos 14 meses. Y para mí, seguir aquí contigo es una de las decisiones más bonitas que puedo tomar."
  },
  {
    mes: "Junio de 2026",
    preview: "Junio 2026",
    texto:
      "Junio vuelve a llegar, y con él vuelven los recuerdos del inicio de esta historia tan linda. Mirar atrás me hace sonreír, porque hemos construido algo que nació de nosotros y que sigue creciendo con cada detalle. Gracias por cada momento desde aquel primer junio hasta hoy."
  },
  {
    mes: "Julio de 2026",
    preview: "Julio 2026",
    texto:
      "Julio nos encuentra celebrando 14 meses, y no puedo evitar sentir una felicidad enorme por tenerte. Gracias por ser mi Duby, mi compañía, mi alegría y una persona tan importante en mi vida. Te quiero con todo mi corazón, y deseo que esto sea solo una pequeña parte de todos los meses, años, abrazos, sueños y hermosos recuerdos que todavía nos quedan por vivir juntos. ❤️"
  }
];

const welcomeScreen = document.getElementById("welcomeScreen");
const lettersScreen = document.getElementById("lettersScreen");
const finalScreen = document.getElementById("finalScreen");

const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const restartButton = document.getElementById("restartButton");

const envelopeWrapper = document.getElementById("envelopeWrapper");
const envelope = document.getElementById("envelope");
const openHint = document.getElementById("openHint");
const letterPaper = document.getElementById("letterPaper");
const nextButton = document.getElementById("nextButton");

const progressTitle = document.getElementById("progressTitle");
const previewMonth = document.getElementById("previewMonth");
const letterNumber = document.getElementById("letterNumber");
const letterMonth = document.getElementById("letterMonth");
const letterText = document.getElementById("letterText");

let cartaActual = 0;
let cartaAbierta = false;

function pad(numero) {
  return String(numero).padStart(2, "0");
}

function actualizarContador() {
  const ahora = new Date();

  if (ahora < fechaInicio) return;

  let cursor = new Date(fechaInicio);
  let años = ahora.getFullYear() - cursor.getFullYear();

  cursor.setFullYear(cursor.getFullYear() + años);

  if (cursor > ahora) {
    años--;
    cursor.setFullYear(cursor.getFullYear() - 1);
  }

  let meses =
    (ahora.getFullYear() - cursor.getFullYear()) * 12 +
    (ahora.getMonth() - cursor.getMonth());

  cursor.setMonth(cursor.getMonth() + meses);

  if (cursor > ahora) {
    meses--;
    cursor.setMonth(cursor.getMonth() - 1);
  }

  const diferencia = ahora - cursor;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("years").textContent = años;
  document.getElementById("months").textContent = meses;
  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = pad(horas);
  document.getElementById("minutes").textContent = pad(minutos);
  document.getElementById("seconds").textContent = pad(segundos);
}

function cargarCarta(indice) {
  const carta = cartas[indice];
  const numero = indice + 1;

  progressTitle.textContent = `Carta ${numero} de ${cartas.length}`;
  previewMonth.textContent = carta.preview;
  letterNumber.textContent = `Carta ${numero} de ${cartas.length}`;
  letterMonth.textContent = carta.mes;
  letterText.textContent = carta.texto;

  nextButton.innerHTML =
    indice === cartas.length - 1
      ? 'Ver nuestro final <span>♥</span>'
      : 'Abrir la siguiente carta <span>→</span>';

  cartaAbierta = false;
  envelope.classList.remove("open");
  envelope.setAttribute("aria-expanded", "false");
  envelopeWrapper.classList.remove("opened");
  letterPaper.classList.remove("visible");
  openHint.textContent = "Toca el sobre para abrir la carta";
}

function abrirCarta() {
  if (cartaAbierta) return;

  cartaAbierta = true;
  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");
  openHint.textContent = "Una carta escrita para ti...";

  setTimeout(() => {
    envelopeWrapper.classList.add("opened");
    letterPaper.classList.add("visible");
  }, 800);
}

function siguienteCarta() {
  if (cartaActual === cartas.length - 1) {
    lettersScreen.classList.add("hidden");
    finalScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  cartaActual++;
  cargarCarta(cartaActual);
}

function irAInicio() {
  cartaActual = 0;
  cargarCarta(cartaActual);

  lettersScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  lettersScreen.classList.remove("hidden");

  cartaActual = 0;
  cargarCarta(cartaActual);

  window.scrollTo({ top: 0, behavior: "smooth" });
});

envelope.addEventListener("click", abrirCarta);
nextButton.addEventListener("click", siguienteCarta);
backButton.addEventListener("click", irAInicio);

restartButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  lettersScreen.classList.remove("hidden");

  cartaActual = 0;
  cargarCarta(cartaActual);

  window.scrollTo({ top: 0, behavior: "smooth" });
});

actualizarContador();
setInterval(actualizarContador, 1000);
cargarCarta(cartaActual);