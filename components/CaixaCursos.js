import Cartao from "./Cartao.js"
import styles from "../styles/components/CaixaCursos.module.css"
import Link from "next/link"

let cursos = [{nome:"Violão",desc:"Aulas sobre violão"},
                {nome:"Teoria Musical",desc:"Aulas sobre teoria musical"},
                {nome:"Teclado",desc:"Aulas sobre teclado"}]


export default function CaixaCurso({titulo,link}){
    return(
        <>
            <div className={styles.caixa}>
                <div className="row">  
                    <div className="col"><h2 className={styles.titulo}>{titulo}</h2></div>
                </div>

                <div className={`${styles.cartoes} row`}>
                {cursos.map((curso) => (
                    <div className="col-md-4"><Cartao link="/aulas" nome={curso.nome} desc={curso.desc}/></div>
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