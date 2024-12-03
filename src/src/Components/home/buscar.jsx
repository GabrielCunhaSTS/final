import style from './buscar.module.css'
import busca from '../img/busca.svg'

function Buscar(){
    return(
        <div className={style.caixa}>
            <h2 className={style.h2}>Avalie seu jogo Favorito</h2>
            <div >
            <img className={style.img} src={busca} alt="" />
            <input className={style.input} type="text" placeholder=' Busque seu jogo favorito'/>
            </div>
        </div>
    )
}

export default Buscar