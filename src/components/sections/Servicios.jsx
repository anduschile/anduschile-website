import { Calendar, Map, Globe, Settings } from 'lucide-react'
import styles from './Servicios.module.css'

const servicios = [
    {
        numero: '01',
        icono: Calendar,
        titulo: 'Sistemas de reservas para alojamientos',
        descripcion: 'Panel de control para hostales, cabañas y apart-hoteles. Calendario, reservas, huéspedes, pagos y libro del día en una sola pantalla. Sin Excel, sin cuaderno, sin doble reserva.'
    },
    {
        numero: '02',
        icono: Map,
        titulo: 'Plataformas territoriales para municipios',
        descripcion: 'Sistemas de gestión ciudadana, reportería y participación para gobiernos locales. Diseñados desde adentro, por alguien que conoce cómo funciona un municipio real.'
    },
    {
        numero: '03',
        icono: Globe,
        titulo: 'Sitios web para negocios locales',
        descripcion: 'Presencia digital que convierte visitas en clientes. Diseño, velocidad y foco en lo que necesita cada negocio, no una plantilla genérica.'
    },
    {
        numero: '04',
        icono: Settings,
        titulo: 'Sistemas de gestión a medida',
        descripcion: 'Cotizadores, agendas, dashboards y herramientas operativas adaptadas al flujo real de trabajo de cada cliente.'
    }
]

function Servicios() {
    return (
        <section id="servicios" className={`section ${styles.servicios}`}>
            <div className="container">
                <header className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Servicios</span>
                    <h2 className={styles.title}>Qué hacemos</h2>
                </header>

                <div className={styles.grid}>
                    {servicios.map(servicio => {
                        const Icono = servicio.icono
                        return (
                            <article key={servicio.numero} className={styles.card}>
                                <Icono
                                    size={28}
                                    strokeWidth={1.75}
                                    className={styles.icono}
                                    aria-hidden="true"
                                />
                                <span className={styles.numero}>{servicio.numero}</span>
                                <h3 className={styles.cardTitle}>{servicio.titulo}</h3>
                                <p className={styles.cardDescription}>{servicio.descripcion}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Servicios
