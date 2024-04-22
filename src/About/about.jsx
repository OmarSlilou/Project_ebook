import React, { useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";

export function About() {
  const [hovered, setHovered] = useState(null);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="section3">
        <ul className="cartes">
          <li
            className="carte_1"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              {hovered === 1 ? (
                <>
                  <h3>Une bibliothèque entière</h3>
                  <p>
                    500 000 livres et plus de 14 langues disponibles. Trouvez
                    l'histoire parfaite pour vous et ayez un fou rire, plongez
                    dans une intrigue haletante
                  </p>
                </>
              ) : (
                <h1 style={{ fontSize: "40px" }}>Une bibliothèque entière</h1>
              )}
            </div>
          </li>
          <li
            className="carte_2"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              {hovered === 2 ? (
                <>
                  <h3>Un environnement sûr pour les enfants</h3>
                  <p>
                    Laissez votre enfant se lancer dans une aventure
                    passionnante en toute sécurité grâce au Mode Enfants.
                  </p>
                </>
              ) : (
                <h1 style={{ fontSize: "30px" }}>
                  {" "}
                  Un environnement sûr pour les enfants
                </h1>
              )}
            </div>
          </li>
          <li
            className="carte_3"
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              {hovered === 3 ? (
                <>
                  <h3>Storybook Originals</h3>
                  <p>
                    Découvrez des contenus exclusifs uniquement disponibles sur
                    Storybook.
                  </p>
                </>
              ) : (
                <h1 style={{ fontSize: "30px" }}>Storybook Originals</h1>
              )}
            </div>
          </li>
        </ul>

        {/* Added button container and styles */}
        <div className="button-container">
          <Link to="/login" onClick={scrollToTop} className="Button">
            {" "}
            Essayer gratuitement{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}
