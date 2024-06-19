import styles from './ErrorMessage.module.css'
const ErrorMessage = () => {
    return (
        <div>
            <h3 className={styles.errorMsg}>Porfavor, llena los campos solicitados.</h3>
        </div>
    )
}

export default ErrorMessage
