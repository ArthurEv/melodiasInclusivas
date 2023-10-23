import styles from "../styles/components/PaginaCursos.module.css"
import Cartao from "./Cartao"
import Link from "next/link"

let cursos = [{nome:"Violão",desc:"Aulas sobre violão"},
                {nome:"Teoria Musical",desc:"Aulas sobre teoria musical"},
                {nome:"Teclado",desc:"Aulas sobre teclado"},
                {nome:"Gaita",desc:"Aulas sobre gaita"},
                {nome:"Violino",desc:"Aulas sobre violino"},
                {nome:"Flauta",desc:"Aulas sobre flauta"},
                {nome:"Tambor",desc:"Aulas sobre Tambor"},
                {nome:"Tambor",desc:"Aulas sobre Tambor"},
                {nome:"Tambor",desc:"Aulas sobre Tambor"},
                {nome:"Tambor",desc:"Aulas sobre Tambor"},
                {nome:"Tambor",desc:"Aulas sobre Tambor"},
                {nome:"Tambor",desc:"Aulas sobre Tambor"},{nome:"Tambor",desc:"Aulas sobre Tambor"}]

export default function PaginaCursos({titulo}){
    return(
        <>
            <div className={styles.caixa}>
                <div className={`${styles.caixaTitulo} row`}>  
                    <div className="col"><h2 className={styles.titulo}>{titulo}</h2></div>
                </div>

                <div className={styles.listaCursos}>
                    <div className="row">
                    {cursos.map((curso) => (
                            <div className="col-md-4"><Cartao link="/aulas" nome={curso.nome} desc={curso.desc}/></div>
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