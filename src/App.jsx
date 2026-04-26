import ButtonPrimary from './Button-primary/Button-primary';    
import Card from './Card/Card';
import Starfield from './Starfield/Starfield';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Starfield/>
        <Routes>
          <Route path="/" element={<Card/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
