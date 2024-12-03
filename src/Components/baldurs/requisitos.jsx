import imagem_requisitos from '../img/image4-unscreen.gif';
import styles from './perfil.module.css';

function RequisitosPC() {
    return (
        <div className={styles.container_requisitos}>
            <div className={styles.imagem_requisitos}>
                <img src={imagem_requisitos} alt="Imagem representativa dos requisitos" />
            </div>
            <section className={styles.requisitos}>
                <article className={styles.config}>
                    <h2>Requisitos Mínimos</h2>
                    <ul>
                        <li>Requer um processador e sistema operacional de 64 bits</li>
                        <li>SO: Windows 10 64-bit</li>
                        <li>Processador: Intel I5 4690 / AMD FX 8350</li>
                        <li>Memória: 8 GB de RAM</li>
                        <li>Placa de vídeo: Nvidia GTX 970 / RX 480 (4GB+ de VRAM)</li>
                        <li>DirectX: Versão 11</li>
                        <li>Armazenamento: 150 GB de espaço disponível</li>
                        <li>Outras observações: SSD obrigatório</li>
                    </ul>
                </article>
                <article className={styles.config}>
                    <h2>Requisitos Recomendados</h2>
                    <ul>
                        <li>Requer um processador e sistema operacional de 64 bits</li>
                        <li>SO: Windows 10 64-bit</li>
                        <li>Processador: Intel i7 8700K / AMD r5 3600</li>
                        <li>Memória: 16 GB de RAM</li>
                        <li>Placa de vídeo: Nvidia 2060 Super / RX 5700 XT (8GB+ de VRAM)</li>
                        <li>DirectX: Versão 11</li>
                        <li>Armazenamento: 150 GB de espaço disponível</li>
                        <li>Outras observações: SSD obrigatório</li>
                    </ul>
                </article>
            </section>
        </div>
    );
}

export default RequisitosPC;
