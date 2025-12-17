import { Link } from 'react-router-dom'
import styles from './ComoFunciona.module.css'

const incluye = [
    { icon: '🌐', titulo: 'Sitio web profesional', descripcion: 'Tu presencia online clara y directa. Sin plantillas genéricas.' },
    { icon: '📅', titulo: 'Reservas y agenda online', descripcion: 'Tus clientes reservan solos. Sin llamadas, sin WhatsApp.' },
    { icon: '💳', titulo: 'Pagos integrados', descripcion: 'Webpay, transferencia o pago anticipado. El dinero llega sin perseguirlo.' },
    { icon: '🔔', titulo: 'Recordatorios que se envían solos', descripcion: 'WhatsApp o email antes de la cita. Menos clientes que no llegan, más ingresos.' },
]

const resuelve = [
    'No más plataformas como Booking o Airbnb quedándose con el 15-20% de cada venta',
    'No más clientes que reservan y no llegan: recordatorios + pago anticipado',
    'No más WhatsApp caótico: todo en un solo lugar',
    'No más horas perdidas confirmando y cobrando',
]

const timeline = [
    { dia: 'Día 1-2', titulo: 'Conversamos', descripcion: 'Entendemos tu negocio y qué problemas quieres resolver' },
    { dia: 'Día 3-5', titulo: 'Construimos', descripcion: 'Armamos tu sistema completo y lo configuramos' },
    { dia: 'Día 6-7', titulo: 'Lanzamos', descripcion: 'Probamos, ajustamos y lo dejamos funcionando solo' },
]

function ComoFunciona() {
    return (
        <div className={styles.page}>
            {/* Hero simple */}
            <section className={`section ${styles.hero}`}>
                <div className="container">
                    <h1>Cómo funciona</h1>
                    <p className={styles.heroSubtitle}>
                        Instalamos un sistema que opera tu negocio.<br />
                        Tú recuperas control y tiempo.
                    </p>
                </div>
            </section>

            {/* Qué incluye */}
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Qué incluye el sistema</h2>
                    <div className={`grid grid-2 ${styles.grid}`}>
                        {incluye.map((item, index) => (
                            <div key={index} className="card">
                                <div className={styles.itemIcon}>{item.icon}</div>
                                <h3 className={styles.itemTitle}>{item.titulo}</h3>
                                <p className={styles.itemDesc}>{item.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qué resuelve */}
            <section className={`section ${styles.sectionAlt}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Qué problemas resuelve</h2>
                    <ul className={styles.checkList}>
                        {resuelve.map((item, index) => (
                            <li key={index}>
                                <span className={styles.check}>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className={styles.focusNote}>
                        Nos enfocamos solo en lo esencial: que tu negocio funcione solo.
                    </p>
                </div>
            </section>

            {/* Timeline */}
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <h2 className={`${styles.sectionTitle} text-center`}>Proceso de trabajo</h2>
                    <p className="text-center text-secondary mb-8">En 7 días tu sistema está funcionando.</p>

                    <div className={styles.timeline}>
                        {timeline.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.timelineDia}>{item.dia}</div>
                                <div className={styles.timelineContent}>
                                    <h3>{item.titulo}</h3>
                                    <p>{item.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.sectionCta}`}>
                <div className="container text-center">
                    <h2>¿Listo para empezar?</h2>
                    <p className="text-secondary mb-8">
                        Conversemos sobre cómo podemos ayudarte.
                    </p>
                    <Link to="/empezar" className="btn btn--primary btn--large">
                        Quiero mi tiempo de vuelta
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default ComoFunciona
