import styles from './Mensagem.module.css'

function Mensagem({ tipo, texto }) {

    return (
        <div className={`${styles.mensagem} ${styles[tipo]}`}>
            {texto}
        </div>
    )
}

export default Mensagem