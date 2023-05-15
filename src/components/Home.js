import React from "react";
import jv from '../jv.png';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

export default ()=> {
    const name = "Victor"
    return(
       <>
       <div className="apre">
        <img src={jv}/>
        <div className="texts">
        <h1>Olá</h1> 
        <h1>Eu sou {name}</h1>
        <h1>Desenvolvedor Full-Stack</h1>
        <input type="button" value="Entrar em contato"/>
        </div>
       </div>
       </>  
    );
}