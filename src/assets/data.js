import valorantImg from './images/valorant.jpg'
import brawlStarsImg from './images/brawl-stars.jpg'
export const gamesData = [
    {
        id: 1,
        nombre: "Valorant",
        responsable: "Alexandra Lecca",
        contacto: "987654321",
        inscripcionUrl: "https://forms.gle/segDWJ3fBHnXmcTV9",
        imagen: valorantImg,
        premios: [
            "El primer puesto obtendrá un premio monetario de acuerdo a lo recaudado en las inscripciones y los respectivos 30 puntos para su promoción. Para el segundo puesto sólo se acreditará los 15 puntos a su respectiva promoción.",
        ], equiposParticipantes: [
            "Participarán todos los jugadores que se hayan inscrito previamente.",
            "El torneo está destinado a estudiantes y egresados de la Escuela de Ingeniería de Sistemas.",
            "Todos los inscritos serán agregados al grupo de WhatsApp del torneo."
        ],
        juegoModalidad: [
            "Plataforma: PC",
            "Modo de juego: Captura la Spike",
            "Mapa: Elección del capitán del equipo ganador en un mejor de 3 (1vs1)",
            "Formato: Torneo por equipos (5 jugadores) y 2 suplentes."
        ],
        inscripcion: [
            "Cada equipo debe tener un nombre representativo.",
            "Los participantes deben inscribirse de manera grupal (usernames).",
            "Pago de 25 soles al yape del responsable del torneo."
        ],
        reglas: [
            "El nombre del equipo no puede contener palabras obscenas u ofensivas.",
            "Se pueden traer refuerzos de otras carreras si conforman menos del 50% del equipo.",
            "Cada equipo debe mantener 5 jugadores durante el torneo."
        ],
        formatoEncuentros: [
            "El responsable crea la sala y añade a los capitanes.",
            "El staff corrobora la información de los jugadores antes de iniciar la partida.",
            "Se harán 3 rondas de eliminación en 1vs1."
        ],
        reglasJuego: [
            "Personajes: Cualquiera",
        ]
    },
    {
        id: 2,
        nombre: "Brawl Stars",
        responsable: "Alexandra Lecca",
        contacto: "987654321",
        inscripcionUrl: "https://forms.gle/segDWJ3fBHnXmcTV9",
        imagen: brawlStarsImg,
        premios: [
            "Premio para el primer puesto según lo recaudado. Segundo puesto obtiene 15 puntos para su promoción.",
        ],
        equiposParticipantes: [
            "Podrán participar alumnos y egresados de la EIS.",
            "Cada jugador debe contar con su cuenta Riot ID verificada.",
            "El torneo se desarrollará en formato eliminatorio."
        ],
        juegoModalidad: [
            "Plataforma: PC",
            "Modo: Competitivo estándar",
            "Formato: 5 jugadores titulares y 2 suplentes."
        ],
        inscripcion: [
            "Pago de 25 soles por equipo vía Yape.",
            "Rellenar formulario de Google con comprobante.",
            "Inscripciones abiertas hasta el 29 de enero."
        ],
        reglas: [
            "No se permiten insultos u ofensas.",
            "No está permitido el uso de bugs o glitches.",
            "Si un jugador se retira, el equipo debe avisar al organizador."
        ],
        formatoEncuentros: [
            "Partidas al mejor de 3.",
        ],
        reglasJuego: [
            "Modo: Competitivo",
            "Armas: Permitidas todas",
            "Trucos: No permitidos",
            "Tiempo extra: Sí",
            "Rondas: 13"
        ]
    }
];
