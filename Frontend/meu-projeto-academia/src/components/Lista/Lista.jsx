import styles from './Lista.module.css'
import { useEffect, useState } from 'react'

function Lista() {

    const [membros, setMembros] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    function buscarMembros() {

        setCarregando(true)
        setErro(false)

        fetch('http://localhost:8080/membro')
            .then(resposta => {

                if (!resposta.ok) {
                    throw new Error('Erro ao buscar membros')
                }

                return resposta.json()
            })
            .then(dados => {

                setMembros(dados)
                console.log(dados)

            })
            .catch(erro => {

                console.error(erro)
                setErro(true)

            })
            .finally(() => {

                setCarregando(false)

            })
    }

    useEffect(() => {
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