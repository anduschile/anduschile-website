import styles from './QuienSoy.module.css'

function QuienSoy() {
    return (
        <section id="quien-soy" className={`section ${styles.quienSoy}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <header className={styles.sectionHeader}>
                        <span className={styles.eyebrow}>Quién está detrás</span>
                        <h2 className={styles.title}>23 años aprendiendo cómo funcionan los territorios.</h2>
                    </header>

                    <div className={styles.bodyWrapper}>
                        <p className={styles.body}>
                            AndusChile es el trabajo de <strong>José Urra</strong>, con 23 años
                            de experiencia en gestión pública territorial en el sur de Chile.
                            Trabajé desde adentro de los municipios, planificando, organizando
                            y ejecutando. Eso me enseñó cómo funcionan realmente los territorios,
                            los negocios locales y las personas que los operan.
                        </p>
                        <p className={styles.body}>
                            Hoy construyo soluciones digitales desde esa misma lógica: primero
                            entender el problema real, después diseñar la herramienta que lo
                            resuelve. Sin tecnología por tecnología, sin soluciones genéricas
                            para problemas específicos.
                        </p>
                    </div>

                    <ul className={styles.stats}>
                        <li className={styles.stat}>
                            <span className={styles.statNumber}>23</span>
                            <span className={styles.statLabel}>años en gestión<br />pública territorial</span>
                        </li>
                        <li className={styles.stat}>
                            <span className={styles.statNumber}>Sur de Chile</span>
                            <span className={styles.statLabel}>conocimiento territorial<br />de primera mano</span>
                        </li>
                        <li className={styles.stat}>
                            <span className={styles.statNumber}>A medida</span>
                            <span className={styles.statLabel}>cada cliente, cada<br />proyecto, cada flujo</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default QuienSoy
