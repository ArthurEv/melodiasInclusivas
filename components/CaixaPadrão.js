import Cartao from "./Cartao"
import styles from "../styles/components/CaixaPadrão.module.css"

export default function CaixaPadrão({titulo,link,array}){
    return(
        <>
            <div className={styles.caixa}>
                <div className="row">  
                    <div className="col"><h2 className={styles.titulo}>{titulo}</h2></div>
                </div>
                
                <div className={styles.listaCursos}>                
                    {array.map((aulas) => (
                        <div>
                            <div className="col-md"><Cartao link={link} nome={aulas.titulo} desc={aulas.descricao}/></div>
                        </div>
                    ))} 
                </div> 
            </div>
        </>
    )
}