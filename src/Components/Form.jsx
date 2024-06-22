import React, { useState } from "react";
import styles from "./Form.module.css";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [contactForm, setContactForm ] = useState({
        nombreCompleto: '',
        email: ''
    })


    const [mensajeExito, setMensajeExito]  =  useState(false)
    const [error, setError]  =  useState(false)

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(contactForm.nombreCompleto.length > 5 && validateEmail(contactForm.email)) {
            setMensajeExito(true); 
            setError(false);
        } else {
            setError(true);
        }
    }
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" placeholder='Ingresa tu Nombre completo..' onChange={(e)  => setContactForm({...contactForm, nombreCompleto: e.target.value})} />
                <label>Email</label>
                <input type="text" placeholder='Ingresa tu Email..' onChange={(e)  => setContactForm({...contactForm, email: e.target.value})} />
                <button className={styles.formBtn}>Enviar</button>
            </form>
            {mensajeExito && <SuccessMessage nombreCompleto={contactForm.nombreCompleto}  email={contactForm.email} />}
            {error && <ErrorMessage/>}
        </>
    );
};

export default Form;
