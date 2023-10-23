import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import PaginaCursos from "../components/PaginaCursos.js"

export default function cursosDisponiveis(){
    return(
        <>
        <div className="body">

            <div className="menu">
                <Menu/>
            </div>

            <div className="meio">
                <PaginaCursos titulo="Cursos disponíveis"/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
            
        </div>
        </>
    )
}