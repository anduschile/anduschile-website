import styles from './CasosReferencia.module.css'

const casos = [
    {
        nombre: 'Hostal Loreto Belén',
        ubicacion: 'Puerto Natales',
        tipo: 'Sistema de reservas',
        descripcion: 'Sistema de gestión de reservas en operación. Panel de control con calendario, habitaciones, huéspedes, pagos y libro del día. El hostal pasó del cuaderno al sistema digital en menos de una semana.'
    },
    {
        nombre: 'Cristalería Natales',
        ubicacion: 'Puerto Natales',
        tipo: 'Sitio web + cotizador',
        descripcion: 'Sitio web corporativo con cotizador integrado. El cliente puede pedir presupuesto en línea sin llamar ni ir al local.'
    },
    {
        nombre: 'Cabañas ArteBrisa',
        ubicacion: 'Puerto Natales',
        tipo: 'Sitio web turístico',
        descripcion: 'Sitio web para alojamiento turístico con foco en conversión y presencia en búsquedas locales.'
    },
    {
        nombre: 'Departamentos Patagonia',
        ubicacion: 'Puerto Natales',
        tipo: 'Sitio web turístico',
        descripcion: 'Sitio web para arriendo de departamentos turísticos.'
    }
]

function CasosReferencia() {
    return (
        <section id="casos" className={`section section--alt ${styles.casos}`}>
            <div className="container">
                <header className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Casos</span>
                    <h2 className={styles.title}>Trabajo real, clientes reales.</h2>
                </header>

                <div className={styles.grid}>
                    {casos.map(caso => (
                        <article key={caso.nombre} className={styles.card}>
                            <div className={styles.cardMeta}>
                                <span className={styles.tipo}>{caso.tipo}</span>
                                <span className={styles.ubicacion}>{caso.ubicacion}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{caso.nombre}</h3>
                            <p className={styles.cardDescription}>{caso.descripcion}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CasosReferencia
