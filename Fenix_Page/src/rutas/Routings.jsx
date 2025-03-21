import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegistrarsePage from '../pages/RegistrarsePage'
import Administradores from '../pages/Administradores';
import ContactPage from '../pages/ContactPage';
import CampusVirtualFenix from '../pages/CampusVirtualFenix';
import EduAdminNegociosPage from '../pages/EduAdminNegociosPage';

function Routing() {


    return (
        <div>
            <Router>
                <Routes>
            


                                    <Route path="/" element={<Home/>}/>{/* HOME */}
                                    <Route path="/Login" element={<LoginPage/>}/>   {/* LOGIN */}
                                    <Route path="/Registrarse" element={<RegistrarsePage/>}/>{/* REGISTER */}
                                    <Route path="/Admin" element={<Administradores/>}/>{/* PAGINA DE ADMINISTRADORES */}

                                    <Route path="/Contact" element={<ContactPage/>}/>

                                    {/* Paginas educativa */}
                                    <Route path="/Campus" element={<CampusVirtualFenix/>}/>
                                    <Route path="/EduAdmin" element={<EduAdminNegociosPage/>}/>
                                    <Route path="/EduEconomia" element={<InflationPage/>}/>
                                    <Route path="/EduDtScients" element={<EduDataScientsPage/>}/>

                            
                                    
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

