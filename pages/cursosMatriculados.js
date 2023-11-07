import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import PaginaCursos from "../components/PaginaCursos.js"
import { useState, useEffect } from "react"
import axios from "axios"

export default function cursosMatriculados() {

    let [cursosMatriculados, setCursosMatriculados] = useState([])

    useEffect(() => {
        obtemCursos()
    }, [])

    const obtemCursos = () => {
        axios.get('http://127.0.0.1:5000/cursosMatriculados/1').then((response) => {
             setCursosMatriculados(response.data)
        })
    }

    return (
        <>
            <header>
                <title>Cursos matriculados</title>
            </header>
            
            <div className="body">

                <nav>
                    <Menu />
                </nav>

                <main>
                    <PaginaCursos titulo="Cursos matriculados" cursos={cursosMatriculados}/>
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}