import Menu from "../../components/Menu.js"
import Footer from "../../components/Footer.js"
import styles from "../../styles/Forum.module.css"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import axios from "axios"

export default function Forum() {

    const router = useRouter()

    const [forum, setForum] = useState({ titulo: "", assunto: "", nome: "", avatar: "", datahora: "" })
    const [mensagens, setMensagens] = useState([])
    const [mensagem, setMensagem] = useState("")

    const obtemForum = () => {
        axios.get('http://127.0.0.1:5000/forum/' + router.query.id).then((response) => {
            setForum(response.data)
            console.log(response.data)
        })
    }

    const obtemMensagens = () => {
        axios.get('http://127.0.0.1:5000/mensagens/' + router.query.id).then((response) => {
            setMensagens(response.data)
            console.log(response.data)
        })
    }

    const enviarMensagem = () => { 
        
        axios.post("http://127.0.0.1:5000/mensagem",{
            "mensagem": mensagem,
            "idaluno": 1,
            "idforum": router.query.id
        }).then(() => {
            obtemMensagens()
            setMensagem("")
        })
    }    

    useEffect(() => {
        if (!router.isReady) return;
        obtemForum()
        obtemMensagens()
    }, [router.isReady])

    return (
        <>
            <header>
                <title>Fórum: {forum.titulo}</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div className={styles.caixa}>
                        <div className={styles.principal}>
                            <div className={styles.titulo}>
                                <h2>{forum.titulo}</h2>
                            </div>

                            <div className={styles.caixaMensagens}>
                                <div className={styles.chat}>

                                    <div className={styles.mensagem}>
                                        <img src={`/avatares/${forum.avatar}.png`} />
                                        <div className={styles.conteudoMsg}>
                                            <span>{forum.nome}</span>
                                            <p>{forum.assunto}</p>
                                            <span>{forum.datahora}</span>
                                        </div>
                                    </div>

                                    {mensagens.map((mensagem) => (
                                        <div key={mensagem.id}>

                                            <div className={styles.mensagem}>
                                                <img src={`/avatares/${mensagem.avatar}.png`} />
                                                <div className={styles.conteudoMsg}>
                                                    <span>{mensagem.nome}</span>
                                                    <p>{mensagem.mensagem}</p>
                                                    <span>{mensagem.datahora}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>


                                <div className={styles.digitar}>
                                    <input 
                                        type="text" 
                                        name="mensagem"
                                        onChange={(e) => { setMensagem(e.target.value) }}
                                        value={mensagem}
                                    />
                                    <button onClick={enviarMensagem}><img src="/enviar.png"/></button>
                                </div>

                            </div>
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