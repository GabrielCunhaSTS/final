import miranha_req from '../img/miranha_req.svg';
import styles from './perfil.module.css';

function RequisitosPC() {
    return (
        <div className={styles.container_requisitos}>
            <div className={styles.imagem_requisitos}>
                <img src={miranha_req}/>
            </div>
            <section className={styles.requisitos}>
                <article className={styles.config}>
                    <h2>Requisitos Mínimos</h2>
                    <ul>
                        <li>Requer um processador e sistema operacional de 64 bits</li>
                        <li>SO: Windows 10 64-bit 1909</li>
                        <li>Processador:  Intel Core i3-4160, 3.6 GHz ou AMD equivalente</li>
                        <li>Memória: 8 GB de RAM</li>
                        <li>Placa de vídeo: NVIDIA GTX 950 or AMD Radeon RX 470</li>
                        <li>DirectX: Versão 12</li>
                        <li>Armazenamento: 75 GB de espaço disponível</li>
                    </ul>
                </article>
                <article className={styles.config}>
                    <h2>Requisitos Recomendados</h2>
                    <ul>
                        <li>Requer um processador e sistema operacional de 64 bits</li>
                        <li>SO: Windows 10 64-bit</li>
                        <li>Processador: Intel Core i5-4670, 3.4 Ghz or AMD Ryzen 5 1600, 3.2 Ghz</li>
                        <li>Memória: 16 GB de RAM</li>
                        <li>Placa de vídeo: NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB</li>
                        <li>DirectX: Versão 12</li>
                        <li>Armazenamento: 75 GB de espaço disponível</li>
                        <li>Outras observações: 75 GB SSD de spaço recomendado </li>
                    </ul>
                </article>
            </section>
        </div>
    );
}

export default RequisitosPC;
