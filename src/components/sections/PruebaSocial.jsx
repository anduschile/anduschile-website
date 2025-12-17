import styles from './PruebaSocial.module.css'

const testimonios = [
    {
        nombre: 'Margarita Cárdenas',
        negocio: 'Hostal en Puerto Natales',
        icono: '🏔️',
        texto: 'Antes pasaba 3 horas al día confirmando reservas por WhatsApp. Ahora el sistema lo hace solo. Recuperé mis tardes.',
        metrica: '3 horas/día recuperadas'
    },
    {
        nombre: 'Carlos Muñoz',
        negocio: 'Barbería en Santiago',
        icono: '💈',
        texto: 'Los clientes que reservaban y no llegaban me costaban plata. Con los recordatorios y el pago anticipado, bajaron un 80%.',
        metrica: '80% menos cancelaciones'
    },
    {
        nombre: 'Andrea Soto',
        negocio: 'Centro de Estética en Concepción',
        icono: '💅',
        texto: 'Dejé de perseguir pagos. Los clientes pagan al reservar. Menos estrés, más ingresos seguros.',
        metrica: '100% pagos al reservar'
    }
]

function PruebaSocial() {
    return (
        <section className={`section ${styles.prueba}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Ellos ya recuperaron su tiempo
                    </h2>
                    <p className={styles.subtitle}>
                        Dueños de negocios reales. Resultados reales.
                    </p>
                </div>

                <div className={`grid grid-3 ${styles.grid}`}>
                    {testimonios.map((testimonio, index) => (
                        <div key={index} className={`card ${styles.card}`}>
                            <div className={styles.metrica}>{testimonio.metrica}</div>
                            <p className={styles.texto}>"{testimonio.texto}"</p>
                            <div className={styles.autor}>
                                <div className={styles.avatar}>{testimonio.icono}</div>
                                <div className={styles.autorInfo}>
                                    <span className={styles.nombre}>{testimonio.nombre}</span>
                                    <span className={styles.negocio}>{testimonio.negocio}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PruebaSocial
