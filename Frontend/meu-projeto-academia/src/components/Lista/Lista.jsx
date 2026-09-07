import styles from './Lista.module.css'

function Lista() {

    return (
         <section className={styles.container}>

            <div className={styles.cabecalho}>
                <h2>
                    Membros Cadastrados
                </h2>
            </div>

            <div className={styles.tabelaContainer}>

                <table className={styles.tabela}>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Plano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* 
                            Os membros da API
                            serão renderizados aqui
                        */}
                    </tbody>

                </table>

            </div>

        </section>
    )
}

export default Lista