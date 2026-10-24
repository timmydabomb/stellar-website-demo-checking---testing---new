import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, ArrowUpRight, Droplets, Filter, FlaskConical, Gauge, Leaf, Waves, Wind } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./atmos.module.css";

export const metadata: Metadata = { title: "Atmos Nanobubble Solutions | Stellar Technical Services" };

const process = [
  { number: "01", title: "Water circulation", text: "Water moves through a purpose-designed treatment loop.", icon: Waves },
  { number: "02", title: "Gas introduction", text: "Oxygen or ozone is supplied according to the intended application.", icon: Wind },
  { number: "03", title: "Nanobubble generation", text: "Specialised equipment disperses the gas into very small bubbles.", icon: Droplets },
  { number: "04", title: "Monitoring & verification", text: "Relevant water-quality measurements help evaluate treatment performance.", icon: Gauge },
];

const applications = [
  {
    number: "01", title: "Agriculture & Smart Irrigation", inquirySolution: "agriculture-smart-irrigation", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85", alt: "Green plants growing in an agricultural setting", icon: Leaf,
    text: "Nanobubble oxygenation can be evaluated in hydroponics, vertical farming, greenhouses and other irrigation environments where oxygen availability in the root zone is important.",
    points: ["Root-zone oxygen management", "Nutrient-solution oxygenation", "Irrigation-water management", "Evaluation of crop growth and root health"],
  },
  {
    number: "02", title: "Aquaculture & Fish Farming", inquirySolution: "agriculture-fish-farming", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1000&q=85", alt: "Aquatic environment representing aquaculture applications", icon: Waves,
    text: "Nanobubble oxygenation can be assessed for fish farms, shrimp ponds, hatcheries and recirculating aquaculture systems where dissolved oxygen management is important.",
    points: ["Dissolved oxygen management", "Fish and shrimp farming systems", "Filtration and biofiltration integration", "Water-quality monitoring"],
    note: "Oxygenation does not automatically remove ammonia, nitrite, suspended solids or pathogens.",
  },
  {
    number: "03", title: "Poultry & Water Hygiene", inquirySolution: "poultry-water-hygiene", image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&w=1000&q=85", alt: "Poultry and livestock environment", icon: FlaskConical,
    text: "Controlled ozonation may be suitable for selected water-sanitation applications, equipment cleaning and processing operations, subject to proper validation and safety requirements.",
    points: ["Selected drinking-water treatment processes", "Drinker-line and biofilm management", "Hatchery and equipment sanitation", "Appropriate poultry-processing water applications"],
    note: "Ozone treatment must follow validated procedures and does not replace routine water testing, ventilation, hygiene or biosecurity.",
  },
  {
    number: "04", title: "Industrial Water Treatment", inquirySolution: "industrial-water-treatment", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85", alt: "Industrial water treatment equipment and technical operations", icon: Filter,
    text: "Nanobubble technology can be evaluated for selected industrial water-treatment and gas-transfer applications according to the treatment objective, water chemistry, flow rate and equipment configuration.",
    points: ["Application-specific water treatment", "Gas-transfer processes", "Compatible circulation equipment", "Water-quality monitoring"],
  },
  {
    number: "05", title: "Non-Chlorine Swimming Pool Treatment", inquirySolution: "non-chlorine-swimming-pool-treatment", image: "/atmos-non-chlorine-pool.png", alt: "Swimming pool with water-treatment circulation equipment beside the pool", icon: Waves,
    text: "A non-chlorine treatment solution intended for swimming pools and other defined, limited-volume water systems, where treatment can be managed within a contained area and monitored for the system’s needs.",
    points: ["Limited, contained treatment area", "Application assessed for the specific pool", "Treatment monitored according to system needs"],
  },
  {
    number: "06", title: "Non-Chlorine Water Treatment", inquirySolution: "non-chlorine-water-treatment", image: "/atmos-non-chlorine-water.png", alt: "Large pond with water-treatment equipment at the shoreline", icon: Filter,
    text: "A non-chlorine water-treatment solution intended for larger water environments, including ponds, lakes and other suitable water bodies. Assessment considers size, water quality, circulation, objectives and environmental requirements.",
    points: ["For suitable larger water environments", "Ponds, lakes and other water bodies", "Assessed for site and environmental conditions"],
  },
];

const benefits = [
  { title: "Advanced Gas Transfer", text: "Introduces gases into water for specific treatment objectives.", icon: Wind },
  { title: "Application Flexibility", text: "Can be evaluated across agricultural, aquaculture and selected water-treatment environments.", icon: Leaf },
  { title: "Water-Quality Management", text: "Supports targeted treatment processes when paired with appropriate monitoring.", icon: Droplets },
  { title: "System Integration", text: "Can be assessed alongside compatible circulation, filtration and water-treatment equipment.", icon: Filter },
  { title: "Measurable Performance", text: "Outcomes can be evaluated through relevant water-quality and operational measurements.", icon: Activity },
  { title: "Application-Specific Engineering", text: "The appropriate solution depends on operating conditions, goals and technical requirements.", icon: Gauge },
];

