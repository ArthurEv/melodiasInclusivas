import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import PaginaCursos from "../components/PaginaCursos.js"
import { useState, useEffect } from "react"
import axios from "axios"

export default function cursosDisponiveis() {

    let [cursosDisponiveis, setCursosDisponiveis] = useState([])

    useEffect(() => {
        obtemCursos()
    }, [])

    const obtemCursos = () => {
        axios.get('http://127.0.0.1:5000/cursosDisponiveis').then((response) => {
             setCursosDisponiveis(response.data)
        })
    }

    return (
        <>
            <header>
                <title>Cursos disponíveis</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <PaginaCursos titulo="Cursos disponíveis" cursos={cursosDisponiveis}/>
                </main>

                <footer>
                    <Footer />
                    <p></p>
                </footer>
            </div>
        </>
    )
}