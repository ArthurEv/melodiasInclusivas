import Menu from "../../components/Menu.js"
import Footer from "../../components/Footer.js"
import CaixaPadrão from "../../components/CaixaPadrão.js"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from 'next/router'

export default function Aulas() {

    const router = useRouter()

    let [aulas, setAulas] = useState([])

    useEffect(() => {
        if(!router.isReady) return;
        obtemAulas()
    }, [router.isReady])

    const obtemAulas = () => {
        axios.get('http://127.0.0.1:5000/aulas/'+router.query.id).then((response) => {
             setAulas(response.data)
        })
    }

    return (
        <>
            <header>
                <title>Aulas</title>
            </header>
            
            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <CaixaPadrão titulo="Aulas" link="/aula/" array={aulas} />
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}