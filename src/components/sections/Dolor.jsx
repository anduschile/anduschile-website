import styles from './Dolor.module.css'

const problemas = [
    {
        icon: '📱',
        title: 'WhatsApp sin parar',
        description: 'Responder mensajes a las 11pm. Confirmar reservas a mano. Perseguir clientes que no contestan.'
    },
    {
        icon: '🚫',
        title: 'Clientes que no llegan',
        description: 'Reservan, pero nunca aparecen. Pierdes tiempo, dinero y paciencia. Y no hay forma de prevenirlo.'
    },
    {
        icon: '💸',
        title: 'Cobros que no llegan',
        description: 'Transferencias perdidas. Clientes que "pagan después" y desaparecen. Vueltos complicados.'
    },
    {
        icon: '😩',
        title: 'Sin tiempo para ti',
        description: 'Trabajas PARA tu negocio, no EN tu negocio. Agotamiento constante. Sin vida personal.'
    }
]

function Dolor() {
    return (
        <section className={`section ${styles.dolor}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Si esto te suena familiar...
                        <span className="text-dolor"> no estás solo</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Estos son los problemas más comunes de dueños de negocios locales.
                    </p>
                </div>

                <div className={`grid grid-2 ${styles.grid}`}>
                    {problemas.map((problema, index) => (
                        <div key={index} className={`card card--dolor ${styles.card}`}>
                            <div className={styles.cardIcon}>{problema.icon}</div>
                            <h3 className={styles.cardTitle}>{problema.title}</h3>
                            <p className={styles.cardDescription}>{problema.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Dolor
