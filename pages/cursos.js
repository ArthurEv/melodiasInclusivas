import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import CaixaCurso from "../components/CaixaCursos.js"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Cursos() {

    let [cursosDisponiveis, setCursosDisponiveis] = useState([])
    let [cursosMatriculados, setCursosMatriculados] = useState([])

    useEffect(() => {
        obtem3CursosDisponiveis()
        obtem3CursosMatriculados()
    }, [])

    const obtem3CursosDisponiveis = () => {
        axios.get('http://127.0.0.1:5000/3cursosDisponiveis').then((response) => {
             setCursosDisponiveis(response.data)
        })
    }

    const obtem3CursosMatriculados = () => {
        axios.get('http://127.0.0.1:5000/3cursosMatriculados/1').then((response) => {
             setCursosMatriculados(response.data)
        })
    }

    return (
        <>
            <header>
                <title>Cursos</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <CaixaCurso titulo="Cursos disponíveis" link="/cursosDisponiveis" cursos={cursosDisponiveis}/>
                    <CaixaCurso titulo="Cursos matriculados" link="/cursosMatriculados" cursos={cursosMatriculados}/>
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}