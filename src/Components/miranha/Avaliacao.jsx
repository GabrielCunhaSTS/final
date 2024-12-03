import steam from '../img/logo steam.svg'; 
import steam_miranha from '../img/steam_miranha.svg';
import avaliacao_miranha from '../img/avaliação_miranha.svg'; 
import styles from './perfil.module.css';

function Avaliacao() {
    return (
        <div className={styles.container_avaliacao}>
            <div className={styles.link}>
                <a href="https://store.steampowered.com/">
                    <img src={steam} />
                </a>
                <img src={steam_miranha} style={{ width: '30%' }}/>
            </div>

            <div className={styles.plataforma}>
                <img src={avaliacao_miranha} />
            </div>
        </div>
    );
}

export default Avaliacao;
