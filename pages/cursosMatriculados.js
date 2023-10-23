import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import PaginaCursos from "../components/PaginaCursos.js"

export default function cursosMatriculados(){
    return(
        <>
        <div className="body">

            <div className="menu">
                <Menu/>
            </div>

            <div className="meio">
                <PaginaCursos titulo="Cursos matriculados"/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
            
        </div>
        </>
    )
}