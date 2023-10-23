import styles from "../styles/Cadastro.module.css"
import Image from "next/image"

export default function Atualizar(){
    return(
        <div className={styles.bodyAtualizar}>
            <div className={styles.cadastro}>
                <form>
                    <h2 className={styles.titulo}>Atualizar informações do perfil</h2>

                    <label className={styles.label} for='senha'><Image src="/cadastro/senha.png"  width={25} height={25}/>Nova senha</label>
                    <input type='password' id='senha' className={styles.input} required/>

                    <label className={styles.label} for='confirmarSenha'><Image src="/cadastro/senha.png"  width={25} height={25}/>Confirmar senha</label>
                    <input type='password' id='confirmarSenha' className={styles.input} required/>

                    <p className={styles.selecao}>Selecione um avatar</p>

                    <div className={styles.imagens}>
                        <input type='radio' name='avatar' id='leao' value="leao" className={styles.opcao} required/>
                        <label for='leao' className={styles.avatares}><img src='/avatares/leão.png' className={styles.img}/></label>

                        <input type='radio' name='avatar' id='girafa' value="girafa" className={styles.opcao} />
                        <label for='girafa' className={styles.avatares}><img src='/avatares/girafa.png' className={styles.img}/></label>

                        <input type='radio' name='avatar' id='hipopotamo' value="hipopotamo" className={styles.opcao} />
                        <label for='hipopotamo' className={styles.avatares}><img src='/avatares/hipopotamo.png' className={styles.img}/></label>
                    </div>

                    <div className={styles.divSubmit}>
                        <input type='submit' value='Atualizar' className={styles.submit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}