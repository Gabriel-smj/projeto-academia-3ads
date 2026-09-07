import Navbar from './components/Navbar/Navbar.jsx'
import styles from './App.module.css'
import CadastroMembro from './components/Cadastro/Cadastro.jsx'
import ListaMembros from './components/Lista/Lista.jsx'

function App() {

    return (
        <div className={styles.app}>
           <Navbar />

            <main className={styles.main}>

                <CadastroMembro />

                <ListaMembros />

            </main>

        </div>
    )
}

export default App