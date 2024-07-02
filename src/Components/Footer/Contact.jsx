import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    company: '',
    email: '',
    message: ''
  });

  const formRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ydywbmc', 'template_tn3k20u', formRef.current, 'a_mj9GG3z_rUB1m7F')
      .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado exitosamente!');
      }, (error) => {
        console.log(error.text);
        alert('Ocurrió un error al enviar el mensaje.');
      });
    
    setInput({
      name: '',
      lastName: '',
      company: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form ref={formRef} onSubmit={handleClick} className="flex-col mx-8 md:m-8 p-4 bg-transparent rounded md:w-2/5 md:mx-20">
      <label className="text-2xl md:text-lg font-medium">Nombre*</label>
      <input className="w-full my-1 md:my-1 bg-green border-2 border-black px-2"
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange} required />
      <br />
      <label className="text-2xl md:text-lg font-medium">Apellido*</label>
      <input className="w-full my-1 md:my-1 bg-green border-2 border-black px-2"
        type="text"
        name="lastName"
        value={input.lastName}
        onChange={handleChange} required />
      <br />
      <label className="text-2xl md:text-lg font-medium">Empresa</label>
      <input className="w-full my-1 md:my-1 bg-green border-2 border-black px-2"
        type="text"
        name="company"
        value={input.company}
        onChange={handleChange} />
      <br />
      <label className="text-2xl md:text-lg font-medium">Correo*</label>
      <input className="w-full my-1 md:my-1 bg-green border-2 border-black px-2"
        type="email"
        name="email"
        value={input.email}
        onChange={handleChange} required />
      <br />
      <label className="text-2xl md:text-lg font-medium">Mensaje*</label><br />
      <textarea className="w-full my-3 md:my-1 bg-green border-2 border-black px-2"
        name="message" rows="4"
        value={input.message}
        onChange={handleChange} required />
      <br />
      <span className="align-right">
        <button type="submit" className="text-lg px-5 bg-black text-white hover:text-black hover:bg-green border-2 border-black relative">
          Enviar
        </button>
      </span>
    </form>
  );
};

export default Contact;
