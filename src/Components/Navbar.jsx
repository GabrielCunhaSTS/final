import logo from './img/afc89cbaeeb9ff9d7c4b0cd41e042f8c-removebg-preview (1) 1.svg'
import coin from './img/coinn.png'
import mais from './img/mais.png'
import perfil from './img/Group 30.svg'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(

        <div className={styles.Nav}>
        <ul className={styles.lista}>
            <li>Loja</li>
            <li>Jogos</li>
            <li>Contato</li>
        </ul>

        <Link to="/"><img className={styles.logo} src={logo}/></Link>

        <div className={styles.dindin}>
        <img className={styles.coin} src={coin} alt="" />
        <h6 className={styles.h6}>1859</h6>
        <img className={styles.mais} src={mais} alt="" />
        </div>

        <img className={styles.perfil} src={perfil} alt="" />
        </div>

    )
}

export default Navbar