import Cartao from "./Cartao.js"
import styles from "../styles/components/CaixaCursos.module.css"
import Link from "next/link"

export default function CaixaCurso({titulo,link,cursos}){
    return(
        <>
            <div className={styles.caixa}>
                <div className="row">  
                    <div className="col"><h2 className={styles.titulo}>{titulo}</h2></div>
                </div>

                <div className={`${styles.cartoes} row`}>
                {cursos.map((curso) => (
                    <div className="col-md-4"><Cartao link={"/aulas/"+curso.id} nome={curso.titulo} desc={curso.descricao}/></div>
                    ))}  
                </div>

                <div className="row">
                    <div className={`${styles.caixaBotao} col`}>
                        <Link href={link}><button>Ver todos</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}