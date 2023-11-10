import Menu from "../../components/Menu.js"
import Footer from "../../components/Footer.js"
import Link from "next/link.js"
import styles from "../styles/Aula.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from 'next/router'

export default function Aula() {

    //esta página está dando problema pq o style não carrega antes do router

    const router = useRouter()
    let [aula, setAula] = useState([])

    useEffect(() => {
        if(!router.isReady) return;
        obtemAula()
    }, [router.isReady])

    const obtemAula = () => {
        axios.get('http://127.0.0.1:5000/aula/'+router.query.id).then((response) => {
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
                    <div  className={styles.caixa}>

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