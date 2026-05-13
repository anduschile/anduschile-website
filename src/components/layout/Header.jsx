import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#casos', label: 'Casos' },
    { href: '#quien-soy', label: 'Quién soy' },
]

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    function handleNavClick() {
        setMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <a href="#inicio" className={styles.logo} onClick={handleNavClick} aria-label="AndusChile — ir al inicio">
                    <span className={styles.logoText}>Andus</span>
                    <span className={styles.logoAccent}>Chile</span>
                </a>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={handleNavClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className={`btn btn--primary ${styles.ctaMobile}`}
                        onClick={handleNavClick}
                    >
                        Conversemos
                    </a>
                </nav>

                <a href="#contacto" className={`btn btn--primary ${styles.cta}`}>
                    Conversemos
                </a>

                <button
                    type="button"
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                >
                    <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen1 : ''}`} />
                    <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen2 : ''}`} />
                    <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen3 : ''}`} />
                </button>
            </div>
        </header>
    )
}

export default Header
