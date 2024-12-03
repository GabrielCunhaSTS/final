import re from '../img/re_req.svg';
import styles from './perfil.module.css';

function RequisitosPC() {
    return (
        <div className={styles.container_requisitos}>
            <div className={styles.imagem_requisitos}>
                <img src={re}/>
            </div>
            <section className={styles.requisitos}>
                <article className={styles.config}>
                    <h2>Requisitos Mínimos</h2>
                    <ul>
                        <li>Requer um processador e sistema operacional de 64 bits</li>
                        <li>SO: Windows 10 (64 bit)</li>
                        <li>Processador: AMD Ryzen 3 1200 / Intel Core i5-7500 </li>
                        <li>Memória: 8 GB de RAM</li>
                        <li>Placa de vídeo: AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM</li>
                        <li>DirectX: Versão 12</li>
                        <li>Rede: Conexão de internet banda larga</li>
                    </ul>
                </article>
                <article className={styles.config}>
                    <h2>Requisitos Recomendados</h2>
                    <ul>
                        <li>Requer um processador e sistema operacional de 64 bits</li>
                        <li>SO: Windows 10 (64 bit)/Windows 11 (64 bit)</li>
                        <li>Processador: AMD Ryzen 5 3600 / Intel Core i7 8700</li>
                        <li>Memória: 16 GB de RAM</li>
                        <li>Placa de vídeo:  AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070</li>
                        <li>DirectX: Versão 12</li>
                        <li>Rede: Conexão de internet banda larga</li>
                        <li>Outras observações: 75 GB SSD  Desempenho aproximado: 1080p/60fps. ・A taxa de quadros pode cair em cenas que exigem recursos visuais mais pesados.</li>
                    </ul>
                </article>
            </section>
        </div>
    );
}

export default RequisitosPC;
