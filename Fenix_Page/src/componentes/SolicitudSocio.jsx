import React, { useState } from "react";
import '../style/SoliSocio.css';
import Swal from 'sweetalert2';
import conexiones from "../Servicios/conexiones";

function SolicitudSocio() {
    const [NombreSocio, SetNombreSocio] = useState("");
    const [EmailSocio, SetEmailSocio] = useState("");
    const [TelSocio, SetTelSocio] = useState("");
    const [ProyectoSocio, SetProyectoSocio] = useState("");
    const [DescripcionProyecto, setDescripcionProyecto] = useState("")

    function nombreS(evento) {
        SetNombreSocio(evento.target.value);
    }

    function emailS(evento) {
        SetEmailSocio(evento.target.value);
    }

    function telS(evento) {
        SetTelSocio(evento.target.value);
    }

    function proyectS (evento) {
        SetProyectoSocio(evento.target.value);
    }

    function DescripcionP (evento){
        setDescripcionProyecto(evento.target.value)
    }

    function BtnEnviarSolicitud() {
        // AQUI VA LA VALIDACION PARA ESPACIOS VACIOS
        if (NombreSocio === "" || EmailSocio === "" || TelSocio === "" || ProyectoSocio === "" || DescripcionProyecto === "") {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor rellene los espacios!",
            });
        } else {
            conexiones.postUsers(NombreSocio, EmailSocio, TelSocio, ProyectoSocio, DescripcionProyecto)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Registro exitoso",
                        text: "Se ha agregado un nuevo trabajador a la planilla",
                    });

                    // Vaciar el formulario después del registro exitoso
                    SetNombreSocio("");
                    SetEmailSocio("");
                    SetTelSocio("");
                    SetProyectoSocio("");
                    setDescripcionProyecto("")
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Error en el registro",
                        text: "Hubo un problema al agregar el trabajador. Intente nuevamente.",
                    });
                    console.error("Error al registrar trabajador:", error);
                });
        }
    }
    return (

        <div>
            <div>
                <h1 id="Titulo1Socio">LISTO PAR ELEVAR TU PROYECTO</h1>
                <h1 id="Titulo2Socio">CONVIÉRTETE EN SOCIO Y SUPERA TUS LÍMITES</h1>
            </div>
            <div id="TextContainer">
                <div id="ContTextoSocios">
                    <p><strong>En Fenix, llevamos tu marca a nuevas alturas. Nuestro equipo de expertos en economía, análisis de datos, desarrollo web y administración de proyectos</strong></p>
                    <p><strong>está listo para ayudarte a conquistar el universo digital</strong></p>
                    <p><strong>Imagina tu negocio como una nave espacial, navegando a través de galaxias de oportunidades y planetas de clientes potenciales. Con nuestras estrategias innovadoras y creativas, tu marca no solo será visible, sino que brillará como una estrella en el vasto cosmos del mercado en línea.</strong></p>
                    <p><strong>Nuestro equipo de expertos está listo para llevar tu marca a nuevas galaxias con soluciones de mercadeo digital innovadoras y efectivas.</strong></p>
                </div>
            </div>
            <br />
            <div className="contenedor-formulario">
                <div>
                    <div>
                        <input type="text" id="InputNombre" value={NombreSocio} onChange={nombreS}  placeholder="Ingrese su nombre completo" />
                        <input type="text" id="InputEmail" value={EmailSocio} onChange={emailS}   placeholder= " Ingrese su correo electrónico" />
                        <br />
                        <input type="text" id="InputTel" value={TelSocio}  onChange={telS} placeholder="Ingrese su número de contacto" />
                        <input type="text" id="InputProyecto" value={ProyectoSocio} onChange={proyectS}  placeholder="Nombre del proyecto" />
                    </div>
                    <br />
                </div>
                <input type="text" id="descripcionProyecto" value={DescripcionProyecto} onChange={DescripcionP} placeholder="Ingrese una breve descripción del proyecto" />
                <button onClick={BtnEnviarSolicitud} className="btn-enviar">Enviar</button>
            </div>
        </div>
    );
}
export default SolicitudSocio
