import React, { useState, useContext } from 'react';
import { useGlobalState } from './utils/global.context'; // Importa el contexto global

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const { theme } = useGlobalState(); // Obtiene el tema de colores del contexto global

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza validaciones y envío de formulario según las consignas
  };

  return (
    <div className={`form-container ${theme === 'dark' ? 'dark' : ''}`}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
