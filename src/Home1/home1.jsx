import React from "react";
import "./home1.css";
import { Link } from "react-router-dom";

export function Home1() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="container22">
      <section>
        <div className="pos22">
          <div className="align22">
            <h2 className="h2_22">
              N’importe quand <br />
              N’importe où <br />
            </h2>
            <p className="p22">
              Écoutez vos livres pour vous endormir ou lorsque vous êtes en
              déplacement. Téléchargez votre bibliothèque audio et retrouvez vos
              titres hors ligne sur vos appareils préférés.
            </p>

            <Link to="/login" className="sinscrire22" onClick={scrollToTop}>
              {" "}
              Essayer gratuitement{" "}
            </Link>
          </div>
          <img src="ecouter.jpg" alt="" className="img22" />
        </div>
      </section>
    </div>
  );
}
