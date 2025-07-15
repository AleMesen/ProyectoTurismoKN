import MenuComponent from "@/components/MenuComponent";
import TestimonioComponent from "@/components/TestimonioComponent";
import React from "react";

const TestimonioPage:React.FC= () =>{

    const vectorTestimonios = [
        {
            nombre: "Alejandro",
            comentario: "Muy bueno el servicio, regresaré",
            imagen: "/Testimonio1.jpg"
        },
        {
            nombre: "Maxwell",
            comentario: "No me lograron contactar",
            imagen: "/Testimonio2.jpg"
        }
    ]

    return (
        <div>
            <MenuComponent></MenuComponent>
            {
                vectorTestimonios.map((persona, index) =>(
                    <TestimonioComponent key={index}
                        nombre={persona.nombre}
                        comentario={persona.comentario}
                        imagen={persona.imagen}></TestimonioComponent>
                ))
            }

        </div>
    )
}

export default TestimonioPage;