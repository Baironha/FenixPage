import React from "react";
import '../style/Home.css'

import NavBar from "../componentes/NavBar";
import HeaderHome from "../componentes/HeaderHome";
import BodyHomeInfo from "../componentes/BodyHomeInfo";

import FooterComponet from "../componentes/FooterComponet";
import Btnwhatsapp from "../componentes/BtnWhatsapp";
import ServiciosHome from "../componentes/ServiciosHome";
import SolicitudSocio from "../componentes/SolicitudSocio";
import EduacionHome from "../componentes/EducacionHome";


function Home(){
    return(
        <div id="body">
            <NavBar/>
            <Btnwhatsapp/>
            <br />
            <HeaderHome/>
            <br />
            <BodyHomeInfo/>
            <br />
            <ServiciosHome/>
            <br />
            <br />
            <EduacionHome/>
            <br />
            <br />
            <SolicitudSocio/>
            <br />
            <FooterComponet/>
        </div>
    )
}
export default Home