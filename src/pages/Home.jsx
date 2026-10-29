import Hero from '../components/sections/Hero'
import Servicios from '../components/sections/Servicios'
import CasosReferencia from '../components/sections/CasosReferencia'
import QuienesSomos from '../components/sections/QuienesSomos'
import Contacto from '../components/sections/Contacto'

function Home() {
    return (
        <>
            <Hero />
            <Servicios />
            <CasosReferencia />
            <QuienesSomos />
            <Contacto />
        </>
    )
}

export default Home
