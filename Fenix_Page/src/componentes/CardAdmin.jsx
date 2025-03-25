import React from "react";
import '../style/CarAdminStyle.css'


function CarsdAdmin(){
    return(
        <div>
            
            
            <h1 className="TituloAdminPrincipal"><strong>ADMINISTRACION PRINCIPAL</strong></h1>
            <div id="ContCardsAdmin">
                <div id="ContCardAdmin">
                    <h2  id="TUsuariosRegistrados">USUARIOS REGISTRADOS</h2>
                    <p id="ContUsuarios"><strong>0</strong></p>
                </div>
                <br />
                <div id="ContCardAdmin">
                    <h2 id="TLike">Like en la pagina</h2>
                    <p id="ContLike"><strong>0</strong></p>
                </div>
                <br />
                <div id="ContCardAdmin">
                    <h2 id="TDisLike">Dislike en la pagina</h2>
                    <p id="ContDisLike"><strong>0</strong></p>
                </div>
                <br />
                <div id="ContCardAdmin">
                    <h2 id="TSoliSocios">Solicitudes de socios</h2>
                    <p id="ContSolicitudesSocios"><strong>0</strong></p>
                </div>
            </div>
        </div>
    )
}

export default CarsdAdmin