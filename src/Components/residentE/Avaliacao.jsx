import steam from '../img/logo steam.svg'; 
import steam_resident from '../img/resident_steam.svg';
import avaliacao_re from '../img/avaliação_re.svg'; 
import styles from './perfil.module.css';

function Avaliacao() {
    return (
        <div className={styles.container_avaliacao}>
            <div className={styles.link}>
                <a href="https://store.steampowered.com/">
                    <img src={steam} />
                </a>
                <img src={steam_resident} style={{ width: '40%' }} />
            </div>

            <div className={styles.plataforma}>
                <img src={avaliacao_re} />
            </div>
        </div>
    );
}

export default Avaliacao;
