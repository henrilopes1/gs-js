// Navbar.jsx

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import Login from './Login';

function Navbar({ changeTheme, currentTheme, user, onLogout }) {
  const [navState, setNavState] = useState(false);

  const handleLoginClick = () => {
    // Implemente a lógica para exibir o formulário de login aqui
    console.log('Mostrar formulário de login');
  };

  const handleLogoutClick = () => {
    // Limpar os dados do usuário e chamar a função de logout
    onLogout();
  };

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === 'dark' ? (
              <ImSun className="white-text" />
            ) : (
              <BsFillMoonFill className="white-text" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? 'nav-visible' : ''}`}>
        <ul className="links">
          {user ? (
            <>
              <li>
                <span className="white-text">Bem-vindo, {user.nome}!!  {user.email} </span>
              </li>
              <li onClick={handleLogoutClick}>
                <span className="white-text">Logout</span>
              </li>
            </>
          ) : (
            <li onClick={handleLoginClick}>
              <span className="white-text">Login</span>
            </li>
          )}
          {/* Adicione mais links conforme necessário */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
