"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/styles/Footer.css"
import { Globe, MessageCircle, Camera, PlayCircle } from 'lucide-react';


export default function Footer() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensaje enviada desde footer:", form);
    setSent(true);
  };
  

  return (
    <footer className="footer-container">
      <div className="footer-nav">
        <h3>Índice</h3>
        <ul>
          <li onClick={() => router.push("/")}>Inicio</li>
          <li onClick={() => router.push("/tours/aventura")}>Aventura</li>
          <li onClick={() => router.push("/tours/naturaleza")}>Naturaleza</li>
          <li onClick={() => router.push("/tours/playas")}>Playas</li>
          <li onClick={() => router.push("/testimonio")}>Testimonios</li>
        </ul>
      </div>

       <div className="footer-social">
        <h3>Síguenos</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            className="social-link"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe />
          </a>
          <a
            href="https://twitter.com"
            className="social-link"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
          </a>
          <a
            href="https://instagram.com"
            className="social-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Camera />
          </a>
          <a
            href="https://youtube.com"
            className="social-link"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayCircle />
          </a>
        </div>
      </div>

      <div className="footer-contact">
        <h3 className="nav-item" onClick={() => router.push("/contacto")}>Contáctenos</h3>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows={3}
            value={form.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit" className="footer-btn-primary small">Enviar</button>
          {sent && <p className="footer-sent-confirm">¡Mensaje enviado!</p>}
        </form>
      </div>
    </footer>
  );
}