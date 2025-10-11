import './App.css'
import { useState } from 'react'
import valorantImg from './assets/images/valorant.jpg'
import brawlStarsImg from './assets/images/brawl-stars.jpg'
import left4DeadImg from './assets/images/left-4-dead-2.jpg'
import clashRoyaleImg from './assets/images/clash-royale.jpg'
import fifaImg from './assets/images/fifa.jpg'
import fallGuysImg from './assets/images/fall-guys.jpg'
import freeFireImg from './assets/images/free-fire.jpg'
import amongUsImg from './assets/images/among-us.jpg'
import dota2Img from './assets/images/dota-2.jpg'
import dragonBallImg from './assets/images/dragon-ball-sparking-zero.jpg'

function App() {
  const [selectedGame, setSelectedGame] = useState(null)
  const openDetails = (game) => setSelectedGame(game)
  const closeDetails = () => setSelectedGame(null)

  return (
    <div className="app-container">
      {selectedGame && (
        <div className="game-detail-overlay">
          <div
            className="detail-header"
            style={{ backgroundImage: `url(${selectedGame.image})` }}
          >
            <button className="back-button" onClick={closeDetails}>Volver</button>
            <div className="detail-info">
              <h1 className="detail-title">{selectedGame.title}</h1>
              <div className="detail-contact">
                <span className="detail-name">{selectedGame.responsible}</span>
                <span className="detail-phone">{selectedGame.phone}</span>
              </div>
            </div>
            <a
              href={selectedGame.inscriptionUrl}
              className="btn-primary cta-inscribe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscribirse Ahora
            </a>
          </div>
          <div className="detail-content">
            {/* Partículas de fondo del detalle */}
            <div className="detail-particles">
              <div className="detail-particle dp-1"></div>
              <div className="detail-particle dp-2"></div>
              <div className="detail-particle dp-3"></div>
              <div className="detail-particle dp-4"></div>
              <div className="detail-particle dp-5"></div>
              <div className="detail-particle dp-6"></div>
              <div className="detail-particle dp-7"></div>
              <div className="detail-particle dp-8"></div>
              <div className="detail-particle dp-9"></div>
              <div className="detail-particle dp-10"></div>
              <div className="detail-particle dp-11"></div>
              <div className="detail-particle dp-12"></div>
              <div className="detail-particle dp-13"></div>
              <div className="detail-particle dp-14"></div>
              <div className="detail-particle dp-15"></div>
              <div className="detail-particle dp-16"></div>
              <div className="detail-particle dp-17"></div>
              <div className="detail-particle dp-18"></div>
              <div className="detail-particle dp-19"></div>
              <div className="detail-particle dp-20"></div>
              <div className="detail-particle dp-21"></div>
              <div className="detail-particle dp-22"></div>
              <div className="detail-particle dp-23"></div>
              <div className="detail-particle dp-24"></div>
            </div>
            <div className="bento-grid">
              <div className="bento-card span-6">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <polygon points="12,2 15,8.5 22,9 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9 9,8.5" />
                    </svg>
                  </span>
                  <h3>Premios</h3>
                </div>
                <p>
                  El primer puesto obtendrá un premio monetario de acuerdo a lo recaudado en las inscripciones y los respectivos 30 puntos para su promoción.
                </p>
                <p>
                  Para el segundo puesto sólo se acreditará los 15 puntos a su respectiva promoción.
                </p>
              </div>

              <div className="bento-card span-6">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <circle cx="8" cy="9" r="3" />
                      <circle cx="16" cy="11" r="2.5" />
                      <path d="M4 18c0-3 4-4 7-4s7 1 7 4" />
                    </svg>
                  </span>
                  <h3>Equipos participantes</h3>
                </div>
                <ul className="bullet-list">
                  <li>Participarán todos los jugadores que se hayan inscrito previamente, cumpliendo todos los requisitos de inscripción.</li>
                  <li>El torneo está destinado a estudiantes y egresados de la Escuela de Ingeniería de Sistemas.</li>
                  <li>La inscripción comienza el 27 de enero y finaliza el 29 de enero a las 23:59 hrs.</li>
                  <li>Todos los inscritos serán agregados al grupo de WhatsApp del torneo de Valorant.</li>
                  <li>Si un jugador desea retirarse anticipadamente, debe notificar al organizador vía WhatsApp. No habrá devoluciones.</li>
                  <li>Todo jugador debe contar con dispositivo de juego propio y el juego actualizado, listo para competir en el modo correspondiente.</li>
                  <li>El torneo comienza el 31 de enero y puede extenderse a lo largo de la semana según equipos inscritos.</li>
                </ul>
              </div>

              <div className="bento-card span-8">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <rect x="3" y="7" rx="3" ry="3" width="18" height="10" />
                      <path d="M8 12h3M9.5 10.5v3" />
                      <circle cx="16" cy="12" r="1.5" />
                      <circle cx="19" cy="12" r="1.5" />
                    </svg>
                  </span>
                  <h3>Juego y modalidad</h3>
                </div>
                <ul className="bullet-list">
                  <li><strong>Plataforma:</strong> PC</li>
                  <li><strong>Modo de juego:</strong> Captura la spike</li>
                  <li><strong>Mapa:</strong> Elección del capitán del equipo ganador en un mejor de 3 (1vs1)</li>
                  <li><strong>Formato:</strong> Torneo por equipos (5 jugadores) y 2 suplentes si fuera necesario.</li>
                </ul>
              </div>

              <div className="bento-card span-4">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <rect x="5" y="7" width="14" height="13" rx="2" />
                      <path d="M9 7h6l-1-2h-4z" />
                    </svg>
                  </span>
                  <h3>Inscripción</h3>
                </div>
                <ul className="bullet-list">
                  <li>Cada equipo debe tener un nombre representativo.</li>
                  <li>Los participantes deben inscribirse de manera grupal (usernames).</li>
                  <li>Pago de 25 soles al Yape del responsable del torneo de Valorant. Otro tipo de pago coordinar con el responsable.</li>
                  <li>Tras el depósito, rellenar el formulario de Google adjuntando el comprobante:</li>
                </ul>
              </div>

              <div className="bento-card span-12">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <path d="M5 6h7v12H5z" />
                      <path d="M12 6h7v12h-7z" />
                      <path d="M12 6v12" />
                    </svg>
                  </span>
                  <h3>Reglas</h3>
                </div>
                <ul className="bullet-list">
                  <li>El nombre del equipo no puede contener palabras obscenas u ofensivas.</li>
                  <li>Se pueden traer refuerzos de otras carreras si conforman menos del 50% del equipo.</li>
                  <li>Todos los jugadores deben tener el nombre del servidor actualizado conforme su Riot ID.</li>
                  <li>Cada equipo está constituido por un máximo de 7 jugadores, incluyendo capitán y 2 suplentes.</li>
                  <li>Están prohibidos los cambios de nombre una vez iniciadas las fases del torneo; cambios no notificados pueden causar descalificación.</li>
                  <li>Cada equipo debe mantener 5 jugadores durante el torneo; de lo contrario será eliminado.</li>
                </ul>
              </div>

              <div className="bento-card span-8">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <path d="M6 6H4v12h2" />
                      <path d="M18 6h2v12h-2" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                    </svg>
                  </span>
                  <h3>Formato de los encuentros</h3>
                </div>
                <ul className="bullet-list">
                  <li>El responsable crea la sala y añade a los capitanes; ellos agregan al resto de participantes.</li>
                  <li>El staff corrobora la información de los jugadores antes de iniciar la partida.</li>
                  <li>Se harán 3 rondas de eliminación en 1vs1 para que el equipo ganador elija el mapa; el participante del 1vs1 lo elige el equipo y lo comunica al administrador (sujeto a cambios).</li>
                  <li>Todos los juegos serán al mejor de 1; la final será al mejor de 3 (puede modificarse si se inscriben más equipos).</li>
                </ul>
              </div>

              <div className="bento-card span-4">
                <div className="card-heading">
                  <span className="card-icon">
                    <svg viewBox="0 0 24 24" className="icon-svg">
                      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
                    </svg>
                  </span>
                  <h3>Reglas de juego</h3>
                </div>
                <ul className="bullet-list">
                  <li>Personajes: Cualquiera</li>
                  <li>Armas: Cualquiera</li>
                  <li>Permitir trucos: No</li>
                  <li>Tiempo extra ganar por 2: No</li>
                  <li>Jugar todas las rondas: No</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <p className="promotion-text">Promoción XXVI - Ingeniería de Sistemas</p>
          </div>
          
          <div className="hero-main">
            <h1 className="hero-title">
              <span>BASES DEL</span>
              <span>TORNEO DE</span>
              <span>VIDEOJUEGOS</span>
            </h1>
            
            <p className="hero-subtitle">
              Compite, gana y representa a tu promoción.
            </p>
            
            <button className="hero-button">
              Ver Juegos y Bases
            </button>
          </div>
        </div>
        
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="star star-6"></div>
        <div className="star star-7"></div>
        <div className="star star-8"></div>
        <div className="star star-9"></div>
        <div className="star star-10"></div>
        <div className="star star-11"></div>
        <div className="star star-12"></div>
        <div className="star star-13"></div>
        <div className="star star-14"></div>
        <div className="star star-15"></div>
        <div className="star star-16"></div>
        <div className="star star-17"></div>
        <div className="star star-18"></div>
        <div className="star star-19"></div>
        <div className="star star-20"></div>
        <div className="star star-21"></div>
        <div className="star star-22"></div>
        <div className="star star-23"></div>
        <div className="star star-24"></div>
        <div className="star star-25"></div>
        <div className="star star-26"></div>
        <div className="star star-27"></div>
        <div className="star star-28"></div>
        <div className="star star-29"></div>
        <div className="star star-30"></div>
        <div className="star star-31"></div>
        <div className="star star-32"></div>
        <div className="star star-33"></div>
        <div className="star star-34"></div>
        <div className="star star-35"></div>
        <div className="star star-36"></div>
        <div className="star star-37"></div>
        <div className="star star-38"></div>
        <div className="star star-39"></div>
        <div className="star star-40"></div>
        <div className="star star-41"></div>
        <div className="star star-42"></div>
        <div className="star star-43"></div>
        <div className="star star-44"></div>
        <div className="star star-45"></div>
        <div className="star star-46"></div>
        <div className="star star-47"></div>
        <div className="star star-48"></div>
        <div className="star star-49"></div>
        <div className="star star-50"></div>
        <div className="star star-51"></div>
        <div className="star star-52"></div>
        <div className="star star-53"></div>
        <div className="star star-54"></div>
        <div className="star star-55"></div>
        <div className="star star-56"></div>
        <div className="star star-57"></div>
        <div className="star star-58"></div>
        <div className="star star-59"></div>
        <div className="star star-60"></div>
        
        <div className="gamer-elements">
          <div className="pixel-particle pixel-1"></div>
          <div className="pixel-particle pixel-2"></div>
          <div className="pixel-particle pixel-3"></div>
          <div className="pixel-particle pixel-4"></div>
          <div className="pixel-particle pixel-5"></div>
          <div className="pixel-particle pixel-6"></div>
          <div className="pixel-particle pixel-7"></div>
          <div className="pixel-particle pixel-8"></div>
          <div className="pixel-particle pixel-9"></div>
          <div className="pixel-particle pixel-10"></div>
          <div className="pixel-particle pixel-11"></div>
          <div className="pixel-particle pixel-12"></div>
          <div className="pixel-particle pixel-13"></div>
          <div className="pixel-particle pixel-14"></div>
          <div className="pixel-particle pixel-15"></div>
          <div className="pixel-particle pixel-16"></div>
          <div className="pixel-particle pixel-17"></div>
          <div className="pixel-particle pixel-18"></div>
          
          <div className="circuit-line line-1"></div>
          <div className="circuit-line line-2"></div>
          <div className="circuit-line line-3"></div>
          <div className="circuit-line line-4"></div>
          <div className="circuit-line line-5"></div>
          <div className="circuit-line line-6"></div>
          <div className="circuit-line line-7"></div>
          <div className="circuit-line line-8"></div>
          <div className="circuit-line line-9"></div>
        </div>
      </div>

      <div className="games-container">
        <div className="game-particles">
          <div className="game-particle game-particle-1"></div>
          <div className="game-particle game-particle-2"></div>
          <div className="game-particle game-particle-3"></div>
          <div className="game-particle game-particle-4"></div>
          <div className="game-particle game-particle-5"></div>
          <div className="game-particle game-particle-6"></div>
          <div className="game-particle game-particle-7"></div>
          <div className="game-particle game-particle-8"></div>
          <div className="game-particle game-particle-9"></div>
          <div className="game-particle game-particle-10"></div>
          <div className="game-particle game-particle-11"></div>
          <div className="game-particle game-particle-12"></div>
          <div className="game-particle game-particle-13"></div>
          <div className="game-particle game-particle-14"></div>
          <div className="game-particle game-particle-15"></div>
          <div className="game-particle game-particle-16"></div>
          <div className="game-particle game-particle-17"></div>
          <div className="game-particle game-particle-18"></div>
          <div className="game-particle game-particle-19"></div>
          <div className="game-particle game-particle-20"></div>
          <div className="game-particle game-particle-21"></div>
          <div className="game-particle game-particle-22"></div>
          <div className="game-particle game-particle-23"></div>
          <div className="game-particle game-particle-24"></div>
          <div className="game-particle game-particle-25"></div>
        </div>
        
        <div className="circuit-background">
          <div className="circuit-line-bg circuit-1"></div>
          <div className="circuit-line-bg circuit-2"></div>
          <div className="circuit-line-bg circuit-3"></div>
          <div className="circuit-line-bg circuit-4"></div>
          <div className="circuit-line-bg circuit-5"></div>
          <div className="circuit-line-bg circuit-6"></div>
          <div className="circuit-line-bg circuit-7"></div>
          <div className="circuit-line-bg circuit-8"></div>
          <div className="circuit-line-bg circuit-9"></div>
          <div className="circuit-line-bg circuit-10"></div>
          <div className="circuit-line-bg circuit-11"></div>
          <div className="circuit-line-bg circuit-12"></div>
        </div>

        {/* Degradado de transición */}
        <div className="gradient-transition"></div>

        <div className="game-section left">
          <div className="game-content">
            <div className="game-info">
              <h2>Valorant</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Alexandra Leca</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">987654321</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Valorant',
                      image: valorantImg,
                      responsible: 'Alexandra Leca',
                      phone: '987654321',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1fdWL3Zq6Pf8NNt_fXZz9w5SaKRPcPPNhD4OfPb2PRaw/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
            <div className="game-image">
              <img src={valorantImg} alt="Valorant" className="game-img" />
            </div>
          </div>
        </div>

        <div className="game-section right">
          <div className="game-content">
            <div className="game-image">
              <img src={brawlStarsImg} alt="Brawl Stars" className="game-img" />
            </div>
            <div className="game-info">
              <h2>Brawl Stars</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Carlos Mendoza</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">912345678</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Brawl Stars',
                      image: brawlStarsImg,
                      responsible: 'Carlos Mendoza',
                      phone: '912345678',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1fdWL3Zq6Pf8NNt_fXZz9w5SaKRPcPPNhD4OfPb2PRaw/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="game-section left">
          <div className="game-content">
            <div className="game-info">
              <h2>Left 4 Dead</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">María González</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">923456789</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Left 4 Dead',
                      image: left4DeadImg,
                      responsible: 'María González',
                      phone: '923456789',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1fdWL3Zq6Pf8NNt_fXZz9w5SaKRPcPPNhD4OfPb2PRaw/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
            <div className="game-image">
              <img src={left4DeadImg} alt="Left 4 Dead 2" className="game-img" />
            </div>
          </div>
        </div>

        <div className="game-section right">
          <div className="game-content">
            <div className="game-image">
              <img src={dragonBallImg} alt="Dragon Ball Sparking Zero" className="game-img" />
            </div>
            <div className="game-info">
              <h2>Dragon Ball Sparking Zero</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Luis Rodríguez</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">934567890</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Dragon Ball Sparking Zero',
                      image: dragonBallImg,
                      responsible: 'Luis Rodríguez',
                      phone: '934567890',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1fdWL3Zq6Pf8NNt_fXZz9w5SaKRPcPPNhD4OfPb2PRaw/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="game-section left">
          <div className="game-content">
            <div className="game-info">
              <h2>FIFA</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Ana Martínez</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">945678901</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'FIFA',
                      image: fifaImg,
                      responsible: 'Ana Martínez',
                      phone: '945678901',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/10H76ZbSRqM0_9LEdTmcvAjW8FjIEULHNEDiDIl1zJcs/edit?usp=drive_link"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
            <div className="game-image">
              <img src={fifaImg} alt="FIFA" className="game-img" />
            </div>
          </div>
        </div>

        <div className="game-section right">
          <div className="game-content">
            <div className="game-image">
              <img src={fallGuysImg} alt="Fall Guys" className="game-img" />
            </div>
            <div className="game-info">
              <h2>Fall Guys</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Pedro Sánchez</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">956789012</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Fall Guys',
                      image: fallGuysImg,
                      responsible: 'Pedro Sánchez',
                      phone: '956789012',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1eKjFyE24a088nKbGWxnNIvc5U_TFyVQ0miCBCw4gW1s/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="game-section left">
          <div className="game-content">
            <div className="game-info">
              <h2>Among Us</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Laura Jiménez</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">967890123</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Among Us',
                      image: amongUsImg,
                      responsible: 'Laura Jiménez',
                      phone: '967890123',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/15XEXrK0rJlhTxTkYOnswwshDKhZ7ZVlQjQs73k9ympY/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
            <div className="game-image">
              <img src={amongUsImg} alt="Among Us" className="game-img" />
            </div>
          </div>
        </div>

        <div className="game-section right">
          <div className="game-content">
            <div className="game-image">
              <img src={freeFireImg} alt="Free Fire" className="game-img" />
            </div>
            <div className="game-info">
              <h2>Free Fire</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Diego López</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">978901234</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Free Fire',
                      image: freeFireImg,
                      responsible: 'Diego López',
                      phone: '978901234',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1SneQJx1N9QMl4zla4S3B8E_90TmLTcrYbiejl_Pw9U8/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="game-section left">
          <div className="game-content">
            <div className="game-info">
              <h2>Clash Royale</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Carmen López</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">989012345</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Clash Royale',
                      image: clashRoyaleImg,
                      responsible: 'Carmen López',
                      phone: '989012345',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1E0Xhr3zcXojp1Y37dwAX03UKVaSqFpmPaVr3iyU3ajw/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
            <div className="game-image">
              <img src={clashRoyaleImg} alt="Clash Royale" className="game-img" />
            </div>
          </div>
        </div>

        <div className="game-section right">
          <div className="game-content">
            <div className="game-image">
              <img src={dota2Img} alt="Dota 2" className="game-img" />
            </div>
            <div className="game-info">
              <h2>Dota 2</h2>
              <div className="game-details">
                <div className="responsible">
                  <span className="label">Responsable:</span>
                  <span className="name">Roberto Fernández</span>
                </div>
                <div className="contact">
                  <span className="label">Contacto:</span>
                  <span className="phone">990123456</span>
                </div>
              </div>
              <div className="game-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    openDetails({
                      title: 'Dota 2',
                      image: dota2Img,
                      responsible: 'Roberto Fernández',
                      phone: '990123456',
                      inscriptionUrl: 'https://forms.gle/segDWJ3fBHnXmcTV9',
                    })
                  }
                >
                  Ver bases del videojuego
                </button>
                <a
                  href="https://docs.google.com/spreadsheets/d/1jYyXFrETAcKZN3wWFS6reG1kLpDn-nlGkIMLSH3UaBA/edit?usp=sharing"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
