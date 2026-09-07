import styles from './Lista.module.css'
import { useEffect, useState } from 'react'
import { listarMembros } from '../../services/api'

function Lista() {

    const [membros, setMembros] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {

        async function buscarMembros() {

            try {

                const dados = await listarMembros()

                setMembros(dados)

            } catch (erro) {

                setErro('Não foi possível carregar os membros.')

            } finally {

                setCarregando(false)

            }
        }

        buscarMembros()

    }, [])

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
                            <th>Data de Nascimento</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Plano</th>

                        </tr>
                    </thead>

                    <tbody>
                        {membros.map((membro) => (
                            <tr key={membro.id}>

                                <td>{membro.id}</td>
                                <td>{membro.nome}</td>
                                <td>{membro.dataNascimento}</td>
                                <td>{membro.email}</td>
                                <td>{membro.telefone}</td>
                                <td>{membro.plano}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

            {carregando && (
                <p className={styles.mensagem}>
                    Carregando membros...
                </p>
            )}

            {erro && (
                <p className={styles.erro}>
                    {erro}
                </p>
            )}

        </section>
    )
}

export default Lista