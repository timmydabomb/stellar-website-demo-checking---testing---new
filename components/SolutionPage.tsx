import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Droplets, Filter, FlaskConical, Waves, Wrench } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CosmicFragrancePromo, CosmicUseCases } from "@/components/CosmicAdditions";
import type { Solution } from "@/components/solutions";

function BrandLockup({ solution }: { solution: Solution }) {
  if (solution.slug === "stellar") {
    return (
      <div className="stellar-card-logo solution-brand-logo" role="img" aria-label="Stellar Technical Services">
        <span className="stellar-card-mark" /><span className="stellar-card-wordmark" />
      </div>
    );
  }

  if (solution.slug === "atmos") {
    return <Image className="solution-brand-image" src="/atmos-logo.png" alt="Atmos Nano Bubble Solutions" width={800} height={360} priority />;
  }

  return <div className="solution-cosmic-brand"><strong>COSMIC</strong><span>SCENT DIFFUSER</span></div>;
}

export default function SolutionPage({ solution }: { solution: Solution }) {
  const serviceCards = solution.serviceCards;
  return (
    <>
      <Navbar theme={solution.slug === "cosmic" ? "cosmic" : undefined} />
      <main className={`solution-page solution-page--${solution.slug}`}>
        <section className="solution-hero">
          <Image src={solution.image} alt={solution.imageAlt} fill priority sizes="100vw" className="solution-hero-image" />
          <div className="solution-hero-shade" />
          <div className={`page-width solution-hero-content${solution.slug === "cosmic" ? " solution-hero-content--cosmic" : ""}`}>
            {solution.slug === "cosmic" ? (
              <div className="cosmic-hero-panel">
                <Link className="solution-back-link" href="/#solutions"><ArrowLeft size={15} /> All solutions</Link>
                <div className="solution-brand-holder"><BrandLockup solution={solution} /></div>
                <div className="eyebrow eyebrow-light"><span /> {solution.subtitle}</div>
                <h1>A signature atmosphere<br className="cosmic-title-break" /> for every space.</h1>
                <p>{solution.intro}</p>
                {solution.heroSummary && (
                  <div className="cosmic-hero-overview">
                    <div className="eyebrow cosmic-about-label"><span /> {solution.heroSummary.kicker}</div>
                    <div className="cosmic-overview-copy">
                      {solution.heroSummary.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link className="solution-back-link" href="/#solutions"><ArrowLeft size={15} /> All solutions</Link>
                <div className="solution-brand-holder"><BrandLockup solution={solution} /></div>
                <div className="eyebrow eyebrow-light"><span /> {solution.subtitle}</div>
                <h1>{solution.title}</h1>
                <p>{solution.intro}</p>
              </>
            )}
          </div>
        </section>

        {solution.slug === "cosmic" && <CosmicUseCases />}

        {solution.diffuserGallery && (
          <section className="cosmic-diffusers-section" aria-labelledby="cosmic-diffusers-title">
            <div className="page-width">
              <div className="cosmic-section-intro">
                <div>
                  <div className="eyebrow"><span /> Find your format</div>
                  <h2 id="cosmic-diffusers-title">Diffusers for every<br /><em>size of space.</em></h2>
                </div>
                <p>Explore diffuser styles for small rooms, medium spaces and larger commercial environments. We can help you choose a format that suits your space.</p>
              </div>
              <div className="cosmic-diffuser-gallery">
                {solution.diffuserGallery.map((image) => (
                  <figure key={image.src} className="cosmic-diffuser-item">
                    <figcaption>{image.title}</figcaption>
                    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 680px) 100vw, 1180px" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {solution.slug === "cosmic" && <CosmicFragrancePromo />}

        {solution.fragranceNotes && (
          <section className="cosmic-notes-section section" aria-labelledby="cosmic-notes-title">
            <div className="page-width cosmic-notes-layout">
              <div className="cosmic-notes-copy">
                <div className="eyebrow"><span /> Our choice of fragrance</div>
                <h2 id="cosmic-notes-title">Find a note that<br /><em>feels like you.</em></h2>
                <p>{solution.fragranceNotes.description}</p>
              </div>
              <div className="cosmic-notes-grid">
                {solution.fragranceNotes.cards.map((card) => (
                  <article key={card.name} className="cosmic-fragrance-card">
                    <Image src={card.image} alt={card.alt} width={420} height={420} />
                    <div className="cosmic-fragrance-card-copy">
                      <h3>{card.name}</h3>
                      <span>{card.family}</span>
                      <p>{card.notes}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section solution-details">
          <div className="page-width">
            <div className="section-heading">
              <div><div className="eyebrow"><span /> {solution.name} solutions</div><h2>{serviceCards ? <>Stellar Technical<br /><em>Services.</em></> : <>Considered for<br /><em>your environment.</em></>}</h2></div>
              <p>{serviceCards ? "Explore our technical services across water features, pool systems, treatment, dosing and filtration." : "Every space has different needs. We’ll help you explore an approach that fits your property, priorities and existing systems."}</p>
            </div>
            {serviceCards ? (
              <div className="stellar-service-grid">
                {serviceCards.map((card, index) => {
                  const Icon = index === 0
                    ? Droplets
                    : index === 1
                      ? FlaskConical
                      : [Waves, Wrench, Droplets, Waves, FlaskConical, Filter][index - 2] ?? Droplets;
                  return (
                    <article className="service-card stellar-service-card" key={card.title}>
                      <div className="service-image-wrap">
                        <Image src={card.image} alt={card.imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" className="service-image" style={{ objectFit: card.imageFit ?? "cover" }} />
                        <span className="service-number">{String(index + 1).padStart(2, "0")} / {String(serviceCards.length).padStart(2, "0")}</span>
                        <span className="service-icon"><Icon size={20} strokeWidth={1.65} /></span>
                      </div>
                      <div className="service-body">
                        <h3>{card.title}</h3>
                        <p className="service-description">{card.description}</p>
                        {card.features && <ul>{card.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>}
                        <Link href={`/enquire?category=${solution.slug}&solution=${card.inquirySolution}`} className="text-link" aria-label={`Inquire about ${card.title}`}>Inquire <ArrowUpRight size={16} /></Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="capability-grid">
                {solution.capabilities?.map((capability, index) => (
                  <article className="capability-card" key={capability.title}>
                    <span className="capability-number">0{index + 1}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    <span className="capability-check"><Check size={15} /></span>
                  </article>
                ))}
              </div>
            )}
            {solution.note && <p className="solution-note">{solution.note}</p>}
          </div>
        </section>

        <section className="solution-cta">
          <div className="page-width solution-cta-inner">
            <div><div className="eyebrow eyebrow-light"><span /> Let’s talk</div><h2>Explore {solution.name}<br /><em>for your space.</em></h2></div>
            <Link className="button button-aqua" href={`/enquire?solution=${solution.slug}`}>Make an enquiry <ArrowUpRight size={17} /></Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
