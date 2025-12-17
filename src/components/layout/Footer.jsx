import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <Link to="/" className={styles.logo}>
                            <span className={styles.logoText}>Andus</span>
                            <span className={styles.logoAccent}>Chile</span>
                        </Link>
                        <p className={styles.tagline}>
                            Infraestructura digital que te devuelve el tiempo.
                        </p>
                    </div>

                    <nav className={styles.footerNav}>
                        <Link to="/">Inicio</Link>
                        <Link to="/como-funciona">Cómo funciona</Link>
                        <Link to="/casos">Casos</Link>
                        <Link to="/empezar">Empezar</Link>
                    </nav>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {currentYear} AndusChile. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
