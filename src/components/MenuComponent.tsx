'use client'
import Link from "next/link";
import React, { useState } from "react";
import "../app/styles/MenuComponent.css";

const MenuComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isToursOpen, setIsToursOpen] = useState<boolean>(false);

  return (
    <div className="menu-container">
      <nav className="menu-inner">
        <Link href="/" className="menu-title">
          Mi sitio turístico
        </Link>

        {/* Botón de menú móvil */}
        <div className="menu-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle-button">
            <svg
              className="menu-toggle-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desktop */}
        <ul className="menu-desktop">
          <li className="menu-item">
            <span>Tours</span>
            <ul className="submenu">
              <li><Link href="/tours/aventura">Aventura</Link></li>
              <li><Link href="/tours/naturaleza">Naturaleza</Link></li>
              <li><Link href="/tours/playa">Playas</Link></li>
            </ul>
          </li>

          <li className="menu-item">
            <span>Reportes</span>
            <ul className="submenu">
              <li><Link href="/reporteUsuarios">Usuarios</Link></li>
              <li><Link href="/reporteComentarios">Comentarios</Link></li>
            </ul>
          </li>

          <li className="menu-item"><Link href="/testimonio">Testimonios</Link></li>
          <li className="menu-item"><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="menu-mobile">
          <li>
            <button
              className="menu-mobile-toggle"
              onClick={() => setIsToursOpen(!isToursOpen)}
            >
              Tours {isToursOpen ? '▲' : '▼'}
            </button>
            {isToursOpen && (
              <ul className="submenu-mobile">
                <li><Link href="/tours/aventura">Aventura</Link></li>
                <li><Link href="/tours/naturaleza">Naturaleza</Link></li>
                <li><Link href="/tours/playa">Playas</Link></li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="menu-mobile-toggle"
              onClick={() => setIsReportOpen(!isReportOpen)}
            >
              Reportes {isReportOpen ? '▲' : '▼'}
            </button>
            {isReportOpen && (
              <ul className="submenu-mobile">
                <li><Link href="/reporteUsuarios">Usuarios</Link></li>
                <li><Link href="/reporteComentarios">Comentarios</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/testimonio" className="menu-mobile-toggle">Testimonios</Link></li>
          <li><Link href="/contacto" className="menu-mobile-toggle">Contacto</Link></li>
        </ul>
      )}
    </div>
  );
};

export default MenuComponent;
