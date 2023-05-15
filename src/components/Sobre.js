import React from "react";
import "./Sobre.css";
import jvi from "../jvi.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
export default () => {
  return (
    <>
      <div id="sobre" className="sobre">
        <img src={jvi} />
        <div className="textsp">
          <h1>Quem sou eu?</h1>
          <p>
            Meu nome é João Victor e atualmente estou cursando Análise e
            Desenvolvimento de Sistemas. <br /> Meu objetivo é me tornar um
            desenvolvedor Full-Stack, e para isso, venho me dedicando
            intensamente. <br /> Tenho participado de cursos adicionais, e tenho
            me desafiado a criar projetos do zero para aprimorar minhas
            habilidades.
            <br /> Sempre fui apaixonado por criar soluções rápidas e eficientes
            para meus próprios desafios,
            <br /> e estou determinado a aplicar esse conhecimento para atingir
            meus objetivos profissionais.
          </p>
        <h3 className="techs">Liguagens,Bibliotecas e Frameworks</h3>
          <div className="icons">
            <FaHtml5 size={50} className="icon" color="#E44D26" />
            <FaCss3Alt size={50} className="icon" color="#264DE4" />
            <FaJsSquare size={50} className="icon" color="#F7DF1E" />
            <FaNodeJs size={50} className="icon" color="#68A063" />
            <FaReact size={50} className="icon" color="#61DAFB" />
            <FaAngular size={50} className="icon" color="#DD0031" />
            <FaBootstrap size={50} className="icon" color="#6600ff" />
          </div>
        </div>
      </div>
    </>
  );
};
