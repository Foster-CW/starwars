import React from 'react';
import '../styles/Header.css';

function Header() {
  setTimeout(() => {
    const a = document.getElementById('div-teste');

    a.style = 'display:none';
  }, 8000);

  return (
    <header>
      <h2 id="div-teste">
        Em uma galaxia não muito distante
        <br />
        O jovem Foster planeja
        <br />
        consquistar uma vaga
        <br />
        como dev frontEnd
        <br />
        podendo assim desenvolver
        <br />
        suas habilidades
        e levar seu time a voar ainda mais alto
        VQV!
      </h2>

    </header>
  );
}

export default Header;