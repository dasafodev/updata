/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../assets/logo.png';

import '../styles/components/Header.css';

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
          <a>Inicio</a>
          <a>Productos</a>
          <a>Categorias</a>
          <a>Nosotros</a>
        </nav>
      </div>
    </div>
  );
}
