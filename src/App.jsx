import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import MindWell from './components/MindWell';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Release from './components/Release';
import ScrollToTop from './components/ScrollToTop';
import Vantagens from './components/Vantagens';
import Login from './components/Login';
import scrollreveal from 'scrollreveal';
import './sass/index.scss';

function App() {
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState(null);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    // Limpar os dados do usuário
    setUser(null);
    // Limpar dados da sessão
    sessionStorage.clear();
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .mindwell,
        .vantagens,
        .releases,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName('home');
    home[0].style.transform = 'none';
    const nav = document.getElementsByTagName('nav');
    nav[0].style.transform = 'none';
  }, 1500);

  return (
    <Router>
      <div data-theme={theme} className="app-container">
        <ScrollToTop />
        <Navbar
          changeTheme={changeTheme}
          currentTheme={theme}
          user={user}
          onLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={
              user ? (
                <>
                  <Home />
                  <MindWell />
                  <Vantagens />
                  <Release />
                  <Footer />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
