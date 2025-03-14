import React, { useState, useEffect } from "react";
import Llamados from "../Servicios/Llamados";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginComponet() {
    const [NombreUsu, SetNombreUsu] = useState("");
    const [ContraUsu, SetContraUsu] = useState("");
    const [usuarios, SetUsuarios] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function DataUsers() {
            const datos = await Llamados.getUsers();
            SetUsuarios(datos);
        }
        DataUsers();
    }, []);

    function nombre(evento) {
        SetNombreUsu(evento.target.value);
    }

    function password(evento) {
        SetContraUsu(evento.target.value);
    }

    function validar() {
        // Validación 4: Si los campos están vacíos
        if (!NombreUsu || !ContraUsu) {
            Swal.fire({
                icon: "warning",
                title: "RELLENA LOS CAMPOS",
                text: "Todos los campos son obligatorios.",
            });
            return;
        }

        // Buscar usuario en la base de datos
        const usuarioEncontrado = usuarios.find(
            (Usuarios) => Usuarios.nombre === NombreUsu && Usuarios.password === ContraUsu
        );

        if (!usuarioEncontrado) {
            // Validación 3: Si los datos no coinciden
            Swal.fire({
                icon: "error",
                title: "Datos incorrectos",
                text: "Por favor verifique sus credenciales.",
            });
        } else if (usuarioEncontrado.rol === "Admin") {
            // Validación 1: Si es Admin
            Swal.fire({
                icon: "success",
                title: "Iniciando sesión...",
                text: "Administrador, por favor espere.",
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
            }).then(() => {
                navigate("/Home");
            });
        } else if (usuarioEncontrado.rol.toLowerCase() === "Usuarios") {
            // Validación 2: Si es Trabajador
            Swal.fire({
                icon: "success",
                title: "Iniciando sesión...",
                text: "Redirigiendo al área de trabajo.",
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
            }).then(() => {
                navigate("/Home");
            });
        }
    }

    return (
        <div id="Login">
            <div id="contForm">
                <label htmlFor="nombre" id="LabelLogin1">Nombre</label><br />
                <input id="InputsLogin1" type="text" value={NombreUsu} onChange={nombre} placeholder="Ingrese su nombre completo" />
                <br />
                <label htmlFor="password" id="LabelLogin2">Contraseña</label><br />
                <input id="InputsLogin2" type="password" value={ContraUsu} onChange={password} placeholder="Ingrese su contraseña" />
                <br />
                <button onClick={validar}>Iniciar Sesión</button>
                <br />
            </div>
        </div>
    );
}

export default LoginComponet;
