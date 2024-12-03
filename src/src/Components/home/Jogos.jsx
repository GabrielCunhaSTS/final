import estrela from "../img/estrela.svg";
import styles from "../home/jogos.module.css";
import baldur from "../img/Group 34.svg";
import miranha from '../img/Group 35.svg';
import resident from '../img/Group 36.svg'
import hp from '../img/hp (1).svg'
import ass from '../img/ASS.svg'
import rdr from '../img/rdr2 (1).svg'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Jogos() {
  return (
    <div className={styles.content}>

      <div className={styles.caixa}>

        <div className={styles.card}>
          <Link to="/baldurs"><img src={baldur} alt="" className={styles.image} /></Link>
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3 - </li>
              <li>Ação</li>
              <li>RPG</li>
              <li>Mundo aberto</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <Link to="/Miranha"><img src={miranha} alt="" className={styles.image} /></Link>
          <div className={styles.nameand}>
            <h3>Homem Aranha</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Homem Aranha - </li>
              <li>Ação</li>
              <li>História</li>
              <li>Mundo aberto</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
        <Link to="/residentE"><img src={resident} alt="" className={styles.image} /></Link>
          <div className={styles.nameand}>
            <h3>Resident Evil</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Resident Evil - </li>
              <li>Ação</li>
              <li>Terror</li>
              <li>Suspense</li>
            </ul>
          </div>
        </div>

      </div>

      <div className={styles.caixa}>

        <div className={styles.card}>
          <img src={hp} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Hogwarts Mistery</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Hogwarts Mistery - </li>
              <li>Mistério</li>
              <li>Magia</li>
              <li>Aventura</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <img src={ass} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Assasin's Creed Odysey</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Assasin's Creed Odysey - </li>
              <li>História</li>
              <li>Mundo Aberto</li>
              <li>Aventura</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <img src={rdr} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Red Dead Redempition 2</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Red Dead Redempition 2 - </li>
              <li>Velho Oeste</li>
              <li>Tiro</li>
              <li>Mundo Aberto</li>
            </ul>
          </div>
        </div>

      </div>

      <div className={styles.caixa}>

        <div className={styles.card}>
          <img src={baldur} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <img src={baldur} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <img src={baldur} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
            </ul>
          </div>
        </div>

      </div>

      <div className={styles.caixa}>

        <div className={styles.card}>
          <img src={baldur} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <img src={baldur} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <img src={baldur} alt="" className={styles.image} />
          <div className={styles.nameand}>
            <h3>Balder's Gate 3</h3>
            <img src={estrela} alt="" className={styles.estrela} />
          </div>
          <div className={styles.linha}>
            <ul className={styles.ul}>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
              <li>Baldur's Gate 3</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Jogos;
