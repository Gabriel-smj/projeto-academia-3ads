import styles from './Navbar.module.css'

function Navbar() {

    return (
        <header className={styles.navbar}>

            <div className={styles.logoArea}>

                <div className={styles.logo}>
                    
                </div>

                <div>
                    <h1>POWERFIT</h1>

                    <span>
                        ACADEMIA
                    </span>
                </div>

            </div>


            <div className={styles.titulo}>
                SISTEMA DE GESTÃO DE ACADEMIA
            </div>

        </header>
    )
}

export default Navbar