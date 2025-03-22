import React, { useState } from 'react';

/* DocumentacionEN PDF de los cursos de Fenix */
import PdfHistoriaEco from '../PDF/Historia de la economía y su origen.pdf';
import PdfImpotanciaEco from '../PDF/La Importancia de entender la economía.pdf'
import PdfQueEsLaEco from '../PDF/Que es la economía y su función.pdf'
import PdfQueEsInflacion from '../PDF/Que es y como surgió la inflación.pdf'
import PdfDesarolloInflacion from '../PDF/Desarrollo de la inflación.pdf'
import PdfAfectaInflacion from '../PDF/Como nos afecta la inflación.pdf'
import '../style/EduEco.css'

function EduInflacionEconomia() {
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
            <h1 id='T1'>ECONOMIA DEL SIGLO XXI</h1>
            <h1 id='T2'>FENIX</h1>
            <div>
                <p><strong>PROFESOR: BAIRON HORNA ALVAREZ</strong></p>
                <p><strong>MODALIDAD: VIRTUAL</strong></p>
                <p><strong>HORARIOS: OPEN</strong></p>
                <p><strong>AULA: ECONOMIA</strong></p>
                <p><strong>DURACION: 4 semanas</strong></p>
            </div>
            <div id='padre'>
                <br />
                <div id='Seccion1' onClick={() => toggleSection('Seccion1')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                </div>
                <br />
                <div id='Semanas'>
                    <div id='SeccionSemana1' onClick={() => toggleSection('SeccionSemana1')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                        <h2>SEMANA 1</h2>
                        {visibleSections.SeccionSemana1 && (
                            <div>
                                <div>
                                    <h3 id='Material'>Que es la economia en la actualidad? </h3>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>¿Qué es la Economía?</strong> <br />
                                            La economía es la ciencia que estudia cómo las sociedades administran sus recursos
                                            para satisfacer sus necesidades y deseos. Analiza la producción, distribución y
                                            consumo de bienes y servicios, así como las decisiones que toman los individuos,
                                            empresas y gobiernos para utilizar sus recursos de manera eficiente.
                                        </p>
                                    </div>
                                    <br />
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>En términos simples, la economía busca responder preguntas como:</strong><br />
                                            <ol>
                                                <li>¿Qué producir? (¿Qué bienes y servicios son necesarios o deseados?)</li>
                                                <li>¿Cómo producirlo? (¿Qué métodos y recursos se deben emplear?)</li>
                                                <li>¿Para quién producir? (¿Quiénes recibirán los bienes y servicios y en qué cantidad?)</li>
                                            </ol>
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <h3>Principales Conceptos de la Economía</h3>
                                        <p id='Contenido'>
                                            <strong>Recursos y Escasez</strong> <br />
                                            Los recursos (como el dinero, la tierra, el trabajo y la tecnología) son limitados, pero
                                            las necesidades humanas son prácticamente infinitas. La economía estudia cómo se
                                            pueden asignar estos recursos de la mejor manera posible.
                                        </p>
                                        <p id='Contenido'>
                                            <strong>Oferta y Demanda</strong><br />
                                            La oferta es la cantidad de bienes y servicios que los productores están dispuestos a
                                            vender, mientras que la demanda es lo que los consumidores están dispuestos a
                                            comprar. La interacción entre ambos determina los precios en un mercado.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <h3 id='Material'>Historia de la economia:</h3>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>Historia de la Economía y su Origen:</strong><br />
                                            La economía ha existido desde los albores de la humanidad como una necesidad
                                            fundamental para la supervivencia y la organización de las sociedades. Su historia es
                                            un reflejo del desarrollo humano, desde el trueque en comunidades primitivas hasta
                                            los complejos sistemas económicos modernos.
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                        <strong>El Origen de la Economía y la Subsistencia al Trueque:</strong><br />
                                            Antes de que existiera la economía como disciplina formal, los primeros grupos
                                            humanos vivían en comunidades de cazadores-recolectores, donde los bienes se
                                            compartían de manera colectiva. La administración de los recursos estaba basada en
                                            la cooperación y el trabajo en equipo para garantizar la supervivencia.
                                        </p>
                                        <p id='Contenido'>
                                            Con la invención de la agricultura hace unos 10,000 años, las sociedades
                                            comenzaron a asentarse en comunidades estables, lo que permitió la producción de
                                            excedentes de alimentos. Este cambio marcó el inicio de una economía más
                                            organizada, ya que los excedentes podían intercambiarse por otros bienes. Así surgió
                                            el trueque, una de las primeras formas de intercambio económico. Sin embargo, el
                                            trueque tenía limitaciones, ya que requería que ambas partes quisieran exactamente
                                            lo que la otra ofrecía.
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>Las Primeras Civilizaciones y la Economía Organizada:</strong><br />
                                            A medida que las sociedades crecían y se volvían más complejas, se desarrollaron
                                            sistemas económicos más avanzados. En Mesopotamia, Egipto, India y China, los
                                            gobiernos comenzaron a administrar los recursos y a registrar transacciones
                                            mediante sistemas de escritura
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>El Mercantilismo y la Expansión Comercial</strong><br />
                                            Con los descubrimientos geográficos de los siglos XV y XVI, las economías europeas
                                            comenzaron a transformarse con la acumulación de metales preciosos y la
                                            expansión colonial. El mercantilismo se convirtió en la doctrina económica
                                            dominante, promoviendo el control estatal del comercio y la autosuficiencia de los
                                            países
                                        </p>
                                    </div>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>El Siglo XX: Keynesianismo, Neoliberalismo y Globalización</strong><br />
                                            Tras la Gran Depresión de 1929, el economista John Maynard Keynes propuso que el
                                            Estado debía intervenir en la economía para evitar crisis y desempleo. Sus ideas
                                            dieron lugar al Estado de bienestar, donde los gobiernos regulaban los mercados y
                                            promovían el crecimiento económico.
                                        </p >
                                    </div>
                                </div><br />
                                <div>
                                    <h3 id='Material'>La importancia de la economia:</h3>
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>La Importancia de Entender la Economía y su Función en el Mundo:</strong><br />
                                            La economía es una ciencia fundamental que influye en todos los aspectos de la vida
                                            humana. Su comprensión no solo permite a los individuos tomar mejores decisiones
                                            financieras, sino que también ayuda a las sociedades a organizarse de manera más
                                            eficiente para garantizar el bienestar general. Desde la producción y distribución de
                                            bienes hasta la creación de empleo y el desarrollo de los países, la economía es el
                                            motor que impulsa la vida moderna y determina la calidad de vida de las personas
                                        </p>
                                    </div>
                                    <div  id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>¿Por qué es importante entender la economía?</strong><br />
                                            Comprender la economía es esencial porque afecta directamente la vida cotidiana de
                                            las personas, la estabilidad de los países y el progreso de la humanidad. En un
                                            mundo globalizado donde las decisiones económicas de un país pueden afectar a
                                            toda la comunidad internacional, tener conocimientos económicos es crucial para
                                            adaptarse a los cambios y aprovechar las oportunidades que surgen.
                                        </p>
                                        <p id='Contenido'>
                                            Uno de los principales beneficios de entender la economía es que nos permite
                                            mejorar nuestra toma de decisiones personales. La administración del dinero, la
                                            inversión y el ahorro son aspectos fundamentales de la vida diaria que están
                                            directamente influenciados por principios económicos. Saber cómo funcionan la
                                            inflación, las tasas de interés y los ciclos económicos ayuda a tomar mejores
                                            decisiones en relación con nuestros ingresos y gastos, evitando deudas innecesarias
                                            y asegurando un futuro financiero más estable.
                                        </p>
                                        <p id='Contenido'>
                                            Además, conocer cómo opera la economía nos permite entender el mundo que nos
                                            rodea. Muchos de los eventos que afectan a la sociedad, como las crisis
                                            económicas, la subida de precios de los alimentos y el desempleo, tienen
                                            explicaciones económicas que, si se comprenden adecuadamente, pueden ayudar a
                                            las personas a prepararse mejor para afrontar estos desafíos. La economía también
                                            explica por qué algunos países son más ricos que otros y qué medidas pueden tomar
                                            para mejorar su desarrollo.
                                        </p>
                                        <p id='Contenido'>
                                            En el ámbito empresarial, el conocimiento económico es una herramienta clave para
                                            tomar decisiones estratégicas. Las empresas dependen de la economía para evaluar
                                            la viabilidad de sus negocios, decidir precios, gestionar costos y anticipar la demanda
                                            del mercado. Comprender las tendencias económicas permite a las compañías
                                            innovar y adaptarse a los cambios, lo que aumenta sus posibilidades de éxito en un
                                            entorno competitivo.
                                        </p>
                                    </div >
                                    <div id='Seccion'>
                                        <p id='Contenido'>
                                            <strong>¿Para qué sirve la existencia de la economía en el mundo?</strong><br />
                                            La economía existe porque los recursos en el mundo son limitados y la sociedad
                                            necesita encontrar la mejor manera de utilizarlos para satisfacer sus necesidades.
                                            Sin ella, no habría un sistema organizado para administrar la producción y
                                            distribución de bienes y servicios, lo que llevaría al caos y a la ineficiencia en el uso
                                            de los recursos. Su función principal es garantizar que estos recursos se asignen de
                                            manera óptima para mejorar la calidad de vida de las personas y fomentar el
                                            desarrollo sostenible.
                                        </p>
                                        <p id='Contenido'>
                                            Uno de los principales propósitos de la economía es la optimización de los recursos
                                            disponibles. En un mundo donde la población crece constantemente y las
                                            necesidades aumentan, es fundamental que los bienes y servicios se produzcan y
                                            distribuyan de la manera más eficiente posible. La economía permite identificar qué
                                            recursos son escasos, cómo deben usarse y qué alternativas pueden adoptarse para
                                            aprovecharlos mejor.
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div>
                                    <h3>MATERIAL DE APOYO</h3>
                                    <p>DOCUMENTACION COMPLETA DE LA SEMANA EN PDF</p>
                                    <div className = "App">
                                        <a href = {PdfHistoriaEco} target = "_blank">La historia de la inflacion </a>
                                    </div>
                                    <div className = "App">
                                        <a href = {PdfQueEsLaEco} target = "_blank">Que es la einflacion y como surgio?</a>
                                    </div>
                                    <div className = "App">
                                        <a href = {PdfImpotanciaEco} target = "_blank">En que nos afecta la inflacion?</a>
                                    </div>
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Iu9Cy8CAKEg?si=YavmGMlq26z0ls1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <br />
                    <div id='SeccionSemana2' onClick={() => toggleSection('SeccionSemana2')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                        <h2>SEMANA 2</h2>
                        {visibleSections.SeccionSemana2 && (
                            <div>
                                <div>
                                <div id='Seccion'>
                                    <p id='Contenido'>
                                        <strong>Que es la Inflación.?</strong><br />
                                        La inflación es el aumento sostenido y generalizado de los precios de bienes y
                                        servicios en una economía durante un período de tiempo. Cuando hay inflación, el
                                        poder adquisitivo del dinero disminuye, es decir, con la misma cantidad de dinero se
                                        pueden comprar menos cosas. 
                                    </p>
                                </div>
                                <br />
                                <div id='Seccion'>
                                    <p id='Contenido'>
                                        <strong>Origen de la inflación</strong><br />
                                        La inflación ha existido desde que las sociedades comenzaron a utilizar dinero como
                                        medio de intercambio. En la historia, se ha presentado en diferentes formas: 
                                    </p>
                                </div>
                                <div id='Seccion'>
                                    <ol>
                                        <li>
                                            <strong>Inflación por emisión excesiva de moneda:</strong> En la antigüedad, cuando los
                                            gobernantes acuñaban monedas con menos contenido de metal precioso o
                                            imprimían más billetes sin respaldo, el dinero perdía valor. Un ejemplo clásico
                                            es la hiperinflación en la Alemania de 1923, cuando el gobierno imprimió
                                            enormes cantidades de marcos para pagar deudas de
                                        </li>
                                        <br />
                                        <li>
                                            <strong>Inflación por demanda:</strong> Surge cuando la demanda de bienes y servicios
                                            supera la capacidad de producción de una economía, lo que empuja los
                                            precios al alza. 
                                        </li>
                                        <br />
                                        <li>
                                            <strong>Inflación estructural:</strong> Se da en economías con problemas persistentes, como
                                            ineficiencias en la producción, mercados poco competitivos o deficiencias en
                                            el transporte y distribución. <br />
                                            A lo largo de la historia, los gobiernos han tratado de controlar la inflación mediante
                                            políticas monetarias y fiscales, como la regulación de tasas de interés y el control del
                                            gasto público.
                                        </li>
                                    </ol>
                                </div>
                                </div>
                                <h3>MATERIAL DE APOYO</h3>
                                <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                <div className = "App">
                                    <a href = {PdfQueEsInflacion} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div className = "App">
                                    <a href = {PdfDesarolloInflacion} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div className = "App">
                                    <a href = {PdfAfectaInflacion} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TOVvFXR3jA8?si=wbbpIotDbD073Jsb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                    <br />
                    <div id='SeccionSemana3' onClick={() => toggleSection('SeccionSemana3')} style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }}>
                        <h2>SEMANA 3</h2>
                        {visibleSections.SeccionSemana3 && (
                            <div>
                                <div id='Seccion'>
                                    <p id='Contenido'>
                                        
                                    </p>
                                </div>
                                <h3>MATERIAL DE APOYO</h3>
                                <p>DOCUMENTAION COMPLETA DE LA SEMANA EN PDF</p>
                                <div className = "App">
                                    <a href = {PdfQueEsInflacion} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div className = "App">
                                    <a href = {PdfDesarolloInflacion} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div className = "App">
                                    <a href = {PdfAfectaInflacion} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TOVvFXR3jA8?si=wbbpIotDbD073Jsb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
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
                                
                                <h3>MATERIAL DE APOYO</h3>
                                <p>DOCUMENTACION COMPLETA EN PDF DE LA SEMANA</p>
                                <div className = "App">
                                    <a href = {PdfHistoriaEco} target = "_blank">LA HISTORIA DE LA ECNOMIA</a>
                                </div>
                                <div className = "App">
                                    <a href = {PdfQueEsLaEco} target = "_blank">Que es la economia?</a>
                                </div>
                                <div className = "App">
                                    <a href = {PdfImpotanciaEco} target = "_blank">LA IMPORTANCIA DE LA ECONOMIA</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EduInflacionEconomia;


