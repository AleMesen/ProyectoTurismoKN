'use client';

import MenuComponent from "@/components/MenuComponent";
import { ReporteUsuariosOut, UsuarioOut } from "@/models/ReporteUsuariosOut";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";

// Importa el CSS externo
import "../styles/ReporteUsuarios.css";

const ReporteUsuarios: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("");
  const [usuarios, setUsuarios] = useState<UsuarioOut[]>([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const respuesta = await axios.get<ReporteUsuariosOut>(
        "https://alejandroturismo-vlabk-bk-a6edf0008659.herokuapp.com/api/route/Obtener_Usuarios"
      );

      if (respuesta.data.codigoRespuesta === 0) {
        setUsuarios(respuesta.data.detalle);
      }
    };
    obtenerUsuarios();
  }, []);

  const usuarioFiltrados = useMemo(() => {
    return usuarios.filter(
      (usuario) =>
        usuario.nombre.toUpperCase().includes(filtro.toUpperCase()) ||
        usuario.correo.toUpperCase().includes(filtro.toUpperCase()) ||
        usuario.telefono.toUpperCase().includes(filtro.toUpperCase()) ||
        ObtenerNombreRol(usuario.rol)
          .toUpperCase()
          .includes(filtro.toUpperCase())
    );
  }, [filtro, usuarios]);

  function ObtenerNombreRol(rol: number) {
    switch (Number(rol)) {
      case 1:
        return "Administrador";
      case 2:
        return "Digitador";
      case 3:
        return "Usuario";
      default:
        return "Desconocido";
    }
  }

  return (
    <div>
      <MenuComponent />
      <div className="reporte-usuarios-hero">
        <h1 className="reporte-usuarios-titulo">Reporte de Usuarios</h1>
      </div>
      <div className="reporte-usuarios-container">
        <input
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Digite el filtro"
          className="filtro-usuarios-input"
        />
        <div className="tabla-usuarios-container">
          <table className="tabla-usuarios">
            <thead className="thead-usuarios">
              <tr>
                <th className="th-usuarios">Nombre</th>
                <th className="th-usuarios">Correo</th>
                <th className="th-usuarios">Rol</th>
                <th className="th-usuarios">Teléfono</th>
              </tr>
            </thead>
            <tbody className="tbody-usuarios">
              {usuarioFiltrados.map((usu, index) => (
                <tr key={index} className="tr-usuarios">
                  <td className="td-usuarios">{usu.nombre}</td>
                  <td className="td-usuarios">{usu.correo}</td>
                  <td className="td-usuarios">{ObtenerNombreRol(usu.rol)}</td>
                  <td className="td-usuarios">{usu.telefono}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReporteUsuarios;