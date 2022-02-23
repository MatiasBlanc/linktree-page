import React from "react";
import Logo from './SendTech.svg';
function Presentation () {
    return(
        <header className="logoContainer">
            <img src={Logo} className="logo" alt="Logo de Sendero Tecnologico" title="SendTech logo"/>
            <h1 className="title">Sendero Tecnologico</h1>
            <p className="description">Bienvenido a la comunidad donde te enseñamos desarrollo web</p>
        </header>
    );
}

export { Presentation };