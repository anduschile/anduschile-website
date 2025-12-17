import styles from './Transformacion.module.css'

const antes = [
    'Tú confirmas cada reserva',
    'Tú persigues cada pago',
    'Tú envías cada recordatorio',
    'Tú trabajas 12+ horas',
    'Tu negocio te controla'
]

const despues = [
    'Las reservas se confirman solas',
    'Los pagos llegan automáticamente',
    'Los recordatorios se envían sin ti',
    'Trabajas las horas que decides',
    'Tú controlas tu negocio'
]

function Transformacion() {
    return (
        <section className={`section ${styles.transformacion}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        De operador a
                        <span className="text-gradient"> dueño</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Tu negocio debería trabajar para ti, no al revés.
                    </p>
                </div>

                <div className={styles.comparison}>
                    <div className={`${styles.column} ${styles.columnAntes}`}>
                        <div className={styles.columnHeader}>
                            <span className={styles.badge}>ANTES</span>
                            <h3>Operación manual</h3>
                        </div>
                        <ul className={styles.list}>
                            {antes.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.iconAntes}>✗</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.divider}>
                        <span className={styles.arrow}>→</span>
                    </div>

                    <div className={`${styles.column} ${styles.columnDespues}`}>
                        <div className={styles.columnHeader}>
                            <span className={`${styles.badge} ${styles.badgeDespues}`}>DESPUÉS</span>
                            <h3>Operación automática</h3>
                        </div>
                        <ul className={styles.list}>
                            {despues.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.iconDespues}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transformacion
