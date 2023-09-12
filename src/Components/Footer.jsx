import React, { useContext } from 'react';
import { useGlobalState } from './utils/global.context'; // Importa el contexto global

const Footer = () => {
  const { theme } = useGlobalState(); // Obtiene el tema de colores del contexto global

  return (
    <footer className={theme === 'dark' ? 'dark' : ''}>
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
