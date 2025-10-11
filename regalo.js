// Animacion de corazones
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💗";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(corazon);

  // Eliminar cada corazón después de 5 segundos
  setTimeout(() => {
    corazon.remove();
  }, 5000);
}

function mostrarCorazones() {
  // Crear corazones cada 200ms durante 5 segundos
  const intervalo = setInterval(crearCorazon, 200);

  // Detener después de 5 segundos
  setTimeout(() => {
    clearInterval(intervalo);
  }, 5000);
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#boton-corazones");
  if (boton) {
    boton.addEventListener("click", mostrarCorazones);
  }
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
  "Los géneros favoritos de peliculas son la commedia y el terror",
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
  "Es muy pprotector con la gente que quiere",
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
  // animación de salida
  datoDiv.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + direccion + datos.length) % datos.length;
    datoDiv.textContent = datos[indice];

    // animación de entrada
    datoDiv.style.opacity = 1;
  }, 300); // tiempo de la animación
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

  // Por si alguien abre la página antes de la fecha (evita negativos)
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

// Arranca y actualiza cada segundo
actualizarContador();
setInterval(actualizarContador, 1000);



/*Objetivos juntos*/
const objetivos = [
  "Ser novios",
  "Viajar juntos",
  "Vivir juntos",
  "Hacer un picnic en la plaza o costa",
  "Conocer a la familia del otro",
  "Tener una mascota juntos",
  "Cumplir un aniversario especial",
  "Ver juntos todas las películas o series que tenemos pendientes.",
  "Pasar una navidad juntos",
  "Tener una tradición anual (ej: cena especial en cierta fecha)",
  "Viajar a un lugar que ninguno haya visitado",
  "Ver amanecer juntos",
  "Hacer una escapada de fin de semana",
  "Cocinar una comida especial",
  "Tener una noche de juegos de mesa o videojuegos juntos",
  "Ir juntos a un concierto o recital",
  "Armar una lista de “cosas por hacer antes de los 30/40”",
  "Hacer un álbum de fotos",
  "Hacer una maratón de nuestra saga favorita (pelis/libros)",
  "Cocinar un postre juntos",
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
  { type: 'spotify', id: '/6l0ClSGxF3VwZIvxseYERY', title: 'Nuestras canciones' },
  { type: 'spotify', id: '4u5xLMRN0dgKBFFN8FiNgv', title: 'Nuestras canciones' },
  { type: 'spotify', id: '2L2o3dwHpLIVtpCDy1uBD4', title: 'Nuestras canciones' },
  { type: 'spotify', id: '3ydweVPwq9PCEVJ8WwqT6u', title: 'Nuestras canciones' },
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