import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import RegistrarsePage from '../pages/RegistrarsePage'
import Administradores from '../pages/Administradores';
import EduacionPage from '../pages/EducacionPage';
import ContactPage from '../pages/ContactPage';


function Routing() {


    return (
        <div>
            <Router>
                <Routes>
            
                                

                                    <Route path="/home" element={<Home/>}/>
                                    <Route path="/Login" element={<LoginPage/>}/>
                                    <Route path="/Registrarse" element={<RegistrarsePage/>}/>
                                    <Route path="/Admin" element={<Administradores/>}/>
                                    <Route path="/Edu" element={<EduacionPage/>}/>
                                    <Route path="/Contact" element={<ContactPage/>}/>

                            
                                    
                </Routes>
            </Router>
        </div>
    );
}

export default Routing

