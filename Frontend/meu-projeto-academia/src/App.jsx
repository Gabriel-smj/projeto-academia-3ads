import Navbar from './components/Navbar/Navbar.jsx'
import styles from './App.module.css'
import CadastroMembro from './components/Cadastro/Cadastro.jsx'
import ListaMembros from './components/Lista/Lista.jsx'
import { useState } from 'react'

function App() {

    const [membroAdicionado, setMembroAdicionado] = useState(null)

    return (
        <div className={styles.app}>
           <Navbar />

            <main className={styles.main}>

                <CadastroMembro onMembroCadastrado={setMembroAdicionado} />

                <ListaMembros membroAdicionado={membroAdicionado} />

            </main>

        </div>
    )
}

export default App