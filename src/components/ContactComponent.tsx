"use client";
import { useState } from "react";
import { saveContactoData } from "@/models/ContactoModel";

export default function ContactForm() {
  const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveContactoData(formData); // guardar los datos en el "modelo"
    alert("¡Gracias por contactarnos!");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-contacto">
      <input type="text" name="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="email" name="correo" placeholder="Tu correo" value={formData.correo} onChange={handleChange} required />
      <textarea name="mensaje" placeholder="Tu mensaje" value={formData.mensaje} onChange={handleChange} required />
      <button type="submit">Enviar</button>
    </form>
  );
}