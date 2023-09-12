import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    // Obtener los dentistas destacados almacenados en localStorage
    const storedFavorites = localStorage.getItem('favoriteDentists');
    if (storedFavorites) {
      setFavoriteDentists(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoriteDentists.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

