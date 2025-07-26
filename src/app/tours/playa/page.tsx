import TourDetails from "@/components/AventuraComponent";
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/Footer";

const aventuraActivities = [
  {
    title: "Caribe Sur – Manzanillo y Punta Uva",
    description: "Explorá playas vírgenes con aguas cristalinas, snorkeling en arrecifes y caminatas por el Refugio de Vida Silvestre Gandoca-Manzanillo.",
    image: "/manzanillo.jpg",
    bgColor: "#1d4ed8" // azul
  },
  {
    title: "Pacífico Norte – Tamarindo",
    description: "Disfrutá de surf, atardeceres inolvidables y una vibrante vida nocturna en una de las playas más populares del país.",
    image: "/tamarindo.jpg",
    bgColor: "#0f766e" // verde azulado
  },
  {
    title: "Península de Nicoya – Santa Teresa",
    description: "Relajate en playas perfectas para el yoga, el surf y la desconexión total con una vibra bohemia y acogedora.",
    image: "/santaTeresa.jpg",
    bgColor: "#f97316" // naranja fuerte    
  }
];

export default function AventuraPage() {
  return (
    <div> <MenuComponent></MenuComponent> 
        <section className="general-hero-tour">
  <div className="general-hero-content">
    <h1>Tours por las playas</h1>
    <p>Relajate en las costas más lindas y ricas del mundo</p>
  </div>
</section>
        <TourDetails activities={aventuraActivities} />
        <Footer />
    </div>
    
  );
}