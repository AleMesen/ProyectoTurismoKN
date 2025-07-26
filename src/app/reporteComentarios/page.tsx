'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import MenuComponent from "@/components/MenuComponent";
import { ComentarioOut, ReporteComentariosOut } from "@/models/ReporteComentariosOut";
import VentanaMensajesComponent from "@/components/VentanaMensajesComponent";
import Footer from "@/components/Footer";

// Importa los estilos
import "../styles/ReporteComentarios.css";

const ReporteComentarios: React.FC = () => {
  const router = useRouter();
  const { estaAutenticado, user } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [mensajeModal, setMensajeModal] = useState<string>("");
  const [mostrarModal, setMostrarModal] = useState<boolean>(false);
  const [comentarios, setComentarios] = useState<ComentarioOut[]>([]);

  useEffect(() => {
    if (!estaAutenticado) {
      setMensajeModal("Usted no está logueado en la aplicación");
      setMostrarModal(true);
      return;
    }

    if (user?.rol !== "1" && user?.rol !== "2") {
      setMensajeModal("Usted no tiene los permisos para ver esta apartado");
      setMostrarModal(true);
      return;
    }
  }, [estaAutenticado]);

  useEffect(() => {
    const obtenerComentarios = async () => {
      const respuesta = await axios.get<ReporteComentariosOut>(
        "https://alejandroturismo-vlabk-bk-a6edf0008659.herokuapp.com/api/route/Obtener_Comentarios"
      );

      if (respuesta.data.codigoRespuesta === 0) {
        setComentarios(respuesta.data.detalle);
        setLoading(false);
      }
    };

    if (estaAutenticado) obtenerComentarios();
  }, []);

  const cerrarModal = () => {
    setMostrarModal(false);
    router.push("/login");
  };

  return (
    <div>
      <MenuComponent />
      <div className="reporte-comentarios-hero">
        <h1 className="reporte-comentarios-titulo">Reporte de Comentarios</h1>
      </div>

      <VentanaMensajesComponent
        mostrar={mostrarModal}
        mensaje={mensajeModal}
        onClose={cerrarModal}
      />

      <div className="reporte-comentarios-container">
        <h1>
          {loading ? (
            <p>Cargando usuarios...</p>
          ) : (
            <div className="tabla-comentarios-container">
              <table className="tabla-comentarios">
                <thead className="thead-comentarios">
                  <tr>
                    <th className="th-comentarios">Nombre</th>
                    <th className="th-comentarios">Provincia</th>
                    <th className="th-comentarios">Atracción</th>
                    <th className="th-comentarios">Modalidad</th>
                    <th className="th-comentarios">Comentario</th>
                  </tr>
                </thead>
                <tbody className="tbody-comentarios">
                  {comentarios.map((usu, index) => (
                    <tr key={index} className="tr-comentarios">
                      <td className="td-comentarios">
                        {usu.nombre} {usu.apellido}
                      </td>
                      <td className="td-comentarios">{usu.provincia}</td>
                      <td className="td-comentarios">{usu.atraccion}</td>
                      <td className="td-comentarios">{usu.modalidad}</td>
                      <td className="td-comentarios">{usu.comentario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default ReporteComentarios;