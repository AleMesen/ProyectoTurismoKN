// components/TourCard.tsx
import Link from "next/link";
import "../app/styles/ToursPage.css";

interface TourCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function TourCard({ title, description, image, href }: TourCardProps) {
  return (
    <div className="tour-card">
      <div className="tour-card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="tour-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className="tour-card-button">
          Más información →
        </Link>
      </div>
    </div>
  );
}