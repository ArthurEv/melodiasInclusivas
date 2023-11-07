import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import Link from "next/link.js"
import styles from "../styles/Aula.module.css"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Aula() {

    let [aula, setAula] = useState([])

    useEffect(() => {
        obtemAula()
    }, [])

    const obtemAula = () => {
        axios.get('http://127.0.0.1:5000/aula/1/1').then((response) => {
             setAula(response.data)
        })
    }

    return (
        <>
            <header>
                <title>Aula: {aula.titulo}</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div className={styles.caixa}>

                        <h2>{aula.titulo}</h2>

                        <p>{aula.descricao}</p>

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