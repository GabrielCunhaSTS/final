import baldurs from '../img/baldurs.svg';
import estrela from '../img/estrela.svg'; 
import styles from './perfil.module.css';

function InfoJogo() {
    return (
        <div className={styles.perfil_jogo}>
            <img src={baldurs} alt="Imagem do jogo" />
            <div className={styles.titulo_jogo}>
                <h1>Baldur's Gate 3</h1>
                <img className={styles.estrela} src={estrela} alt="Ícone de estrela" />
            </div>
        </div>
    );
}

export default InfoJogo;