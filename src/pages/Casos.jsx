import { Link } from 'react-router-dom'
import styles from './Casos.module.css'

const casos = [
    {
        nombre: 'ArteBrisa Patagonia',
        tipo: '🏔️ Turismo',
        ubicacion: 'Puerto Natales',
        problema: 'Pasaban 4 horas al día confirmando reservas por WhatsApp. Plataformas como Booking se llevaban el 18% de cada venta. Muchos clientes reservaban y no llegaban, sin forma de prevenirlo.',
        solucion: 'Instalamos una web con reservas directas + pago anticipado obligatorio + recordatorios automáticos por WhatsApp.',
        resultados: [
            '4 horas/día recuperadas',
            '70% menos depender de Booking y Airbnb',
            '85% menos clientes que no llegan',
        ],
        cita: '"Ahora las reservas llegan solas y los clientes pagan antes. Recuperé mis tardes para estar con mi familia."',
    },
    {
        nombre: 'Barbería Don Carlos',
        tipo: '💈 Belleza',
        ubicacion: 'Santiago Centro',
        problema: 'Los clientes reservaban por Instagram y no llegaban. Perdía 5-6 turnos por semana. Cobraba en efectivo y no tenía control.',
        solucion: 'Agenda online con pago parcial al reservar + recordatorios 24h antes + Webpay integrado.',
        resultados: [
            '90% menos clientes que no llegan',
            '100% pagos digitales',
            'Agenda siempre llena',
        ],
        cita: '"Antes perdía plata cada semana. Hoy todos pagan al reservar y nadie falta."',
    },
    {
        nombre: 'Centro Estética Luna',
        tipo: '💅 Estética',
        ubicacion: 'Concepción',
        problema: 'Gestionaban todo en un cuaderno. Confundían horarios. Perdían clientes por falta de confirmación.',
        solucion: 'Agenda digital en un solo lugar + confirmación automática + historial de clientes.',
        resultados: [
            'Cero confusiones de horario',
            'Clientes recurrentes +40%',
            'Menos estrés en el día a día',
        ],
        cita: '"Por fin tengo control. Sé quién viene, cuándo y cuánto va a pagar. Todo en un solo lugar."',
    },
]

function Casos() {
    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={`section ${styles.hero}`}>
                <div className="container">
                    <h1>Casos reales</h1>
                    <p className={styles.heroSubtitle}>
                        Negocios que recuperaron tiempo y control.
                    </p>
                </div>
            </section>

            {/* Casos */}
            <section className={`section ${styles.section}`}>
                <div className="container">
                    <div className={styles.casosList}>
                        {casos.map((caso, index) => (
                            <article key={index} className={styles.caso}>
                                <div className={styles.casoHeader}>
                                    <div>
                                        <span className={styles.tipo}>{caso.tipo}</span>
                                        <h2 className={styles.nombre}>{caso.nombre}</h2>
                                        <span className={styles.ubicacion}>{caso.ubicacion}</span>
                                    </div>
                                </div>

                                <div className={styles.casoBody}>
                                    <div className={styles.bloque}>
                                        <h3 className={styles.bloqueTitle}>
                                            <span className={styles.iconDolor}>✗</span> El problema
                                        </h3>
                                        <p>{caso.problema}</p>
                                    </div>

                                    <div className={styles.bloque}>
                                        <h3 className={styles.bloqueTitle}>
                                            <span className={styles.iconSolucion}>→</span> La solución
                                        </h3>
                                        <p>{caso.solucion}</p>
                                    </div>

                                    <div className={styles.bloque}>
                                        <h3 className={styles.bloqueTitle}>
                                            <span className={styles.iconResultado}>✓</span> Resultados
                                        </h3>
                                        <ul className={styles.resultados}>
                                            {caso.resultados.map((resultado, i) => (
                                                <li key={i}>{resultado}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <blockquote className={styles.cita}>
                                    {caso.cita}
                                </blockquote>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.sectionCta}`}>
                <div className="container text-center">
                    <h2>¿Quieres ser el próximo caso?</h2>
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

export default Casos