const assessment = [
  { number: "01", title: "Understand", text: "Identify the application and treatment objectives." },
  { number: "02", title: "Assess", text: "Evaluate water quality, flow requirements and operating conditions." },
  { number: "03", title: "Configure", text: "Determine a suitable solution using verified equipment specifications." },
  { number: "04", title: "Monitor", text: "Evaluate performance using appropriate measurements." },
];

const faqs = [
  { question: "What are nanobubbles?", answer: "Nanobubbles are extremely small gas bubbles, typically smaller than one micrometre, that can influence gas transfer and interactions within water." },
  { question: "What is the difference between oxygenation and ozonation?", answer: "Oxygenation introduces oxygen into water, while ozonation uses ozone as an oxidant for specific treatment purposes under controlled conditions." },
  { question: "Can nanobubble technology be used in agriculture?", answer: "It can be evaluated in hydroponics, greenhouses and selected irrigation applications. Results depend on crop type, water quality, growing conditions and system design." },
  { question: "Can nanobubbles support aquaculture?", answer: "Oxygenation systems can be assessed for fish and shrimp farming where dissolved oxygen management is important. They do not automatically eliminate ammonia, nitrite or pathogens." },
  { question: "Can ozone be used in poultry water treatment?", answer: "Ozone may be suitable for selected water-treatment and sanitation processes when the system is properly designed, validated and operated with appropriate residual management." },
  { question: "Does nanobubble technology guarantee improved yields or lower costs?", answer: "No. Performance depends on the system, treatment objective and operating conditions. Results should be evaluated through appropriate measurements." },
  { question: "How do I determine which solution is suitable for my operation?", answer: "The appropriate configuration depends on your application, water quality, flow requirements, existing infrastructure and treatment objectives." },
];

