// CSS
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import {
  Routes,
  Route,
} from "react-router-dom";
import { Menu } from 'components/Menu';
import { Home } from 'home/Home'
import { Lobby } from 'lobby/Lobby';
import { Game } from 'game/Game';
import { CardGame } from 'cardGame/CardGame';

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
        <Route path="/cards" element={<CardGame />} />
      </Routes>
    </>
  );
}

export default App;