import { Routes, Route, Navigate } from 'react-router-dom';
import { Content, Container } from './App.styled';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Portfolio from './pages/Portfolio/Portfolio';
import { SideBar } from './components/SideBar/SideBar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Content>
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
      <Footer />
    </Content>
  );
}

export default App;
