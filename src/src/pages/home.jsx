import Navbar from '../Components/Navbar';
import Title from '../Components/home/Title';
import Cards from '../Components/home/Cards';
import Buscar from '../Components/home/buscar';
import Jogos from '../Components/home/Jogos';

function Home() {
    return (
      <div>
     <Navbar/>
     <Title/>
     <Cards/>
     <Buscar/>
     <Jogos/>
  </div>
  )

}export default Home