import styles from './Cadastro.module.css'
import { useEffect, useState } from 'react'
import { listarMembros } from '../../services/api'


function Cadastro() {

    const [mensagem, setMensagem] = useState('')
    const [tipoMensagem, setTipoMensagem] = useState('')

    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [plano, setPlano] = useState('')


    function cadastrar() {

        if (
            nome === '' ||
            dataNascimento === '' ||
            email === '' ||
            telefone === '' ||
            plano === ''
        ) {
            setMensagem('Preencha todos os campos!')
            setTipoMensagem('erro')

            return
        }

        const novoMembro = {
            nome,
            dataNascimento,
            email,
            telefone,
            plano
        }

        setMensagem('Membro cadastrado com sucesso!')
        setTipoMensagem('sucesso')

        { limparCampos() }

        console.log(novoMembro)
    }

    function limparCampos() {
        setNome('')
        setDataNascimento('')
        setEmail('')
        setTelefone('')
        setPlano('')
        ipt_nome.focus()
    }

    return (
        <section className={styles.container}>

            <h2 className={styles.titulo}>
                Cadastro de Membro
            </h2>


            <form className={styles.form}>

                <div className={styles.campo}>

                    <input
                        id="ipt_nome"
                        name="nome"
                        type="text"
                        placeholder=""
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor="ipt_nome">
                        Nome Completo
                    </label>

                </div>


                <div className={styles.campo}>

                    <input
                        id="ipt_email"
                        name="email"
                        type="email"
                        placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="ipt_email">
                        E-mail
                    </label>

                </div>


                <div className={styles.campo}>

                    <input
                        id="ipt_telefone"
                        name="telefone"
                        type="tel"
                        placeholder=""
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />

                    <label htmlFor="ipt_telefone">
                        Telefone
                    </label>

                </div>


                <div className={styles.campo}>

                    <input
                        id="ipt_dataNascimento"
                        name="dataNascimento"
                        type="date"
                        placeholder=""
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    />

                    <label htmlFor="ipt_dataNascimento">
                        Data de Nascimento
                    </label>

                </div>


                <div className={styles.campo}>

                    <label htmlFor="select_plano">
                        Plano
                    </label>

                    <select
                        id="select_plano"
                        name="plano"
                        value={plano}
                        onChange={(e) => setPlano(e.target.value)}
                    >

                        <option value="" disabled>
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


                <button
                    type="button"
                    onClick={cadastrar}
                    className={styles.botao}
                >
                    CADASTRAR
                </button>

            </form>

            {mensagem && (
                <div className={`${styles.mensagem} ${styles[tipoMensagem]}`}>
                    {mensagem}
                </div>
            )}


        </section>
    )
}

export default Cadastro