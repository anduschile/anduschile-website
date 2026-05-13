import Hero from '../components/sections/Hero'
import Servicios from '../components/sections/Servicios'
import CasosReferencia from '../components/sections/CasosReferencia'
import QuienSoy from '../components/sections/QuienSoy'
import Contacto from '../components/sections/Contacto'

function Home() {
    return (
        <>
            <Hero />
            <Servicios />
            <CasosReferencia />
            <QuienSoy />
            <Contacto />
        </>
    )
}

export default Home
