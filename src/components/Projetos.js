import "./Projetos.css";
import jokenpo from "../jokenpo.png";
import planetaagua from "../planetaagua.png";
import calculadora from "../calculadora.png";
import React from "react";
import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { get } from "react-scroll/modules/mixins/scroller";

export default () => {
  const divScro = useRef(null);
  useEffect(() => {
    const div = divScro.current;
    let intervalId = null;
    function startInterval() {
      intervalId = setInterval(() => {
        const { scrollLeft, scrollWidth, clientWidth } = div;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft < maxScrollLeft) {
          div.scrollLeft += clientWidth;
        } else {
          div.scrollLeft = 0;
        }
      }, 3000);
    }
    
    function stopInterval() {
      clearInterval(intervalId);
      intervalId = null;
    }

    div.addEventListener('mouseenter', stopInterval);
    div.addEventListener('mouseleave', startInterval);

    startInterval();

    return () => {
      div.removeEventListener('mouseenter', stopInterval);
      div.removeEventListener('mouseleave', startInterval);
      stopInterval();
    };
  }, [divScro]);
  return (
    <>
      <h1 className="textpro">Projetos</h1>
      <div className="con"  ref={divScro}>
        <div className="projs">
          <img src={jokenpo} />
          <h1>Jokenpô</h1>
          <div className="lin">
            <p>React</p>
          </div>
          <a href="https://jokenpoo.vercel.app/" target="_blank">
            <h3>Vizualizar projeto</h3>
          </a>
        </div>
        
        <div className="projs">
          <img src={planetaagua} />
          <h1>Planeta água</h1>
          <div className="lin">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
          <a href="https://projplanetaagua.vercel.app/" target="_blank">
            <h3>Vizualizar projeto</h3>
          </a>
        </div>
        <div className="projs">
          <img src={calculadora} />
          <h1>Calculadora</h1>
          <div className="lin">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
          <a href="https://calculadora-victor-jv.vercel.app/" target="_blank">
            <h3>Vizualizar projeto</h3>
          </a>
        </div>
        <div className="projs">
          <img src={planetaagua} />
          <h1>planeta água</h1>
          <div className="lin">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
          <a href="https://jokenpoo.vercel.app/" target="_blank">
            <h3>Vizualizar projeto</h3>
          </a>
        </div>
        <div className="projs">
          <img src={jokenpo} />
          <h1>Jokenpô</h1>
          <div className="lin">
            <p>React</p>
          </div>
          <a href="https://jokenpoo.vercel.app/" target="_blank">
            <h3>Vizualizar projeto</h3>
          </a>
        </div>
        <div className="projs">
          <img src={planetaagua} />
          <h1>Planeta água</h1>
          <div className="lin">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
          <a href="https://projplanetaagua.vercel.app/" target="_blank">
            <h3>Vizualizar projeto</h3>
          </a>
        </div>
      </div>
    </>
  );
};