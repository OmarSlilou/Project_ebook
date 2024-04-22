import React, { useState } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const text = e.target.value.replace(/\s/g, "");
    setPassword(text);
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    const text = e.target.value.replace(/\s/g, "");
    setConfirmPassword(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis !");
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="project-name">
          {" "}
          <span className="firstL">S</span>
          torybook
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email ou téléphone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <input
            type="date"
            placeholder="Date de naissance"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Sélectionner le genre</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <input type="submit" value="S'inscrire" className="submit" />
        </form>
        <p>
          Vous avez déjà un compte ? <nbsp></nbsp>
          <Link to="/login" className="inssss">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}
