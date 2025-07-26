import TourDetails from "@/components/AventuraComponent";
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/Footer";

const aventuraActivities = [
  {
    title: "Bosque Nuboso de Monteverde",
    description: "Explorá senderos envueltos en niebla, observá colibríes, ranas de ojos rojos y una increíble biodiversidad en uno de los ecosistemas más ricos del país.",
    image: "/monteverde.jpg",
    bgColor: "#1d4ed8" // azul
  },
  {
    title: "Parque Nacional Corcovado",
    description: "Visitá uno de los lugares más biodiversos del planeta. Encontrá jaguares, tapires y una exuberante selva tropical al sur de Costa Rica.",
    image: "/corcovado.jpg",
    bgColor: "#0f766e" // verde azulado
  },
  {
    title: "Cataratas y Reservas Naturales",
    description: "Disfrutá de caminatas a impresionantes cataratas como La Fortuna, Río Celeste o Bajos del Toro rodeadas de vegetación y senderos mágicos.",
    image: "/catarata.jpg" ,
    bgColor: "#f97316" // naranja fuerte    
  }
];

export default function AventuraPage() {
  return (
    <div> <MenuComponent></MenuComponent> 
        <section className="general-hero-tour">
  <div className="general-hero-content">
    <h1>Tours en la Naturaleza</h1>
    <p>Explorá los bosques y enamorate de la fauna en Costa Rica</p>
  </div>
</section>
        <TourDetails activities={aventuraActivities} />
        <Footer />
    </div>
    
  );
}