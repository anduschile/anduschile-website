import styles from './Footer.module.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerMain}>
                    <div className={styles.footerBrand}>
                        <a href="#inicio" className={styles.logo} aria-label="AndusChile — ir al inicio">
                            <span className={styles.logoText}>Andus</span>
                            <span className={styles.logoAccent}>Chile</span>
                        </a>
                        <p className={styles.tagline}>
                            Soluciones digitales para municipios, alojamientos
                            y negocios locales.
                        </p>
                    </div>

                    <div className={styles.footerColumns}>
                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Sitio</h4>
                            <nav className={styles.footerNav}>
                                <a href="#servicios">Servicios</a>
                                <a href="#casos">Casos</a>
                                <a href="#quien-soy">Quién soy</a>
                                <a href="#contacto">Contacto</a>
                            </nav>
                        </div>

                        <div className={styles.footerColumn}>
                            <h4 className={styles.columnTitle}>Contacto</h4>
                            <nav className={styles.footerNav}>
                                <a href="https://wa.me/56974283404" target="_blank" rel="noopener noreferrer">
                                    +56 9 7428 3404
                                </a>
                                <a href="mailto:joseurra@anduschile.com">
                                    joseurra@anduschile.com
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© {currentYear} AndusChile · José Urra · Puerto Natales, Chile</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
