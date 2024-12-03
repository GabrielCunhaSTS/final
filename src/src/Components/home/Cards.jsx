import style from './cards.module.css'
import estrela from '../img/estrela.png'
import kirby from '../img/kirby.png'
import fort from '../img/fortnite.png'
import mario from '../img/mario.png'
import pokemon from '../img/pokemon.png'
import vava from '../img/vava.png'

function Cards(){
    return(

        <div className={style.caixa}>
            
            <div className={style.card1}>
                <div className={style.name}>
                    <h3 className={style.h3}>Fortnite</h3>
                    <img className={style.image} src={estrela} alt="" />
                </div>
                <img className={style.fot} src={fort} alt="" />
            </div>
            
            <div className={style.card2}>
                <div className={style.name}>
                <h3 className={style.h3}>Super Mario</h3>
                
                </div>
                <img className={style.mario} src={mario} alt="" />
            </div>
            
            <div className={style.card}>
                <div className={style.name}>
                <h3 className={style.h3}>Kirby</h3>
                <img className={style.image} src={estrela} alt="" />
                </div>
                <img className={style.kirby} src={kirby} alt="" />
            </div>
            
            <div className={style.card3}>
                <div className={style.name}>
                <h3 className={style.h3}>Pokemon</h3>
                <img className={style.image} src={estrela} alt="" />
                </div>
                <img className={style.poke} src={pokemon} alt="" />
            </div>
            
            <div className={style.card4}>
                <div className={style.name}>
                <h3 className={style.h3}>Valorant</h3>
                <img className={style.image} src={estrela} alt="" />
                </div>
                <img className={style.vava} src={vava} alt="" />
            </div>
        </div>

    )
}


export default Cards