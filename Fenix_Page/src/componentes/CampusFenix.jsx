import React from "react";
import '../style/CampusStyle.css'
const Campus = () => {
    return (
        <div>
            <h1 id="MisCursos">MIS CURSOS</h1>
            <h2 id="SubMisCursos">Fenix</h2>
            
            <div id="ContMisCursos">
                <div id="card1">
                <h1 id="Titulo1">INTRO. ADMINITRACION DE NEGOCIOS</h1>
                <p id="TextCampus"><strong>Aprende administrar tu negocio con nuestro cruso de administracion de negocios</strong></p>
                </div>
                <br />
                <div id="card2">
                <h1 id="Titulo2">INTRO. Ciencia de datos</h1>
                <p id="TextCampus"><strong>Aprende a manejar tus datos y sacarles provecho para</strong></p>
                <p id="TextCampus"><strong>potenciar tu negocio</strong></p>
                </div>
                <br />
                <div id="card3">
                    
                <h1 id="Titulo3">INFLACION Y ECONOMIA</h1>
                <p id="TextCampus"><strong>Potencia tus conocimientos y habilidades al entender el mundo de la economia</strong></p>
                </div>
                
            </div>
        </div>
    );
};

export default Campus;