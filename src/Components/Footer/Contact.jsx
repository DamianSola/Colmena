import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [input, setInput] = useState({
    name: '',
    phone: '',
    email: ''
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
      email: '',
      phone: ''
    });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form ref={formRef} onSubmit={handleClick} className="flex-col mx-8 md:m-8 p-4 bg-transparent rounded md:w-2/5 md:mx-20">
      <label className="text-base md:text-lg font-medium">NOMBRE Y APELLIDO</label>
      <input className="w-full my-1 md:my-1 bg-orangeLight border-2 border-black px-2"
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange} required />
      <br />
      {/* <label className="text-2xl md:text-lg font-medium">Apellido*</label>
      <input className="w-full my-1 md:my-1 bg-green border-2 border-black px-2"
        type="text"
        name="lastName"
        value={input.lastName}
        onChange={handleChange} required />
      <br /> */}
      <label className="text-base md:text-lg font-medium">E-MAIL*</label>
      <input className="w-full my-1 md:my-1 bg-orangeLight border-2 border-black px-2"
        type="email"
        name="email"
        value={input.email}
        onChange={handleChange} required />
      <label className="text-base md:text-lg font-medium">TELEFONO</label>
      <input className="w-full my-1 md:my-1 bg-orangeLight border-2 border-black px-2"
        type="text"
        name="phone"
        value={input.phone}
        onChange={handleChange} />
      <br />
      <br />
      {/* <label className="text-2xl md:text-lg font-medium">Mensaje*</label><br />
      <textarea className="w-full my-3 md:my-1 bg-green border-2 border-black px-2"
        name="message" rows="4"
        value={input.message}
        onChange={handleChange} required />
      <br /> */}
      <span className="text-center">
        <button 
          type="submit" 
          className="md:text-lg px-2 py-1 bg-black text-white hover:text-black hover:bg-orangeLight border-2 border-black relative">
            QUIERO QUE ME CONTACTEN
        </button>
      </span>
    </form>
  );
};

export default Contact;
