import styles from './ErrorMessage.module.css'
const ErrorMessage = () => {
    return (
        <div>
            <h3 className={styles.errorMsg}>Por favor verifique su información nuevamente</h3>
        </div>
    )
}

export default ErrorMessage
