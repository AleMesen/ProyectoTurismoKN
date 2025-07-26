import Link from "next/link";
import "../app/styles/ToursGenerales.css";

interface Activity {
  title: string;
  description: string;
  image: string;
}

interface TourDetailsProps {
  activities: Activity[];
}

export default function TourDetails({ activities }: TourDetailsProps) {
  return (
    <section className="tour-details">
      {activities.map((activity, index) => (
        <div key={index} className="activity">
          <div className="image-wrapper">
            <img
              src={activity.image}
              alt={activity.title}
              className="activity-image"
            />
          </div>
          <div className="activity-info">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <Link href="/contacto" className="activity-button">
              Reservar →
            </Link>
          </div>
        </div>
      ))}
    </section>
    
    
  );
}