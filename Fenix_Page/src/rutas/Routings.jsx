import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegistrarsePage from '../pages/RegistrarsePage'
import Administradores from '../pages/Administradores';
import ContactPage from '../pages/ContactPage';
import CampusVirtualFenix from '../pages/CampusVirtualFenix';


/* PAGINAS ESTUDIANTILES */
import EduAdminNegociosPage from '../pages/EduAdminNegociosPage';
import EduInflationPage from '../pages/EduInflationPage'
import EduDataScientsPage from '../pages/EduDataScientsPage'


function Routing() {


    return (
        <div>
            <Router>
                <Routes>
            

                                    {/* Paginas de usuarios */}
                                    <Route path="/" element={<Home/>}/>{/* HOME */}
                                    <Route path="/Login" element={<LoginPage/>}/>   {/* LOGIN */}
                                    <Route path="/Registrarse" element={<RegistrarsePage/>}/>{/* REGISTER */}

                                    {/* PAGINA DE ADMINISTRADORES */}
                                    <Route path="/Admin" element={<Administradores/>}/>
                                    <Route path="/Contact" element={<ContactPage/>}/>

                                    {/* Paginas educativa */}
                                    <Route path="/Campus" element={<CampusVirtualFenix/>}/>
                                    <Route path="/EduAdmin" element={<EduAdminNegociosPage/>}/>
                                    <Route path="/EduEconomia" element={<EduInflationPage/>}/>
                                    <Route path="/EduDtScients" element={<EduDataScientsPage/>}/>

                            
                                    
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

