import TourDetails from "@/components/AventuraComponent";
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/Footer";

const aventuraActivities = [
  {
    title: "Canopy en Monteverde",
    description: "Deslizate por los cables más largos de Costa Rica con vistas impresionantes del bosque nuboso.",
    image: "/canopy.jpg",
    bgColor: "#1d4ed8" // azul
  },
  {
    title: "Rafting en el Río Pacuare",
    description: "Aventurate en uno de los ríos más emocionantes de Centroamérica, ideal para los amantes de la adrenalina.",
    image: "/rafting.jpg",
    bgColor: "#0f766e" // verde azulado
  },
  {
    title: "Ciclismo de montaña en Rincón de la Vieja",
    description: "Explorá senderos volcánicos llenos de lodo, bosques secos y vistas panorámicas.",
    image: "/ciclismo.jpg",
    bgColor: "#f97316" // naranja fuerte    
  }
];

export default function AventuraPage() {
  return (
    <div> <MenuComponent></MenuComponent> 
        <section className="general-hero-tour">
  <div className="general-hero-content">
    <h1>Tour para buscar Aventuras</h1>
    <p>Descubre experiencias llenas de adrenalina en la naturaleza costarricense</p>
  </div>
</section>
        <TourDetails activities={aventuraActivities} />
        <Footer />
    </div>
    
  );
}