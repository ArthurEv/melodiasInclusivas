import Cartao from "./Cartao"
import styles from "../styles/components/CaixaPadrão.module.css"

let cursos = [{nome:"Titulo",desc:"Descrição"},{nome:"Titulo",desc:"Descrição"},{nome:"Titulo",desc:"Descrição"},]

export default function CaixaPadrão({titulo,link}){
    return(
        <>
            <div className={styles.caixa}>
                <div className="row">  
                    <div className="col"><h2 className={styles.titulo}>{titulo}</h2></div>
                </div>
                
                <div className={styles.listaCursos}>                
                    {cursos.map((curso) => (
                        <div>
                            <div className="col-md"><Cartao link={link} nome={curso.nome} desc={curso.desc}/></div>
                            <div className="col-md"><Cartao link={link} nome={curso.nome} desc={curso.desc}/></div>
                            <div className="col-md"><Cartao link={link} nome={curso.nome} desc={curso.desc}/></div>
                            <div className="col-md"><Cartao link={link} nome={curso.nome} desc={curso.desc}/></div>
                            <div className="col-md"><Cartao link={link} nome={curso.nome} desc={curso.desc}/></div>
                        </div>
                    ))} 
                </div> 
            </div>
        </>
    )
}