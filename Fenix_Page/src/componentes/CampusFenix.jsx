import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/CampusStyle.css';

const Campus = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 id="MisCursos">MIS CURSOS</h1>
            <h2 id="SubMisCursos">Fenix</h2>
            
            <div id="ContMisCursos">
                <div id="card1" onClick={() => navigate("/EduAdmin")} className="card">
                    <h1 id="Titulo1">INTRO. ADMINISTRACION DE NEGOCIOS</h1>
                    <p id="TextCampus"><strong>Aprende a administrar tu negocio con nuestro curso de administración de negocios</strong></p>
                </div>
                <br />
                <div id="card2" onClick={() => navigate("/EduDtScients")} className="card">
                    <h1 id="Titulo2">INTRO. Ciencia de datos</h1>
                    <p id="TextCampus"><strong>Aprende a manejar tus datos y sacarles provecho para</strong></p>
                    <p id="TextCampus"><strong>potenciar tu negocio</strong></p>
                </div>
                <br />
                <div id="card3" onClick={() => navigate("/EduEconomia")} className="card">
                    <h1 id="Titulo3">INFLACIÓN Y ECONOMÍA</h1>
                    <p id="TextCampus"><strong>Potencia tus conocimientos y habilidades al entender el mundo de la economía</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Campus;
