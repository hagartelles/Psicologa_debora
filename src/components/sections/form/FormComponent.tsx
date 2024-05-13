"use client"

import React, { useState } from 'react';
import { DivBackground } from "@/components/globalComponents/DivBackground"
import { SplashArt, SplashImages } from "../../globalComponents/SplashArt"


const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
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
    fetch("https://formsubmit.co/ajax/deborahmuller_@hotmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => alert('Eu recebi a sua mensagem <3'))

      .catch(error => {
        alert(`Ops, ocorreu um erro no envio: ${error}`);
      });
  };

  return (
    <DivBackground name="Contato">
      <div className="w-3/4 mx-auto pt-24">
        <h2 className="text-3xl font-bold lg:text-5xl text-center m-2 mb-8">Contato</h2>
        <div className='py-4 '>
          <p className=" text-base md:text-xl ">Você pode entrar em contato comigo pelo WhatsApp ou se preferir por aqui! eu vou receber e lhe respondo o mais breve possível !</p>
        </div>
        <form className="mx-auto w-full rounded px-8 pt-6 pb-8 mb-4 mt-4 bg-burnt_rose/60" action="https://formsubmit.co/hagar.telles@email.com" method="POST" onSubmit={handleSubmit}>
          <div className=" mb-4">
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
             outline-misty_rose"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </DivBackground>
  );
};

export default FormComponent;
