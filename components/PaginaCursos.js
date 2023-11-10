import styles from "../styles/components/PaginaCursos.module.css"
import Cartao from "./Cartao"
import Link from "next/link"

export default function PaginaCursos({titulo,cursos}){
    return(
        <>
            <div className={styles.caixa}>
                <div className={`${styles.caixaTitulo} row`}>  
                    <div className="col"><h2 className={styles.titulo}>{titulo}</h2></div>
                </div>

                <div className={styles.listaCursos}>
                    <div className="row">
                    {cursos.map((cursos) => (
                            <div className="col-md-4"><Cartao link={"/aulas/"+cursos.id} nome={cursos.titulo} desc={cursos.descricao}/></div>
                        ))}  
                    </div>
                </div>

                <div className="row">
                    <div className={`${styles.caixaBotao} col`}>
                        <Link href="/cursos"><button>Voltar</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}