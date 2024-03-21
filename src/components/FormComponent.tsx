"use client"

import React, { useState } from 'react';
import { DivBackground } from "@/components/DivBackground"
import { SplashArt, SplashImages } from "./SplashArt"


const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone:'',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Aqui você pode fazer o que quiser com os dados do formulário
  };

  return (
    <DivBackground minHeight="600">
      <h2 className="text-center text-xl font-bold m-2">Contato</h2>
      <form className="w-3/4 max-w-lg mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-burnt_rose" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Nome:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2 " htmlFor="email">
            E-mail:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2 " htmlFor="email">
          Telefone:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="telefone"
            name="telefone"
            type="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="telefone"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2 " htmlFor="message">
            Mensagem:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="
            w-full 
            bg-misty_rose
             hover:bg-beige 
             font-bold 
             py-2 px-4 
             rounded
             outline-misty_rose
             

             shadow-lg shadow-black/30
             "
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>


    </DivBackground>
  );
};

export default FormComponent;
