import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import CaixaPadrão from "../components/CaixaPadrão.js"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Aulas() {

    let [aulas, setAulas] = useState([])

    useEffect(() => {
        obtemAulas()
    }, [])

    const obtemAulas = () => {
        axios.get('http://127.0.0.1:5000/aulas/1').then((response) => {
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
                    <CaixaPadrão titulo="Aulas" link="/aula" array={aulas} />
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}