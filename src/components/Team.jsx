import React from 'react';
import Sf from '../assets/Sf.jpg';
import If from '../assets/If.jpg'; 
import '../styles/components/WeAre.css';

export default function Team(){
    return (
      <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-up">Equipo</h2>
          <p data-aos="fade-up">Somos un equipo experto en las nuevas tecnologías y apasionados en la innovación y nuevas tendencias.</p>
        </div>

        <div className="container-team">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="member">
              <div className="member-img">
                <img src={If} className="logosAdj" alt="" />
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Isaac Fuentes</h4>
                <span>Desarrollador Front-End</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="member-img">
                <img src={Sf} className="logosAdj" alt="" />
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Santiago Forero</h4>
                <span>Desarrollador Front-End</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="logosAdj" alt="" />
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Edward Toledo</h4>
                <span>Analista de ciencia de datos</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="logosAdj" alt="" />
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Jesús Mejía</h4>
                <span>Desarrollador Back-End</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="logosAdj" alt="" />
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Luis Cruz</h4>
                <span>Analista de Ciencia de Datos</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="logosAdj" alt="" />
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Alveiro Hoyos</h4>
                <span>Desarrollador Front-end</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    );
}