// components/DestacadosSection.tsx
"use client";
import React from "react";
import Link from "next/link";

interface CardItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const cards: CardItem[] = [
  {
    title: "Aventura",
    description: "Explorá la emoción de actividades extremas en montañas, ríos y selvas tropicales.",
    imageUrl: "/aventura.jpg",
    link: "/tours/aventura"
  },
  {
    title: "Naturaleza",
    description: "Sumergite en la biodiversidad costarricense en parques y reservas naturales.",
    imageUrl: "/naturaleza.jpg",
    link: "/tours/naturaleza"
  },
  {
    title: "Playas",
    description: "Disfrutá del sol y la arena en nuestras costas del Pacífico y el Caribe.",
    imageUrl: "/playas.jpg",
    link: "/tours/playa"
  }
];

const DestacadosSection: React.FC = () => {
  return (
    <section className="destacados-section">
      <div className="destacados-container">
        <h2 className="destacados-title">Descubrí Costa Rica</h2>
        <div className="destacados-grid">
          {cards.map((card) => (
            <div key={card.title} className="destacados-card">
              <div className="destacados-image-wrapper">
                <img src={card.imageUrl} alt={card.title} className="destacados-card-image" />
              </div>
              <p className="destacados-card-description">{card.description}</p>
              <Link href={card.link} className="destacados-card-title-link">
                {card.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestacadosSection;
