import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Hacer una solicitud a la API para obtener la lista de dentistas
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDentists(data))
      .catch((error) => console.error('Error fetching dentists: ', error));
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Link to={`/dentist/${dentist.id}`} key={dentist.id}>
            <Card name={dentist.name} username={dentist.username} id={dentist.id} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
