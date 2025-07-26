"use client";

import { LoginIn } from "@/models/LoginIn";
import { LoginOut } from "@/models/LoginOut";
import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import VentanaMensajesComponent from "@/components/VentanaMensajesComponent";
import TestComponent from "@/components/TestComponent";
import Footer from "@/components/Footer";
import MenuComponent from "@/components/MenuComponent"; 

// Importa el CSS personalizado
import "../styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mostrarModal, setMostrarModal] = useState<boolean>(false);
  const [esHumano, setEsHumano] = useState<boolean>(false);
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  async function ValidarCredenciales() {
    if (!esHumano) {
      setMostrarAdvertencia(true); // 🔴 Mostrar advertencia
      return;
    }

    try {
      const respuestaLogin = await login(correo, password);

      if (respuestaLogin) {
        router.push("reporteComentarios");
      } else {
        setMostrarModal(true);
      }
    } catch (error) {
      console.log("Hay un error en el consumo del api", error);
    }
  }

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <div> <MenuComponent></MenuComponent>
      <TestComponent setEsHumano={(valor: boolean) => {
        setEsHumano(valor);
        if (valor) setMostrarAdvertencia(false); // ✅ Ocultar advertencia al verificar
      }} /> 
      <div className="login-container"> 
        <div className="login-box">
          <div className="login-inner">
            <h1 className="login-title">Bienvenidos a CR Turismo</h1>
            <div>
              <label className="login-label-style">Digite su correo:</label>
              <input
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="login-input-style"
                placeholder="correo@gmail.com"
              />
            </div>
            <div>
              <label className="login-label-style">Digite su password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="login-input-style"
                placeholder="********"
              />
            </div>

            {mostrarAdvertencia && (
              <div className="text-red-600 font-semibold mb-3 text-center">
                ⚠️ Debes completar la verificación antes de iniciar sesión.
              </div>
            )}

            <button
              onClick={ValidarCredenciales}
              className="login-button-style"
            >
              Confirma credenciales
            </button>
          </div>
        </div>
      </div>

      {mostrarModal && (
        <VentanaMensajesComponent
          mostrar={mostrarModal}
          mensaje="Credenciales incorrectas"
          onClose={cerrarModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default LoginPage;