import FormContacto from '../ui/FormContacto'
import styles from './Contacto.module.css'

const WHATSAPP_NUMERO = '+56 9 7428 3404'
const WHATSAPP_URL = 'https://wa.me/56974283404?text=' + encodeURIComponent(
    'Hola José, me gustaría conversar sobre un proyecto.'
)
const EMAIL = 'joseurra@anduschile.com'

function Contacto() {
    return (
        <section id="contacto" className={`section section--alt ${styles.contacto}`}>
            <div className="container">
                <header className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Contacto</span>
                    <h2 className={styles.title}>Conversemos</h2>
                    <p className={styles.subtitle}>
                        ¿Tienes un negocio o un proyecto que necesita ordenarse digitalmente?
                        Sin compromiso y sin letra chica.
                    </p>
                </header>

                <div className={styles.layout}>
                    <div className={styles.channels}>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.channel}
                        >
                            <div className={styles.channelIcon} aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </div>
                            <div className={styles.channelText}>
                                <span className={styles.channelLabel}>WhatsApp</span>
                                <span className={styles.channelValue}>{WHATSAPP_NUMERO}</span>
                            </div>
                            <svg className={styles.channelArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M7 17L17 7M17 7H8M17 7v9" />
                            </svg>
                        </a>

                        <a href={`mailto:${EMAIL}`} className={styles.channel}>
                            <div className={styles.channelIcon} aria-hidden="true">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-10 5L2 7" />
                                </svg>
                            </div>
                            <div className={styles.channelText}>
                                <span className={styles.channelLabel}>Correo</span>
                                <span className={styles.channelValue}>{EMAIL}</span>
                            </div>
                            <svg className={styles.channelArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M7 17L17 7M17 7H8M17 7v9" />
                            </svg>
                        </a>
                    </div>

                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>O escríbeme por aquí</h3>
                        <p className={styles.formNote}>Te respondo dentro de 24 horas hábiles.</p>
                        <FormContacto />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto
