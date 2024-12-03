import re from '../img/re.svg';
import estrela_re from '../img/estrela_re.svg'; 
import styles from './perfil.module.css';

function InfoJogo() {
    return (
        <div className={styles.perfil_jogo}>
            <img src={re} />
            <div className={styles.titulo_jogo}>
                <h1>Resident Evil 4</h1>
                <img className={styles.estrela} src={estrela_re}/>
            </div>
        </div>
    );
}

export default InfoJogo;