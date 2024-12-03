import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Baldurs from './pages/baldurs'
import Miranha from './pages/miranha';
import ResidentE from './pages/residentE';

function App() {
  return (
    <div>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baldurs" element={<Baldurs />} />
        <Route path="/Miranha" element={<Miranha />} />
        <Route path="/residentE" element={<ResidentE />} />
      </Routes>
    </Router>
</div>

  );
}


export default App;
