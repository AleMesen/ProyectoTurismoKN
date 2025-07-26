import MenuComponent from "@/components/MenuComponent";
import TestimonioComponent from "@/components/TestimonioComponent";
import React from "react";
import Footer from "@/components/Footer";


const TestimonioPage: React.FC = () => {

    const vectorTestimonios = [
        {
            nombre: "Adolfo",
            comentario: "Muy buena el servicio, regresare", 
            imagen: "/Testimonio1.jpg"
        },
        {
            nombre: "Maxwel",
            comentario: "No me lograron contactar", 
            imagen: "/Testimonio2.jpg"
        }
    ]

    return (
        <div>
            <MenuComponent></MenuComponent>
            <section className="testimonio-intro">
                <div className="testimonio-content">
                    <h1>Testimonios</h1>
                    <p>Conocé lo que otros viajeros tienen que decir sobre su experiencia en Costa Rica.</p>
                </div>
                </section>
           <section className="clientSection">
                <div className="clientContainer">
                {vectorTestimonios.map((persona, index) => (
                    <TestimonioComponent
                    key={index}
                    nombre={persona.nombre}
                    comentario={persona.comentario}
                    imagen={persona.imagen}
                    />
                ))}
                </div>
            </section>
            
            <Footer />
            
        </div>        
    )
}

export default TestimonioPage;