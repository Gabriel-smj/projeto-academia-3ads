import styles from './Cadastro.module.css'

function Cadastro() {

    return (
        <section className={styles.container}>

            <h2 className={styles.titulo}>Cadastro de Membro</h2>

            <form className={styles.form}>

                <div className={styles.campo}>

                    <input id="nome" name='nome' type="text" placeholder="" />

                    <label htmlFor="nome">
                        Nome Completo
                    </label>

                </div>

                <div className={styles.campo}>

                    <input id="email" name="email" type="email" placeholder="" />

                    <label htmlFor="email">
                        E-mail
                    </label>

                </div>


                <div className={styles.campo}>

                    <input id="telefone" name='telefone' type="tel" placeholder="" />
                    <label htmlFor="telefone">
                        Telefone
                    </label>

                </div>

                <div className={styles.campo}>
                    <input id="dataNascimento" name="dataNascimento" type="date" placeholder=" "/>
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                </div>


                <div className={styles.campo}>

                    <label htmlFor="plano">
                        Plano
                    </label>

                    <select id="plano" name="plano" defaultValue="" aria-required>
                        <option disabled selected>
                            Selecione um plano
                        </option>

                        <option value="BASICO">Básico</option>
                        <option value="PRO">Pro</option>
                        <option value="VIP">VIP</option>
                    </select>
                </div>


                <button type="submit" className={styles.botao}>
                    CADASTRAR
                </button>

            </form>

        </section>
    )
}

export default Cadastro