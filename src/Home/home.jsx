import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="container">
      <section className="section1">
        <div className="pos1">
          <div className="align1">
            <h1 className="h1_1">
              Une bibliothèque <br /> audio complète
            </h1>

            <Link to="/login" className="sinscrire1" onClick={scrollToTop}>
              {" "}
              Essayer gratuitement{" "}
            </Link>
          </div>
          <img src="bookp.jpg" alt="biblitheque" className="img1" />
        </div>
      </section>

      <section>
        <div className="pos2">
          <img src="book_2.png" alt="" className="img2" />
          <div className="align2">
            <h2 className="h2_2">
              Des histoires <br />
              sélectionnées <br /> pour vous
            </h2>
            <p className="p2">
              Suivez votre auteur, narrateur ou série préférée et obtenez <br />
              des recommandations personnalisées en fonction de ce <br /> que
              vous avez écouté précédemment.
            </p>

            <Link to="/login" className="sinscrire2" onClick={scrollToTop}>
              {" "}
              Essayer gratuitement{" "}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
