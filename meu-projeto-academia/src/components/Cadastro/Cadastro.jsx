import styles from './Cadastro.module.css'

function Cadastro() {

    return (
        <section className={styles.container}>

            <h2 className={styles.titulo}>Cadastro de Membro</h2>

            <form className={styles.form}>

                <div className={styles.campo}>

                    <label htmlFor="nome">
                        Nome Completo
                    </label>

                    <input id="nome" type="text" placeholder="Nome Completo"/>
                </div>


                <div className={styles.campo}>

                    <label htmlFor="nascimento">
                        Data de Nascimento
                    </label>

                    <input id="nascimento" type="date"/>
                </div>


                <div className={styles.campo}>

                    <label htmlFor="email">
                        E-mail
                    </label>

                    <input id="email" type="email" placeholder="E-mail"/>
                </div>


                <div className={styles.campo}>

                    <label htmlFor="telefone">
                        Telefone
                    </label>

                    <input id="telefone" type="tel" placeholder="Telefone"/>
                </div>


                <div className={styles.campo}>

                    <label htmlFor="plano">
                        Plano
                    </label>

                    <select id="plano">

                        <option disabled selected>
                            Selecione um plano
                        </option>

                        <option value="BASICO">
                            Básico
                        </option>

                        <option value="PRO">
                            Pro
                        </option>

                        <option value="VIP">
                            VIP
                        </option>

                    </select>
                </div>


                <button type="submit" className={styles.botao}>
                    Cadastrar
                </button>

            </form>

        </section>
    )
}

export default Cadastro