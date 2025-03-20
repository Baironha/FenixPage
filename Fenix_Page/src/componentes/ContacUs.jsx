import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/ContactStyle.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_y78em1o', 'template_sodoeyj', form.current, {
            publicKey: 'RyljN1_ngdQ81QE0H',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div>
            <h1><strong>CONTACTANOS</strong></h1>
            <h1><strong>NOSOTROS TE LEEREMOS</strong></h1>
            <div id='ContainerFormContact'>
                <form id='Formcontact' ref={form} onSubmit={sendEmail}>
                    <label id='LabelContact'>Name</label><br />
                    <input id='InputContact' type="text" name="user_name" placeholder='Ingrese su nombre'/>
                    <br />
                    <label id='LabelContact'>Email</label><br />
                    <input id='InputContact' type="email" name="user_email" placeholder='Ingrese su correo electronico'/>
                    <br />
                    <label id='LabelContact'>Message</label><br />
                    <textarea name="message" placeholder='Mensaje'/>
                    <br />
                    <input type="submit" value="Send" id='BtnSubmit' />
                </form>
            </div>
            <div>
                <p>En <strong>Fenix</strong> tomamos en cuenta tu opinion, escribemos y te leeremos</p>
                <p>feedback,ayuda o puntos de mejora, para nosotros tu opinon es necesaria</p>
                <p>Te responderemos lo antes posible</p>
            </div>
        </div>
    );
};

export default ContactUs