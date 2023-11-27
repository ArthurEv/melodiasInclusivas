import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'
import Link from "next/link"
import styles from '../styles/Editar.module.css'
import Image from "next/image"

export default function EditarCursos() {

    const [cursos, setCursos] = useState([])
    const [professores, setProfessores] = useState([])

    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [idade, setIdade] = useState('')
    const [quantidade_aulas, setQuantidade_aulas] = useState('')
    const [professor, setProfessor] = useState('')


    useEffect(() => {
        obtemCursos()
        obtemProfessores()
    }, [])

    const obtemCursos = () => {
        axios.get("http://127.0.0.1:5000/cursosDisponiveis").then((response) => {
            setCursos(response.data)
        })
    }

    const obtemProfessores = () => {
        axios.get("http://127.0.0.1:5000/professores").then((response) => {
            setProfessores(response.data)
        })
    }

    const limparFormulario = () => {
        setId('')
        setTitulo('')
        setDescricao('')
        setIdade('')
        setQuantidade_aulas('')
        setProfessor('')
    }

    const salvarCurso = () => {
        if (id == "") {
            axios.post("http://127.0.0.1:5000/curso", {
                "titulo": titulo,
                "descricao": descricao,
                "idade": idade,
                "quantidade_aulas": quantidade_aulas,
                "idprofessor": professor
            }).then(() => {
                obtemCursos()
                limparFormulario()
            }).catch((error) => {
                console.log(error)
                alert('Erro ao criar curso')
            })
        } else {
            axios.put(`http://127.0.0.1:5000/curso/${id}`, {
                "titulo": titulo,
                "descricao": descricao,
                "idade": idade,
                "quantidade_aulas": quantidade_aulas,
                "idprofessor": professor
            }).then(() => {
                obtemCursos()
                limparFormulario()
            }).catch((error) => {
                console.log(error)
                alert('Erro ao editar curso')
            })
        }
    }

    const excluirCurso = (id) => {
        axios.delete(`http://127.0.0.1:5000/curso/${id}`).then((response) => {
            obtemCursos()
        }).catch((error) => {
            console.log(error)
            alert('Erro ao excluir curso')
        })
    }

    const editarCurso = (curso) => {
        setId(curso.id)
        setTitulo(curso.titulo)
        setDescricao(curso.descricao)
        setIdade(curso.idade)
        setQuantidade_aulas(curso.quantidade_aulas)
        setProfessor(curso.idprofessor)
    }

    return (
        <>
            <Head>
                <title>Editar Cursos</title>
            </Head>

            <div className={styles.body}>
                <div className={styles.acrescentar}>
                    <h2>Acrescentar curso</h2>

                    <div className={styles.form}>
                        <input
                            type='text'
                            id='titulo'
                            name='titulo'
                            placeholder="Título"
                            required
                            value={titulo}
                            onChange={(e) => { setTitulo(e.target.value) }}
                        />

                        <input
                            type='text'
                            id='descricao'
                            name='descricao'
                            placeholder="Descrição"
                            required
                            value={descricao}
                            onChange={(e) => { setDescricao(e.target.value) }}
                        />

                        <input
                            type='number'
                            id='idade'
                            name='idade'
                            placeholder="Idade"
                            required
                            value={idade}
                            onChange={(e) => { setIdade(e.target.value) }}
                        />

                        <input
                            type='number'
                            id='quantidade_aulas'
                            name='quantidade_aulas'
                            placeholder="Aulas"
                            required
                            value={quantidade_aulas}
                            onChange={(e) => { setQuantidade_aulas(e.target.value) }}
                        />

                        <select
                            id='professor'
                            name='professor'
                            required
                            onChange={(e) => { setProfessor(e.target.value) }}
                            value={professor}
                        >
                            <option value="" disabled selected>Professor</option>
                            {professores.map((professor) => (
                                <option value={professor.id}>{professor.nome}</option>
                            )
                            )}
                        </select>


                        <button onClick={salvarCurso}>
                            Salvar
                        </button>

                        <button onClick={limparFormulario}>
                            Limpar
                        </button>

                    </div>
                </div>

                <div className={styles.lista}>
                    <h2>Lista de cursos</h2>

                    <table>
                        <thead>
                            <tr>
                                <th className={styles.medio}>Título</th>
                                <th className={styles.medio}>Descrição</th>
                                <th className={styles.pequeno}>Idade</th>
                                <th className={styles.pequeno}>Aulas</th>
                                <th className={styles.medio}>Professor</th>
                                <th className={styles.pequeno}>Ações</th>
                                <th className={styles.pequeno}>Editar aulas</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cursos.map((curso) => (
                                <tr key={curso.id}>
                                    <td className={styles.medio}>{curso.titulo}</td>
                                    <td className={styles.medio}>{curso.descricao}</td>
                                    <td className={styles.pequeno}>{curso.idade}</td>
                                    <td className={styles.pequeno}>{curso.quantidade_aulas}</td>
                                    <td className={styles.medio}>{curso.nome}</td>
                                    <td className={styles.pequeno}>
                                        <button onClick={() => {
                                            editarCurso(curso)
                                        }}>
                                            <Image src="/editar.png" width={25} height={25} />
                                        </button>
                                        <button onClick={() => {
                                            excluirCurso(curso.id)
                                        }}>
                                            <Image src="/deletar.png" width={25} height={25} />
                                        </button>
                                    </td>
                                    <td className={styles.pequeno}>
                                        <Link href={`/editarAulas/${curso.id}`}  className={styles.editarAulas}>Acessar</Link>
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