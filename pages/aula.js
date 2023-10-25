import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import Link from "next/link.js"
import styles from "../styles/Aula.module.css"

export default function Aulas() {
    return (
        <>
            <header>
                <title>Aula: título</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div className={styles.caixa}>

                        <h2>Noções iniciais do violão</h2>

                        <p>Descrição: Nesta aula você irá aprender as noções básicas do violão, como o apoio e a função das mãos, assim como as partes do instrumento</p>

                        <section>
                            <video src="" type="video/mp4"></video>

                            <Link href="aula"><button>Próxima aula→</button></Link>
                        </section>
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}