export default function AtmosPage() {
  return (
    <>
      <Navbar />
      <main className={styles.atmosPage}>
        <section className={styles.hero} aria-labelledby="atmos-title">
          <Image className={styles.heroImage} src="/home-water.jpg" alt="Water moving through a landscaped treatment environment" fill priority sizes="100vw" />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <Image className={styles.atmosLogo} src="/atmos-logo.png" alt="Atmos Nanobubble Solutions" width={800} height={360} priority />
              <div className={styles.eyebrow}><span /> Water technology · application-led solutions</div>
              <h1 id="atmos-title">Atmos Nanobubble Solutions</h1>
              <h2>Advanced Nanobubble Technology for Smarter Water Treatment</h2>
              <p>Discover nanobubble oxygenation and ozonation technologies designed for selected water-treatment applications across agriculture, aquaculture, poultry production and industrial environments.</p>
              <p>Explore application-specific solutions focused on gas transfer, water-quality management and measurable treatment outcomes.</p>
            </div>
            <div className={styles.heroIndex}><span>02</span><i /> 03</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.intro}`} aria-labelledby="nanobubble-intro">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <div><div className={styles.eyebrow}><span /> The technology</div><h2 id="nanobubble-intro">Understanding Nanobubble Technology</h2></div>
              <div className={styles.introCopy}>
                <p>Nanobubbles are extremely small gas bubbles, typically smaller than one micrometre (1 µm). Their high gas–water interfacial area can influence gas transfer and interactions within water.</p>
                <p>Depending on the gas, equipment configuration and operating conditions, nanobubble systems can be designed for different water-treatment objectives.</p>
              </div>
            </div>
            <div className={styles.processGrid}>
              {process.map(({ number, title, text, icon: Icon }) => (
                <article className={styles.processCard} key={number}>
                  <div className={styles.processTop}><span>{number}</span><Icon size={21} strokeWidth={1.7} /></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.gasSection}`} aria-labelledby="gas-types">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}><span /> Combined treatment approach</div>
              <h2 id="gas-types">Oxidation &amp; Ozonation</h2>
              <p>Our water-treatment approach combines oxidation and ozonation to support targeted water-treatment objectives. Oxidation describes processes that involve chemical reactions with oxidising agents, while ozonation uses ozone as an oxidant to react with certain compounds and help inactivate microorganisms under appropriately controlled conditions.</p>
              <p>By considering both processes together, treatment can be assessed according to the application, water chemistry, system design and required treatment outcomes.</p>
            </div>
            <div className={styles.gasGrid}>
              <article className={`${styles.gasCard} ${styles.oxygenCard}`}>
                <div className={styles.gasIcon}><Wind size={24} /></div><span className={styles.cardLabel}>01 / OXYGEN</span>
                <h3>Oxygenation</h3>
                <p>Nanobubble oxygenation introduces oxygen into water to help maintain dissolved oxygen levels and support oxygen-dependent biological processes.</p>
                <h4>Potential application areas</h4>
                <ul><li>Aquaculture and fish farming</li><li>Shrimp farming</li><li>Hydroponics and controlled-environment agriculture</li><li>Selected biological treatment systems</li></ul>
              </article>
              <article className={`${styles.gasCard} ${styles.ozoneCard}`}>
                <div className={styles.gasIcon}><FlaskConical size={24} /></div><span className={styles.cardLabel}>02 / OZONE</span>
                <h3>Ozonation</h3>
                <p>Ozonation uses ozone as a strong oxidant to help inactivate microorganisms and react with certain compounds under appropriately controlled conditions.</p>
                <h4>Potential application areas</h4>
                <ul><li>Selected water-sanitation processes</li><li>Appropriate hatchery and equipment sanitation</li><li>Selected industrial water-treatment processes</li><li>Validated poultry water-treatment and processing applications</li></ul>
              </article>
            </div>
            <p className={styles.safetyNote}><strong>Ozone safety:</strong> Ozone requires appropriate dose control, ventilation, contact-time management and residual management. System design and operation must account for people, animals and the specific site.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.applications}`} id="atmos-applications" aria-labelledby="application-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}><span /> Application areas</div><h2 id="application-heading">Solutions shaped around your operation.</h2>
              <p>Explore where oxygenation or ozonation may be assessed. Every application requires its own technical review.</p>
            </div>
            <div className={styles.applicationGrid}>
              {applications.map(({ number, title, inquirySolution, image, alt, icon: Icon, text, points, note }) => (
                <article className={styles.applicationCard} key={number}>
                  <div className={styles.applicationImage}>
                    <Image src={image} alt={alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 25vw" />
                    <span className={styles.applicationNumber}>{number} / {String(applications.length).padStart(2, "0")}</span>
                    <span className={styles.applicationIcon}><Icon size={19} /></span>
                  </div>
                  <div className={styles.applicationBody}>
                    <h3>{title}</h3><p>{text}</p>
                    <h4>Potential focus areas</h4>
                    <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
                    {note && <p className={styles.applicationNote}>{note}</p>}
                    <Link className={styles.applicationInquiry} href={`/enquire?category=atmos&solution=${inquirySolution}`} aria-label={`Inquire about ${title}`}>Inquire <ArrowUpRight size={16} /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.benefits}`} aria-labelledby="benefits-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.eyebrow}><span /> Potential advantages</div><h2 id="benefits-heading">Why Consider Nanobubble Technology?</h2>
              <p>Potential benefits depend on the intended treatment objective and should be evaluated for each operating system.</p>
            </div>
            <div className={styles.benefitGrid}>
              {benefits.map(({ title, text, icon: Icon }, index) => (
                <article className={styles.benefitCard} key={title}><span className={styles.benefitNumber}>0{index + 1}</span><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.assessment}`} aria-labelledby="assessment-heading">
          <div className={styles.container}>
            <div className={styles.assessmentHeading}><div className={styles.eyebrow}><span /> A considered approach</div><h2 id="assessment-heading">From objective to evaluation.</h2><h3 className={styles.assessmentSubheading}>Our process</h3><p>A general solution-selection approach for understanding the application and its requirements.</p></div>
            <div className={styles.assessmentSteps}>
              {assessment.map((step, index) => <article className={styles.assessmentStep} key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>{index < assessment.length - 1 && <ArrowRight className={styles.stepArrow} size={18} />}</article>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-heading">
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqIntro}><div className={styles.eyebrow}><span /> Helpful answers</div><h2 id="faq-heading">Frequently asked<br /><em>questions.</em></h2><p>Learn more about nanobubble applications, treatment choices and system evaluation.</p></div>
              <div className={styles.faqList}>
                {faqs.map(({ question, answer }) => <details className={styles.faqItem} key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-heading">
          <div className={styles.container}>
            <div><div className={styles.eyebrow}><span /> Let’s discuss your application</div><h2 id="cta-heading">Let&apos;s Explore the Right Solution for Your Application</h2><p>Every water-treatment requirement is different. Discuss your application, operating conditions and treatment objectives with our team to explore a suitable nanobubble solution.</p></div>
            <div className={styles.ctaActions}><Link className={styles.ctaPrimary} href="/enquire?solution=atmos">Request a Consultation <ArrowUpRight size={16} /></Link><Link className={styles.ctaSecondary} href="/enquire">Contact Stellar Technical Services <ArrowUpRight size={16} /></Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
