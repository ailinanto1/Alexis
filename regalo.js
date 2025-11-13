// Animacion de corazones
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💗";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

function mostrarCorazones() {
  const intervalo = setInterval(crearCorazon, 200);

  setTimeout(() => {
    clearInterval(intervalo);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#boton-corazones");
  if (boton) {
    boton.addEventListener("click", mostrarCorazones);
  }
});


// Música
document.addEventListener("DOMContentLoaded", () => {
  const musica = document.getElementById("musicaFondo");
  const botonMusica = document.getElementById("toggleMusica");

  const iniciarMusica = () => {
    musica.play().then(() => {
      console.log("🎶 Música iniciada");
    }).catch(err => {
      console.warn("Autoplay bloqueado, se reproducirá al tocar algo.");
    });
    document.removeEventListener("click", iniciarMusica);
    document.removeEventListener("touchstart", iniciarMusica);
  };

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);

  botonMusica.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      botonMusica.textContent = "🔊";
    } else {
      musica.pause();
      botonMusica.textContent = "🔈";
    }
  });
});



/* Mes a mes */
const botones = document.querySelectorAll(".mes-btn");
const galerias = document.querySelectorAll(".galeria-mes");
const descripcion = document.getElementById("descripcion-mes");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    botones.forEach((b) => b.classList.remove("active"));
    boton.classList.add("active");

    galerias.forEach((g) => (g.style.display = "none"));

    const mesSeleccionado = boton.getAttribute("data-mes");
    document.getElementById(`galeria-${mesSeleccionado}`).style.display =
      "flex";

    descripcion.textContent = `Mes actual: ${mesSeleccionado.charAt(0).toUpperCase() + mesSeleccionado.slice(1)
      }`;
  });
});



/*datos curiosos*/
const datos = [
  "Helado top: tramontana, menta granizada y dulche de leche granizado",
  "Serie favorita: The Walking Dead",
  "Color favorito: violeta oscuro",
  "Le encanta el vóley",
  "Es muy buen cocinero",
  "No le gusta que le toquen el pelo y la cara",
  "Toca excelentemente la guitarra",
  "Su comida fav son las empanadas",
  "No puede vivir sin la aquarius de pera",
  "Su banda favorita es Las pastillas Del Abuelo",
  "Es la persona mas fuerte que conozco",
  "Los géneros favoritos de peliculas son la comedia y el terror",
  "Es muy gracioso",
  "La paciencia no es una virtud",
  "No se levanta con la primera alarma",
  "El tema de las fechas le cuesta un poco",
  "Es muy inteligente",
  "Su postre favorito es el franui",
  "Canta muy bien",
  "Resuelve cualquier problema con la computadora",
  "Tiene un gran corazon <3",
  "Tiene una memoria impresionante",
  "Su sonrisa ilumina los días grises",
  "Es un hombre que resuelve",
  "Su superhéroe favorito es Flash",
  "Es detallista",
  "Su sonrisa es lo mas lindo del mundo",
  "Es muy protector con la gente que quiere",
  "Sus abrazos y besos son el mejor lugar del mundo",
  "Le gusta la soledad",
  "Su canción favorita es Crímenes Perfectos",
  "Sus ojos son los mas bellos del mundo",
  "Le gustan las caminatas",
  "Se duerme de la nada",
  "Es un pibe segundero",
  "tiene la risa mas contagiosa del mundo",
  "Se acuerda de detalles importantes",
];

let indice = 0;
const datoDiv = document.getElementById("dato");

document.getElementById("next").addEventListener("click", () => {
  cambiarDato(1);
});

document.getElementById("prev").addEventListener("click", () => {
  cambiarDato(-1);
});

function cambiarDato(direccion) {
  datoDiv.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + direccion + datos.length) % datos.length;
    datoDiv.textContent = datos[indice];

    datoDiv.style.opacity = 1;
  }, 300);
}



