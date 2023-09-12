import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validaciones aquí
    if (formData.name.length < 5 || !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setErrorMessage('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      // Envía el formulario o realiza cualquier acción necesaria
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      setErrorMessage('');
      // Aquí puedes enviar el formulario a través de una solicitud a la API, si es necesario.
    }
  };

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Contact;
