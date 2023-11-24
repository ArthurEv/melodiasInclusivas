import Menu from "../../components/Menu.js"
import Footer from "../../components/Footer.js"
import Link from "next/link"
import styles from "../../styles/Aula.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from 'next/router'

export default function Aula() {

    const router = useRouter()
    let [aula, setAula] = useState({})
    const [proxima, setProxima] = useState({id: "", titulo: "", descricao: "", numero: "", video: "", idcurso: ""})

    const obtemAula = () => {
        axios.get('http://127.0.0.1:5000/aula/'+router.query.id).then((response) => {
            let aula = response.data 
            setAula(aula)
            axios.get(`http://127.0.0.1:5000/proximaAula/${aula.idcurso}/${aula.numero}`).then((response) => {
                setProxima(response.data)
            })      
        })
    }

    useEffect(() => {
        if(!router.isReady) return;
        obtemAula()
        
    }, [router.isReady])

    const redireciona = () => {
        window.location.href = `/aula/${proxima.id}`
    }

    const ultimaAula = () => {
        window.location.href = `/cursos`
    }

    let botao =<button onClick={redireciona}>Próxima aula→</button>

    if (aula.numero == aula.quantidade_aulas) {
        botao = <button onClick={ultimaAula}>Última aula - Retornar</button>
    }

    return (
        <>
            <header>
                <title>Aula:</title>
                
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div  className={styles.caixa}
                    >

                        <h2>{aula.titulo}</h2>

                        <p>{aula.descricao}</p>

                        <section>
                            <iframe src="https://www.youtube.com/embed/DzgRKJTMVEQ" title="Aprenda os fundamentos do violão" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            {botao}                      
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