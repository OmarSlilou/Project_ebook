import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
  };

  return (
    <nav>
      <div className="content">
        <Link to="/" onClick={scrollToTop} className="imgproject">
          <img src="logo1.png" alt="" />
        </Link>
        <Link to="/" className="projet-name" onClick={scrollToTop}>
          <span
            style={{ color: "orangered", fontSize: "30px", fontFamily: "bold" }}
          >
            S
          </span>
          <span className="tb">torybook</span>
        </Link>
      </div>
      <div className={`menu-links ${showMenu ? "show" : ""}`}>
        <Link to="/lal" onClick={scrollToTop}>
          Livres a lire
        </Link>
        <Link to="/lae" onClick={scrollToTop}>
          Livres a Ecouter
        </Link>
        <Link to="/categories" onClick={scrollToTop}>
          Categories
        </Link>
        <div className="border-inline-end">
          <Link to="/login" onClick={scrollToTop}>
            Se Connecter
          </Link>
          <Link to="/signup" className="sinscrire" onClick={scrollToTop}>
            S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
