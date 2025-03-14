import React from "react";
import NavBar from "../componentes/NavBar";
import HeaderHome from "../componentes/HeaderHome";
import BodyHome from "../componentes/BodyHome";
import '../style/Home.css'
import FooterComponet from "../componentes/FooterComponet";
import Btnwhatsapp from "../componentes/BtnWhatsapp";

function Home(){
    return(
        <div id="Home">
            <NavBar/>
            <br />
            <HeaderHome/>
            <br />
            <BodyHome/>
            <br />
            <FooterComponet/>
            <Btnwhatsapp/>
        </div>
    )
}
export default Home