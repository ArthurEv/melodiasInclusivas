import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from "next/link"

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
        obtemAulas()
        obtemCurso()
    }, [])

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

            <div>
                <h1>Editar aulas do curso de {curso.titulo}</h1>

                <h2>Acrescentar aula</h2>
                <input
                    type="text"
                    placeholder="Título da aula"
                    name="titulo"
                    id="titulo"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                />
                <input
                    type="text"
                    placeholder="Descrição da aula"
                    name="descricao"
                    id="descricao"
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                />
                <input
                    type="text"
                    placeholder="Link da aula"
                    name="video"
                    id="video"
                    onChange={(e) => setVideo(e.target.value)}
                    value={video}
                />
                <input
                    type="number"
                    placeholder="Número da aula"
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

                <h2>Lista de aulas</h2>
                <ul>
                    {aulas.map((aula) => {
                        return (
                            <li key={aula.id}>
                                Título: {aula.titulo} Descrição: {aula.descricao} Link: {aula.video} Número: {aula.numero}
                                <button onClick={() => {
                                    editarAula(aula)
                                }}>
                                    Editar
                                </button>
                                <button onClick={() => {
                                    excluirAula(aula.id)
                                }}>
                                    Excluir
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <button><Link href="/editarCursos">Voltar</Link></button>
            </div>
        </>
    )
}