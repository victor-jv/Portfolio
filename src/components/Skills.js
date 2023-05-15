import React from "react";
import "./Skills.css";

export default () => {
  return (
    <>
    <div className="skills">
        <div className="skpo">
            <p>Criatividade</p>
            <progress value="67" max="100"></progress>
        </div>
        <div className="skpo">
            <p>Trabalho em equipe</p>
            <progress value="66" max="100"></progress>
        </div>
        <div className="skpo">
            <p>Comunicação</p>
            <progress value="73" max="100"></progress>
        </div>
    </div>
    </>
  );
};
