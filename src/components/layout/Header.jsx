import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    const location = useLocation()

    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/como-funciona', label: 'Cómo funciona' },
        { path: '/casos', label: 'Casos' },
    ]

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoText}>Andus</span>
                    <span className={styles.logoAccent}>Chile</span>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link to="/empezar" className="btn btn--primary">
                    Empezar
                </Link>
            </div>
        </header>
    )
}

export default Header
