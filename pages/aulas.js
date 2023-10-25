import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import CaixaPadrão from "../components/CaixaPadrão.js"

export default function Aulas() {
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
                    <CaixaPadrão titulo="Aulas" link="/aula" />
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}