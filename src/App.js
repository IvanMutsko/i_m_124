import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from './App.styled';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Portfolio from './pages/Portfolio/Portfolio';
import { SideBar } from './components/SideBar/SideBar';

function App() {
  return (
    <Container>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
