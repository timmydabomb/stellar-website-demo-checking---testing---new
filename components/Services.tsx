import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Droplets, Waves, Wind } from "lucide-react";

const services = [
  {
    number: "01", name: "Stellar", subtitle: "Technical Services", logo: "/stellar-logo.png", panel: "stellar", icon: Droplets,
    path: "/solutions/stellar",
    description: "Water quality solutions designed around the needs of your building, people and process.",
    details: ["Filtration systems", "Purification solutions", "Water quality support"],
  },
  {
    number: "02", name: "Atmos", subtitle: "Nano Bubble Solutions", logo: "/atmos-logo.png", panel: "atmos", icon: Waves,
    path: "/solutions/atmos",
    description: "Explore advanced nanobubble technology for a more considered swimming pool experience.",
    details: ["Pool water innovation", "Chemical use considerations", "System integration"],
  },
  {
    number: "03", name: "Cosmic", subtitle: "Scent Diffuser", logo: null, panel: "cosmic", icon: Wind,
    path: "/solutions/cosmic",
    description: "Thoughtfully selected scent systems that give every space its own welcoming atmosphere.",
    details: ["Homes & residences", "Hotels & workplaces", "Commercial spaces"],
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="solutions">
      <div className="page-width">
        <div className="section-heading">
          <div><div className="eyebrow"><span /> What we do</div><h2>Solutions for a more<br /><em>considered</em> environment.</h2></div>
          <p>From the water you rely on to the atmosphere you remember, our solutions make everyday spaces feel exceptional.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, name, subtitle, logo, panel, path, icon: Icon, description, details }) => (
            <article className={`service-card service-card--${panel}`} key={number}>
              <div className={`service-image-wrap service-brand-panel service-brand-panel--${panel}`}>
                <span className="service-number">{number} / 03</span>
                <span className="service-icon"><Icon size={20} strokeWidth={1.65} /></span>
                {logo === "/stellar-logo.png" ? (
                  <div className="stellar-card-logo" role="img" aria-label={`${name} ${subtitle}`}>
                    <span className="stellar-card-mark" />
                    <span className="stellar-card-wordmark" />
                  </div>
                ) : logo ? (
                  <Image className="service-panel-logo service-panel-logo--atmos" src={logo} alt={`${name} ${subtitle}`} width={800} height={360} />
                ) : (
                  <div className="cosmic-logo" aria-label={`${name} ${subtitle}`}>
                    <span>{name}</span><small>{subtitle}</small>
                  </div>
                )}
              </div>
              <div className="service-body">
                <p className="service-description">{description}</p>
                <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <Link href={path} className="text-link">Explore solution <ArrowUpRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
        <p className="pool-note">Pool performance and chemical requirements vary by installation. Nanobubble technology supports pool water management and does not replace appropriate disinfection.</p>
      </div>
    </section>
  );
}
