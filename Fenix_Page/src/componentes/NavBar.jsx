import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/NavBarStyle.css";

function NavBar() {
    const navigate = useNavigate();

    const handleLogin = () => {
        Swal.fire({
        title: "Redirigiendo...",
        text: "Por Favor espere, esta siendo redirigido al Login",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
        });
        setTimeout(() => navigate("/Login"), 2000);
    };

    const handleContactChange = (event) => {
        const value = event.target.value;
        if (value) window.location.href = value;
    };

    const handleServicesChange = (event) => {
        const value = event.target.value;
        const text = event.target.options[event.target.selectedIndex].text;

        if (value) {
        Swal.fire({
            title: `Llamando a ${text}...`,
            icon: "info",
            timer: 3000,
            showConfirmButton: false,
        });

        setTimeout(() => {
            window.location.href = value;
        }, 3000);
        }
    };

    return (
        <div>
        <ul>
            {/* Contacto */}
            <li>
            <select onChange={handleContactChange} defaultValue="" className="nav-item">
                <option value="" disabled>Contacto</option>
                <option value="tel:87409661">Tel: 87409661</option>
                <option value="http://localhost:5173/Contact">Email</option>
                <option value="https://www.instagram.com/baironh_alvarez.cr/?__d=1">
                Instagram: baironh_alvarez.cr
                </option>
            </select>
            </li>

            {/* Servicios */}
            <li>
            <select onChange={handleServicesChange} defaultValue="" className="nav-item">
                <option value="" disabled>Servicios</option>
                <option value="tel:+50612345678">Exportación de paquetes</option>
                <option value="tel:+50687654321">Importación de paquetes</option>
                <option value="tel:+50656789012">Gestión de productos</option>
                <option value="tel:+50634567890">Gestión de trabajadores</option>
            </select>
            </li>

            {/* Más */}
            <li id="RedirectLogin">
            <button onClick={handleLogin} className="nav-item">Login</button>
            </li>
        </ul>
        </div>
    );
}

export default NavBar;
