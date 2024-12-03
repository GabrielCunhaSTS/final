import miranha from '../img/perfil_miranha.svg';
import estrela_miranha from '../img/estrela miranha.svg'; 
import styles from './perfil.module.css';

function InfoJogo() {
    return (
        <div className={styles.perfil_jogo}>
            <img src={miranha} />
            <div className={styles.titulo_jogo}>
                <h1>Marvel’s Spider-Man</h1>
                <img className={styles.estrela} src={estrela_miranha}/>
            </div>
        </div>
    );
}

export default InfoJogo;