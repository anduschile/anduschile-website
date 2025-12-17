import FormContacto from '../ui/FormContacto'
import styles from './CtaFinal.module.css'

function CtaFinal() {
    return (
        <section className={`section ${styles.cta}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            ¿Listo para recuperar tu tiempo?
                        </h2>
                        <p className={styles.subtitle}>
                            Deja tus datos y conversemos sobre cómo podemos ayudarte.
                            Sin compromiso. Sin letra chica.
                        </p>
                    </div>

                    <div className={styles.formWrapper}>
                        <FormContacto />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaFinal
