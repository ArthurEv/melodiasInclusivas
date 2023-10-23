import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import CaixaCurso from "../components/CaixaCursos.js"

export default function Cursos(){
    return(
        <>
        <div className="body">

            <div className="menu">
                <Menu/>
            </div>

            <div className="meio">
                <CaixaCurso titulo="Cursos disponíveis" link="/cursosDisponiveis"/>
                <CaixaCurso titulo="Cursos matriculados" link="/cursosMatriculados"/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
            
        </div>
        </>
    )
}