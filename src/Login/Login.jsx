import React, { useState } from "react";
import "./Login.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const text = e.target.value.replace(/\s/g, "");
    setPassword(text);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="project-name1">
          {" "}
          <span className="firstL">S</span>torybook
        </h2>
        <form>
          <input
            type="text"
            placeholder="Adresse e-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            onPaste={(e) => e.preventDefault()}
          />
          <input
            type="submit"
            name=""
            id=""
            value={"Connecter-vous"}
            className="submit"
          />{" "}
          <a href="/" className="mdp">
            Vous avez oublié votre mot de passe <br />? Cliquez ici.
          </a>
          <p>
            Vous n'avez pas de compte ? <nbsp></nbsp>
            <Link to="/signup" className="ins">
              {" "}
              Inscrivez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
