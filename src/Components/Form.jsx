import React, { useState } from "react";
import styles from "./Form.module.css";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";


const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [contactForm, setContactForm ] = useState({
        nombreCompleto: '',
        email: ''
    })


    const [mensajeExito, setMensajeExito]  =  useState(false)
    const [error, setError]  =  useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(contactForm.nombreCompleto.length > 5 && contactForm.email.trim().length > 6) {
            setMensajeExito(true); 
            setError(false);
        } else {
            setError(true);
        }
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Nombre Completo</label>
                <input type="text" placeholder='Ingresa tu Nombre completo..' onChange={(e)  => setContactForm({...contactForm, nombreCompleto: e.target.value})} />
                <label>Email</label>
                <input type="text" placeholder='Ingresa tu Email..' onChange={(e)  => setContactForm({...contactForm, email: e.target.value})} />
                <button className={styles.formBtn}>Enviar</button>
            </form>
            {mensajeExito && <SuccessMessage nombreCompleto={contactForm.nombreCompleto}  email={contactForm.email} />}
            {error && <ErrorMessage/>}
        </div>
    );
};

export default Form;
