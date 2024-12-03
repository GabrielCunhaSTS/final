import InfoJogo from '../Components/residentE/InfoJogo';
import DescricaoJogo from '../Components/residentE/DescricaoJogo';
import Navbar from '../Components/Navbar';
import Avaliacao from '../Components/residentE/Avaliacao';
import styles from '../Components/residentE/perfil.module.css';
import RequisitosPC from '../Components/residentE/requisitos';
import Comentario from '../Components/residentE/comentario';

function residentE() {
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

export default residentE;
