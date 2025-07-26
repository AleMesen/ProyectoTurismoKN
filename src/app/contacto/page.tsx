import ContactForm from "@/components/ContactComponent";
import "@/app/styles/ContactPage.css"
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/FooterContacto";

export default function ContactPage() {
  return ( 
    <main className="contacto-container"> <MenuComponent></MenuComponent> 
      <section className="contacto-info">
        <div className="contacto-content">
          <h1>Contáctanos</h1>
          <p>¿Tenés preguntas? Estamos aquí para ayudarte a planear tu próxima aventura en Costa Rica.</p>
        </div>
      </section>

      <section className="contacto-formulario">
        <ContactForm />
      </section>

      <section className="contacto-extra">
        <h2>O también encontranos en:</h2>
        <ul>
          <li>Correo: info@misitioturismo.com</li>
          <li>WhatsApp: +506 8888-8888</li>
          <li>Instagram: @misitioturismocr</li>
        </ul>
      </section>
      <Footer></Footer>
    </main>
  );
}