import InfoJogo from '../Components/baldurs/InfoJogo';
import DescricaoJogo from '../Components/baldurs/DescricaoJogo';
import Navbar from '../Components/Navbar';
import Avaliacao from '../Components/baldurs/Avaliacao';
import styles from '../Components/baldurs/perfil.module.css';
import RequisitosPC from '../Components/baldurs/requisitos';
import Comentario from '../Components/baldurs/comentario';

function Baldurs() {
    return (
      <div>
        <Navbar />
          <div className={styles.container}>
              <div className={styles.perfil_jogo}>
                  <InfoJogo />
                  <DescricaoJogo />
                  <RequisitosPC />
                  <Avaliacao />
                  <Comentario />
              </div>
          </div>
      </div>
    );
}

export default Baldurs;
