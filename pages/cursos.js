import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import CaixaCurso from "../components/CaixaCursos.js"
import { useState,useEffect } from "react"

export default function Cursos() {

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
                    <CaixaCurso titulo="Cursos disponíveis" link="/cursosDisponiveis" />
                    <CaixaCurso titulo="Cursos matriculados" link="/cursosMatriculados" />
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}