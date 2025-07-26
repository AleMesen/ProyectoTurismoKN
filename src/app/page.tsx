"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VentanaMensajesComponent from "@/components/VentanaMensajesComponent";
import "./styles/HomePage.css";
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/Footer";
import DestacadosSection from "@/components/DestacadosComponent";

const HomePage: React.FC = () => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleNavigate = (path: string) => router.push(path);
  const cerrarModal = () => setMensaje(null);

const aboutText = `Somos la tierra del pura vida, un pueblo amable, multicultural y multilingüe, descendiente de una fusión.
Los costarricenses tenemos más de un siglo de tradiciones democráticas. En 1948 abolimos el ejército e invertimos en mejorar el nivel de vida de los ciudadanos, reflejando nuestra política de “Pura vida”.`;


 

  return (
    <div className="home-container">  <MenuComponent></MenuComponent>
      <header className="encabezado-hero"> 
          <h1 className="encabezado-hero-title">Pura Vida</h1>
          <div className="encabezado-hero-subcontent">
            <p>Descubre destinos, experiencias y la esencia de nuestra tierra.</p>
          <div className="encabezado-hero-buttons">
            <button onClick={() => handleNavigate("/login")} className="BotonesEncabezado-btn-primary">Iniciar sesión</button>
          </div>
        </div>
      </header>

        <section className="about-cr-section">
          <div className="about-cr-box">
            <h2>Sobre Costa Rica</h2>
            <p>{aboutText}</p>
          </div>
        </section>

      <main>
        <DestacadosSection>
        </DestacadosSection>

      </main>


      {mensaje && (
        <VentanaMensajesComponent mostrar mensaje={mensaje} onClose={cerrarModal} />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;