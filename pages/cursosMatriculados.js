import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import PaginaCursos from "../components/PaginaCursos.js"

export default function cursosMatriculados() {
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
                    <PaginaCursos titulo="Cursos matriculados" />
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}