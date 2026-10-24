import styles from "./CosmicAdditions.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "Retail & Home Use",
    inquirySolution: "retail-home-use",
    description:
      "Bring a refreshing and luxurious atmosphere into your home with Cosmic Scent Diffusers. Designed for everyday comfort, they help distribute pleasant fragrances throughout living rooms, bedrooms and personal spaces, creating a welcoming environment with a touch of elegance.",
  },
  {
    title: "Commercial Use",
    inquirySolution: "commercial-use",
    description:
      "Enhance your business environment with professional scent-diffusion solutions designed for spaces such as hotels, offices, retail stores, showrooms and reception areas. Create a consistent, memorable fragrance experience that complements your brand and leaves a lasting impression on customers and visitors.",
  },
  {
    title: "Odor Serve",
    inquirySolution: "odor-serve",
    description:
      "Improve the freshness of indoor environments with Odor Serve solutions designed to help manage unwanted smells and maintain a more pleasant atmosphere. Suitable for selected residential and commercial settings, these solutions support a fresher environment through appropriate fragrance and odor-management applications.",
  },
];

export function CosmicUseCases() {
  return (
    <section className={styles.useCasesSection} aria-label="Cosmic diffuser applications">
      <div className={styles.useCasesGrid}>
        {useCases.map((card) => (
          <article className={styles.useCaseCard} key={card.title}>
            <div className={styles.cardCopy}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <Link className={styles.inquiryLink} href={`/enquire?category=cosmic&solution=${card.inquirySolution}`} aria-label={`Inquire about ${card.title}`}>Inquire <ArrowUpRight size={16} /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CosmicFragrancePromo() {
  return (
    <section className={styles.promoSection}>
      <div className={styles.promoCopy}>
        <h2>Discover Our Bestselling Fragrances</h2>
        <p>
          Explore our bestselling fragrances, carefully selected to bring distinctive character and a memorable scent experience to your space. From fresh and uplifting aromas to elegant, luxurious fragrance profiles, we offer a variety of options to suit different preferences, environments and occasions.
        </p>
        <p>
          Whether you are refreshing your home, enhancing a commercial space or creating a signature atmosphere for your business, discover a fragrance that suits your needs with Cosmic Scent Diffuser.
        </p>
      </div>
    </section>
  );
}
