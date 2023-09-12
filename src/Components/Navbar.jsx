import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../Components/utils/global.context'; // Importa el contexto

const Navbar = () => {
  const { theme, setTheme } = useGlobalState(); // Obtiene el estado global

  const toggleTheme = () => {
    // Cambia el tema de colores
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={theme === 'dark' ? 'dark' : ''}>
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      {/* Agrega otros enlaces */}
      <button onClick={toggleTheme}>Change theme</button> {/* Botón para cambiar el tema */}
    </nav>
  );
};

export default Navbar;