/*Dias juntos*/
const inicioNoviazgo = new Date(2024, 10, 30, 17, 0, 0); // Mes 10 = Noviembre

const $dias = document.getElementById("dias");
const $horas = document.getElementById("horas");
const $minutos = document.getElementById("minutos");
const $segundos = document.getElementById("segundos");

function dosDigitos(n) {
  return String(n).padStart(2, "0");
}

function actualizarContador() {
  const ahora = new Date();
  let diffMs = ahora - inicioNoviazgo;

  if (diffMs < 0) diffMs = 0;

  const totalSeg = Math.floor(diffMs / 1000);
  const dias = Math.floor(totalSeg / 86400);
  const horas = Math.floor((totalSeg % 86400) / 3600);
  const minutos = Math.floor((totalSeg % 3600) / 60);
  const segundos = totalSeg % 60;

  $dias.textContent = dias;
  $horas.textContent = dosDigitos(horas);
  $minutos.textContent = dosDigitos(minutos);
  $segundos.textContent = dosDigitos(segundos);
}

actualizarContador();
setInterval(actualizarContador, 1000);



/* Cartas de amor */
document.addEventListener("DOMContentLoaded", () => {
  const cartas = document.querySelectorAll(".carta-romantica");

  const sonidoAbrir = new Audio("https://cdn.pixabay.com/download/audio/2023/03/07/audio_37cf2e1a4c.mp3?filename=paper-open.mp3");
  const sonidoCerrar = new Audio("https://cdn.pixabay.com/download/audio/2022/10/16/audio_3b1f7a46e1.mp3?filename=page-flip-1.mp3");

  cartas.forEach(carta => {
    const esquina = carta.querySelector(".esquina");
    const cerrada = carta.querySelector(".carta-cerrada");

    cerrada.addEventListener("click", () => {
      carta.classList.add("abierta");
      sonidoAbrir.currentTime = 0;
      sonidoAbrir.play();
    });

    esquina.addEventListener("click", (e) => {
      e.stopPropagation();
      carta.classList.remove("abierta");
      sonidoCerrar.currentTime = 0;
      sonidoCerrar.play();
    });
  });
});




/*Objetivos juntos*/
const objetivos = [
  "Ser novios",
  "Viajar",
  "Vivir juntos",
  "Hacer un picnic en la plaza o costa",
  "Conocer a la familia del otro",
  "Ir al cine",
  "Escribir un diario",
  "Cumplir un aniversario especial",
  "Ver todas las películas o series que tenemos pendientes",
  "Pasar una linda navidad",
  "Tener una tradición anual",
  "Viajar a un lugar que ninguno haya visitado",
  "Ver el amanecer",
  "Adoptar una mascota",
  "Bailar",
  "Pasar un lindo año nuevo",
  "Tener una charla profunda",
  "Aprender algo juntos",
  "Hacer notas de amor a escondidas",
  "Hacer una cápsula del tiempo",
  "Visitar a la familia lejana",
  "Recrear nuestra primera cita",
  "Hacer una escapada de fin de semana",
  "Hacer una comida especial",
  "Hacer un desayuno en la cama",
  "Hacer un día de compras",
  "Ir a la playa",
  "Tener una noche de juegos de mesa o videojuegos",
  "Ir a un concierto o recital",
  "Armar una lista de “cosas por hacer antes de los 30/40”",
  "Hacer un álbum de fotos",
  "Hacer una maratón de nuestra saga favorita (pelis/libros)",
  "Cocinar un postre",
  "Formar una familia",
];

const contenedor = document.getElementById("objetivos-container");

let objetivosEstado = JSON.parse(localStorage.getItem("objetivosEstado")) || {};

