import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaEnvelope, FaHardHat } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../style/SideBarStyle.css";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sidebar"
        >
        <ul className="sidebar-menu">
            <li onClick={() => navigate("/Admin")} className="sidebar-item">
            <FaHome size={24} />
            <span>Inicio</span>
            </li>
            <li onClick={() => navigate("/GestionUsu")} className="sidebar-item">
            <FaUser size={24} />
            <span>Gestión de Usuarios</span>
            </li>
            <li className="sidebar-item">
            <label className="sidebar-label">Soporte</label>
            <select
                className="sidebar-select"
                onChange={(e) => {
                if (e.target.value) window.location.href = `mailto:${e.target.value}`;
                }}
            >
                <option value="">Seleccionar contacto</option>
                <option value="bhorna@fwdcostarica.com">bhorna@fwdcostarica.com</option>
                <option value="ssalasl@fwdcostarica.com">ssalasl@fwdcostarica.com</option>
                <option value="bvega@fwdcostarica.com">bvega@fwdcostarica.com</option>
            </select>
            </li>
            <li onClick={() => navigate("/KPI")} className="sidebar-item">
            <FaChartBar size={24} />
            <span>Indicadores</span>
            </li>
            <li onClick={() => navigate("/ContactUs")} className="sidebar-item">
            <FaEnvelope size={24} />
            <span>Contacto</span>
            </li>
            <li onClick={() => navigate("/work")} className="sidebar-item">
            <FaHardHat size={24} />
            <span>Trabajo</span>
            </li>
        </ul>
        </motion.div>
    );
};

export default Sidebar;
