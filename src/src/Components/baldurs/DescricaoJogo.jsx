import baldurs_desc from '../img/image1-unscreen.gif';
import styles from './perfil.module.css';

function DescricaoJogo() {
    return (
        <div className={styles.container_descricao}>
            <div className={styles.img_desc}>
                <img src={baldurs_desc} alt="Descrição visual do jogo" />
            </div>
            <div className={styles.titulo_desc}>
                <h2>Descrição do jogo</h2>
                <p>
                Baldur's Gate 3 é um jogo de RPG desenvolvido pela Larian Studios, ambientado no universo de Dungeons & Dragons, que leva os jogadores a uma jornada épica de fantasia, ação e escolhas morais. O enredo começa quando um grupo de personagens se vê infectado por parasitas de origem desconhecida, que dão a eles habilidades sobrenaturais, mas também ameaçam corrompê-los.
                </p>
                <p>
                     Os jogadores assumem o papel de um desses personagens, com a liberdade de personalizar sua aparência, habilidades e história, e podem formar um grupo com aliados com histórias próprias e complexas. A trama se desenrola em torno da cidade de Baldur's Gate e seus arredores, onde forças místicas e traiçoeiras estão em jogo, incluindo o retorno de poderosas entidades como os Illithids (ou Mind Flayers). A história é marcada por escolhas que impactam não apenas o destino dos personagens, mas também o futuro de todo o mundo.
                     Com um sistema de combate tático baseado em turnos, Baldur's Gate 3 oferece uma experiência profunda de exploração e interação com o mundo, permitindo ao jogador afetar o desenrolar dos eventos de maneiras significativas, seja por alianças, confrontos ou decisões éticas. A narrativa imersiva, combinada com a liberdade de ação e a complexidade dos personagens, faz do jogo uma experiência única, voltada tanto para fãs de RPGs clássicos quanto para novatos no gênero.
                </p>
            </div>
        </div>
    );
}

export default DescricaoJogo;
