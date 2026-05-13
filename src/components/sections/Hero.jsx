import styles from './Hero.module.css'

function Hero() {
    return (
        <section id="inicio" className={`section section--hero ${styles.hero}`}>
            <div className={`container ${styles.heroContainer}`}>
                <span className={styles.eyebrow}>AndusChile · Sur de Chile</span>

                <h1 className={styles.headline}>
                    Soluciones digitales para municipios,
                    alojamientos y negocios locales.
                </h1>

                <p className={styles.subheadline}>
                    AndusChile es el trabajo de <strong>José Urra</strong>, con 23 años
                    de experiencia en gestión pública territorial. Construimos sistemas
                    que funcionan para la realidad de cada cliente, no al revés.
                </p>

                <div className={styles.actions}>
                    <a href="#contacto" className={`btn btn--primary btn--large ${styles.cta}`}>
                        Conversemos
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#servicios" className={styles.secondaryLink}>
                        Ver qué hacemos
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
