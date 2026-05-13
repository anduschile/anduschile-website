import { useState } from 'react'
import styles from './FormContacto.module.css'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

async function submitContactForm(data) {
    if (!FORMSPREE_ENDPOINT) {
        console.warn(
            '[AndusChile] VITE_FORMSPREE_ENDPOINT no configurado. ' +
            'El formulario no se envía a un backend real. Datos capturados:',
            data
        )
        return {
            success: false,
            message: 'El formulario aún no está conectado. Escríbeme por WhatsApp o correo mientras tanto.'
        }
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        let detalle = ''
        try {
            const payload = await response.json()
            detalle = payload?.error || ''
        } catch { /* respuesta sin JSON */ }
        throw new Error(
            detalle ||
            'No pudimos enviar tu mensaje. Intenta de nuevo o escríbeme por WhatsApp.'
        )
    }

    return {
        success: true,
        message: 'Recibido. Te respondo dentro de 24 horas hábiles.'
    }
}

function FormContacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        negocio: '',
        mensaje: '',
    })

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null,
    })

    const [errors, setErrors] = useState({})

    function validate() {
        const newErrors = {}

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Ingresa tu nombre'
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'Cuéntame brevemente qué necesitas'
        } else if (formData.mensaje.trim().length < 10) {
            newErrors.mensaje = 'El mensaje es muy corto'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }))
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (!validate()) return

        setStatus({ loading: true, success: false, error: null })

        try {
            const result = await submitContactForm(formData)
            if (result.success) {
                setStatus({ loading: false, success: true, error: null })
                setFormData({ nombre: '', negocio: '', mensaje: '' })
            } else {
                setStatus({ loading: false, success: false, error: result.message })
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message })
        }
    }

    if (status.success) {
        return (
            <div className={styles.success} role="status">
                <div className={styles.successIcon} aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
                <h3>Mensaje recibido</h3>
                <p>Te respondo dentro de 24 horas hábiles. Si es urgente, escríbeme por WhatsApp.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className="form-group">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    className={`form-input ${errors.nombre ? styles.inputError : ''}`}
                    aria-invalid={!!errors.nombre}
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                />
                {errors.nombre && (
                    <span id="nombre-error" className={styles.error}>{errors.nombre}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="negocio" className="form-label">
                    Nombre del negocio <span className={styles.optional}>(opcional)</span>
                </label>
                <input
                    type="text"
                    id="negocio"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleChange}
                    placeholder="Ej: Hostal Loreto Belén, Municipalidad de..."
                    autoComplete="organization"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntame qué necesitas resolver..."
                    rows={5}
                    className={`form-textarea ${errors.mensaje ? styles.inputError : ''}`}
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                />
                {errors.mensaje && (
                    <span id="mensaje-error" className={styles.error}>{errors.mensaje}</span>
                )}
            </div>

            {status.error && (
                <div className={styles.errorMessage} role="alert">{status.error}</div>
            )}

            <button
                type="submit"
                disabled={status.loading}
                className={`btn btn--primary ${styles.submitBtn}`}
            >
                {status.loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
        </form>
    )
}

export default FormContacto
