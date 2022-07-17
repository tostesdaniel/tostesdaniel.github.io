import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
