<<<<<<< HEAD
import React from 'react';
import Logo from '../assets/logo.png';

import '../styles/components/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
          />
          UpData
        </div>

        <nav>
            <Link to="/Home">Inicio</Link>
            <Link to="/Products">Productos</Link>
            <Link to="/Categories">Categorias</Link>
            <Link to="/WeAre">Nosotros</Link>
        </nav>
      </div>
    </div>
  );
}
=======
import React from 'react';
import Logo from '../assets/logo.png';

import '../styles/components/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
          />
          UpData
        </div>

        <nav>
            <Link to="/Home">Inicio</Link>
            <Link to="/Products">Productos</Link>
            <Link to="/Categories">Categorias</Link>
            <Link>Nosotros</Link>
        </nav>
      </div>
    </div>
  );
}
>>>>>>> 23d019b6b6bd6091dd2e8460a77a20a7ca563b37
