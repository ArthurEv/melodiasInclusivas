import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from "next/link"
import styles from '../../styles/Editar.module.css'
import Image from "next/image"

export default function EditarAulas() {

    const router = useRouter()

    const [aulas, setAulas] = useState([])
    const [curso, setCurso] = useState({ id: "", titulo: "", descricao: "", nome: "", email: "" })

    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [video, setVideo] = useState('')
    const [numero, setNumero] = useState('')

    useEffect(() => {
        if (!router.isReady) return;
        obtemAulas()
        obtemCurso()
    }, [router.isReady])

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

    const limparFormulario = () => {
        setId('')
        setTitulo('')
        setDescricao('')
        setVideo('')
        setNumero('')
    }

    const salvarAula = () => {
        if (id == "") {
            axios.post("http://127.0.0.1:5000/aula", {
                "titulo": titulo,
                "descricao": descricao,
                "video": video,
                "numero": numero,
                "idcurso": curso.id
            }).then(() => {
                obtemAulas()
                limparFormulario()
            }).catch((error) => {
                console.log(error)
                alert('Erro ao criar aula')
            })
        } else {
            axios.put(`http://127.0.0.1:5000/aula/${id}`, {
                "titulo": titulo,
                "descricao": descricao,
                "video": video,
                "numero": numero,
                "idcurso": curso.id
            }).then(() => {
                obtemAulas()
                limparFormulario()
            }).catch((error) => {
                console.log(error)
                alert('Erro ao editar aula')
            })
        }
    }

    const excluirAula = (id) => {
        axios.delete(`http://127.0.0.1:5000/aula/${id}`).then(() => {
            obtemAulas()
        }).catch((error) => {
            console.log(error)
            alert('Erro ao excluir aula')
        })
    }

    const editarAula = (aula) => {
        setId(aula.id)
        setTitulo(aula.titulo)
        setDescricao(aula.descricao)
        setVideo(aula.video)
        setNumero(aula.numero)
    }

    return (
        <>
            <Head>
                <title>Editar Aulas: {curso.titulo}</title>
            </Head>

            <div className={styles.body}>
                <div className={styles.acrescentar}>
                    <h2>Acrescentar aula de {curso.titulo}</h2>
                    <input
                        type="text"
                        placeholder="Título"
                        name="titulo"
                        id="titulo"
                        onChange={(e) => setTitulo(e.target.value)}
                        value={titulo}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        id="descricao"
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao}
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        name="video"
                        id="video"
                        className={styles.inputMaior}
                        onChange={(e) => setVideo(e.target.value)}
                        value={video}
                    />
                    <input
                        type="number"
                        placeholder="Número"
                        name="numero"
                        id="numero"
                        onChange={(e) => setNumero(e.target.value)}
                        value={numero}
                    />

                    <button onClick={salvarAula}>
                        Salvar
                    </button>
                    <button onClick={limparFormulario}>
                        Limpar
                    </button>

                    <button><Link href="/editarCursos">Voltar</Link></button>
                </div>

                <div className={styles.lista}>

                    <h2>Lista de aulas</h2>

                    <table>
                        <thead>
                            <tr>
                                <th className={styles.grande}>Título</th>
                                <th className={styles.medio}>Descrição</th>
                                <th className={styles.grande}>Link</th>
                                <th className={styles.pequeno}>Número</th>
                                <th className={styles.pequeno}>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {aulas.map((aula) => (
                                <tr key={aula.id}>
                                    <td className={styles.grande}>{aula.titulo}</td>
                                    <td className={styles.medio}>{aula.descricao}</td>
                                    <td className={styles.grande}><Link href={aula.video}>{aula.video}</Link></td>
                                    <td className={styles.pequeno}>{aula.numero}</td>
                                    <td className={styles.pequeno}>
                                        <button onClick={() => {
                                            editarAula(aula)
                                        }}>
                                            <Image src="/editar.png" width={25} height={25} />
                                        </button>
                                        <button onClick={() => {
                                            excluirAula(aula.id)
                                        }}>
                                            <Image src="/deletar.png" width={25} height={25} />
                                        </button>
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}