import React, { useState } from 'react';

function EduAdminNegocio() {
    const [visibleSections, setVisibleSections] = useState({
        Seccion1: false,
        SeccionSemana1: false,
        SeccionSemana2: false,
        SeccionSemana3: false,
        SeccionSemana4: false,
    });

    const toggleSection = (section) => {
        setVisibleSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div>
            <div id='Seccion1' onClick={() => toggleSection('Seccion1')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                <h1>ADMINISTRACION DE NEGOCIOS</h1>
                {visibleSections.Seccion1 && (
                    <div>
                        <p><strong>PROFESOR: BAIRON HORNA ALVAREZ</strong></p>
                        <p><strong>MODALIDAD: VIRTUAL</strong></p>
                        <p><strong>HORARIOS: OPEN</strong></p>
                        <p><strong>AULA: ADMINISTRACION</strong></p>
                        <p><strong>DURACION: 4 semanas</strong></p>
                    </div>
                )}
            </div>
            <br />
            <div id='SeccionSemana1' onClick={() => toggleSection('SeccionSemana1')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                <h2>SEMANA 1</h2>
                {visibleSections.SeccionSemana1 && (
                    <div>
                        <p>Introducción a la administración.</p>
                        <p>Principios básicos y objetivos.</p>
                        
                    </div>
                )}
            </div>
            <br />
            <div id='SeccionSemana2' onClick={() => toggleSection('SeccionSemana2')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                <h2>SEMANA 2</h2>
                {visibleSections.SeccionSemana2 && (
                    <div>
                        <p>Estructura organizacional.</p>
                        <p>Tipos de empresas y modelos de negocio.</p>
                        
                    </div>
                )}
            </div>
            <br />
            <div id='SeccionSemana3' onClick={() => toggleSection('SeccionSemana3')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                <h2>SEMANA 3</h2>
                {visibleSections.SeccionSemana3 && (
                    <div>
                        <p>Gestión financiera básica.</p>
                        <p>Presupuestos y costos.</p>
                        
                    </div>
                )}
            </div>
            <br />
            <div id='SeccionSemana4' onClick={() => toggleSection('SeccionSemana4')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                <h2>SEMANA 4</h2>
                {visibleSections.SeccionSemana4 && (
                    <div>
                        <p>Estrategias de crecimiento empresarial.</p>
                        <p>Planificación a largo plazo.</p>
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default EduAdminNegocio;
