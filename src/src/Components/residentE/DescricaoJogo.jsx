import nemisis from '../img/nemisis.svg';
import styles from './perfil.module.css';

function DescricaoJogo() {
    return (
        <div className={styles.container_descricao}>
            <div className={styles.img_desc}>
                <img src={nemisis} />
            </div>
            <div className={styles.titulo_desc}>
                <h2>Descrição do jogo</h2>
                <p>
                    Resident Evil 4: Remake é uma reimaginação do clássico jogo de 2005, desenvolvido pela Capcom. Mantendo a essência do original, o remake moderniza o gameplay com gráficos impressionantes, atmosfera mais imersiva e mecânicas atualizadas. A história segue Leon S. Kennedy, agora um agente do governo, enviado para resgatar Ashley Graham, a filha do presidente, que foi sequestrada por um culto misterioso chamado Los Illuminados. A missão se passa em uma vila remota na Espanha, onde Leon enfrenta hordas de infectados e chefes memoráveis, enquanto descobre segredos sombrios sobre o culto e seu vírus mortal.
                    O remake introduz melhorias significativas, como um sistema de controle mais fluido, maior profundidade nas interações com NPCs e um tom ainda mais sombrio. As mecânicas de combate foram renovadas, com destaque para maior ênfase na furtividade, no gerenciamento de recursos e em estratégias de sobrevivência. Além disso, o visual recria ambientes icônicos do original com um nível de detalhe impressionante, tornando a experiência mais tensa e realista.
                </p>
                <p>
                    Embora respeite a narrativa do jogo original, o remake adiciona novas camadas de história e diálogos que expandem o enredo, enriquecendo os personagens e o contexto. A recepção ao jogo foi extremamente positiva, com elogios ao equilíbrio entre nostalgia e inovação. Resident Evil 4: Remake consolida sua posição como um dos melhores jogos de 2023, trazendo uma experiência imersiva que agradou tanto os fãs antigos quanto uma nova geração de jogadores.                
                </p>
            </div>
        </div>
    );
}

export default DescricaoJogo;
