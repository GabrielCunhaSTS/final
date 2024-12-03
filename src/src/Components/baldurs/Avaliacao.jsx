import steam from '../img/logo steam.svg'; 
import steam_img from '../img/steam-img 1.svg';
import avaliacao from '../img/avaliação.svg'; 
import styles from './perfil.module.css';

function Avaliacao() {
    return (
        <div className={styles.container_avaliacao}>
            <div className={styles.link}>
    <a href="https://store.steampowered.com/">
        <img src={steam} alt="Logo Steam" />
    </a>
    <img src={steam_img} style={{ width: '40%' }} />
</div>

            <div className={styles.plataforma}>
                <img src={avaliacao} alt="Avaliação do jogo" />
            </div>
        </div>
    );
}

export default Avaliacao;
