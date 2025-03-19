import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
            <form ref={form} onSubmit={sendEmail}>
                <label id='LabelContact'>Name</label><br />
                <input id='InputContact' type="text" name="user_name" />
                <br />
                <label id='LabelContact'>Email</label><br />
                <input id='InputContact' type="email" name="user_email" />
                <br />
                <label id='LabelContact'>Message</label><br />
                <textarea name="message" />
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactUs