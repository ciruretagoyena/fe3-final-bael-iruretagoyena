import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Hacer una solicitud a la API para obtener los detalles del dentista específico
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching dentist details: ', error));
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Dentist id {dentist.id}</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;
