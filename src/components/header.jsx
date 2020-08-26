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
            <Link>Categorias</Link>
            <Link>Nosotros</Link>
        </nav>
      </div>
    </div>
  );
}
