import Menu from "../components/Menu.js"
import Footer from "../components/Footer.js"
import styles from "../styles/Foruns.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import Cartao from "../components/Cartao.js"

export default function Foruns() {

    const [foruns,setForuns] = useState([])

    const obtemForuns = () => {
        axios.get('http://127.0.0.1:5000/forum').then((response) => {
             setForuns(response.data)
        })
    }

    const criarForum = (e) => {
        e.preventDefault()
        let titulo = e.target.titulo.value
        let assunto = e.target.assunto.value

        axios.post('http://127.0.0.1:5000/forum', {
            "titulo": titulo,
            "assunto": assunto,
            "idaluno": 1
        }).then(() => {
            obtemForuns()
        })
    }

    useEffect(() => {
        obtemForuns()
    }, [])

    return (
        <>
            <header>
                <title>Fóruns</title>
            </header>
            
            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div className={styles.criar}>

                        <h2>Criar fórum</h2>

                        <form onSubmit={criarForum}>
                            <input type="text" placeholder="Título" name="titulo" className={styles.titulo}/>
                            <input type="text" placeholder="Assunto" name="assunto" className={styles.assunto}/>
                            <input type="submit" value="Criar" className={styles.submit}/>
                        </form>
                    </div>

                    <div className={styles.foruns}>
                        <h2>Fóruns</h2>

                        <div className={styles.listaForuns}>                
                        {foruns.map((foruns) => (
                            <div key={foruns.id}>
                                <div className="col-md"><Cartao link={"/forum/"+foruns.id} nome={foruns.titulo} desc={foruns.assunto}/></div>
                            </div>
                        ))} 
                </div> 
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}