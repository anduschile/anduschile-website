import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={`section section--hero ${styles.hero}`}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <h1 className={styles.headline}>
                        ¿Cuántas horas pierdes
                        <span className="text-gradient"> operando tu negocio</span>?
                    </h1>

                    <p className={styles.subheadline}>
                        Reservas que se confirman solas.<br />
                        Pagos que llegan sin perseguirlos.<br />
                        Recordatorios que tú no envías.
                    </p>

                    <Link to="/empezar" className={`btn btn--primary btn--large ${styles.cta}`}>
                        Quiero mi tiempo de vuelta
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className={styles.heroVisual}>
                    <div className={styles.visualCard}>
                        <div className={styles.visualIcon}>⏰</div>
                        <span>Tiempo recuperado</span>
                    </div>
                    <div className={styles.visualCard}>
                        <div className={styles.visualIcon}>💰</div>
                        <span>Pagos automáticos</span>
                    </div>
                    <div className={styles.visualCard}>
                        <div className={styles.visualIcon}>✅</div>
                        <span>Clientes que llegan</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
