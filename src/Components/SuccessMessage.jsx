import React from 'react';
import styles from './SucccessMessage.module.css';

const SuccessMessage = ({nombreCompleto, email}) => {
  return (
    <div className={styles.successMsg}>
            {console.log(nombreCompleto, email)}
            <h2>Gracias {nombreCompleto}</h2>
            <h2>Nos estaremos comunicando a tu mail: {email} lo antes posible.</h2>
        </div>
  )
}

export default SuccessMessage
