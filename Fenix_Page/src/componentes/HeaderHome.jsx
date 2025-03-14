import React from "react";
import '../style/Headerstyle.css'
import '../img/FondoHeader.avif'

function HeaderHome(){
    return(
        <div id="container">
            <div>
                <header>
                    <h1>Fenix</h1>
                    <h1>ECONOMIA <h4>Y</h4></h1>
                    <h1>ANALISIS</h1>
                    <h4>Descubre cómo la economia moderde</h4>
                    <h4>transformar tu presencia en el munndo negocios y lleva tu vida a nuevas alturas.</h4>
                    
                </header>
            </div>
            <div>
                <button id="BtnExplorarVerMas">Explorara <br />Ver Mas</button>
            </div>
        </div>
    )
}

export default HeaderHome