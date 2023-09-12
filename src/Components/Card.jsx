import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from './utils/global.context'; // Importa el contexto global

const Card = ({ name, username, id }) => {
  const { theme } = useGlobalState(); // Obtiene el tema de colores del contexto global

  const addFav = () => {
    // Aquí puedes implementar la lógica para agregar la Card al localStorage
    // Ejemplo: localStorage.setItem('favoriteDentist', JSON.stringify({ id, name, username }));
  };

  return (
    <div className={`card ${theme === 'dark' ? 'dark' : ''}`}>
      <Link to={`/dentist/${id}`}>
        {/* Enlace dinámico hacia la página de detalle */}
        <p>{name}</p>
        <p>{username}</p>
        <p>{id}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;

