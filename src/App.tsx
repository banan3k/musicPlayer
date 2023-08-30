import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Albums from "./components/Albums";
import SongList from "./components/SongList";
import WrongPath from "./components/WrongPath";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Albums />} />
          <Route path="/song/:songId" element={<SongList />} />
          <Route path="/*" element={<WrongPath />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
