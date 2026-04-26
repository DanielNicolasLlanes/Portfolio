import ButtonPrimary from './Button-primary/Button-primary';    
import Card from './Card/Card';
import Starfield from './Starfield/Starfield';
import NavBar from './components/NavBar/NavBar';
import Proyects from './components/Proyects/Proyects.jsx';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Starfield/>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route path="/proyects" element={<Proyects/>} />
          <Route path="/contacto" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
