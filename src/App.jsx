import './App.css'
import { useState } from 'react'
import { gamesData } from "./assets/data";

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
              <span className="cta-text">Inscribirse Ahora</span>
              <span className="material-symbols-outlined">file_open
              </span>
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
                <ul className="bullet-list">
                  {
                    selectedGame?.premios?.map((premio, index) => (
                      <li key={index}>{premio}</li>
                    ))
                  }
                </ul>
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
                  {
                    selectedGame?.equipoParticipante?.map((participante, index) => (
                      <li key={index}>{participante}</li>
                    ))
                  }
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
                  <ul className="bullet-list">
                    {
                      selectedGame?.juegoModalidad?.map((item, index) => {
                        // Dividimos el texto antes y después de los dos puntos
                        const [label, value] = item.split(':');
                        return (
                          <li key={index}>
                            <strong>{label.trim()}:</strong> {value?.trim()}
                          </li>
                        );
                      })
                    }
                  </ul>
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
                  {
                    selectedGame?.inscripcion?.map((inscripcion, index) => (
                      <li key={index}>{inscripcion}</li>
                    ))
                  }
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
                  {
                    selectedGame?.reglas?.map((regla, index) => (
                      <li key={index}>{regla}</li>
                    ))
                  }
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
                  {
                    selectedGame?.formatoEncuentros?.map((encuentros, index) => (
                      <li key={index}>{encuentros}</li>
                    ))
                  }
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
                  {
                    selectedGame?.reglasJuego?.map((regla, index) => (
                      <li key={index}>{regla}</li>
                    ))
                  }
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
        {
          gamesData.map((game, index) => (
            <div
              key={game.id}
              className={`game-section ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="game-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="game-info">
                      <h2>{game.nombre}</h2>
                      <div className="game-details">
                        <div className="responsible">
                          <span className="label">Responsable:</span>
                          <span className="name">{game.responsable}</span>
                        </div>
                        <div className="contact">
                          <span className="label">Contacto:</span>
                          <span className="phone">{game.contacto}</span>
                        </div>
                      </div>
                      <div className="game-buttons">
                        <button
                          className="btn-primary"
                          onClick={() =>
                            openDetails({
                              title: game.nombre,
                              image: game.imagen,
                              responsible: game.responsable,
                              phone: game.contacto,
                              inscriptionUrl: game.inscripcionUrl,
                              premios: game.premios,
                              equipoParticipante: game.equiposParticipantes,
                              juegoModalidad: game.juegoModalidad,
                              inscripcion: game.inscripcion,
                              reglas: game.reglas,
                              formatoEncuentros: game.formatoEncuentros,
                              reglasJuego: game.reglasJuego
                            })
                          }
                        >
                          Ver bases del videojuego
                        </button>
                        <a
                          href={game.inscripcionUrl}
                          className="btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Inscribirse
                        </a>
                      </div>
                    </div>
                    <div className="game-image">
                      <img src={game.imagen} alt={game.nombre} className="game-img" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="game-image">
                      <img src={game.imagen} alt={game.nombre} className="game-img" />
                    </div>
                    <div className="game-info">
                      <h2>{game.nombre}</h2>
                      <div className="game-details">
                        <div className="responsible">
                          <span className="label">Responsable:</span>
                          <span className="name">{game.responsable}</span>
                        </div>
                        <div className="contact">
                          <span className="label">Contacto:</span>
                          <span className="phone">{game.contacto}</span>
                        </div>
                      </div>
                      <div className="game-buttons">
                        <button
                          className="btn-primary"
                          onClick={() =>
                            openDetails({
                              title: game.nombre,
                              image: game.imagen,
                              responsible: game.responsable,
                              phone: game.contacto,
                              inscriptionUrl: game.inscripcionUrl,
                              premios: game.premios,
                              equipoParticipante: game.equiposParticipantes,
                              juegoModalidad: game.juegoModalidad,
                              inscripcion: game.inscripcion,
                              reglas: game.reglas,
                              formatoEncuentros: game.formatoEncuentros,
                              reglasJuego: game.reglasJuego
                            })
                          }
                        >
                          Ver bases del videojuego
                        </button>
                        <a
                          href={game.inscripcionUrl}
                          className="btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Inscribirse
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App
