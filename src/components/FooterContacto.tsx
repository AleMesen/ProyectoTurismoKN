"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/styles/Footer.css"
import { Globe, MessageCircle, Camera, PlayCircle } from 'lucide-react';


export default function Footer() {
  const router = useRouter();

  return (
    <footer className="footer-container">
      <div className="footer-nav">
        <h3>Índice</h3>
        <ul>
          <li onClick={() => router.push("/")}>Inicio</li>
          <li onClick={() => router.push("/tours")}>Tours</li>
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
    </footer>
  );
}