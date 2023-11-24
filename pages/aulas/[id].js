import Menu from "../../components/Menu.js"
import Footer from "../../components/Footer.js"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from 'next/router'
import styles from "../../styles/Aulas.module.css"
import Cartao from "../../components/Cartao.js"


export default function Aulas() {

    const router = useRouter()

    const [aulas, setAulas] = useState([])
    const [curso, setCurso] = useState({ id: "", titulo: "", descricao: "", nome: "", email: "" })
    const [matriculado, setMatriculado] = useState(false)

    const obtemAulas = () => {
        axios.get('http://127.0.0.1:5000/aulas/' + router.query.id).then((response) => {
            setAulas(response.data)
        })
    }


    const obtemCurso = () => {
        axios.get('http://127.0.0.1:5000/curso/' + router.query.id).then((response) => {
            setCurso(response.data[0])
        })
    }

    const ObtemMatricula = () => {
        axios.get(`http://127.0.0.1:5000/matriculado/${router.query.id}/1`).then((response) => {
            if (response.data.length > 0) {
                setMatriculado(true)
            }
        })
    }

    const matricular = () => {
        axios.post('http://127.0.0.1:5000/matricula', {
            "idaluno": 1,
            "idcurso": curso.id
        }).then(() => {
            alert("Matriculado com sucesso!")
        })
    }

    useEffect(() => {
        if (!router.isReady) return;
        obtemAulas()
        obtemCurso()
        ObtemMatricula()
    }, [router.isReady])

    let botao = <button onClick={matricular}>Matricular-se</button>

    if (matriculado == true) {
        botao = <button disabled>Matriculado</button>
    }
    

    return (
        <>
            <header>
                <title>Curso: {curso.titulo}</title>
            </header>

            <div className="body">
                <nav>
                    <Menu />
                </nav>

                <main>
                    <div className={styles.caixa}>
                        <div className="row">
                            <div className="col"><h2 className={styles.titulo}>{curso.titulo}</h2></div>
                        </div>

                        <div className={styles.infos}>
                            <div>
                                <p>Professor: {curso.nome}</p>
                            </div>
                            <div>
                                <p>Email: {curso.email}</p>
                            </div>
                            <div>
                                {botao}
                            </div>
                        </div>

                        <div className={styles.listaCursos}>
                            {aulas.map((aulas) => (
                                <div key={aulas.id}>
                                    <div className="col-md"><Cartao link={"/aula/" + aulas.id} nome={aulas.titulo} desc={aulas.descricao} /></div>
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