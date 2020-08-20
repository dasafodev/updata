import React from 'react';
import '../styles/components/Hero.css';
import Searcher from './Seacher';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';

export default function Hero() {
  return (
    <div className="content">
      <img
        src={Image1}
        alt="imagen1"
        className="content__item--1 item"
      />
      <p className="content__item--2 item">
        Revisa las ultimas tendencias en tiendas como <span>Amazon</span> y{' '}
        <span>Mercado Libre</span>
      </p>
      <div className="content__item--3">
        <Searcher />
      </div>
      <img src={Image2} alt="imagen2" className="content__item--4 item" />
    </div>
  );
}
