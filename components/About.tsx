import Image from "next/image";

export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="page-width about-layout">
        <div className="about-visual">
          <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" alt="Quiet contemporary interior with natural light and refined details" fill sizes="(max-width: 800px) 100vw, 48vw" className="about-image" />
          <div className="about-stamp"><span>STELLAR</span><small>Thoughtfully<br />engineered</small></div>
          <span className="image-caption">Better environments begin with better details.</span>
        </div>
        <div className="about-copy">
          <div className="eyebrow"><span /> A little about us</div>
          <h2>Technical solutions<br />shaped around <em>your needs.</em></h2>
          <p className="about-lead"><strong>Stellar Technical Services LLC</strong> is a professional technical solutions provider dedicated to delivering products and services tailored to our clients’ requirements.</p>
          <p>With experience across a diverse range of technical applications and partnerships with companies worldwide, we provide reliable solutions across four key areas: <strong>Aqua Solutions, Enviro Solutions, Hygiene Solutions, and Clean Air Solutions.</strong></p>
          <p>Our expertise includes water treatment and quality control, environmentally friendly and non-chemical treatment technologies, disinfection and hygiene systems, and indoor air purification and treatment.</p>
          <p>By representing established international brands and offering specialized products and services, we strive to help our clients maintain cleaner water, healthier environments, improved hygiene, and better indoor air quality through solutions suited to their needs.</p>
        </div>
      </div>
    </section>
  );
}
