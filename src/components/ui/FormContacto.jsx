import { useState } from 'react'
import styles from './FormContacto.module.css'

/**
 * Estructura de datos del formulario
 * @typedef {Object} FormData
 * @property {string} nombre - Nombre del contacto
 * @property {string} whatsapp - Número de WhatsApp (formato: +56 9 XXXX XXXX)
 * @property {string} tipoNegocio - Tipo de negocio (turismo, belleza, otro)
 * @property {string} mensaje - Mensaje opcional
 */

/**
 * Handler centralizado para envío de formulario
 * Backend-ready: reemplazar con llamada real a API
 * @param {FormData} data - Datos del formulario
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function submitContactForm(data) {
    // TODO: Reemplazar con endpoint real
    // Ejemplo: return fetch('/api/contacto', { method: 'POST', body: JSON.stringify(data) })

    console.log('[AndusChile] Form submission:', data)

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simular respuesta exitosa
    return {
        success: true,
        message: 'Te contactaremos pronto por WhatsApp.'
    }
}

const TIPOS_NEGOCIO = [
    { value: '', label: 'Selecciona tu tipo de negocio' },
    { value: 'turismo', label: 'Turismo (hostal, cabañas, tours)' },
    { value: 'belleza', label: 'Belleza (barbería, estética, spa)' },
    { value: 'servicios', label: 'Servicios con agenda' },
    { value: 'otro', label: 'Otro' },
]

function FormContacto({ compact = false }) {
    const [formData, setFormData] = useState({
        nombre: '',
        whatsapp: '',
        tipoNegocio: '',
        mensaje: '',
    })

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null,
    })

    const [errors, setErrors] = useState({})

    // Validación básica
    function validate() {
        const newErrors = {}

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido'
        }

        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = 'El WhatsApp es requerido'
        } else if (!/^[\d\s\+\-]{9,15}$/.test(formData.whatsapp.replace(/\s/g, ''))) {
            newErrors.whatsapp = 'Ingresa un número válido'
        }

        if (!formData.tipoNegocio) {
            newErrors.tipoNegocio = 'Selecciona un tipo de negocio'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Limpiar error al escribir
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
                setFormData({ nombre: '', whatsapp: '', tipoNegocio: '', mensaje: '' })
            } else {
                throw new Error(result.message || 'Error al enviar')
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message })
        }
    }

    if (status.success) {
        return (
            <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>¡Listo!</h3>
                <p>Te contactaremos pronto por WhatsApp.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-group">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`form-input ${errors.nombre ? styles.inputError : ''}`}
                />
                {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    className={`form-input ${errors.whatsapp ? styles.inputError : ''}`}
                />
                {errors.whatsapp && <span className={styles.error}>{errors.whatsapp}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="tipoNegocio" className="form-label">Tipo de negocio</label>
                <select
                    id="tipoNegocio"
                    name="tipoNegocio"
                    value={formData.tipoNegocio}
                    onChange={handleChange}
                    className={`form-select ${errors.tipoNegocio ? styles.inputError : ''}`}
                >
                    {TIPOS_NEGOCIO.map(tipo => (
                        <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                    ))}
                </select>
                {errors.tipoNegocio && <span className={styles.error}>{errors.tipoNegocio}</span>}
            </div>

            {!compact && (
                <div className="form-group">
                    <label htmlFor="mensaje" className="form-label">¿Cuál es tu mayor dolor? (opcional)</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Ej: Paso muchas horas confirmando reservas..."
                        rows={3}
                        className="form-textarea"
                    />
                </div>
            )}

            {status.error && (
                <div className={styles.errorMessage}>{status.error}</div>
            )}

            <button
                type="submit"
                disabled={status.loading}
                className={`btn btn--primary ${styles.submitBtn}`}
            >
                {status.loading ? 'Enviando...' : 'Quiero mi tiempo de vuelta'}
            </button>
        </form>
    )
}

export default FormContacto
