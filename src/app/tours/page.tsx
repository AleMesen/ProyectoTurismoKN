// pages/tours/page.tsx
import TourCard from "@/components/ToursComponent";
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/Footer";

export default function ToursPage() {
  return (
    <div> <MenuComponent></MenuComponent>
        <main className="main-content">
        <h1 className="tours-title">Explorá Costa Rica</h1>
        <div className="tours-grid">
            <TourCard
            title="Aventura"
            description="Canopy, rafting, ciclismo de montaña y más experiencias llenas de adrenalina."
            image="/aventura.jpg"
            href="/tours/aventura"
            />
            <TourCard
            title="Naturaleza"
            description="Explorá bosques, parques nacionales, cascadas y vida silvestre exótica."
            image="/naturaleza.jpg"
            href="/tours/naturaleza"
            />
            <TourCard
            title="Playas"
            description="Relajate en las mejores playas del Pacífico y el Caribe costarricense."
            image="/playas.jpg"
            href="/tours/playa"
            />
        </div>
        </main>
        <Footer />
    </div>
    
  );
}

