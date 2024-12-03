import InfoJogo from '../Components/miranha/InfoJogo';
import DescricaoJogo from '../Components/miranha/DescricaoJogo';
import Navbar from '../Components/Navbar';
import Avaliacao from '../Components/miranha/Avaliacao';
import styles from '../Components/miranha/perfil.module.css';
import RequisitosPC from '../Components/miranha/requisitos';
import Comentario from '../Components/miranha/comentario';

function Miranha() {
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

export default Miranha;
