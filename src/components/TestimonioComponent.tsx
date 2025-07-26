import React from "react";
import "../app/styles/Testimonio.css";


interface TestimonioProp {
    nombre: string,
    comentario: string,
    imagen: string

}

const TestimonioComponent: React.FC<TestimonioProp> = ({
  nombre,
  comentario,
  imagen,
}) => {
  return (
    <div className="clientMember">
      <img
        src={imagen}
        className="clientPhoto"
        alt={`Foto de ${nombre}`}
        width={100}
        height={100}
      />
      <div className="clientText">
        <h3 className="clientName">{nombre}</h3>
        <p className="clientComment">{comentario}</p>
      </div>
    </div>
  );
};

export default TestimonioComponent;