// ==========================================
// 🎵 PLAYLIST
// ==========================================

const canciones = [

    {
        titulo: "I Wanna Be Yours",
        artista: "Arctic Monkeys",
        archivo: "musica/arctic-monkeys.mp3"
    },

    {
        titulo: "Café",
        artista: "Café Tacvba",
        archivo: "musica/Café-Tacvba.mp3"
    },

    {
        titulo: "Dark Red",
        artista: "Steve Lacy",
        archivo: "musica/dark-red.mp3"
    },

    {
        titulo: "DEVIL EYES",
        artista: "Hippie Sabotage",
        archivo: "musica/devil-eyes.mp3"
    },

    {
        titulo: "Earned It",
        artista: "The Weeknd",
        archivo: "musica/Earned-it.mp3"
    },

    {
        titulo: "Everybody Here Wants You",
        artista: "Jeff Buckley",
        archivo: "musica/Everybody-Here.mp3"
    },

    {
        titulo: "glamscure",
        artista: "glamscure",
        archivo: "musica/glamscure.mp3"
    },

    {
        titulo: "High Enough",
        artista: "K. Flay",
        archivo: "musica/High-Enough.mp3"
    },

    {
        titulo: "I'm No Angel",
        artista: "London After Midnight",
        archivo: "musica/im-no-angel.mp3"
    },

    {
        titulo: "Hasta Que Amanezca",
        artista: "Joan Sebastian",
        archivo: "musica/Hasta-que-amanezca.mp3"
    },

    {
        titulo: "KISS",
        artista: "I Was Made For Lovin' You",
        archivo: "musica/kiss.mp3"
    },

    {
        titulo: "Lifetime",
        artista: "Chris Grey",
        archivo: "musica/lifetime.mp3"
    },

    {
        titulo: "I Wanna Be Your Slave",
        artista: "Måneskin",
        archivo: "musica/maneskin.mp3"
    },

    {
        titulo: "Angel",
        artista: "Massive Attack",
        archivo: "musica/Massive-attack-angel.mp3"
    },

    {
        titulo: "An Eater",
        artista: "Matt Martians",
        archivo: "musica/matt-martians.mp3"
    },

    {
        titulo: "Sacrifice",
        artista: "London After Midnight",
        archivo: "musica/Sacrifice.mp3"
    },

    {
        titulo: "ecstasy",
        artista: "SUICIDAL-IDOL",
        archivo: "musica/suicidal-idol.mp3"
    },

    {
        titulo: "House Of Balloons",
        artista: "The Weeknd",
        archivo: "musica/house-of-balloons.mp3"
    },

    {
        titulo: "The Zombie Song",
        artista: "Stephanie Mabey",
        archivo: "musica/the-zombie-song.mp3"
    }

];


// ==========================================
// 🎧 ELEMENTOS
// ==========================================

const audio = document.getElementById("audio");

const play = document.getElementById("play");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

const barraProgreso =
    document.getElementById("barraProgreso");

const volumen =
    document.getElementById("volumen");

const tituloCancion =
    document.getElementById("tituloCancion");

const artistaCancion =
    document.getElementById("artistaCancion");

const tiempoActual =
    document.getElementById("tiempoActual");

const duracion =
    document.getElementById("duracion");

const lista =
    document.getElementById("canciones");

const cantidad =
    document.getElementById("cantidadCanciones");

const disco =
    document.querySelector(".disco");


let indiceActual = 0;


// ==========================================
// 📜 CREAR PLAYLIST
// ==========================================

function crearPlaylist() {

    lista.innerHTML = "";

    cantidad.textContent =
        `${canciones.length} canciones`;

    canciones.forEach((cancion, indice) => {

        const elemento =
            document.createElement("div");

        elemento.className = "cancion";

        elemento.innerHTML = `

            <span class="numero">
                ${String(indice + 1).padStart(2, "0")}
            </span>

            <div class="nombre">

                <strong>
                    ${cancion.titulo}
                </strong>

                <small>
                    ${cancion.artista}
                </small>

            </div>

            <span class="icono">
                ♫
            </span>

        `;

        elemento.addEventListener(
            "click",
            () => {

                cargarCancion(indice);
                reproducir();

            }
        );

        lista.appendChild(elemento);

    });
}


// ==========================================
// 🎵 CARGAR CANCIÓN
// ==========================================

function cargarCancion(indice) {

    indiceActual = indice;

    const cancion =
        canciones[indiceActual];

    audio.src = cancion.archivo;

    audio.load();

    tituloCancion.textContent =
        cancion.titulo;

    artistaCancion.textContent =
        cancion.artista;

    barraProgreso.value = 0;

    tiempoActual.textContent = "0:00";

    duracion.textContent = "0:00";
}


// ==========================================
// ▶️ REPRODUCIR
// ==========================================

function reproducir() {

    audio.play()
        .then(() => {

            console.log(
                "Reproduciendo:",
                canciones[indiceActual].titulo
            );

        })
        .catch(error => {

            console.error(
                "ERROR AL REPRODUCIR:",
                error
            );

        });
}


// ==========================================
// ⏸️ PAUSAR
// ==========================================

function pausar() {

    audio.pause();

}


// ==========================================
// ▶️ BOTÓN PLAY
// ==========================================

play.addEventListener(
    "click",
    () => {

        if (audio.paused) {

            reproducir();

        } else {

            pausar();

        }

    }
);


// ==========================================
// 🎵 CUANDO EMPIEZA
// ==========================================

audio.addEventListener(
    "play",
    () => {

        play.textContent = "Ⅱ";

        if (disco) {

            disco.classList.add(
                "reproduciendo"
            );

        }

    }
);


// ==========================================
// ⏸️ CUANDO SE PAUSA
// ==========================================

audio.addEventListener(
    "pause",
    () => {

        play.textContent = "▶";

        if (disco) {

            disco.classList.remove(
                "reproduciendo"
            );

        }

    }
);


// ==========================================
// ⏭️ SIGUIENTE
// ==========================================

siguiente.addEventListener(
    "click",
    () => {

        indiceActual++;

        if (
            indiceActual >=
            canciones.length
        ) {

            indiceActual = 0;

        }

        cargarCancion(indiceActual);

        reproducir();

    }
);


// ==========================================
// ⏮️ ANTERIOR
// ==========================================

anterior.addEventListener(
    "click",
    () => {

        indiceActual--;

        if (indiceActual < 0) {

            indiceActual =
                canciones.length - 1;

        }

        cargarCancion(indiceActual);

        reproducir();

    }
);


// ==========================================
// 🔁 CUANDO TERMINA
// ==========================================

audio.addEventListener(
    "ended",
    () => {

        indiceActual++;

        if (
            indiceActual >=
            canciones.length
        ) {

            indiceActual = 0;

        }

        cargarCancion(indiceActual);

        reproducir();

    }
);


// ==========================================
// 📊 BARRA DE PROGRESO
// ==========================================

audio.addEventListener(
    "timeupdate",
    () => {

        if (!audio.duration) return;

        const porcentaje =
            (
                audio.currentTime /
                audio.duration
            ) * 100;

        barraProgreso.value =
            porcentaje;

        tiempoActual.textContent =
            convertirTiempo(
                audio.currentTime
            );

    }
);


// ==========================================
// ⏱️ DURACIÓN
// ==========================================

audio.addEventListener(
    "loadedmetadata",
    () => {

        duracion.textContent =
            convertirTiempo(
                audio.duration
            );

    }
);


// ==========================================
// 🎚️ MOVERSE POR LA CANCIÓN
// ==========================================

barraProgreso.addEventListener(
    "input",
    () => {

        if (!audio.duration) return;

        audio.currentTime =
            (
                barraProgreso.value /
                100
            ) *
            audio.duration;

    }
);


// ==========================================
// 🔊 VOLUMEN
// ==========================================

volumen.addEventListener(
    "input",
    () => {

        audio.volume =
            volumen.value;

    }
);


// ==========================================
// ⏱️ FORMATO DE TIEMPO
// ==========================================

function convertirTiempo(segundos) {

    if (isNaN(segundos)) {

        return "0:00";

    }

    const minutos =
        Math.floor(segundos / 60);

    const segundosRestantes =
        Math.floor(segundos % 60)
        .toString()
        .padStart(2, "0");

    return `${minutos}:${segundosRestantes}`;

}


// ==========================================
// 🚀 INICIAR
// ==========================================

audio.volume = 0.8;

crearPlaylist();

cargarCancion(0);