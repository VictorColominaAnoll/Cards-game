// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { Routes, Route } from "react-router";
import { Menu } from 'components/Menu';
import { Home } from 'home/Home'
import { Game } from 'game/Game';

function App() {

  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;