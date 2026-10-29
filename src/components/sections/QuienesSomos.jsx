import styles from './QuienesSomos.module.css'

// Para mostrar una foto, reemplazar null por la ruta, por ejemplo '/equipo/jose-urra.jpg'
// (archivo en public/equipo/). Con null no se renderiza nada.
const equipo = {
    jose: { id: 'jose-urra', nombre: 'José Urra', cargo: 'Fundador y Director', foto: null },
    jesseline: { id: 'jesseline-mardones', nombre: 'Jesseline Mardones Fierro', cargo: 'Coordinadora de Recursos Humanos', foto: null },
}

function PersonHeader({ persona, titleId, extraClass = '' }) {
    return (
        <header className={`${styles.personHeader} ${extraClass}`}>
            {persona.foto && (
                <img
                    src={persona.foto}
                    alt={`Retrato de ${persona.nombre}`}
                    className={styles.photo}
                    width="96"
                    height="96"
                />
            )}
            <div className={styles.personTitles}>
                <span className={styles.role}>{persona.cargo}</span>
                <h3 id={titleId} className={styles.personName}>{persona.nombre}</h3>
            </div>
        </header>
    )
}

function QuienesSomos() {
    return (
        <section id="quienes-somos" className={`section ${styles.quienesSomos}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <header className={styles.sectionHeader}>
                        <span className={styles.eyebrow}>Quiénes somos</span>
                        <p className={styles.teamLinks}>
                            <a href={`#${equipo.jose.id}`}>José Urra · Fundador y Director</a>
                            <a href={`#${equipo.jesseline.id}`}>Jesseline Mardones Fierro · Coordinadora de Recursos Humanos</a>
                        </p>
                        <h2 className={styles.title}>23 años aprendiendo cómo funcionan los territorios.</h2>
                    </header>

                    <article id={equipo.jose.id} className={styles.founder} aria-labelledby="persona-jose">
                    <PersonHeader persona={equipo.jose} titleId="persona-jose" extraClass={styles.founderHeader} />

                    <div className={styles.bodyWrapper}>
                        <p className={styles.body}>
                            AndusChile nace del trabajo de <strong>José Urra</strong>, con 23 años
                            de experiencia en gestión pública territorial en el sur de Chile.
                            Trabajó desde adentro de los municipios, planificando, organizando
                            y ejecutando. Eso le enseñó cómo funcionan realmente los territorios,
                            los negocios locales y las personas que los operan.
                        </p>
                        <p className={styles.body}>
                            Hoy construye soluciones digitales desde esa misma lógica: primero
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
                    </article>

                    <article id={equipo.jesseline.id} className={styles.person} aria-labelledby="persona-jesseline">
                        <PersonHeader persona={equipo.jesseline} titleId="persona-jesseline" />

                        <p className={styles.body}>
                            Coordina la gestión de personas de AndusChile, desde la selección y la
                            incorporación de colaboradores hasta los indicadores que permiten tomar
                            decisiones sobre el equipo.
                        </p>

                        <ul className={styles.functions}>
                            <li>Brinda soporte en materias laborales y de recursos humanos a los equipos y colaboradores.</li>
                            <li>Gestiona la contratación, los contratos, anexos y la documentación laboral.</li>
                            <li>Ejecuta procesos de reclutamiento y selección, con entrevistas por competencias y evaluación de candidatos.</li>
                            <li>Coordina el onboarding y la inducción de nuevos colaboradores.</li>
                            <li>Levanta necesidades de capacitación y coordina las actividades formativas.</li>
                            <li>Elabora indicadores y reportes de gestión de personas.</li>
                        </ul>

                        <p className={styles.body}>
                            Su experiencia en gestión de personas complementa la mirada de José Urra y
                            respalda el trabajo de AndusChile en sistemas de gestión para empresas y
                            municipios.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default QuienesSomos
