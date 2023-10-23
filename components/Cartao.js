import styles from '../styles/components/Cartao.module.css'

export default function CartaoCurso({link,nome,desc}){
    return(
        <a href={link}>
            <div className={styles.cartao}>
                <div className={styles.titulo}>
                    <p>{nome}</p>
                </div>
                <div className={styles.desc}>
                    <p>{desc}</p>
                </div>  
            </div>
        </a>
    )
}