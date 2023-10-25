import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import PaginaCursos from "../components/PaginaCursos.js"

export default function cursosDisponiveis() {
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
                    <PaginaCursos titulo="Cursos disponíveis" />
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}