objetivos.forEach((texto, index) => {
  const card = document.createElement("div");
  card.classList.add("objetivo-card");

  const span = document.createElement("span");
  span.textContent = texto;
  span.classList.add("objetivo-text");

  const estado = document.createElement("div");
  estado.classList.add("estado");

  if (objetivosEstado[index]) {
    estado.textContent = "Cumplido";
    estado.classList.add("cumplido");
  } else {
    estado.textContent = "Pendiente";
    estado.classList.add("pendiente");
  }

  card.addEventListener("click", () => {
    objetivosEstado[index] = !objetivosEstado[index];
    localStorage.setItem("objetivosEstado", JSON.stringify(objetivosEstado));

    if (objetivosEstado[index]) {
      estado.textContent = "Cumplido";
      estado.classList.remove("pendiente");
      estado.classList.add("cumplido");
    } else {
      estado.textContent = "Pendiente";
      estado.classList.remove("cumplido");
      estado.classList.add("pendiente");
    }
  });

  card.appendChild(span);
  card.appendChild(estado);
  contenedor.appendChild(card);
});



/*Playlist*/
const PLAYLIST_KEY = 'playlistIndex';

const tracks = [
  { type: 'spotify', id: '6l0ClSGxF3VwZIvxseYERY', title: 'Nuestras canciones' }, // No te imaginas
  { type: 'spotify', id: '4u5xLMRN0dgKBFFN8FiNgv', title: 'Nuestras canciones' }, // Mi niña bonita (no funciona)
  { type: 'spotify', id: '2L2o3dwHpLIVtpCDy1uBD4', title: 'Nuestras canciones' }, // Lo nuestro tiene magia
  { type: 'spotify', id: '3ydweVPwq9PCEVJ8WwqT6u', title: 'Nuestras canciones' }, // Loco (no funciona)
  { type: 'spotify', id: '2w1rgt3mIKrEGsEMalyIqy', title: 'Nuestras canciones'} //rompecabezas de amor
];

const embed = document.getElementById('playlist-embed');
const titleEl = document.getElementById('playlist-title');
const pillsEl = document.getElementById('playlist-pills');

let current = Number(localStorage.getItem(PLAYLIST_KEY) ?? 0);
if (current < 0 || current >= tracks.length) current = 0;

function urlFor(t) {
  if (t.type === 'youtube') return `https://www.youtube.com/embed/${t.id}?rel=0`;
  const kind = t.id.length > 30 ? 'playlist' : 'track';
  return `https://open.spotify.com/embed/${kind}/${t.id}`;
}

function renderTrack(i) {
  const t = tracks[i];
  embed.innerHTML = `<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy" src="${urlFor(t)}"></iframe>`;
  titleEl.textContent = t.title;
  [...pillsEl.children].forEach((p, idx) => p.classList.toggle('active', idx === i));
  localStorage.setItem(PLAYLIST_KEY, String(i));
}

function buildPills() {
  pillsEl.innerHTML = '';
  tracks.forEach((t, i) => {
    const b = document.createElement('button');
    b.className = 'playlist-pill';
    b.textContent = i + 1;
    b.addEventListener('click', () => { current = i; renderTrack(current); });
    pillsEl.appendChild(b);
  });
}

document.getElementById('pl-prev').addEventListener('click', () => {
  current = (current - 1 + tracks.length) % tracks.length;
  renderTrack(current);
});
document.getElementById('pl-next').addEventListener('click', () => {
  current = (current + 1) % tracks.length;
  renderTrack(current);
});

buildPills();
renderTrack(current);



// Pinguino enamorado <3
let puedeAparecer = true;

