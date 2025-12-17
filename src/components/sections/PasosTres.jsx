import styles from './PasosTres.module.css'

const pasos = [
    {
        numero: '1',
        titulo: 'Instalamos el sistema mínimo',
        descripcion: 'Web + reservas + pagos + recordatorios. Lo esencial para que tu negocio opere solo.'
    },
    {
        numero: '2',
        titulo: 'Lo dejamos operando',
        descripcion: 'Configuramos todo según tu negocio. Probamos. Ajustamos. En 7 días está listo.'
    },
    {
        numero: '3',
        titulo: 'Tú recuperas control y tiempo',
        descripcion: 'El sistema trabaja. Tú decides cuándo trabajar. Vuelves a ser el dueño.'
    }
]

function PasosTres() {
    return (
        <section className={`section ${styles.pasos}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Cómo funciona
                    </h2>
                    <p className={styles.subtitle}>
                        Simple. Rápido. Sin complicaciones.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {pasos.map((paso, index) => (
                        <div key={index} className={styles.paso}>
                            <div className={styles.pasoNumero}>{paso.numero}</div>
                            <div className={styles.pasoContent}>
                                <h3 className={styles.pasoTitulo}>{paso.titulo}</h3>
                                <p className={styles.pasoDescripcion}>{paso.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PasosTres
