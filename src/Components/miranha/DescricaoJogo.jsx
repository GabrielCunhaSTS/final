import miranha_desc from '../img/miranha_desc.svg';
import styles from './perfil.module.css';

function DescricaoJogo() {
    return (
        <div className={styles.container_descricao}>
            <div className={styles.img_desc}>
                <img src={miranha_desc} />
            </div>
            <div className={styles.titulo_desc}>
                <h2>Descrição do jogo</h2>
                <p>
                    Marvel’s Spider-Man: Miles Morales é uma aventura vibrante que acompanha a jornada de Miles enquanto ele tenta se firmar como o novo Homem-Aranha. Quando Peter Parker sai da cidade, Miles se torna o principal protetor de Nova York, enfrentando um conflito entre a corporação Roxxon e o Underground, liderado pela misteriosa Tinkerer. A trama se desenrola em meio a temas de amadurecimento, pertencimento e responsabilidade, destacando a luta de Miles para equilibrar sua vida pessoal e o papel de herói.                </p>
                <p>
                    A jogabilidade é uma evolução do jogo anterior, com um combate dinâmico que utiliza as habilidades únicas de Miles, como ataques bioelétricos e camuflagem, tornando cada confronto mais estratégico. Além disso, a exploração de uma Nova York coberta de neve ganha charme extra com gráficos impressionantes e uma trilha sonora que mistura hip-hop com música orquestral, trazendo frescor à atmosfera urbana. Embora mais curto que seu antecessor, o jogo se destaca pela narrativa emocionalmente rica, que aprofunda a conexão do jogador com Miles e sua comunidade. Com excelente recepção crítica, o título é um marco na expansão do universo do Homem-Aranha, oferecendo uma experiência cativante e impactante tanto para fãs antigos quanto para novos jogadores.
                </p>
            </div>
        </div>
    );
}

export default DescricaoJogo;
