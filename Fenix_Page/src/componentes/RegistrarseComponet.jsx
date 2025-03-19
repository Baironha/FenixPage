import React, { useState } from "react";
import Llamados from '../Servicios/Llamados'
import Swal from 'sweetalert2';
import '../style/RegistrarseStyle.css';
import { Link} from "react-router-dom";

function RegistrarseComponet() {
    const [NombreUsu, SetNombreUsu] = useState("");
    const [EmailUsu, SetEmailUsu] = useState("");
    const [ContraUsu, SetContraUsu] = useState("");
    const [DirecUsu, SetDirecUsu] = useState("");

    function nombre(evento) {
        SetNombreUsu(evento.target.value);
    }

    function email(evento) {
        SetEmailUsu(evento.target.value);
    }

    function password(evento) {
        SetContraUsu(evento.target.value);
    }

    function direccion(evento) {
        SetDirecUsu(evento.target.value);
    }

    function cargar() {
        // AQUI VA LA VALIDACION PARA ESPACIOS VACIOS
        if (NombreUsu === "" || EmailUsu === "" || ContraUsu === "" || DirecUsu === "" ) {
            Swal.fire({
                icon: "error",
                title: "Campos incompletos",
                text: "Por favor rellene los espacios!",
            });
        } else {
            Llamados.postUsers(NombreUsu, EmailUsu, ContraUsu, DirecUsu)
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Registro exitoso",
                        text: "Se ha agregado un nuevo trabajador a la planilla",
                    });

                    // Vaciar el formulario después del registro exitoso
                    SetNombreUsu("");
                    SetEmailUsu("");
                    SetContraUsu("");
                    SetDirecUsu("");
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
        <div id="Registro">
            <div id="Container-Form-Usuarios">
                <h1 id="TituloRegistrarse">Registrarse</h1>
                <label htmlFor="nombre" id="LabelFormTrabajador">Nombre</label><br />
                <input type="text" value={NombreUsu}  onChange={nombre} id="InputFormTrabajador" placeholder="Ingrese Su nombre completo"/>
                <br />
                <label htmlFor="email" id="LabelFormTrabajador">Correo electronico</label><br />
                <input type="text" value={EmailUsu} onChange={email} id="InputFormTrabajador" placeholder="Ingrese su correo electrico" />
                <br />
                <label htmlFor="password" id="LabelFormTrabajador">Contraseña</label><br />
                <input type="text" value={ContraUsu} onChange={password} id="InputFormTrabajador" placeholder="Ingrese su contraseña"/>
                <br />
                <label htmlFor="direccion" id="LabelFormTrabajador">Direccion</label><br />
                <input type="text" value={DirecUsu} onChange={direccion} id="InputFormTrabajador"  placeholder="Ingrese la direccion de entrega"/>
                <br />
                <button id="BtnCargar" onClick={cargar}>Registrarse</button>
                <strong><Link to={'/Login'}>Iniciar sesion</Link></strong>
            </div>
        </div>
    );
}

export default RegistrarseComponet;
