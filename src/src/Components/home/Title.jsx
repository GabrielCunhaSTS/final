import mago from '../img/mago.svg'
import styles from './title.module.css'

function Title(){
    return(
        <div className={styles.fundo}>
            <div className={styles.titulo}>
            <h1 className={styles.h1}>Todos os seus games em um só lugar</h1>
            <img src={mago} alt="" />
        </div>
        </div>
    )
}

export default Title