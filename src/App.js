import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Content, Container } from './App.styled';
import { SideBar } from './components/SideBar/SideBar';
import { Footer } from './components/Footer/Footer';
import PropagateLoader from 'react-spinners/PropagateLoader';

const HomePage = lazy(() => import('./pages/Home/Home'));
const AboutPage = lazy(() => import('./pages/About/About'));
const SkillsPage = lazy(() => import('./pages/Skills/Skills'));
const PortfolioPage = lazy(() => import('./pages/Portfolio/Portfolio'));

const override: CSSProperties = {
  display: 'block',
  margin: 'auto',
};

function App() {
  return (
    <Content>
      <Container>
        <Suspense
          fallback={
            <PropagateLoader
              color="#FFFFFFC7"
              size={30}
              speedMultiplier={1}
              cssOverride={override}
            />
          }
        >
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </Content>
  );
}

export default App;
