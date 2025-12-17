import FormContacto from '../components/ui/FormContacto'
import styles from './Empezar.module.css'

function Empezar() {
    return (
        <div className={styles.page}>
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <h1>Recupera tu tiempo</h1>
                            <p className={styles.subtitle}>
                                Deja tus datos y conversemos sobre cómo podemos ayudarte.
                                Sin compromiso. Sin letra chica.
                            </p>

                            <div className={styles.benefits}>
                                <div className={styles.benefit}>
                                    <span className={styles.benefitIcon}>⏱️</span>
                                    <span>Respuesta en menos de 24 horas</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.benefitIcon}>💬</span>
                                    <span>Te contactamos por WhatsApp</span>
                                </div>
                                <div className={styles.benefit}>
                                    <span className={styles.benefitIcon}>🚫</span>
                                    <span>Sin presión, sin spam</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            <FormContacto />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Empezar
