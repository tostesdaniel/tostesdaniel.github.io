import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem' }}>
            <p>There&apos;s nothing here!</p>
          </main>
      )}
      />
    </Routes>
  );
}

export default App;
