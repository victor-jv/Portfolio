import { animateScroll } from 'react-scroll';
import { Link } from 'react-scroll';
import React from "react";
import './Header.css';

export default ()=> {
  function scrollToTop() {
    animateScroll.scrollToTop();
  }
    return(
        <header>
        <nav>
          <ul>
            <li  onClick={scrollToTop}>
              Início
            </li>
            <li>
            <Link
            activeClass="active"
            to="sobre"    
            smooth={true}
            offset={+20}
            duration={1000}
          >
          Sobre
          </Link>
            </li>
            <li>
            <Link
            activeClass="active"
            to="skils"
            smooth={true}
            offset={+20}
            duration={1000}
          >
          Skils
          </Link>
          </li>
            <li>
            <Link
            activeClass="active"
            to="projetos"
            smooth={true}
            offset={+20}
            duration={1000}
          >
          Projetos
          </Link>
          </li>
            <li>
            <Link
            activeClass="active"
            to="Habilidades"
            smooth={true}
            offset={+20}
            duration={1000}
          >
          Contato
          </Link>
          </li>
          </ul>
        </nav>
      </header>
    
    );
}