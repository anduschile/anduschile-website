import { useState, useEffect, useRef } from 'react'
import styles from './Header.module.css'

const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#casos', label: 'Casos' },
    { href: '#quienes-somos', label: 'Quiénes somos' },
]

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const headerRef = useRef(null)
    const toggleRef = useRef(null)

    useEffect(() => {
        if (!menuOpen) return undefined
        function onKeyDown(e) {
            if (e.key === 'Escape') {
                setMenuOpen(false)
                toggleRef.current?.focus()
            }
        }
        function onPointerDown(e) {
            if (headerRef.current && !headerRef.current.contains(e.target)) setMenuOpen(false)
        }
        document.addEventListener('keydown', onKeyDown)
        document.addEventListener('pointerdown', onPointerDown)
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.removeEventListener('pointerdown', onPointerDown)
        }
    }, [menuOpen])

    function handleNavClick() {
        setMenuOpen(false)
    }

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={`container ${styles.headerContainer}`}>
                <a href="#inicio" className={styles.logo} onClick={handleNavClick} aria-label="AndusChile — ir al inicio">
                    <span className={styles.logoText}>Andus</span>
                    <span className={styles.logoAccent}>Chile</span>
                </a>

                <nav id="menu-principal" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
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
                    ref={toggleRef}
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="menu-principal"
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