function crearPinguino() {
  if (!puedeAparecer) return;
  puedeAparecer = false;

  const pinguino = document.createElement("img");
  pinguino.src = "imagenes/pinguin.png";
  pinguino.alt = "Pingüino";
  pinguino.classList.add("pinguino");

  const lado = Math.random() < 0.5 ? "izquierda" : "derecha";
  const pinguinoAltura = 80;
  const margenSuperior = 20;
  const margenInferior = window.innerHeight - pinguinoAltura - 40;

  const y = Math.random() * (margenInferior - margenSuperior) + margenSuperior;

  const scrollY = window.scrollY;
  pinguino.style.top = `${scrollY + y}px`;

  if (lado === "izquierda") {
    pinguino.style.left = "-100px";
  } else {
    pinguino.style.right = "-100px";
  }

  document.body.appendChild(pinguino);

  const animacionEntrada = lado === "izquierda" ? "entrar-izquierda" : "entrar-derecha";
  const animacionSalida = lado === "izquierda" ? "salir-izquierda" : "salir-derecha";
  pinguino.classList.add(animacionEntrada);

  const mensajes = [
    "Prometo seguir eligiéndote todos los días 💞",
    "Te amo con todo lo que soy 💫",
    "Quiero mi besito 😚",
    "Sos mi persona favorita en el mundo <3",
    "Tu sonrisa es mi lugar feliz 🌸",
    "Desde que te conocí, no hay ojos más bellos que los tuyos 💕",
    "Me hacés feliz sin siquiera intentarlo 💖",
    "No necesito nada más si estás conmigo 💋",
    "Cada día a tu lado vale la pena 💐",
    "Sos mi pensamiento favorito del día 💭",
    "Tu risa es mi canción preferida 🎶",
    "Si estoy contigo, todo está más que bien 💗",
    "Te elijo en todas mis vidas ✨",
    "Sos el abrazo que más necesito 🤗",
    "No hay distancia que apague lo que siento 💌",
    "Mi corazón sonríe cuando pienso en vos 💓",
    "Quisiera congelar el tiempo cuando te abrazo 🕰️",
    "Sos mi rayito de sol en los días fríos ☀️",
    "No sabía lo que era el amor hasta que te conocí 💞",
    "Tu mirada me desarma cada vez 😍",
    "Sos mi casa, mi paz y mi alegría 🏡",
    "Amarte es mi parte favorita del día 💕",
    "Sos el pingüino de mi corazón 🐧💘",
    "Contigo todo tiene más color 🎨",
    "Gracias por existir y hacerme tan feliz 💝",
    "Si pudiera, te elegiría mil veces más 💫",
    "Sos el motivo de mi sonrisa tonta 😌",
    "Nunca dejes de ser mi razón para sonreír 💖",
    "El mundo es más bonito cuando estás cerca 🌎💞",
    "Te pienso, te extraño y te amo, todo al mismo tiempo 💋",
    "Sos mi mejor historia 💕",
    "Cada 'te amo' se queda corto contigo ❤️",
    "Sos mi suerte, mi calma y mi locura 🧸",
    "Con vos, los días grises se vuelven rosados 🌸",
    "Tu amor es mi lugar favorito del mundo 💗",
    "Solo vos lográs que mi corazón baile 🩷",
    "Sos mi persona, sin dudas 💫"
  ];

  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  const mensajeDiv = document.createElement("div");
  mensajeDiv.classList.add("mensaje-pinguino");
  mensajeDiv.textContent = mensaje;
  document.body.appendChild(mensajeDiv);

  setTimeout(() => {
    const rect = pinguino.getBoundingClientRect();
    mensajeDiv.style.left = `${lado === "izquierda" ? rect.left + 90 : rect.left - 160}px`;
    mensajeDiv.style.top = `${scrollY + rect.top - 10}px`;
    mensajeDiv.classList.add("visible");
  }, 2000);

  setTimeout(() => {
    mensajeDiv.classList.remove("visible");
    pinguino.classList.remove(animacionEntrada);
    pinguino.classList.add(animacionSalida);

    setTimeout(() => {
      pinguino.remove();
      mensajeDiv.remove();
      puedeAparecer = true;
      setTimeout(crearPinguino, 15000); 
    }, 2000);
  }, 7000);
}
window.addEventListener("load", () => {
  setTimeout(crearPinguino, 3000);
});



// Animación de scroll
const secciones = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  secciones.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});